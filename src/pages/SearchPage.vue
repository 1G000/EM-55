<script setup>
import UiSection from "../components/UiSection.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";

import BreadCrumbs from "src/components/BreadCrumbs.vue";

const sectionTitle = "Результаты поиска";
</script>
<script type="text/javascript">
(function (w, d, c) {
  var s = d.createElement("script"),
    h = d.getElementsByTagName("script")[0];
  s.type = "text/javascript";
  s.async = true;
  s.charset = "utf-8";
  s.src =
    (d.location.protocol === "https:" ? "https:" : "http:") +
    "//site.yandex.net/v2.0/js/all.js";
  h.parentNode.insertBefore(s, h);
  (w[c] || (w[c] = [])).push(function () {
    Ya.Site.Results.init();
  });
})(window, document, "yandex_site_callbacks");
</script>

<template>
  <UiSection
    class="content__wrapper"
    :padding="$q.screen.width > 768 ? '64px 40px 0 40px' : '32px 20px 0 20px'"
  >
    <BreadCrumbs :page-route="sectionTitle" />
    <UiSectionTitle tag="h1" :title-text="sectionTitle" />

    <div
      id="ya-site-results"
      data-bem='{"tld": "ru","language": "ru","encoding": "","htmlcss": "1.x","updatehash": true}'
    ></div>
  </UiSection>
</template>
<style scoped>
#ya-site-results {
  color: #000000;
  background: #ffffff;
}

#ya-site-results .b-pager__current,
#ya-site-results .b-serp-item__number {
  color: #000000 !important;
}

#ya-site-results :visited,
#ya-site-results .b-pager :visited,
#ya-site-results .b-foot__link:visited,
#ya-site-results .b-copyright__link:visited {
  color: var(--q-primary);
}

#ya-site-results a:link,
#ya-site-results a:active,
#ya-site-results .b-pseudo-link,
#ya-site-results .b-head-tabs__link,
#ya-site-results .b-head-tabs__link:link,
#ya-site-results .b-head-tabs__link:visited,
#ya-site-results .b-dropdown__list .b-pseudo-link,
#ya-site-results .b-dropdowna__switcher .b-pseudo-link,
.b-popupa .b-popupa__content .b-menu__item,
#ya-site-results .b-foot__link:link,
#ya-site-results .b-copyright__link:link,
#ya-site-results .b-serp-item__mime,
#ya-site-results .b-pager :link {
  color: #0d0e13;
}

#ya-site-results :link:hover,
#ya-site-results :visited:hover,
#ya-site-results .b-pseudo-link:hover {
  color: var(--q-accent) !important;
}

#ya-site-results .l-page,
#ya-site-results .b-bottom-wizard {
  font-size: 13px;
}

#ya-site-results .b-pager {
  font-size: 1.25em;
}

#ya-site-results .b-serp-item__text,
#ya-site-results .ad {
  font-style: normal;
  font-weight: normal;
}

#ya-site-results .b-serp-item__title-link,
#ya-site-results .ad .ad-link {
  font-style: normal;
  font-weight: normal;
}

#ya-site-results .ad .ad-link a {
  font-weight: bold;
}

#ya-site-results .b-serp-item__title,
#ya-site-results .ad .ad-link {
  font-size: 16px;
}

#ya-site-results .b-serp-item__title-link:link,
#ya-site-results .b-serp-item__title-link {
  font-size: 1em;
}

#ya-site-results .b-serp-item__number {
  font-size: 13px;
}

#ya-site-results .ad .ad-link a {
  font-size: 0.88em;
}

#ya-site-results .b-serp-url,
#ya-site-results .b-direct .url,
#ya-site-results .b-direct .url a:link,
#ya-site-results .b-direct .url a:visited {
  font-size: 13px;
  font-style: normal;
  font-weight: normal;
  color: #329932;
}

#ya-site-results .b-serp-item__links-link {
  font-size: 13px;
  font-style: normal;
  font-weight: normal;
  color: #000000 !important;
}

#ya-site-results .b-pager__inactive,
#ya-site-results .b-serp-item__from,
#ya-site-results .b-direct__head-link,
#ya-site-results .b-image__title,
#ya-site-results .b-video__title {
  color: #000000 !important;
}

#ya-site-results .b-pager__current,
#ya-site-results .b-pager__select {
  background: #e0e0e0;
}

#ya-site-results .b-foot,
#ya-site-results .b-line {
  border-top-color: #e0e0e0;
}

#ya-site-results .b-dropdown__popup .b-dropdown__list,
.b-popupa .b-popupa__content {
  background-color: #ffffff;
}

.b-popupa .b-popupa__tail {
  border-color: #e0e0e0 transparent;
}

.b-popupa .b-popupa__tail-i {
  border-color: #ffffff transparent;
}

.b-popupa_direction_left.b-popupa_theme_ffffff .b-popupa__tail-i,
.b-popupa_direction_right.b-popupa_theme_ffffff .b-popupa__tail-i {
  border-color: transparent #ffffff;
}

#ya-site-results .b-dropdowna__popup .b-menu_preset_vmenu .b-menu__separator {
  border-color: #e0e0e0;
}

.b-specification-list,
.b-specification-list .b-pseudo-link,
.b-specification-item__content label,
.b-specification-item__content .b-link,
.b-specification-list .b-specification-list__reset .b-link {
  color: #000000 !important;
  font-size: 13px;
  font-style: normal;
  font-weight: normal;
}

.b-specification-item__content .b-calendar__title {
  color: #000000;
  font-size: 13px;
  font-style: normal;
  font-weight: normal;
}

.b-specification-item__content .b-calendar-month__day_now_yes {
  color: #e0e0e0;
}

.b-specification-item__content .b-calendar .b-pseudo-link {
  color: #000000;
}

.b-specification-item__content {
  font-size: 13px;
}

.b-specification-item__content :visited {
  color: var(--q-primary);
}

.b-specification-item__content .b-pseudo-link:hover,
.b-specification-item__content :visited:hover {
  color: var(-q-primary) !important;
}

#ya-site-results .b-popupa .b-popupa__tail-i {
  background: #ffffff;
  border-color: #e0e0e0 !important;
}
</style>
