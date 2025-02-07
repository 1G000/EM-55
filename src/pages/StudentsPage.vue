<script setup>
import UiSection from "src/components/UiSection.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";
import VacancyCard from "src/components/VacancyCard.vue";
import JoinTeam from "src/components/JoinTeam.vue";
import BreadCrumbs from "src/components/BreadCrumbs.vue";
import { ref, onMounted } from "vue";
const vacancies = ref([]);

onMounted(async () => {
  try {
    const response = await fetch("./vacancies.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    vacancies.value = (await response.json()).vacancies;
  } catch (error) {
    console.error("Error fetching vacancies:", error);
    vacancies.value = [];
  }
});

const sectionTitle = "Студентам и выпускникам";
</script>

<template>
  <UiSection
    class="content__wrapper"
    :padding="$q.screen.width > 1000 ? '64px 40px 0 40px' : '32px 20px 0 20px'"
  >
    <BreadCrumbs :page-route="sectionTitle" />
    <UiSectionTitle tag="h1" :title-text="sectionTitle" />
    <div class="picture__section">
      <div class="left__side">
        <div class="text__content">
          {{
            (text =
              "Мы ищем молодых и амбициозных специалистов в технической области. Если ты студент или недавний выпускник и хочешь применить свои знания на практике, развиваться в профессиональной среде и работать над интересными проектами, то мы ждем тебя в нашей команде! ")
          }}
        </div>
        <JoinTeam
          title="Начни карьеру в стабильной компании!"
          v-if="$q.screen.width > 1000"
        />
      </div>
      <div>
        <picture class="picture__container"
          ><img src="Images/team.jpg" alt="картинка" class="picture" />
        </picture>
        <JoinTeam
          v-if="$q.screen.width < 1000"
          title="Начни карьеру в стабильной компании!"
        />
        <!-- Начни свою карьеру в ЭЛЕКТРОМОНТАЖ 55 -->
      </div>
    </div>
    <VacancyCard :vacancies="vacancies" />
  </UiSection>
</template>

<style scoped>
.picture__section {
  display: flex;
  gap: 30px;
  width: 100%;
  margin-bottom: 30px;
}

.picture {
  object-fit: cover;
  border-radius: 8px;
  padding-top: 40px;
}

.left__side {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.text__content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: Montserrat-regular, serif;
  font-size: clamp(1.1rem, 2.3vw, 1.2rem);
  line-height: 1.5em;
  padding: 40px 0;
  border-radius: 8px;
}

@media screen and (max-width: 768px) {
  .text__content {
    padding: 0;
  }
}

@media screen and (max-width: 660px) {
  .picture__section {
    flex-direction: column;
  }

  .left__side {
    width: 100%;
  }

  .picture {
    width: 100%;
  }
}
</style>
