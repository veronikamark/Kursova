<template>
  <div class="page-wrapper">
    <Head>
      <Title>Gallery. Cosmetology center "SkinCareLviv"</Title>
    </Head>
    <h1 class="main-h1">Gallery. Cosmetology center "SkinCareLviv"</h1>
    <div class="photo-gallery">
      <div class="gallery-item" v-for="(image, index) in images" :key="index">
        <img :src="useAsset(image.src)" :alt="image.alt" @click="openLightbox(index)" />
      </div>

      <div class="lightbox" v-if="lightboxOpen" @click="closeLightbox">
        <div class="lightbox-content">
          <img :src="useAsset(images[currentImageIndex].src)" :alt="images[currentImageIndex].alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryComponent",
  data() {
    return {
      lightboxOpen: false,
      currentImageIndex: 0,
      images: [
        {
          src: "gallery/doctor1.jpg",
          alt: "Skin Care",
        },
        {
          src: "gallery/1.jpg",
          alt: "Skin Care",
        },
        {
          src: "gallery/doctor2.jpg",
          alt: "Skin Care",
        },
        {
          src: "gallery/2.jpg",
          alt: "Skin Care",
        },
        {
          src: "gallery/doctor3.jpg",
          alt: "Skin Care",
        },
        
        {
          src: "gallery/3.jpg",
          alt: "Skin Care",
        },
        {
          src: "gallery/4.jpg",
          alt: "Skin Care",
        },
      ],
    };
  },
  methods: {
    useAsset(path) {
      const assets = import.meta.glob("~/assets/gallery/*", {
        eager: true,
        import: "default",
      });
      return assets["/assets/" + path];
    },
    openLightbox(index) {
      this.lightboxOpen = true;
      this.currentImageIndex = index;
    },
    closeLightbox() {
      this.lightboxOpen = false;
    },
  },
};
</script>

<style scoped>
.photo-gallery {
  margin: 25px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 45vw);
  justify-content: center;
  grid-gap: 20px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  max-height: 250px;
}

.gallery-item img {
  object-fit: cover;
  max-width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.lightbox-content img {
  max-width: 90%;
  max-height: 90%;
}

@media (min-width: 600px) {
  .photo-gallery {
    grid-template-columns: repeat(auto-fill, 250px);
  }

  .lightbox-content img {
    max-width: 60vw;
    max-height: 60vw;
    object-fit: cover;
  }
}
</style>
