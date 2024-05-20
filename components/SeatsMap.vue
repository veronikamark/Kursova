<template>
  <div class="seats-wrapper">
    <h1>Online visit reservation</h1>
    <form @submit.prevent="submitForm">
      <div class="form-chapter">
        <label for="visitDate">Date and time of visit:</label>
        <vue-date-picker locale="uk" v-model="selectedTime" :flow="flow" dark time-picker-inline disable-year-select
          minutes-increment="60" no-minutes-overlay :start-time="startTime" :min-date="minDate" :max-date="maxDate"
          ignore-time-validation :min-time="{ hours: 10, minutes: 0 }"
          :max-time="{ hours: 22, minutes: 0 }"></vue-date-picker>
      </div>
      <div class="form-chapter">
        <label for="departmentSelect">Address:</label>
        <select class="form-select" id="departmentSelect" v-model="departmentId">
          <option class="form-option" v-for="department in departments" :key="department.id"
            :value="department.DepartmentID">{{
      department.Name }}, {{ department.Address }}</option>
        </select>
      </div>
      <div class="form-chapter">
        <label for="doctorSelect">Doctor:</label>
        <select class="form-select" id="doctorSelect" v-model="formData.doctor">
          <option class="form-option" v-for="doctor in doctors" :key="doctor.id" :value="doctor.DoctorID">{{
      doctor.FirstName
    }} {{ doctor.LastName }}</option>
        </select>
      </div>
      <!-- {{ formData }} -->
      <div class="form-chapter">
        <label for="doctorSelect">Procedure:</label>
        <select class="form-select" id="doctorSelect" v-model="formData.treatment">
          <option class="form-option" v-for="treatment in treatments" :key="treatment.id"
            :value="treatment.TreatmentID">{{ treatment.Name
            }} - {{ treatment.Price }}грн</option>
        </select>
      </div>
      <div class="form-chapter">
        <label for="patientID">First and Last Name:</label>
        <input type="text" class="visit-input" v-model="formData.PatientName" placeholder="Lamar Davis" required>
      </div>
      <div class="form-chapter">
        <label for="patientID">Phone Number:</label>
        <input type="tel" class="visit-input" v-model="formData.PatientNumber" placeholder="38095642733" required>
      </div>
      <div v-bind:class="{ btn_not_active: formIsOK }" type="submit" class="header-race-btn seats-btn"
        @click="submitForm()">Reserve</div>
    </form>
  </div>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  components: {
    VueDatePicker,
  },
  data() {
    return {
      departmentId: null,
      formData: {
        doctor: null,
        treatment: null,
        PatientName: '',
        PatientNumber: '',
      },
      departments: [],
      doctors: [],
      treatments: [],
      flow: ['calendar'],
      minDate: new Date(),
      selectedTime: null,
    };
  },
  async created() {
    const currentDate1 = new Date();
    const currentHour1 = currentDate1.getHours();
    if (currentHour1 >= 22)
      currentDate1.setDate(currentDate1.getDate() + 1)

    if (currentHour1 >= 22 || currentHour1 < 10) {
      currentDate1.setHours(10, 0, 0, 0); // 10:00:00.000 next day
    } else {
      currentDate1.setHours(currentHour1 + 1, 0, 0, 0);
    }
    this.selectedTime = currentDate1;
    try {
      let currentDate = new Date();
      let currentYear = String(currentDate.getFullYear());
      let currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0'); // Add 1 to month since it's zero-based
      let currentDay = String(currentDate.getDate()).padStart(2, '0');
      let currentHour = String(currentDate.getHours()).padStart(2, '0');
      let startHour = currentHour >= 10 && currentHour <= 22 ? parseInt(currentHour) + 1 : 10;
      if (parseInt(currentHour) >= 22) {
        currentDay++
        currentDay = String(currentDate.getDate()).padStart(2, '0')
      }
    } catch (error) {
      console.error('Error fetching reservations:', error);
    }

    await this.getDartments()
    await this.getDoctors()
    await this.getTreatments()
  },
  methods: {
     async getDoctors() {
      try {
        const response = await useFetch('/api/doctors', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response && response.data) {
          this.doctors = response.data._rawValue.body
        }
      } catch (err) {
        console.log(err)
      }
    },
    async getDoctorsByDepartment(id) {
      console.log(id)
      try {
        const response = await useFetch(`/api/getDoctorsByDepartment?departmentID=${encodeURIComponent(id)}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response && response.data) {
          this.doctors = response.data._rawValue.body
        }
      } catch (err) {
        console.log(err)
      }
    },
    async getDartments() {
      try {
        const response = await useFetch('/api/department', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response && response.data) {
          this.departments = response.data._rawValue.body
        }
      } catch (err) {
        console.log(err)
      }
    },
    async getTreatments() {
      try {
        const response2 = await useFetch('/api/treatment', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response2 && response2.data) {
          this.treatments = response2.data._rawValue.body
        }
      } catch (err) {
        console.log(err)
      }
    },
    formatDateAndTime(dateString) {
      const date = new Date(dateString);

      // Format date as MM/DD/YYYY
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
      const day = date.getDate().toString().padStart(2, '0');
      const year = date.getFullYear();
      const formattedDate = `${month}/${day}/${year}`;

      // Format time as HH (HH:00)
      const hours = date.getHours().toString().padStart(2, '0');
      const formattedTime = `${hours}`;

      return {
        formattedDate,
        formattedTime
      };
    },
    async checkIfPatientNew() {
      const parts = this.formData.PatientName.split(' ');
      const url = `/api/getPatientByName?name=${encodeURIComponent(parts[0])}&lastName=${encodeURIComponent(parts[1])}`;

      const response = await useFetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response && response.data) {
        console.log(response.data._rawValue.body)
        if (response.data._rawValue.body.length == 0)
          return true
        else
          return false
      }
    },
    async getPatientByName(firstName, lastName) {
      console.log(firstName, lastName);
      const url = `/api/getPatientByName?name=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}`;
      console.log(url);  // Log the URL to check correctness

      const response = await useFetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response && response.data) {
        const patient = response.data._rawValue.body
        console.log(patient)
        return patient
      }
    },
    async newPatient() {
      try {
        const parts = this.formData.PatientName.split(' ');
        const new_patient = {
          "PatientID": Math.floor(Math.random() * (100000 - 100 + 1)) + 100,
          "FirstName": parts[0],
          "LastName": parts[1],
          "Gender": "",
          "BirthDate": "",
          "PhoneNumber": this.formData.PatientNumber,
          "Email": ""
        }
        const response = await fetch('/api/newPatient', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(new_patient)
        });

        if (!response.ok) {
          throw new Error('Failed to create patient');
        }

        const result = await response.json();
        console.log('Patient created successfully', result);
      } catch (error) {
        console.error('Error creating patient:', error);
      }
    },
    async submitForm() {
      const isNew = await this.checkIfPatientNew()
      const parts = this.formData.PatientName.split(' ');
      let patient_id = undefined
      if (isNew) {
        console.log(`New patient: ${this.formData.PatientName}`)
        await this.newPatient()
        const patient = await this.getPatientByName(parts[0], parts[1])
        patient_id = patient[0].PatientID
      } else {
        console.log(`Old patient: ${this.formData.PatientName}`)
        const patient = await this.getPatientByName(parts[0], parts[1])
        patient_id = patient[0].PatientID
      }
      const time = this.formatDateAndTime(this.selectedTime)
      try {
        const new_visit = {
          "VisitID": Math.floor(Math.random() * (100000 - 100 + 1)) + 100,
          "VisitDate": time.formattedDate,
          "VisitTime": time.formattedTime,
          "VisitStatus": "Scheduled",
          "DoctorID": this.formData.doctor,
          "TreatmentID": this.formData.treatment,
          "PatientID": patient_id
        }
        const response = await fetch('/api/newVisit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(new_visit)
        });

        if (!response.ok) {
          throw new Error('Failed to create visit');
        }

        const result = await response.json();
        console.log('Visit created successfully', result);
      } catch (error) {
        console.error('Error creating visit:', error);
      }
    }
  },
  computed: {
    formIsOK() {
      if (this.departmentId && this.formData.doctor
        && this.selectedTime && this.formData.treatment
        && this.formData.PatientName.length > 0
        && this.formData.PatientNumber.length > 0)
        return false
      else
        return true
    },
    hoursLeft() {
      return 23 - this.selectedTime.getHours()
    },
    dateForUser() {
      const currentMonth = String(this.selectedTime.getMonth() + 1).padStart(2, '0');
      const currentDay = String(this.selectedTime.getDate()).padStart(2, '0');
      return `${currentDay}/${currentMonth}`
    },
    timeForUser() {
      const currentHour = String(this.selectedTime.getHours()).padStart(2, '0');
      return `${currentHour}:00`
    },
    startTime() {
      const now = new Date();
      const currentHour = now.getHours();
      const startHour = currentHour >= 10 && currentHour <= 21 ? currentHour + 1 : 10;
      return { hours: startHour, minutes: 0 };
    },
    maxDate() {
      const today = new Date();
      const maxDate = new Date(today);
      maxDate.setDate(today.getDate() + 13);
      return maxDate;
    },
  },
  watch: {
    departmentId: function (id) {
      this.getDoctorsByDepartment(id)
    }
  }
};
</script>

<style scoped>
input[type="submit"] {
  border: none;
  margin: 0 auto;
  margin-top: 15px;
  font-size: inherit;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 18px;
  font-family: "Yanone Kaffeesatz", sans-serif;
  /* You can add more custom styles as needed */
}

.seats-wrapper {
  max-width: 96vw;
  margin: 0 auto;
  margin-top: 100px;
}

select {
  margin-left: 10px;
  font-family: "Yanone Kaffeesatz", sans-serif;
  outline: none;
  width: 100px;
  border: 1px solid #2d2d2d;
  border-radius: 5px;
  padding: 5px;
  font-size: 20px;
  cursor: pointer;
  background-color: #212121;
  color: #fff;
}

.dp__main {
  margin: 20px auto;
  width: max-content;
}

.seat-map {
  height: 380px;
  width: 215px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 15px;
  position: relative;
}

.seat-examples-wrapper {
  max-width: 80vw;
  margin: 0 auto;
  justify-content: center;
  grid-gap: 15px;
  display: flex;
  flex-wrap: wrap;
}

.seat-example {
  display: flex;
  align-items: center;
  grid-gap: 4px;
  width: max-content;
}

.seat {
  position: absolute;
  width: 45px;
  height: 45px;
  color: #000;
  border: 1px solid #000;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #fff;
  transition: 0.2s ease;
}

.seat-example>.seat {
  width: 30px;
  height: 30px;
  pointer-events: none;
}

.steering-icon {
  margin-top: -2px;
  margin-left: -2px;
  width: 34px;
  height: 34px;
}

.seat>span {
  position: absolute;
  bottom: 0;
  right: 1px;
  line-height: 1;
  font-size: 16px;
}

.seat-example>.seat {
  position: unset;
}

.seat:nth-child(1) {
  top: 0;
  left: 165px;
}

.seat:nth-child(2) {
  top: 0;
  left: 110px;
}

.seat:nth-child(3) {
  top: 0;
  left: 55px;
}

.seat:nth-child(4) {
  top: 0;
  left: 0;
}

.seat:nth-child(5) {
  top: 55px;
  left: 0;
}

.seat:nth-child(6) {
  top: 110px;
  left: 0;
}

.seat:nth-child(7) {
  top: 165px;
  left: 0;
}

.seat:nth-child(8) {
  top: 220px;
  left: 0;
}

.seat:nth-child(9) {
  top: 275px;
  left: 0;
}

.seat:nth-child(10) {
  top: 330px;
  left: 0;
}

.vip-btn {
  background-image: linear-gradient(315deg, #B82E1F 0%, #ff9500 74%);
  color: #fff;
}

.seat:nth-child(11) {
  top: 110px;
  left: 165px;
  background-image: linear-gradient(315deg, #B82E1F 0%, #ff9500 74%);
  color: #fff;
}

.seat:nth-child(12) {
  top: 165px;
  left: 165px;
  background-image: linear-gradient(315deg, #B82E1F 0%, #ff9500 74%);
  color: #fff;
}

.seat:nth-child(13) {
  top: 220px;
  left: 165px;
  background-image: linear-gradient(315deg, #B82E1F 0%, #ff9500 74%);
  color: #fff;
}

@keyframes slidebg {
  0% {
    background-position: 0% 51%
  }

  50% {
    background-position: 100% 50%
  }

  100% {
    background-position: 0% 51%
  }
}

.description-div {
  line-height: 1.5;
}

.description-span {
  font-weight: bold;
}

.liq-btn {
  margin-top: 15px;
}


/* .seat:hover {
  background-image: linear-gradient(45deg, #fe00a7, #3f48cc, #8900ba);
} */

/* .seat:hover>.steering-icon {
  fill: rgba(255, 255, 255, 0.9);
} */

.reserve-popup_final-inputs {
  margin-bottom: 15px;
}

.reserve-popup_final-input {
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid #000;
  border-radius: 7px;
  box-sizing: border-box;
  cursor: text;
  font-size: 16px;
  height: 35px;
  margin-top: 10px;
  outline: none;
  padding: 0 12px;
  transition-duration: .3s;
  width: 200px;
}

.reserve-popup_final-input[type="text"],
.reserve-popup_final-input[type="text"]::placeholder {
  color: rgba(255, 255, 255, 0.8);
  font-family: "Yanone Kaffeesatz", sans-serif;
}

.video-btn {
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
}

.video-btn:hover,
.reserve-popup-close_button:hover {
  background: rgba(0, 0, 0, 1);
}

.seats-btn {
  margin: 0 auto;
  margin-top: 15px;
}

.selected {
  background-size: 300%;
  background-image: linear-gradient(315deg, #fe00a7, #3f48cc, #8900ba) !important;
  color: rgba(255, 255, 255, 0.9) !important;
  animation: slidebg 3s linear infinite;
}

.selected>.steering-icon {
  fill: rgba(255, 255, 255, 0.9);
}

.reserve-popup_tarif {
  z-index: 10;
  position: fixed;
  width: 260px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: linear-gradient(315deg, #fe00a7, #3f48cc, #8900ba, #3f48cc);
  color: white;
  border: 1px solid #fff;
  padding: 20px 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.reserve-popup-close_button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 16px;
  padding: 0 12px;
  padding-top: 8px;
  padding-bottom: 6px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
}

.reserve-popup_tarif-header {
  font-size: 32px;
  margin-bottom: 0px;
}

.reserve-popup_tarif-p {
  margin-top: 7px;
}

.reserve-popup_tarif ul {
  list-style: none;
  padding: 0;
}

.reserve-popup_tarif li,
.hoursSelect option {
  cursor: pointer;
  padding: 10px;
}

.reserve-popup_final li {
  cursor: unset;
}

.btn_not_active {
  background: rgb(88, 88, 88);
  pointer-events: none;
}

.reserve-popup_tarif li:nth-child(odd),
.hoursSelect option {
  background-color: rgba(0, 0, 0, 0.8);
  color: rgba(255, 255, 255, 1);
}

.reserve-popup_tarif li:nth-child(even),
.hoursSelect option {
  background-color: rgba(255, 255, 255, 0.8);
  color: rgba(0, 0, 0, 1);
}

.reserve-popup_tarif li.selected {
  position: relative;
  box-shadow: inset 0 0 0 2px #000;
  /* Set the shadow to "inset" and adjust the spread value (3px) for border thickness */
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.9);
}

.reserve-popup_tarif li.selected::before {
  z-index: 5;
  position: absolute;
  content: "";
  top: calc(50% - 5px);
  left: 15px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: lime;
  /* Change the color to black or any other desired color */
}

.unavailable {
  background: rgba(134, 134, 134, 0.5) !important;
  pointer-events: none;
}

.visit-input {
  margin-left: 10px;
  background-color: #fff !important;
  border: 2px solid #000;
  border-radius: 7px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  cursor: text !important;
  font-family: Yanone Kaffeesatz, sans-serif;
  font-size: 16px;
  font-weight: 400;
  height: 35px;
  outline: none;
  padding: 0 12px;
  position: relative;
  transition-duration: .3s;
  width: 250px;
  z-index: 0;
}

.form-chapter {
  margin-top: 15px;
}

.form-select {
  width: 240px;
}

.form-option {
  width: 100%;
  cursor: pointer;
  margin-top: 20px;
}
</style>