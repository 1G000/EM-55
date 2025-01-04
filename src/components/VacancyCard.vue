<script setup>
import { ref } from "vue";
const expanded = ref(false);
</script>

<template>
  <q-card class="my-card" flat bordered>
    <q-card-section>
      <h3>Инженер-сметчик</h3>
      <span
        >На постоянную работу в офис требуется инженер сметно-договорного отдела
        (наружные сети электроснабжения, монтаж оборудования, строительство
        сетевых сооружений, ПИР, изыскания) знание А0.Высшее образование.</span
      >
      <q-card-actions>
        <span>от 85 000 рублей на руки</span>
        <q-space></q-space>
        <q-btn
          color="primary"
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        >
          <span>{{ expanded ? "Скрыть" : "Подробнее" }}</span>
        </q-btn>
      </q-card-actions>
    </q-card-section>

    <q-slide-transition>
      <div v-show="expanded">
        <q-separator></q-separator>

        <q-card-section>
          <div class="text-h5 text-orange-9 q-mt-sm q-mb-xs">Обязанности</div>
          <ul>
            <li>Составление смет (ЛС,ССР)</li>
            <li>Составление, согласование договоров</li>
            <li>
              подсчет объемов работ и материалов для составления и/или проверки
              смет
            </li>
            <li>Согласование смет и замечаний по ним у Заказчика/Подрядчика</li>
            <li>Ведение накопительных ведомостей, расчет единичных расценок</li>
            <li>Формирование, подписание выполнений (КС2,КС3, П1)</li>
          </ul>
          <div class="text-h5 text-orange-9 q-mt-sm q-mb-xs">Требования</div>
          <ul>
            <li>Высшее образование</li>
            <li>Умение работы в ГРАНД-Смета SmetaWIZARD, А0</li>
            <li>
              Знание сметно-нормативных баз ТЕР-2001, ГОСЭТАЛОН2012, ФЕР, ТСНБ
              ЛО
            </li>
            <li>Опыт работы более 1 года</li>
            <li>
              Опыт работы в сфере электроснабжения/электрообеспечения
              приветствуется
            </li>
            <li>
              Ответственность, коммуникабельность, исполнительность, серьезный
              подход к работе
            </li>
          </ul>

          <div class="text-h5 text-orange-9 q-mt-sm q-mb-xs">Условия</div>
          <ul>
            <li>
              Работа на территории работодателя (офис) ст. м. пл. Мужества
            </li>
            <li>Оформление по ТК РФ</li>
            <li>График работы 5/2 с 9-18 или с 8-17 (суб, воск выходной)</li>
            <li>Карьерный рост</li>
            <li>
              Оклад и занимаемая должность устанавливается по результатам
              собеседования на основании оценки фактических навыков и знаний.
            </li>
          </ul>
        </q-card-section>
      </div>
    </q-slide-transition>
  </q-card>
</template>

<style scoped>
.my-card {
  border-radius: 8px;
  border-color: var(--q-primary);
}
</style>
