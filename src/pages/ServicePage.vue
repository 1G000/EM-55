<script setup>
import UiSection from "src/components/UiSection.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";
import BreadCrumbs from "src/components/BreadCrumbs.vue";
import serviceImg1 from "../assets/service-small.jpg";
import JoinTeam from "src/components/JoinTeam.vue";

const sectionTitle = "Сервис";
</script>

<template>
  <UiSection
    class="content__wrapper"
    :padding="$q.screen.width > 768 ? '64px 40px 0 40px' : '32px 20px 0 20px'"
  >
    <BreadCrumbs :page-route="sectionTitle" />
    <UiSectionTitle tag="h1" :title-text="sectionTitle" />
    <div class="content_container">
      <div class="content__left">
        <q-card class="q-mb no-border">
          <q-card-section class="card_section">
            <div class="text-h5">Техническое и сервисное обслуживание</div>
            <p>
              Компания на своей производственной базе занимается техническим и
              сервисным обслуживанием, в том числе:
            </p>
            <q-list>
              <q-item>
                <q-item-section avatar>
                  <q-icon name="mdi-magnify" color="primary" />
                </q-item-section>
                <q-item-section
                  >Аудит и диагностика неисправного оборудования</q-item-section
                >
              </q-item>
              <q-item>
                <q-item-section avatar>
                  <q-icon name="mdi-wrench" color="primary" />
                </q-item-section>
                <q-item-section>Устранение недостатков</q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar>
                  <q-icon name="mdi-file-document-edit" color="primary" />
                </q-item-section>
                <q-item-section
                  >Внесение изменений в документацию</q-item-section
                >
              </q-item>
              <q-item>
                <q-item-section avatar>
                  <q-icon name="mdi-hammer-wrench" color="primary" />
                </q-item-section>
                <q-item-section
                  >Ремонт и модернизация действующих
                  электроустановок</q-item-section
                >
              </q-item>
            </q-list>
            <a class="download__link" href="./service.pdf"
              ><p>
                Письмо о сервисном центре
                ООО&nbsp;«Электромонтаж&nbsp;55»&nbsp;<q-icon
                  color="gray"
                  name="download"
                  class="download_ico"
                ></q-icon>
              </p>
            </a>
          </q-card-section>
        </q-card>

        <q-card class="q-md quote">
          <q-card-section>
            <div class="text-h6">Наши цели</div>
            <p>
              ООО «Электромонтаж 55» является предприятием, специализирующимся
              на полном комплексе работ по электроснабжению потребителей:
              проектировании, разработке, изготовлении, поставке, монтажу и
              наладке электрощитового оборудования любой сложности. В своей
              работе мы нацелены на максимальное обеспечение своих заказчиков
              современным, высококачественным и энергосберегающим оборудованием.
            </p>
          </q-card-section>
        </q-card>
      </div>
      <div class="content__right">
        <q-card class="q-mb-md quote">
          <q-card-section>
            <div class="text-h6">Наше развитие</div>
            <p>
              Мы постоянно развиваем наше предприятие, работаем над повышением
              эффективности производственных процессов, создаем все условия по
              осуществлению гарантийного и постгарантийного обслуживания.
            </p>
          </q-card-section>
        </q-card>
        <img :src="serviceImg1" class="service-image" />
      </div>
    </div>
    <JoinTeam
      title="Контакт для связи"
      name="Роман Александрович"
      jobTitle=" Начальник производства"
      phoneNumber="+7-911-724-50-02"
      phone="+79117245002"
      mail="production@em-55.com"
    />
  </UiSection>
</template>

<style scoped>
.content_container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: stretch;
}

.quote {
  display: flex;
  align-items: center;
  background-color: var(--background-light-accent);
  font-family: Montserrat-regular, serif;
  font-size: 18px;
  box-shadow: none;
  text-align: justify;
}

.content__left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  font-family: Montserrat-regular, serif;
  font-size: 20px;
  padding: 0px;
}

.no-border {
  box-shadow: none;
}

.card_section {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0;
  height: 100%;
}

.content__left .text-h5 {
  text-align: center;
  font-size: 24px;
  font-family: Montserrat-bold, serif;
}

.content__right {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.service-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.q-card {
  border-radius: 8px;
  height: 100%;
}

.text {
  color: black;
  font-family: Montserrat-regular, serif;
  font-size: 20px;
  text-align: justify;
}

.download__link {
  align-self: center;
  color: black;
  font-family: Montserrat-bold, serif;
  text-transform: uppercase;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.download__link p {
  text-align: center;
}

.download_ico {
  margin-left: 10px;
}

@media (hover: hover) {
  .download__link:hover {
    color: var(--q-primary);
  }
}

@media screen and (max-width: 880px) {
  .content_container {
    flex-direction: column;
  }

  .service-image {
    order: -1;
  }
}
</style>
