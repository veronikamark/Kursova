<template>
  <header class="club-header">
    <div class="hamburger-overlay" @click="toggleNav"></div>
    <div class="hamburger">
      <div class="line" :class="{ line_open: isNavOpen }"></div>
      <div class="line" :class="{ line_open: isNavOpen }"></div>
    </div>
    <NuxtLink :prefetch="false" to="/" class="logo" @click="closeNav">
      <img src="@/assets/skincare.png" alt="Club Logo" width="105px" height="40px"/>
    </NuxtLink>
    <a class="header-race-btn header-race-btn-right" href="tel:066-006-9950">Make an appointment!</a>
    <nav class="nav-links" :class="{ 'nav-open': isNavOpen }">
      <ul class="nav-links-ul">
        <li><NuxtLink :prefetch="false" to="/" @click="toggleNav">Main</NuxtLink></li>
        <li><NuxtLink :prefetch="false" to="/reserve" @click="toggleNav">Booking</NuxtLink></li>
        <li><NuxtLink :prefetch="false" to="/visit-checker" @click="toggleNav">Visit Checker</NuxtLink></li>
        <li><NuxtLink :prefetch="false" to="/price-list" @click="toggleNav">Price List</NuxtLink></li>
        <li><NuxtLink :prefetch="false" to="/doctors" @click="toggleNav">Doctors</NuxtLink></li>
        <li><NuxtLink :prefetch="false" to="/departments" @click="toggleNav">Departments</NuxtLink></li>
        <li><NuxtLink :prefetch="false" to="/gallery" @click="toggleNav">Gallery</NuxtLink></li>
        <li><NuxtLink :prefetch="false" to="/promo" @click="toggleNav">Promotions</NuxtLink></li>
        <li><NuxtLink :prefetch="false" to="/contacts" @click="toggleNav">Contacts / Work schedule</NuxtLink></li>
        <li><NuxtLink :prefetch="false" to="/about-us" @click="toggleNav">About Us</NuxtLink></li>
      </ul>
      <a class="nav-links-phone-wrapper" href="tel:066-006-9950">
        <div class="nav-links-phone-address">Lviv, 123 Main St</div>
        <div class="nav-links-phone-phone">+38 (066) 886 99 00</div>
      </a>
      <div class="social-icons">
      <a href="https://www.instagram.com/" target="_blank" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="bi bi-instagram" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/> </svg></a>
      <a href="https://www.tiktok.com/" target="_blank" class="social-icon"><svg width="20" height="20" class="contacts-svg" version="1.1" viewBox="0 0 27 27" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 1.41421;"><path data-v-807c9b84="" id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"></path></svg></a>
      <a href="https://www.tiktok.com/" target="_blank" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="bi bi-tiktok" viewBox="0 0 16 16"> <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/> </svg></a>
    </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      isNavOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    closeNav() {
      this.isNavOpen = false
    },
    closeNavOnClickOutside(event) {
      if (this.isNavOpen && !this.$el.contains(event.target)) {
        this.isNavOpen = false;
      }
    }
  },
  mounted() {
    document.addEventListener("click", this.closeNavOnClickOutside);
  },
  beforeUnmounted() {
    document.removeEventListener("click", this.closeNavOnClickOutside);
  }
};
</script>

<style scoped>
header {
  z-index: 2;
}
.nav-links ul {
  list-style: none;
  padding: 0;
}
.club-header {
  position: fixed;
  top: 0;
  width: 100%;
  display: grid;
  grid-template-columns: max-content auto;
  grid-gap: 20px;
  align-items: center;
  padding: 15px 0;
  background-color: black;
  color: #fff;
}
.club-header::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%; 
  height: 1px;
  background: linear-gradient(45deg, #fe00a7, #3f48cc, #8900ba);
}

.hamburger {
  position: absolute;
  left: 35px;
  top: 49%;
  cursor: pointer;
  z-index: 3; /* Increase z-index */
}

