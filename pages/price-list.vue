<template>
    <div class="page-wrapper">

        <Head>
            <Title>Prices in the cosmetology center "SkinCareLviv" in Lviv</Title>
        </Head>
        <h1 class="main-h1">Prices in the cosmetology center "SkinCareLviv" in Lviv</h1>
        <p class="p-under_h1">See current prices for cosmetology services in Lviv</p>
        <div class="price-list_updated">Updated: <strong><time datetime="2024-4-4">4 April 2024
                        року</time></strong></div>
        <div class="price-table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Duration (mins)</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="treat in treatment" :key="treat.TreatmentID">
                        <td>{{treat.Name}}</td>
                        <td>{{treat.Description}}</td>
                        <td>{{treat.Duration}}</td>
                        <td><del>{{Math.floor(treat.Price * 1.25)}} грн</del> {{treat.Price}} грн</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "PriceList",
    data() {
        return {
            treatment: null
        }
    },
    async created() {
        try {
            const response2 = await useFetch('/api/treatment', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response2 && response2.data) {
                this.treatment = response2.data._rawValue.body
            }
        } catch (err) {
            console.log(err)
        }
    },
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
</style>
