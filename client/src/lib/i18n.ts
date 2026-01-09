import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "services": "Services",
        "quote": "Quote",
        "gallery": "Gallery",
        "clients": "Clients"
      },
      "hero": {
        "title": "Industrial Solutions with",
        "subtitle": "Engineering and technology for your company's success",
        "cta": "Get a Quote"
      },
      "services": {
        "title": "REGREN PORTFOLIO - SERVICES",
        "maintenance": "Industrial Maintenance",
        "projects": "Industrial Projects",
        "customization": "Equipment Customization",
        "projects_title": "Projects - Regren",
        "maintenance_title": "Maintenance - Regren"
      }
    }
  },
  pt: {
    translation: {
      "nav": {
        "home": "Home",
        "services": "Serviços",
        "quote": "Orçamento",
        "gallery": "Vídeos e Fotos",
        "clients": "Clientes - Parceiros"
      },
      "hero": {
        "title": "Soluções Industriais com",
        "subtitle": "Engenharia e tecnologia para o sucesso da sua empresa",
        "cta": "Solicitar Orçamento"
      },
      "services": {
        "title": "PORTFÓLIO REGREN - SERVIÇOS",
        "maintenance": "Manutenção Industrial",
        "projects": "Projetos Industriais",
        "customization": "Customização de Equipamentos",
        "projects_title": "Projetos - Regren",
        "maintenance_title": "Manutenção - Regren"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
