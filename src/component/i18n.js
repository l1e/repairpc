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
                    welcome_title: "Давайте сделаем мир лучше.",
                    welcome_desc: 'Механические повреждения, удары, падения, залитие водой, неправильная эксплуатация и установка непроверенного и не надежного программного обеспечения негативно воздействует на телефон независимо от модели и года выпуска. В этих случаях ремонт телефона неизбежен и необходим.',
                    menu_main: "Главная",
                    menu_serv: "Услуги",
                    menu_about: "О нас",
                    menu_cont: "Контакты",
                    contact_title:'Свяжитесь с нами',
                    contact_desc: 'Мы выполняем полный спектр услуг в области ремонта смартфонов в Киеве. Проводим детальную диагностику устройства, выявляем поломку и ее степень и консультируем клиента.',
                    contact_label_email:'Почта',
                    contact_label_phone:'Номер телефона',
                    contact_placeholder_email:'Введите емейл',
                    contact_placeholder_phone:'Ваш номер телефона',
                    contact_submit:'Отправить',
                    contact_error_email_required: "Почтовый адрес является обязательным",
                    contact_error_email_minlenght: "Минимальное количество символов 5",
                    contact_error_email_maxlenght: "Максимальное количество символов 20",
                    contact_error_phone_required: "Номер телефона явлыется обязательным",
                    contact_error_phone_minlenght: "Минимальное количество символов 10",
                    contact_error_phone_maxlenght: "Максимальное количество символов 13",
                    services_title: "Наши услуги",
                    services_detailed:"Подробнее",
                    about_title:"О нас"

                }
            },
            en: {
                translations: {


                    welcome_title: "Lets make world better.",
                    welcome_desc: 'Mechanical damage, shocks, falls, flooding, improper use and installation of unverified and unreliable software negatively affects the phone, regardless of model and year of manufacture. In these cases, phone repair is inevitable and necessary.',
                    menu_main: "Main",
                    menu_serv: "Services",
                    menu_about: "About",
                    menu_cont: "Contact",
                    contact_title:'Contact us',
                    contact_desc:'We perform a full range of services in the field of smartphone repair in Kiev. We carry out a detailed diagnosis of the device, identify the failure and its degree, and advise the client.',
                    contact_label_email:'Email',
                    contact_label_phone:'Prone number',
                    contact_placeholder_email:'Enter email',
                    contact_placeholder_phone:'Your phone number',
                    contact_submit:'Send',
                    contact_error_email_required: "Email is required",
                    contact_error_email_minlenght: "The minimum number of characters is 5",
                    contact_error_email_maxlenght: "The maximum number of characters is 30",
                    contact_error_phone_required: "Phone is required",
                    contact_error_phone_minlenght: "The minimum number of characters is 10",
                    contact_error_phone_maxlenght: "The maximum number of characters is 13",
                    services_title: "Our Services",
                    services_detailed:"Read more",
                    about_title:"About us"
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
