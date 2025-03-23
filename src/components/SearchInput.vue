<script></script>

<template>
  <div
    v-if="$q.screen.width > 768"
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
  <div
    v-else
    class="ya-site-form ya-site-form_inited_no"
    data-bem='{"action":"http://em-55.ru/search","arrow":false,"bg":"#ffffff","fontsize":14,"fg":"#000000","language":"ru","logo":"rb","publicname":"Поиск по em-55.ru","suggest":true,"target":"_self","tld":"ru","type":2,"usebigdictionary":true,"searchid":12256391,"input_fg":"#000000","input_bg":"#ffffff","input_fontStyle":"normal","input_fontWeight":"normal","input_placeholder":"Введите запрос","input_placeholderColor":"#cccccc","input_borderColor":"#e5c696"}'
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
