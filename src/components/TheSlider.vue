<template>
  <div class="q-md">
    <q-carousel
      animated
      v-model="slide"
      infinite
      :autoplay-speed="5000"
      swipeable
      ref="carousel"
    >
      <q-carousel-slide
        v-for="(slideData, index) in slideData"
        :key="index"
        :name="index + 1"
        class="slide"
        :img-src="slideData.imgSrc"
      >
        <div class="carousel-wrapper">
          <div class="text-overlay">
            <!-- <h2 class="slide__title">{{ slideData.title }}</h2> -->
            <h3 class="slide__subtitle" v-html="slideData.subtitle"></h3>
            <span
              class="slide__textcontent"
              v-html="slideData.textcontent"
            ></span>
            <div
              v-if="slideData.buttons && slideData.buttons.length > 0"
              class="buttons__container"
            >
              <button
                v-for="(button, buttonIndex) in slideData.buttons"
                :key="buttonIndex"
                :class="button.style"
                ref="button"
                @mousemove="handleMouseMove(buttonIndex, $event)"
                @mouseleave="handleMouseLeave($event)"
              >
                {{ button.btnTitle }}
              </button>
            </div>
          </div>
        </div>
      </q-carousel-slide>

      <template v-slot:control>
        <q-carousel-control
          position="bottom-right"
          :offset="[20, 90]"
          class="q-gutter-xs"
        >
          <q-btn
            color="white"
            text-color="primary"
            icon="keyboard_arrow_left"
            class="slider__switcher"
            @click="$refs.carousel.previous()"
          />
          <q-btn
            color="white"
            text-color="primary"
            icon="keyboard_arrow_right"
            class="slider__switcher"
            @click="$refs.carousel.next()"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
let slide = ref(1);
const slideData = ref([]);

onMounted(async () => {
  try {
    const response = await fetch("./sliderData.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    slideData.value = (await response.json()).sliderData;
  } catch (error) {
    console.error("Error fetching navItems:", error);
    navItems.value = [];
  }
});

//hover

const handleMouseMove = (_, event) => {
  const button = event.currentTarget;
  const x = event.offsetX;
  const y = event.offsetY;
  const width = button.offsetWidth;
  const height = button.offsetHeight;
  const xPercent = (x / width) * 100;
  const yPercent = (y / height) * 100;

  const gradient = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(225, 225, 225,1), transparent)`;
  button.style.backgroundImage = gradient;
};

const handleMouseLeave = (event) => {
  const button = event.currentTarget;
  button.style.backgroundImage = "";
};
</script>

<style scoped>
@font-face {
  font-family: "Montserrat-regular";
  src: url("/src/fonts/Montserrat-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Montserrat-bold";
  src: url("/src/fonts/Montserrat-Bold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
}

.q-carousel {
  height: 90vh;
}

.carousel-wrapper {
  position: relative;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.2)
  );
  background-size: cover;
  height: 100%;
  width: 100%;
}

.text-overlay {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10+ */
  user-select: none;
  position: absolute;
  top: 120px;
  left: 50px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 20px;
  max-width: 900px;
}

.slide {
  padding: 0px;
}

.q-carousel__slide {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.slide__title {
  font-weight: 700;
  font-size: clamp(16px, 4.5vw, 24px);
  background-image: linear-gradient(to right, #d4ad6f, #eeeeee);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.slide__subtitle {
  font-family: "Montserrat", sans-serif;
  font-size: clamp(2rem, 1vw, 4.5rem);
  letter-spacing: -0.4px;
  line-height: 2rem;
  font-weight: 500;
  color: white;
}

.slide__textcontent {
  font-family: Montserrat-regular, sans-serif;
  font-size: clamp(1rem, 1vw, 2rem);
  color: white;
  letter-spacing: -0.4px;
}

.buttons__container {
  display: flex;
  gap: 20px;
  font-family: Montserrat-bold, serif;
  font-size: 16px;
  margin-top: 50px;
}

.btn__left {
  background-color: rgb(134, 0, 42);
  border: none;
  color: white;
  width: 222px;
  height: 60px;
  border-radius: 8px;
  padding: 10px 40px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

.btn__right {
  background-color: transparent;
  border: 2px solid #86002a;
  color: white;
  width: 222px;
  height: 60px;
  border-radius: 8px;
  padding: 10px 40px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}
.slider__switcher {
  border-radius: 8px;
}
@media (hover: hover) {
  .btn__right:hover {
    border: none;
    color: #86002a;
    background-color: #e5c696;
  }

  .btn__right:hover,
  .btn__left:hover {
    cursor: pointer;
  }
}

@media screen and (max-width: 1400px) {
  .text-overlay {
    max-width: 750px;
  }
}

@media screen and (max-width: 1000px) {
  .text-overlay {
    max-width: 500px;
  }
  .buttons__container {
    flex-direction: column;
  }
}

@media screen and (max-width: 768px) {
}
@media screen and (max-width: 548px) {
  .text-overlay {
    position: absolute;
    top: 100px;
    left: 20px;
    padding: 2px;
    display: flex;
    gap: 20px;
    max-width: 370px;
  }

  .q-pa-md {
    padding: 0;
  }
}

@media screen and (max-width: 430px) {
  .slide__textcontent,
  .slide__subtitle {
    max-width: 212px;
  }
  .text-overlay {
    top: 60px;
  }
}
</style>
