import { useTranslation } from 'react-i18next';

export default function useLanguage() {
    const { t, i18n } = useTranslation()

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    return {
        t, 
        language: i18n.language,
        changeLanguage
    }
}