<script setup>
import UiSection from "./UiSection.vue";
import UiSectionTitle from "./UiSectionTitle.vue";
const sectionTitle = "Контакты";
</script>

<template>
  <UiSection :padding="`64px 0px`" class="map__section">
    <UiSectionTitle :title-text="sectionTitle" />
    <div class="map__content-wrapper">
      <div class="map__section-map">
        <div
          style="position: relative; overflow: hidden; border-radius: 8px"
          class="map__frame"
        >
          <a
            href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps"
            style="color: #eee; font-size: 12px; position: absolute; top: 0px"
            >Санкт‑Петербург</a
          ><a
            href="https://yandex.ru/maps/2/saint-petersburg/house/prospekt_toreza_44k2/Z0kYdQNnSEMCQFhqfXxxeXhqYQ==/?ll=30.347165%2C60.008496&utm_medium=mapframe&utm_source=maps&z=17.05"
            style="color: #eee; font-size: 12px; position: absolute; top: 14px"
            >Проспект Тореза, 44к2 — Яндекс Карты</a
          ><iframe
            src="https://yandex.ru/map-widget/v1/?ll=30.347165%2C60.008496&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzQ0NDUwORJR0KDQvtGB0YHQuNGPLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0L_RgNC-0YHQv9C10LrRgiDQotC-0YDQtdC30LAsIDQ00LoyIgoN_8byQRWzCHBC&z=17.05"
            allowfullscreen="true"
            style="border-radius: 8px; width: 100%; height: 675px"
            :style="$q.screen.width > 1160 ? 'height: 675px' : 'height: 500px'"
            class="map__frame--frame"
          ></iframe>
        </div>
      </div>
      <div class="map__section-contacts">
        <div class="text__content">
          <div>
            <h4 class="heading__four">
              Общество с ограниченной ответственностью
            </h4>
            <h3 class="heading__three">"ЭЛЕКТРОМОНТАЖ 55"</h3>
          </div>
          <div class="text__content-section">
            <h5 class="heading__five">ОФИС</h5>
            <div>
              <h6 class="heading__six">Режим работы:</h6>
              <p class="green__text">
                Пн-Пт: 8:00 - 18:00,
                <span class="red__text">Сб-Вс: выходные</span>
              </p>
            </div>
            <div>
              <h6 class="heading__six">
                Почтовый, фактический, юридический адреса:
              </h6>
              <a
                class="contact__text"
                :href="`https://yandex.ru/maps/?mode=search&text=${encodeURIComponent(
                  '194223, г. СПб, проспект Тореза, д. 44, корп. 2, лит. А, п. 12Н'
                )}`"
                target="_blank"
                rel="noopener noreferrer"
              >
                194223, г. СПб, проспект Тореза, д. 44, корп. 2, лит. А, п. 12Н
              </a>
            </div>
          </div>
          <div class="text__content-section">
            <h5 class="heading__five">Завод «ЭЛЕКТРОМОНТАЖ 55»</h5>
            <div>
              <h6 class="heading__six">Режим работы:</h6>
              <p class="green__text">
                Пн-Пт: 7:00 - 16:00,
                <span class="red__text">Сб-Вс: выходные</span>
              </p>
            </div>
            <div>
              <h5 class="heading__six">Адрес:</h5>

              <a
                class="contact__text"
                :href="`https://yandex.ru/maps/?mode=search&text=${encodeURIComponent(
                  '197183, г. СПб, Полевая Сабировская ул, д. 46 литера К'
                )}`"
                target="_blank"
                rel="noopener noreferrer"
                >197183, г. СПб, Полевая Сабировская ул, д. 46 литера К</a
              >
            </div>
          </div>
          <div class="text__content-section">
            <h5 class="heading__five">ПРОИЗВОДСТВЕННО-РЕМОНТНАЯ БАЗА</h5>
            <div>
              <h6 class="heading__six">Режим работы:</h6>
              <p class="green__text">
                Пт-Сб: 7:00 - 17:00,
                <span class="red__text">Вс: выходной</span>
              </p>
            </div>
            <div>
              <h5 class="heading__six">Адрес:</h5>

              <a
                class="contact__text"
                :href="`https://yandex.ru/maps/?mode=search&text=${encodeURIComponent(
                  'Поперечная улица, 15, посёлок Ковалёво, Всеволожское городское поселение, Ленинградская область, 188641'
                )}`"
                target="_blank"
                rel="noopener noreferrer"
                >поселок Ковалево, производственная зона «Ковалево»</a
              >
            </div>
          </div>
        </div>
        <div class="contact__button-wrapper">
          <q-btn
            unelevated
            style="width: 350px"
            class="contact__button"
            color="primary"
            :to="{ path: '/', hash: '#form' }"
          >
            Написать нам
          </q-btn>
        </div>
      </div>
    </div>
  </UiSection>
</template>

<style scoped>
.map__section {
  display: flex;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
}
.map__content-wrapper {
  display: flex;
  align-items: center;
  gap: 60px;
}
.map__frame {
  width: 100%;
  height: 100%;
}

.map__frame--frame {
  width: 100%;
  height: 100%;
  border: none;
}

.map__section-map {
  display: flex;
  width: 55%;
  height: 100%;
}

.map__section-contacts {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0 60px;
  height: 100%;
  border-radius: 8px;
  background-color: var(--q-light);
}

.text__content-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
}

.text__content {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
.red__text,
.green__text {
  font-family: Montserrat-regular, serif;
  font-size: clamp(1rem, 2vw, 1.1rem);
  font-weight: 700;
  line-height: 25px;
}
.red__text {
  color: var(--q-primary);
}

.green__text {
  color: #488866;
}

.contacts__section-info {
  width: 100%;
}

.contact__text {
  font-family: Montserrat-regular, serif;
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: var(--color-black);
  line-height: 25px;
}

.contact__text:visited,
.contact__text:active {
  color: var(--color-black);
}

@media (hover: hover) {
  .contact__text:hover {
    cursor: pointer;
    color: var(--q-primary);
  }
}

.heading__three,
.heading__five,
.heading__four,
.heading__six {
  font-family: Montserrat-bold, serif;
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: var(--color-black);
  line-height: 25px;
}
.heading__three,
.heading__five {
  font-size: clamp(1rem, 2vw, 1.2rem);
}

.heading__three,
.heading__four {
  text-align: center;
}
.heading__five {
  margin-bottom: 10px;
  text-align: center;
}
.contacts__section-info-item {
  display: flex;
  width: 100%;
}

.contacts__section-info-item span {
  font-family: Montserrat-regular, serif;
  font-size: 12px;
  color: black;
}

.value {
  width: 65%;
}

.item {
  width: 35%;
}
.contact__button-wrapper {
  display: flex;
  justify-content: center;
}
.contact__button {
  width: 350px;
  height: 60px;
  text-transform: none;
  border-radius: 8px;
  font-family: Montserrat-bold, serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 21.6px;
  transition: 0.3s linear;
}
.contact__button:hover {
  color: var(--q-accent) !important;
}
@media screen and (max-width: 1620px) {
  .map__section-map {
    width: 50%;
  }

  .map__section-contacts {
    width: 50%;
    padding: 0px;
  }
}

@media screen and (max-width: 1160px) {
  .map__content-wrapper {
    flex-direction: column-reverse;
  }

  .map__section-map {
    width: 100%;
  }
  .map__section-contacts {
    width: 100%;
  }
}
</style>
