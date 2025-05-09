import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationDE from './de/translationDE.json'
import translationEN from './en/translationEN.json'


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'de',
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
        resources: {
            en: {
                translation: translationEN
            },
            de: {
                translation: translationDE
            }
        }
    })

export default i18n;