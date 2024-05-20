<template>
    <div class="page-wrapper">
        <Head>
            <Title>Promotions - cosmetology center "SkinCareLviv"</Title>
        </Head>
        <h1 class="main-h1">Promotions - cosmetology center "SkinCareLviv"</h1>
        <p class="p-under_h1">Here you can familiarize yourself with our club's promotions and favorable offers for visitors</p>
        
        <div class="promotion">
            <h2 class="promotion-heading">-25%</h2>
            <p class="promotion-condition">* this month</p>
            <p class="promotion-description">We just opened. Get a great result at a discounted price</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "PromoComponent"
};
</script>

<style scoped>
.promo {
    text-align: center;
    padding: 50px 0;
}

.promo-heading {
    font-size: 2rem;
    margin-bottom: 20px;
}

.promo-description {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 40px;
}

.promotion {
    max-width: calc(90vw - 40px);
    margin: 0 auto;
    margin-top: 30px;
    padding: 20px;
    padding-top: 5px;
    background: linear-gradient(45deg, #fe00a7, #3f48cc, #8900ba, #3f48cc);
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
}

.promotion-heading {
    margin-top: 20px;
    font-size: 30px;
    margin-bottom: 5px;
    color: #fff;
}

.promotion-condition {
    margin-top: 0;
    font-size: 18px;
    color: rgba(255,255,255,0.85);
    margin-bottom: 0px;
    font-style: italic;
}

.promotion-condition::after {
    content: "";
    display: block;
    width: 96%;
    height: 1px;
    border-radius: 2px;
    background: #fff;
    margin: 0 auto;
    margin-top: 20px;
}

.promotion-description {
    font-size: 1rem;
    line-height: 1.5;
    color: rgba(255,255,255,0.85);
    margin-bottom: 0;
}
</style>