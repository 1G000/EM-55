<script setup>
defineOptions({
  name: "MainLayout",
});

import TheHeader from "src/components/TheHeader.vue";
import TheFooter from "src/components/TheFooter.vue";

import { ref, onMounted, onBeforeUnmount } from "vue";
const showScrollButton = ref(false);

// Функция для прокрутки наверх
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Функция для отслеживания прокрутки
const handleScroll = () => {
  showScrollButton.value = window.scrollY > window.innerHeight;
};

//слушатель события прокрутки при монтировании компонента
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Удаляем слушатель события прокрутки перед уничтожением компонента
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

const navItems = ref(null);

onMounted(async () => {
  try {
    const response = await fetch("./navitems.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    navItems.value = (await response.json()).navItems;
  } catch (error) {
    console.error("Error fetching navItems:", error);
    navItems.value = [];
  }

  (function (w, d, c) {
    var s = d.createElement("script"),
      h = d.getElementsByTagName("script")[0],
      e = d.documentElement;
    if ((" " + e.className + " ").indexOf(" ya-page_js_yes ") === -1) {
      e.className += " ya-page_js_yes";
    }
    s.type = "text/javascript";
    s.async = true;
    s.charset = "utf-8";
    s.src =
      (d.location.protocol === "https:" ? "https:" : "http:") +
      "//site.yandex.net/v2.0/js/all.js";
    h.parentNode.insertBefore(s, h);
    (w[c] || (w[c] = [])).push(function () {
      Ya.Site.Form.init();
      const interval = setInterval(() => {
        const searchInput = document.querySelector(".ya-site-form__input-text");
        const searchButton = document.querySelector(".ya-site-form__submit");
        if (searchInput) {
          clearInterval(interval);

          searchInput.style.backgroundColor = "#830024";
          // searchInput.style.border = "1px solid #e5c696";
          searchInput.style.borderRadius = "5px";
          searchInput.style.padding = "4px 4px";
          searchInput.style.fontSize = "16px";
          searchButton.style.backgroundColor = "#e5c696";
          searchButton.style.borderRadius = "4px";
          searchButton.style.border = "none";
          searchButton.style.color = "#e5c696 !important";
          searchButton.style.padding = "5px 10px";
          searchButton.style.marginLeft = "10px";
          searchButton.style.cursor = "pointer";
        }
      }, 100);
    });
  })(window, document, "yandex_site_callbacks");
});
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <TheHeader :navItems="navItems" />
    <main class="main">
      <router-view />
    </main>
    <TheFooter />
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        round
        style="width: 60px; height: 60px"
        color="primary"
        icon="arrow_upward"
        @click="scrollToTop"
        v-if="showScrollButton"
        class="btn_to-top"
      />
    </q-page-sticky>
  </q-layout>
</template>

<style scoped>
.main {
  padding-top: calc(75px + 36px);
  margin-left: auto;
  margin-right: auto;
  max-width: 1920px;
}

.btn_to-top {
  box-shadow: 0 0 2px 2px rgba(255, 255, 255, 0.5);
}
</style>
