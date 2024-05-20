<template>
  <div class="page-wrapper">
    <Head>
      <Title>Online reservation</Title>
    </Head>
    <SeatsMap />
    <div class="working-hours">
      <h3 class="main-h3">If you have any questions - Call us</h3>
      <a class="header-tel" href="tel:055-005-6650">
        <span class="header-phone_icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-telephone-fill"
            viewBox="0 0 22 22">
            <path fill-rule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
          </svg>
        </span>
        +38055332256
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReserveComponent"
};
</script>

<style scoped>
.main-h3 {
  font-size: 30px;
  margin-bottom: 15px;
}
.header-tel {
  position: relative;
  font-size: 22px;
  color: rgb(201, 195, 195);
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
.reserve-ul {
  margin: 20px auto;
  margin-top: 10px;
  max-width: 80vw;
  padding-left: 20px;
  text-align: left;
  color: rgb(255, 255, 255);
}

.reserve-ul li {
  margin-top: 10px;
}

.reserve-span {
  margin-top: 3px;
  display: block;
  font-style: italic;
  text-align: left;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
}

.reserve-span-faq {
  margin-top: 5px;
  display: block;
  font-style: italic;
  text-align: left;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
}</style>