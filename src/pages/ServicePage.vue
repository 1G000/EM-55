<script setup>
import UiSection from "src/components/UiSection.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";
import BreadCrumbs from "src/components/BreadCrumbs.vue";
import serviceImg1 from "../assets/service3_new1.jpg";

const sectionTitle = "Сервис";
</script>

<template>
  <UiSection
    class="content__wrapper"
    :padding="$q.screen.width > 768 ? '64px 40px 0 40px' : '32px 20px 0 20px'"
  >
    <BreadCrumbs :page-route="sectionTitle" />
    <UiSectionTitle tag="h1" :title-text="sectionTitle" />
    <p class="text">
      ООО «Электромонтаж 55» является предприятием, специализирующимся на полном
      комплексе работ по электроснабжению потребителей: проектировании,
      разработке, изготовлении, поставке, монтажу и наладке электрощитового
      оборудования любой сложности. В своей работе мы нацелены на максимальное
      обеспечение своих заказчиков современным, высококачественным и
      энергосберегающим оборудованием. Мы постоянно развиваем наше предприятие,
      работаем над повышением эффективности производственных процессов, создаем
      все условия по осуществлению гарантийного и постгарантийного обслуживания.
      Компания на своей производственной базе занимается техническим и сервисным
      обслуживанием, в том числе проводит аудит и диагностику неисправного
      оборудования, устраняет недостатки, вносит изменения в документацию и т.
      д., предлагает услуги по ремонту и модернизации действующих
      электроустановок.
    </p>
    <img :src="serviceImg1" />

    <a class="download__link" href="./service.pdf"
      ><span>Письмо о сервисном центре ООО «Электромонтаж 55»</span
      ><q-icon color="gray" name="download"></q-icon
    ></a>
  </UiSection>
</template>

<style scoped>
.text {
  color: black;
  font-family: Montserrat-regular, serif;
  font-size: 16px;
  text-align: justify;
}
.download__link {
  color: black;
  font-family: Montserrat-bold, serif;
  text-transform: uppercase;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
}

@media (hover: hover) {
  .download__link:hover {
    color: var(--q-primary);
  }
}

@media screen and (max-width: 880px) {
  .payment__info-section {
    gap: 20px;
  }
}
</style>
