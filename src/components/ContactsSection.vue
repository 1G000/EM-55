<template>
  <section class="map__section">
    <div class="map__section-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.1851661259207!2d30.342718001617087!3d60.008640053885614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469633866903012f%3A0x723b17e919be136!2z0L_RgC4g0KLQvtGA0LXQt9CwLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywgMTk0MjIz!5e0!3m2!1sru!2sru!4v1734634330661!5m2!1sru!2sru"
        style="border: 0; border-radius: 8px; width: 100%; height: 100%"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div class="map__section-contacts">
      <div class="text__content">
        <h4 class="heading__four">Общество с ограниченной ответственностью</h4>
        <h3 class="heading__three">"ЭЛЕКТРОМОНТАЖ 55"</h3>
        <div class="contacts__section-info">
          <div class="contacts__section-info-item">
            <span class="item">Режим работы:</span
            ><span>Пн-Пт: 8:00 - 17:00 Сб-Вс: выходные</span>
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
            194156, г. Санкт-Петербург, пр. Энгельса, д.27 л. З, оф. 403</span
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
        </div>
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
  height: 450px;
}

.map__section-map {
  display: flex;
  width: 55%;
  height: 100%;
}

.map__section-contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 45%;
  height: 100%;
  border-radius: 8px;
  background-color: #d4ab6d1a;
}

.contact__section {
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  width: 100%;
  align-items: center;
  gap: 10px;
}

.text__content {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
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
}

.heading__three {
  font-family: Montserrat-bold, serif;
  font-size: 18px;
  color: black;
  line-height: 25px;
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
</style>
