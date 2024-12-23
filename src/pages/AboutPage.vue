<template>
  <div class="content__wrapper">
    <UiSectionTitle :title-text="sectionTitle" class="section__title" />
    <p class="about__text">
      ООО «Электромонтаж-55» выполняет полный комплекс работ: от проектирования,
      до ввода готового объекта в эксплуатацию. Это удобно Заказчику, экономит
      его время, ресурсы и гарантирует долгое и бесперебойное использование
      объекта или закупленного оборудования в будущем. ООО «Электромонтаж-55» с
      2014 года входит в группу компаний «ГРАНИТ». 23 года назад, когда наша
      организация начинала свою деятельность, мы пробовали себя в разных
      направлениях. Подумав, остановились на энергетике. Это то, что всегда
      будет востребовано. Людям нужен свет. Лампочки должны гореть, чайник
      кипеть, телевизор показывать. Мы работаем для населения, точно также, как
      врачи или полиция, и понимаем какая ответственность, ложится на нас, а
      поэтому делаем всё качественно и на совесть.
    </p>
    <div class="photo__section">
      <picture class="picture__container"
        ><img src="./Images/Contacts/selin.png" alt="" class="picture"
      /></picture>
      <div class="picture__container-titles">
        <h3 class="heading_three">Генеральный директор «Электромонтаж-55»</h3>
        <h4 class="heading_four">Евгений Селин</h4>
      </div>
    </div>
  </div>
</template>

<script setup>
import UiSection from "../components/UiSection.vue";
import UiSectionTitle from "../components/UiSectionTitle.vue";

const sectionTitle = "О компании";
</script>

<style scoped>
.content__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  padding: 20px;
}

.section__title {
  margin: 0 auto;
}

.about__text {
  text-indent: 40px;
  font-size: clamp(1.1rem, 1vw, 1.2rem);
  font-family: Montserrat-regular, serif;
  line-height: 30px;
  max-width: 1440px;
}

.picture__container {
  max-width: 200px;
}

.picture {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.photo__section {
  margin: 0 auto;
  display: flex;
  gap: 40px;
}

.picture__container-titles {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.heading_three {
  font-family: Montserrat-regular, serif;
  color: black;
  line-height: 25px;
  text-align: center;
  font-size: 24px;
}

.heading_four {
  font-family: Montserrat-bold, serif;
  color: black;
  text-align: center;
  font-size: 22px;
}

@media (max-width: 1280px) {
  .photo__section {
    flex-direction: column;
    align-items: center;
  }
}
</style>
