<template>
  <div class="q-md">
    <q-carousel
      animated
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      infinite
      :autoplay-speed="5000"
      swipeable
      navigation
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
            <div class="text-overlay__text">
              <h2 class="slide__title" v-html="slideData.title"></h2>
              <h3 class="slide__subtitle" v-html="slideData.subtitle"></h3>
              <span
                class="slide__textcontent"
                v-html="slideData.textcontent"
              ></span>
            </div>
            <div
              v-if="slideData.buttons && slideData.buttons.length > 0"
              class="buttons__container"
            >
              <button
                v-for="(button, buttonIndex) in slideData.buttons"
                :key="buttonIndex"
                :class="button.style"
                ref="button"
                v-on="{
                  mousemove: supportsHover
                    ? handleMouseMove.bind(_, buttonIndex)
                    : null,
                  mouseleave: supportsHover ? handleMouseLeave : null,
                }"
              >
                {{ button.btnTitle }}
              </button>
            </div>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
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

const supportsHover = computed(() => {
  return window.matchMedia("(hover: hover)").matches;
});

const handleMouseMove = (color, event) => {
  const button = event.currentTarget;
  const x = event.offsetX;
  const y = event.offsetY;
  const width = button.offsetWidth;
  const height = button.offsetHeight;
  const xPercent = (x / width) * 100;
  const yPercent = (y / height) * 100;

  const gradient = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(225, 225, 225,0.3), transparent)`;
  button.style.backgroundImage = gradient;
};

const handleMouseLeave = (event) => {
  const button = event.currentTarget;
  button.style.backgroundImage = "";
};
</script>

<style scoped>
.q-carousel {
  height: 90vh;
}

.text-overlay {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10+ */
  user-select: none;
  display: flex;
  flex-direction: column;
  padding: 80px 60px;
  align-items: flex-start;
}

.text-overlay__text {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 800px;
  min-height: 300px;
}

.q-carousel__slide {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.slide__title {
  font-weight: 700;
  font-size: 48px;
  background-image: linear-gradient(to right, #d4ad6f, #eeeeee);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.slide__subtitle {
  font-family: Montserrat-regular, serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 1.2em;

  color: white;
}

.slide__textcontent {
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2em;
  color: white;
  letter-spacing: 0.3px;
  min-height: 120px;

}

.buttons__container {
  display: flex;
  justify-content: center;
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

@media screen and (max-width: 768px) {
  .text-overlay__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 290px;
    gap: 20px;
  }

  .q-carousel {
    height: 60vh;
  }
  .slide {
    display: flex;
    justify-content: center;
  }

  .slide__title {
    font-size: 30px;
  }

  .text-overlay {
    display: flex;
    max-width: 370px;
    padding: 40px 0 0 0;
  }

  .buttons__container {
    font-size: 14px;
    margin-top: 20px;
  }

  .btn__left,
  .btn__right {
    padding: 10px 10px;
    width: 130px;
    height: 50px;
  }
}

@media screen and (max-width: 430px) {
  .slide {
    padding: 10px;
    background-position: right;
  }
  .text-overlay {
    align-items: center;
    min-height: 400px;
  }
}
</style>