.line {
  position: absolute;
  top: 50%;
  margin-top: -1px;
  right: 0;
  border-radius: 3px;
  width: 20px;
  height: 3px;
  transition: all 0.3s ease; /* Add transition */
  background-color: #ffffff;
}

.line:nth-child(1) {
  background-color: #3f48cc;
  transform: translate(0, -4px);
}

.line:nth-child(2) {
  background-color: #fe00a7;
  transform: translate(0, 4px);
}

.line_open:nth-child(1) {
  transform: translate(0, 0) rotate(45deg); /* Rotate and translate for open state */
}

.line_open:nth-child(2) {
  transform: translate(0, 0) rotate(-45deg); /* Rotate and translate for open state */
}

.nav-links {
  position: absolute;
  background-color: rgba(0,0,0, 0.9);
  transform: translateX(-100%); /* Move the menu off-screen */
  transition: all 0.3s ease; /* Add transition */
  top: 70px;
  left: 0;
  width: 80%;
  height: 100vh;
  z-index: 1;
  margin-bottom: -20px;
}
.nav-links-ul {
  position: relative;
  width: max-content;
}
.nav-links li {
  position: relative;
  padding: 7px 20px;
  font-size: 20px;
  text-align: left;
}

.nav-links-phone-wrapper {
  width: max-content;
  position: relative;
  text-align: left;
  display: block;
    padding: 5px 20px;
}

.nav-links-phone-wrapper::before {
  content: "";
  position: absolute;
  left: 20px;
  top: -12px;
  width: calc(100% - 40px); 
  height: 3px;
  border-radius: 3px;
  background: linear-gradient(45deg, #fe00a7, #3f48cc, #8900ba);
}

.nav-links-phone-wrapper::after {
  content: "";
  position: absolute;
  left: 20px;
  bottom: -12px;
  width: calc(100% - 40px); 
  height: 3px;
  border-radius: 3px;
  background: linear-gradient(45deg, #fe00a7, #3f48cc, #8900ba);
}

.nav-links-phone-address {
  font-size: 16px;
  color: rgba(255,255,255,0.8);
}

.nav-links-phone-phone {
  font-size: 24px;
  margin-top: 5px;
}

.nav-open {
  transform: translateX(0); /* Slide the menu into view */
}
.logo {
  margin-left: 50px;
  height: 40px;
}
.logo > img {
  height: 40px;
}
.header-race-btn {
  justify-self: right;
}

.header-race-btn-right {
  margin-right: 20px;
}

.social-icons {
  display: flex;
  gap: 20px;
  margin-top: 30px;
  margin-left: 27px;
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
.hamburger-overlay {
  position: absolute;
  top: 49%; /* Adjust this value to vertically center the overlay */
  left: 35px; /* Same as the hamburger's left position */
  transform: translate(-100%, -50%);
  cursor: pointer;
  z-index: 4;
  width: 20px; /* Set the width to match the hamburger's width */
  height: 20px; /* Set the height to match the hamburger's height */
}
@media (min-width: 600px) {
  .nav-links {
    width: 300px;
  }
  .nav-links li {
    font-size: 22px;
  }
}
</style>

<style>
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
.header-race-btn {
  display: block;
  width: max-content;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  padding: 0 15px;
  padding-top: 10px;
  padding-bottom: 8px;
  border-radius: 18px;
  text-transform: uppercase;
  font-size: 18px;
  background-size: 300% 300%;
  background-image: linear-gradient(315deg, #fe00a7, #3f48cc, #8900ba, #3f48cc);
   animation: slidebg 5s linear infinite;
  color: #fff;
  letter-spacing: 1.5px;
  transition: all 0.3s ease-out;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  outline: none;
}
.header-race-btn:hover {
  color: #000;
  background-image: none; /* Remove gradient on hover */
  background-color: #fff; /* Change background color on hover */
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.4);
}
a {
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease-out;
}
a:hover {
  color: #fe00a7;
  text-decoration: none;
}
</style>
