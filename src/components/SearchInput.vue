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
  <div
    class="ya-site-form ya-site-form_inited_no search__form"
    data-bem='{"action":"https://em-55.ru/search","arrow":false,"bg":"transparent","fontsize":12,"fg":"#000000","language":"ru","logo":"rb","publicname":"Поиск по em-55.ru","suggest":true,"target":"_self","tld":"ru","type":2,"usebigdictionary":true,"searchid":12256391,"input_fg":"#000000","input_bg":"#ffffff","input_fontStyle":"normal","input_fontWeight":"bold","input_placeholder":"Поиск","input_placeholderColor":"#000000","input_borderColor":"#cc0066"}'
  >
    <q-form
      action="https://yandex.ru/search/site/"
      method="get"
      target="_self"
      accept-charset="utf-8"
      class="form"
    >
      <input type="hidden" name="searchid" value="12256391" /><input
        type="hidden"
        name="l10n"
        value="ru"
      />
      <input name="text" value="" type="search" class="search" />

      <button type="submit" class="search__button">
        <!-- <q-btn
        type="submit"
        color="accent"
        class="q-ml-sm"
        text-color="primary"
        unelevated
        label="Найти"
      /> -->

        <q-icon color="accent" size="sm" name="search" />
      </button>
    </q-form>
  </div>
</template>
<style scoped>
.search__form {
  display: flex;
  align-items: center;
  margin-right: -10px;
}
.search,
.search:focus,
.search:active {
  border: 1px solid var(--q-accent);
  background: transparent;
  border-radius: 4px;
  padding: 9px 17px 9px 13px;
  min-width: 250px;
  color: var(--color-white);
  height: 32px;
}
.search__button {
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  padding: 5px 10px;
  border-radius: 4px;
}
.ya-page_js_yes .ya-site-form_inited_no {
}
</style>
