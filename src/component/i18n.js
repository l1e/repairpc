import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // we init with resources
        resources: {
            ru: {
                translations: {
                    welcome: "Давайте сделаем мир лучше.",
                    menu_main: "Главная",
                    menu_serv: "Услуги",
                    menu_cont: "Контакты",
                    "Welcome to React": "Welcome to React and react-i18next"
                }
            },
            en: {
                translations: {


                    welcome: "Lets make world better.",
                    menu_main: "Main",
                    menu_serv: "Services",
                    menu_cont: "Contact",
                    "Welcome to React": "Welcome to React and react-i18next"
                }
            }
        },
        fallbackLng: "ru",
        debug: true,

        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
