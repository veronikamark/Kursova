<template>
    <div class="page-wrapper">

        <Head>
            <Title>Visit Checker</Title>
        </Head>
        <h1 class="main-h1">Visit Checker</h1>
        <p class="p-under_h1">Here you can check your visits to doctors</p>
        <div class="search-bar">
            <input class="visit-input" v-model="searchQuery" type="text" placeholder="Enter your first and last name" @keyup.enter="submitSearch">
            <button class="header-race-btn header-race-btn-content" @click="submitSearch">Search</button>
        </div>
        <div v-if="visits" class="price-table">
            <table>
                <thead>
                    <tr>
                        <th>Patient Name</th>
                        <th>Visit Date/Time</th>
                        <th>Doctor</th>
                        <th>Treatment</th>
                        <th>Duration (mins)</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="visit in visits" :key="visit.VisitID">
                        <td>{{ patient_name }}</td>
                        <td>{{ `${visit.VisitDate} ${visit.VisitTime}:00` }}</td>
                        <td>{{ doctors.find(el => el.DoctorID === visit.DoctorID).FirstName }} {{ doctors.find(el => el.DoctorID === visit.DoctorID).LastName }}</td> 
                        <td>{{ treatment.find(el => el.TreatmentID === visit.TreatmentID).Name }}</td>
                        <td>{{ treatment.find(el => el.TreatmentID === visit.TreatmentID).Duration }}</td>
                        <td>{{ treatment.find(el => el.TreatmentID === visit.TreatmentID).Price }} грн</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "VisitChecker",
    data() {
        return {
            searchQuery: "",
            treatment: null,
            doctors: null,
            patient: null,
            visits: null,
            patient_name: null
        }
    },
    async created() {
        try {
            const response = await useFetch('/api/treatment', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response && response.data) {
                this.treatment = response.data._rawValue.body
            }

            const response3 = await useFetch('/api/doctors', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response3 && response3.data) {
                this.doctors = response3.data._rawValue.body
            }
        } catch (err) {
            console.log(err)
        }
    },
    methods: {
        async submitSearch() {
            this.visits = null
            this.patient_name = ''
            const parts = this.searchQuery.split(' ');
            this.patient_name = `${parts[0]} ${parts[1]}`
            await this.getPatientByName(parts[0], parts[1]);
            console.log(this.patient[0].PatientID);
            await this.getVisitsByPatientID(this.patient[0].PatientID);
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
                this.patient = response.data._rawValue.body; // Update patient data in your component
            }
        },
        async getVisitsByPatientID(id) {
            const response = await useFetch(`/api/getVisitsByPatientID?patientID=${encodeURIComponent(id)}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response && response.data) {
                this.visits = response.data._rawValue.body; // Update patient data in your component
            }
        }

    }
};
</script>

<style scoped>
.price-table {
    margin-top: 30px;
    padding-bottom: 50px;
}

table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ccc;
}

.table-heading {
    font-size: 28px;
    margin-bottom: 10px;
}

th,
td {
    padding: 8px;
    text-align: center;
    border: 1px solid #ccc;
}

td:last-child {
    width: 300px;
}

th {
    background-color: #f2f2f2;
    font-weight: bold;
    color: #000;
}

td del {
    color: #999;
}

@keyframes AnimatedText {
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

.gradient_fire {
    background: linear-gradient(315deg, #B82E1F 0%, #d1a76b 74%);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: AnimatedText 3s ease infinite;
    -moz-animation: AnimatedText 3s ease infinite;
    -o-animation: AnimatedText 3s ease infinite;
    animation: AnimatedText 3s ease infinite;
    font-weight: bold;
}

.visit-input {
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
    width: 500px;
    z-index: 0;
}

@media (max-width: 800px) {
    td:last-child {
        width: 140px;
    }
}

@media (max-width: 400px) {
    td:last-child {
        width: 110px;
    }
}

.search-bar {
    margin: 0 auto;
    width: max-content;
    margin-top: 20px;
    display: flex;
    align-items: center;
    grid-gap: 10px;
}

.search-bar input {
    padding: 5px;
    margin-right: 5px;
    border: 1px solid #ccc;
}

.search-bar button {
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
}
.header-race-btn {
    font-family: Yanone Kaffeesatz, sans-serif;
    padding: 0 18px !important;
  padding-top: 8px !important;
  padding-bottom: 6px !important;
}
</style>
