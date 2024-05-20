<template>
  <div class="page-wrapper">

    <Head>
      <Title>Contacts and Schedule</Title>
    </Head>
    <h1 class="main-h1">Contacts and Schedule</h1>
    <p class="p-under_h1">Here you can find our contact details and club opening hours.</p>

    <div class="working-hours working-hours-first">
      <h2 class="working-hours-heading">Address:</h2>
      <p class="working-hours-description">Lviv, 123 Main St</p>
    </div>

    <div class="working-hours">
      <h2 class="working-hours-heading">Work schedule:</h2>
      <p class="working-hours-description">We work: Mon-Sun (10.00-23.00)</p>
    </div>

    <div class="working-hours">
      <h2 class="contact-info-heading">Contacts:</h2>
      <a class="navbar_a header-tel" href="tel:066-006-9950">
        <span class="header-phone_icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-telephone-fill"
            viewBox="0 0 22 22">
            <path fill-rule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
          </svg>
        </span>
        +38 (066) 886 99 00
      </a>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "ContactsTime"
};
</script>
  
<style scoped>
.contacts-time {
  text-align: center;
  padding: 50px 0;
}

.working-hours {
  margin-top: 30px;
  position: relative;
}

.working-hours-first::before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -15px;
  width: 60vw;
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(45deg, #fe00a7, #3f48cc, #8900ba, #3f48cc);
}

.working-hours::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -15px;
  width: 60vw;
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(45deg, #fe00a7, #3f48cc, #8900ba, #3f48cc);
}

.working-hours-heading,
.contact-info-heading {
  font-size: 26px;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 1);
}

.working-hours-description,
.contact-info-description {
  margin-top: 10px;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
}

.header-tel {
  position: relative;
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

.social-icons {
  margin: 0 auto;
  width: max-content;
  display: flex;
  gap: 15px;
}

.social-icon {
  width: 20px;
  height: 20px;
  padding: 8px;
  border-radius: 50%;
  fill: #ffffff;
  transition: all 0.3s ease-out;
}

.social-icon:nth-child(1) {
  background: #fe00a7;

}

.social-icon:nth-child(2) {
  background: #3f48cc;

}

.social-icon:nth-child(3) {
  background: #8900ba;

}

.social-icon:hover {
  box-shadow: inset 0 0 0 2px #fff;
}

.social-icon:hover svg {
  fill: #ffffff !important;
}

@media (min-width: 600px) {
  .working-hours {
    padding: 5px 0;
  }
  .working-hours::after, .working-hours-first::before {
    width: 30vw;
  }
}
</style>  