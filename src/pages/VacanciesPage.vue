<script setup>
import UiSection from "src/components/UiSection.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";
import VacancyCard from "src/components/VacancyCard.vue";
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

const sectionTitle = "Вакансии";
</script>

<template>
  <UiSection
    class="content__wrapper"
    :padding="$q.screen.width > 768 ? '64px 40px 0 40px' : '64px 20px 0 20px'"
  >
    <UiSectionTitle :title-text="sectionTitle" />
    <div class="picture__section">
      <picture class="picture__container"
        ><img
          src="Images/team.png"
          alt="картинка"
          class="picture"
          height="100%"
        />
      </picture>
      <div class="right__side">
        <span
          >Компания «Электромонтаж 55» организована в 1994 году. На сегодняшний
          день «Электромонтаж 55» осуществляет комплексное решение задач,
          начиная с проектирования и получения необходимых согласований,
          изготовления электротехнического оборудования 0,4/10кВ, выполнение
          земляных («нулевой» цикл), строительных (монтаж и подключение
          трансформаторных подстанций и блочных комплектных трансформаторных
          подстанций), электромонтажных (монтаж оборудования, прокладка
          кабельных трасс до 10 кВ), пуско-наладочных работ, восстановлением
          благоустройства (асфальтирование, газоны, тротуарная плитка и др.),
          заканчивая вводом объектов в эксплуатацию. ООО «Электромонтаж 55»
          является производителем электротехнического оборудования (УБКТП, КТПН,
          КТП, КЛ 209-214, УВР, УВРУ, ГРЩ, ВРУ, ЯВЗ, ШУ, ОЩ, ШСН, ШБП, УКРМ и
          пр.), пройдена аккредитация в ПАО «Ленэнерго».</span
        >
        <h3>Присоединяйся к команде!</h3>
      </div>
    </div>
    <VacancyCard :vacancies="vacancies" />
  </UiSection>
</template>

<style scoped>
.picture__section {
  display: flex;
  gap: 30px;
  background-color: var(--background-light-accent);
  border-radius: 8px;
}
.picture {
  object-fit: cover;
  border-radius: 8px;
}
.right__side {
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
}
.right__side span {
  font-family: Montserrat-regular, serif;
  font-size: clamp(0.8rem, 2.3vw, 1.2rem);
  line-height: 1.3em;
}
h3 {
  font-family: Montserrat-bold, serif;
  font-size: clamp(1.2rem, 2.3vw, 2rem);
  line-height: 1em;
}
</style>
