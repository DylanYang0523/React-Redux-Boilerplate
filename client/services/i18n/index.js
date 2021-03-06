import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// import { reactI18nextModule } from 'react-i18next';

i18n
    .use(Backend)
    .use(LanguageDetector)
    // .use(reactI18nextModule) // If you are not using I18nextProvider
    .init({
        load: 'unspecific',
        preload: ['en', 'zh'],
        fallbackLng: 'en',

        // A common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',

        debug: true,

        interpolation: {
            escapeValue: false,
        },

        react: {
            wait: true,
        },
    });


export default i18n;
