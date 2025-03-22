<script type="text/javascript">
(function (w, d, c) {
  var s = d.createElement("script"),
    h = d.getElementsByTagName("script")[0],
    e = d.documentElement;
  if ((" " + e.className + " ").indexOf(" ya-page_js_yes ") === -1) {
    e.className += " ya-page_js_yes";
  }
  s.type = "text/javascript";
  s.async = true;
  s.charset = "utf-8";
  s.src =
    (d.location.protocol === "https:" ? "https:" : "http:") +
    "//site.yandex.net/v2.0/js/all.js";
  h.parentNode.insertBefore(s, h);
  (w[c] || (w[c] = [])).push(function () {
    Ya.Site.Form.init();
    const interval = setInterval(() => {
      const searchInput = document.querySelector(".ya-site-form__input-text");
      const searchButton = document.querySelector(".ya-site-form__submit");
      if (searchInput) {
        clearInterval(interval);

        searchInput.style.backgroundColor = "#830024";
        // searchInput.style.border = "1px solid #e5c696";
        searchInput.style.borderRadius = "5px";
        searchInput.style.padding = "4px 4px";
        searchInput.style.fontSize = "16px";
        searchButton.style.backgroundColor = "#e5c696";
        searchButton.style.borderRadius = "4px";
        searchButton.style.border = "none";
        searchButton.style.color = "#e5c696 !important";
        searchButton.style.padding = "5px 10px";
        searchButton.style.marginLeft = "10px";
        searchButton.style.cursor = "pointer";
      }
    }, 100);
  });
})(window, document, "yandex_site_callbacks");
</script>

<template>
  <div
    class="ya-site-form ya-site-form_inited_no"
    data-bem='{"action":"http://em-55.ru/search","arrow":false,"bg":"#830024","fontsize":14,"fg":"#000000","language":"ru","logo":"rb","publicname":"Поиск по em-55.ru","suggest":true,"target":"_self","tld":"ru","type":2,"usebigdictionary":true,"searchid":12256391,"input_fg":"#000000","input_bg":"#ffffff","input_fontStyle":"normal","input_fontWeight":"normal","input_placeholder":"Введите запрос","input_placeholderColor":"#0000005e","input_borderColor":"#e5c696"}'
  >
    <form
      action="https://yandex.ru/search/site/"
      method="get"
      target="_self"
      accept-charset="utf-8"
    >
      <input type="hidden" name="searchid" value="12256391" /><input
        type="hidden"
        name="l10n"
        value="ru"
      /><input type="hidden" name="reqenc" value="" /><input
        type="search"
        name="text"
        value=""
      /><input type="submit" value="Найти" />
    </form>
  </div>
</template>
<style scoped></style>
