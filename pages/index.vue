<template>
  <div class="main-page-wrapper page-wrapper">

    <Head>
      <Title>Cosmetology Clinic "ScinCareLviv" in Lviv</Title>
      <Meta name="description"
        content="The premier cosmetology clinic in Lviv. Experience exceptional beauty treatments. Enjoy modern skincare and rejuvenation services.">
      </Meta>
      <Link rel="cannonical" href="https://beautycareclinic.com/">
      </Link>
    </Head>
    <div class="background-video-container mobile-content-video">
      <video class="background-video" autoplay loading="lazy" loop muted poster="@/assets/departments/1.jpg">
        <source src="" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <a class="header-book-btn video-btn" href="/book-appointment">Book an Appointment Online!</a>
    </div>
    <div class="main-page-content-wrapper mobile-content-top">
      <h1 class="main-h1">Premier Cosmetology Clinic in Lviv</h1>
      <p class="p-under_h1">
        Welcome to our cosmetology clinic! We offer exceptional beauty treatments for everyone. Visit us to experience the latest in skincare and rejuvenation. Join our community and enjoy unforgettable beauty sessions.
      </p>
    </div>

    <div class="main-page-content-wrapper pc-content-top">
      <h1 class="main-h1">Premier Cosmetology Clinic in Lviv</h1>
      <p class="p-under_h1">
        Welcome to our cosmetology clinic! We offer exceptional beauty treatments for everyone. Visit us to experience the latest in skincare and rejuvenation. Join our community and enjoy unforgettable beauty sessions.
      </p>
    </div>
    <div class="background-video-container pc-content-video">
      <video class="background-video" autoplay loading="lazy" loop muted poster="@/assets/departments/1.jpg">
        <source src="" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <NuxtLink class="header-book-btn video-btn" :prefetch="false" to="/reserve">Book an Appointment Online!</NuxtLink>
    </div>

    <div class="main-page-content-bg-image main-page-content-bg-image-design">
      <div class="content">
        <h2>Clinic Atmosphere</h2>
        <p class="p-center">
          We have created a unique place where every beauty enthusiast can find their passion. Our clinic brings together both novices and experienced clients who want to feel the true essence of beauty and relaxation. Experience the atmosphere of calm and rejuvenation with us!
        </p>
      </div>
    </div>

    <div class="service-section service-section-first">
      <h2 class="service-section-heading service-section-first">
        Our Services
      </h2>
      <p class="service-section-first p-under_h1">
        In our cosmetology clinic, you can enjoy the most popular beauty treatments. We have created the perfect place for those who want to indulge in captivating treatments that enhance the beauty experience.

Our range of services includes a variety of skincare treatments designed for both beginners and experienced clients. We offer the opportunity to experience the true atmosphere of relaxation and beauty, without leaving our clinic.

Our treatments allow you to enjoy virtual beauty and rejuvenation, just like in real life. Join us to find your passion in beauty treatments and share these experiences with friends.
      </p>
      <Swiper class="swiper" :loop="true" :effect="'cards'" :grabCursor="true"
        :modules="[SwiperAutoplay, SwiperEffectCards]">
        <SwiperSlide class="swipper-slide" v-for="doctor in doctors" :key="doctor.DoctorID">
          <img :src="useAsset(doctor.DoctorID)" alt="Doctor Image" class="swipper-img">
          <span class="service-name">{{ doctor.FirstName }} {{ doctor.LastName }}</span>
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="main-page-content-wrapper">
      <h2>Beauty Treatments</h2>
      <p>
        In our clinic, we meticulously care about the quality of your beauty experience. Our beauty stations are equipped with the latest technology to provide the most realistic beauty experience. Whether you are a beginner just starting your journey in the world of beauty, or an experienced client, our beauty treatments will provide you with unforgettable moments of relaxation and rejuvenation.
      </p>
      <p>
For your comfort and satisfaction, we use monitors with a refresh rate of 165 Hz that support ultrawide format, ensuring a wide view and immersive beauty experience. Our computers are equipped with RTX 3070 graphics cards, providing high-quality graphics and smooth performance.

In our clinic, every client will feel the true joy of beauty treatments thanks to our modern equipment and exceptional attention to detail. Let every session in our beauty treatments become an unforgettable event for you.
      </p>
    </div>
    <img class="main-page-img1" src="@/assets/gallery/2.jpg" alt="Beauty Treatment" />


    <div class="main-page-content-wrapper">
      <h2>Our Mission</h2>
      <p>
        Our goal is to create unforgettable experiences for our clients by offering a safe and exciting environment to feel beauty and emotions. Our clinic is staffed by a team of professionals always ready to provide the highest level of service and assistance to ensure each client has unparalleled experiences.
      </p>
      <p>
We work to ensure that every guest feels special and leaves satisfied with our service. Our team of professionals is deeply immersed in the world of beauty and treatments, and has many years of experience, helping us provide our clients with the best possible experience.
      </p>
      <p>
