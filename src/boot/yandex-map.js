import { createYmaps } from 'vue-yandex-maps';

export default ({ app }) => {

  app.use(createYmaps({
    apikey: '709bdf93-1da3-4830-b52c-513f048ec1f5',
    lang: "ru_RU"
  }));
};