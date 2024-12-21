<template>
  <section class="map__section">
    <div class="map__section-map">
      <div style="position: relative; overflow: hidden" class="map__frame">
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
          style="position: relative"
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
          <h5 class="advantage__title">ОФИС</h5>
          <span class="advantage__text">
            <strong>Режим работы:</strong><br />
            <span class="green__text">Пн-Пт: 8:00 - 18:00, </span>
            <span class="red__text">Сб-Вс: выходные</span></span
          >
          <div>
            <h6 class="advantage__text"><strong>Почтовый адрес:</strong></h6>
            <span class="advantage__text"
              >194223, г. Санкт-Петербург, проспект Тореза, д. 44, корп. 2, лит.
              А, п. 12Н</span
            >
          </div>
          <div>
            <h6 class="advantage__text"><strong>Фактический адрес:</strong></h6>
            <span class="advantage__text"
              >194223, г. Санкт-Петербург, проспект Тореза, д. 44, корп. 2, лит.
              А, п. 12Н</span
            >
          </div>
          <div>
            <h6 class="advantage__text"><strong>Юридический адрес:</strong></h6>
            <span class="advantage__text"
              >194223, г. Санкт-Петербург, проспект Тореза, д. 44, корп. 2, лит.
              А, п. 12Н</span
            >
          </div>
        </div>
        <div class="text__content-section">
          <h5 class="advantage__title">ПРОИЗВОДСТВО</h5>
          <span class="advantage__text"
            ><strong>Режим работы:</strong><br />
            <span class="green__text">Пн-Пт: 7:00 - 16:00, </span>
            <span class="red__text">Сб-Вс: выходные</span></span
          >
        </div>
        <div class="text__content-section">
          <h5 class="advantage__title">ПРОИЗВОДСТВЕННО-РЕМОНТНАЯ БАЗА</h5>
          <span class="advantage__text"
            ><strong>Режим работы:</strong><br />
            <span class="green__text">Пт-Сб: 7:00 - 17:00, </span>
            <span class="red__text">Вс: выходной</span></span
          >
        </div>
        <!-- <div class="contacts__section-info"> -->
        <!-- <div class="contacts__section-info-item">
            <span class="item">Режим работы:</span
            ><span>Пн-Пт: 8:00 - 18:00 Сб-Вс: выходные</span>
          </div>
        </div>
        <div class="contacts__section-info-item">
          <span class="item">Почтовый адрес: </span
          ><span class="value"
            >194223, г. Санкт-Петербург,проспект Тореза, д. 44, корп. 2, лит. А,
            п. 12Н</span
          >
        </div>
        <div class="contacts__section-info-item">
          <span class="item">Фактический адрес:</span
          ><span class="value"
            >194223,г. Санкт-Петербург, проспект Тореза, д. 44, корп. 2, лит. А,
            п. 12Н</span
          >
        </div>

        <div class="contacts__section-info-item">
          <span class="item">Юридический адрес: </span
          ><span class="value">
            194223, г. Санкт-Петербург,проспект Тореза, д. 44, корп. 2, лит. А,
            п. 12Н</span
          >
        </div>

        <div class="contacts__section-info-item">
          <span class="item">Производство: </span
          ><span class="value">
            197183, г. Санкт-Петербург, Полевая Сабировская ул, д. 46 литера К
          </span>
        </div>

        <div class="contacts__section-info-item">
          <span class="item">Производственно-ремонтная база: </span
          ><span class="value">
            188641, Ленинградская область, Всеволожский район, поселок
            Ковалево, производственная зона "Ковалево"
          </span>
        </div> -->
      </div>
      <button class="btn">Написать нам</button>
    </div>
  </section>
</template>

<style scoped>
.map__section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 650px;
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
  width: 60%;
  height: 100%;
}

.map__section-contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px;
  width: 40%;
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

.advantage__title {
  text-align: center;
}

.advantage__text {
  text-align: left;
}

.text__content {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}

.red__text {
  color: var(--q-primary);
  font-weight: 700;
}

.green__text {
  color: #488866;
  font-weight: 700;
}

.contacts__section-info {
  width: 100%;
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

.heading__four {
  font-family: Montserrat-bold, serif;
  font-size: 14px;
  color: black;
  line-height: 25px;
  text-align: center;
}

.heading__three {
  font-family: Montserrat-bold, serif;
  font-size: 18px;
  color: black;
  line-height: 25px;
  text-align: center;
}

@media screen and (min-width: 1440px) {
  .contacts__section-info-item span {
    font-size: 14px;
  }
  .item {
    width: 40%;
  }
  .value {
    width: 60%;
  }
}

@media screen and (min-width: 1600px) {
  .contacts__section-info-item span {
    font-size: 15px;
  }
}

@media screen and (max-width: 1200px) {
  .map__section-map {
    width: 35%;
  }
  .map__section-contacts {
    width: 65%;
  }
}

@media screen and (max-width: 975px) {
  .map__section {
    flex-direction: column-reverse;
    height: 900px;
  }

  .map__section-map {
    width: 100%;
  }
  .map__section-contacts {
    width: 100%;
  }
}
</style>