We are committed to your satisfaction and are ready to do everything to make each of your visits unforgettable. Come to us and let us provide you with the extreme joy of beauty treatments and relaxation.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
        return {
            doctors: null,
            departments: null
        }
    },
  async created() {
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
  methods: {
    useAsset(number) {
            const assets = import.meta.glob("~/assets/doctors/*", {
                eager: true,
                import: "default",
            });
            return assets["/assets/" + `doctors/doctor${number % 3 + 1}.jpg`];
        },
  }
};
</script>

<style scoped>
.main-page-wrapper {
  padding-bottom: 25px;
}

.main-page-content-wrapper {
  margin: 30px auto;
  max-width: 80vw;
  text-align: justify;
}

.background-video-container {
  position: relative;
  /* Add position relative */
  width: 100%;
  height: 100%;
  display: flex;
  /* Use flexbox */
  align-items: center;
  /* Center vertically */
  justify-content: center;
  /* Center horizontally */
  z-index: 0;
  height: 500px;
}

.background-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /*filter: grayscale(70%);*/
  opacity: 0.5;
}

.video-btn {
  position: absolute;
  margin: 0 auto;
  top: 50%;
  z-index: 2;
  font-size: 20px;
  padding: 0 20px;
  padding-top: 12px;
  padding-bottom: 10px;
  border-radius: 10px;
  background: #fff;
  color: rgba(0, 0, 0, 0.9);
}

.video-btn:hover {
  color: #fe00a7;
}

h1,
h2 {
  margin-top: 50px;
  margin-bottom: 15px;
  text-align: center;
}

.p-under_h1, .p-center, p {
  margin-top: 0;
  color: rgba(255, 255, 255, 0.9);
  text-align: justify;
  text-indent: 20px;
  font-size: 22px;
}

.game-section-first .p-under_h1 {
  margin-top: 15px;
  max-width: 90%;
}

.main-page-img1 {
  width: 100vw;
  height: auto;
}

.main-page-content-bg-image {
  margin-top: 50px;
  padding: 25px 0;
  position: relative;
}

.main-page-content-bg-image::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url("@/assets/gallery/3.jpg");
  /* Replace with your image URL */
  /* filter: grayscale(0.5); */
  opacity: 0.5;
}

.main-page-content-bg-image2::before {
  background-image: url("@/assets/gallery/3.jpg");
}

.main-page-content-bg-image-design > .content {
  padding: 20px 0;
}
.main-page-content-bg-image-design::before {
  background-image: url("@/assets/gallery/3.jpg");
}

.content {
  position: relative;
  z-index: 1;
  text-align: justify;
  max-width: 80vw;
  margin: 0 auto;
}

.content>h2 {
  margin-top: 15px;
}

.content>p {
  margin-bottom: 10px;
}

.header-race-btn-content {
  margin: 0 auto;
  text-align: unset;
}

.swiper {
  overflow: hidden;
}

.swiper-slide {
  position: relative;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.25s ease-out;
}

.swipper-img {
  height: 350px;
  width: 260px;
}

.game-name {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -20px;
}

.game-section {
  margin-top: 40px;
  position: relative;
}

.game-section-bottom {
  margin-top: 70px;
}

.game-section-heading {
  margin-bottom: 0px;
}

.our-games {
  padding-bottom: 70px;
}

.game-section-first::before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -20px;
  width: 260px;
  height: 1px;
  border-radius: 1px;
  background: linear-gradient(45deg, #fe00a7, #3f48cc, #8900ba, #3f48cc);
}

.game-section::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -25px;
  width: 260px;
  height: 1px;
  border-radius: 1px;
  background: linear-gradient(45deg, #fe00a7, #3f48cc, #8900ba, #3f48cc);
}

.mobile-content-video {
  display: flex;
}

.service-name {
  position: absolute;
  bottom: 15px;
  left: 62%;
  color: #000;
}

.mobile-content-top {
  display: block;
}

.pc-content-top,
.pc-content-video {
  display: none;
}
.game-section-first .p-under_h1 {
    width: 85%;
  } 

@media (min-width: 600px) {

  .mobile-content-top,
  .mobile-content-video {
    display: none;
  }

  .pc-content-video {
    display: flex;
  }

  .pc-content-top {
    display: block;
  }

  .background-video-container {
    width: 500px;
    margin: 0 auto;
    height: 617px;
  }

  .main-page-img1 {
    width: 60vw;
  }

  .main-page-content-bg-image {
    padding: 50px 8vw;
  }

  .p-center {
    font-size: 22px;
  }

  .game-section-heading {
    margin-bottom: 15px;
  }

  .swiper {
    margin-top: 25px;
  }

  .swipper-img {
    height: 550px;
    width: 410px;
  }
  
}</style>