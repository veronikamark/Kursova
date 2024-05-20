<template>
  <div class="whole-page-wrapper">
    <Header/>
    <NuxtPage />
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/HeaderComponent.vue'; // Import your header component
import Footer from '@/components/FooterComponent.vue'; // Import your footer component

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
html {
  background-color: #000;
}
.whole-page-wrapper {
  font-family: "Yanone Kaffeesatz", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: calc(100vh - 70px);
  background: black;
  color: white;
  overflow-x: hidden;
}
@font-face {
  font-family: "Yanone Kaffeesatz";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("./assets/fonts/YanoneKaffeesatz1.woff2") format("woff2");
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face {
  font-family: "Yanone Kaffeesatz";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("./assets/fonts/YanoneKaffeesatz2.woff2") format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
body {
  margin: 0;
  font-size: 20px;
}
::selection {
  background: #8900ba; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: #8900ba; /* Gecko Browsers */
}
::-webkit-scrollbar-track {
  background-color: #000;
}
::-webkit-scrollbar {
  width: 6px;
  border-radius: 2px;
  background-color: #000;
}
::-webkit-scrollbar-thumb {
  background-color: #8900ba;
}
.page-wrapper {
  margin-top: 70px;
  min-height: calc(100vh - 192px);
}
.main-h1 {
  margin: 0 auto;
  padding-top: 20px;
  max-width: 80vw;
}
.p-under_h1 {
  margin: 15px auto;
  max-width: 90vw;
  color: rgba(255, 255, 255, 0.8);
}
.p-center {
  text-align: center;
}
.note {
  font-style: italic;
  margin-top: 10px;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
}
@media (min-width: 600px) {
  .page-wrapper {
    margin: 0 auto;
    margin-top: 70px;
    width: 60vw;
  }
  .main-h1 {
    padding-top: 30px;
    font-size: 45px;
    max-width: 50vw;
  }
  h2 {
    font-size: 40px;
  }
  .p-under_h1 {
    font-size: 22px;
  }
  .game-section-heading {
    margin-bottom: 10px;
  }
}
</style>