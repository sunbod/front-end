import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from './local/en.json'
import cnJSON from './local/cn.json'
i18n.use(initReactI18next).init({
  resources: {
    en: { ...enJSON },
    cn: { ...cnJSON },
  },
  lng: "en",
});