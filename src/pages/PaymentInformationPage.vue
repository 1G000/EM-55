<script setup>
import UiSection from "src/components/UiSection.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";
import PaymentInfoItem from "src/components/PaymentInfoItem.vue";

const sectionTitle = "Реквизиты организации";

const paymentInfoData = [
  [
    {
      label: "Полное наименование",
      value: "Общество с ограниченной ответственностью «ЭЛЕКТРОМОНТАЖ 55»",
    },
    { label: "Сокращенное наименование", value: 'ООО "ЭМ55"' },
    {
      label: "Юридический адрес",
      value:
        "194223, город Санкт-Петербург,  проспект Тореза, д. 44, корп. 2, лит. А, п. 12Н, каб. 3,4",
    },
    {
      label: "Почтовый адрес",
      value:
        "194223, город Санкт-Петербург,  проспект Тореза, д. 44, корп. 2, лит. А, п. 12Н, каб. 3,4",
    },
    { label: "Телефон/факс", value: "(812) 294-20-13" },
    { label: "Электронная почта", value: "referent@em-55.com" },
    { label: "Сайт", value: "www.em-55.com" },
    { label: "ИНН", value: "7810645458" },
    { label: "КПП", value: "780201001" },
    { label: "ОГРН", value: "1027802505620" },
    { label: "ОКПО", value: "35489463" },
    { label: "ОКАТО", value: "40265000000" },
    { label: "ОКВЭД", value: "27.12" },
    {
      label: "Расчетный счет",
      value:
        "40702810255080132800 в Северо-Западном банке Сбербанка РФ г. Санкт-Петербурга, доп. офис № 9055/0783",
    },
    { label: "Корреспондентский счет", value: "30101810500000000653" },
    { label: "БИК", value: "044030653" },
  ],
];
</script>

<template>
  <UiSection
    class="content__wrapper"
    :padding="$q.screen.width > 768 ? '64px 40px 0 40px' : '32px 20px 0 20px'"
  >
    <UiSectionTitle :title-text="sectionTitle" />

    <div
      v-for="items in paymentInfoData"
      :key="items"
      class="payment__info-section"
    >
      <PaymentInfoItem
        v-for="(item, index) in items"
        :key="index"
        :label="item.label"
        :value="item.value"
      />
    </div>
    <a class="download__link" href="./paymentinfo.docx"
      ><span>Скачать реквизиты</span
      ><q-icon color="gray" name="download"></q-icon
    ></a>
  </UiSection>
</template>

<style scoped>
.payment__info-section {
  display: flex;
  flex-direction: column;
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
