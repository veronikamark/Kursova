<template>
    <div>
        <h1>Our departments</h1>
        <ul class="doctor-list">
            <li v-for="department in departments" :key="department.DepartmentID" class="doctor-item">
                <img :src="useAsset(department.DepartmentID)" alt="Doctor Image" class="doctor-image">
                <div class="doctor-info">
                    <div class="doctor-name">{{ department.Name }}</div>
                    <div class="doctor-specialization">{{ department.City }}</div>
                    <div class="doctor-mail">{{ department.Address }}</div>
                    <a class="navbar_a header-tel" href="tel:066-006-9950">
                        <span class="header-phone_icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                                class="bi bi-telephone-fill" viewBox="0 0 22 22">
                                <path fill-rule="evenodd"
                                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                        </span>
                        +380{{ department.PhoneNumber }}
                    </a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Doctors",
    data() {
        return {
            departments: null
        }
    },
    methods: {
        useAsset(number) {
            const assets = import.meta.glob("~/assets/departments/*", {
                eager: true,
                import: "default",
            });
            return assets["/assets/" + `departments/${number % 4 + 1}.jpg`];
        }
    },
    async created() {
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
}
</script>

<style scoped>
h1 {
    margin-top: 100px;
    margin-bottom: 0px;
}

.header-phone_icon {
    top: 2px;
    left: -25px;
    position: absolute;
    animation: blink 2s linear infinite;
    padding-top: -5px;
}

@keyframes blink {
    0% {
        color: #3f48cc;
    }

    50% {
        color: #fe00a7;
    }

    100% {
        color: #3f48cc;
    }
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.doctor-list {
    margin-bottom: 70px;
    margin-top: 20px;
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.doctor-item {
    width: 400px;
    margin: 10px;
    padding: 15px;
    background-color: #3d3d3d;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    color: #000;
}

.doctor-image {
    width: 140px;
    height: 140px;
    margin-right: 15px;
}

.doctor-info {
    color: #fff;
    line-height: 1.2;
    flex: 1;
}

.doctor-name {
    font-size: 26px;
    font-weight: bold;
}

.doctor-specialization {
    margin-top: 6px;
    font-size: 24px;
    color: #a3a2a2;
}

.header-tel {
    position: relative;
}
</style>

