import type { Language } from '../languages';

type CompanyItem = {
  title: string;
  description: string;
};

type CompanyTranslations = {
  label: string;
  heading: string;
  description: string;
  details: CompanyItem[];
};

export const companyTranslations: Record<Language, CompanyTranslations> = {
  es: {
    label: 'Empresa',
    heading: 'Platforma SAS',
    description: 'STM Balance es un producto desarrollado por Platforma SAS, una empresa uruguaya de tecnología enfocada en soluciones digitales y movilidad urbana.',
    details: [
      {
        title: 'Empresa uruguaya',
        description: 'Platforma SAS es una empresa tecnológica constituida en Uruguay.',
      },
      {
        title: 'STM Balance',
        description: 'STM Balance es uno de los productos desarrollados por Platforma SAS para crear nuevas soluciones digitales de movilidad.',
      },
      {
        title: 'Enfoque tecnológico',
        description: 'La empresa trabaja en soluciones digitales, aplicaciones móviles, infraestructura tecnológica y servicios orientados a la movilidad urbana.',
      },
      {
        title: 'Desarrollo y alianzas',
        description: 'Platforma SAS impulsa el desarrollo de STM Balance y busca construir integraciones y alianzas con instituciones, operadores y socios tecnológicos.',
      },
    ],
  },

  pt: {
    label: 'Empresa',
    heading: 'Platforma SAS',
    description: 'STM Balance é um produto desenvolvido pela Platforma SAS, uma empresa uruguaia de tecnologia focada em soluções digitais e mobilidade urbana.',
    details: [
      {
        title: 'Empresa uruguaia',
        description: 'Platforma SAS é uma empresa de tecnologia constituída no Uruguai.',
      },
      {
        title: 'STM Balance',
        description: 'STM Balance é um dos produtos desenvolvidos pela Platforma SAS para criar novas soluções digitais de mobilidade.',
      },
      {
        title: 'Foco tecnológico',
        description: 'A empresa trabalha com soluções digitais, aplicativos móveis, infraestrutura tecnológica e serviços voltados à mobilidade urbana.',
      },
      {
        title: 'Desenvolvimento e parcerias',
        description: 'Platforma SAS impulsiona o desenvolvimento do STM Balance e busca construir integrações e parcerias com instituições, operadores e parceiros tecnológicos.',
      },
    ],
  },

  en: {
    label: 'Company',
    heading: 'Platforma SAS',
    description: 'STM Balance is a product developed by Platforma SAS, a Uruguayan technology company focused on digital solutions and urban mobility.',
    details: [
      {
        title: 'Uruguayan company',
        description: 'Platforma SAS is a technology company incorporated in Uruguay.',
      },
      {
        title: 'STM Balance',
        description: 'STM Balance is one of the products developed by Platforma SAS to create new digital mobility solutions.',
      },
      {
        title: 'Technology focus',
        description: 'The company works on digital solutions, mobile applications, technology infrastructure and services focused on urban mobility.',
      },
      {
        title: 'Development and partnerships',
        description: 'Platforma SAS drives the development of STM Balance and seeks to build integrations and partnerships with institutions, operators and technology partners.',
      },
    ],
  },

  ru: {
    label: 'Компания',
    heading: 'Platforma SAS',
    description: 'STM Balance — продукт компании Platforma SAS, уругвайской технологической компании, специализирующейся на цифровых решениях и городской мобильности.',
    details: [
      {
        title: 'Уругвайская компания',
        description: 'Platforma SAS — технологическая компания, зарегистрированная в Уругвае.',
      },
      {
        title: 'STM Balance',
        description: 'STM Balance — один из продуктов Platforma SAS, создаваемый для развития новых цифровых решений в сфере городской мобильности.',
      },
      {
        title: 'Технологическое направление',
        description: 'Компания работает над цифровыми решениями, мобильными приложениями, технологической инфраструктурой и сервисами для городской мобильности.',
      },
      {
        title: 'Развитие и партнёрства',
        description: 'Platforma SAS развивает STM Balance и стремится создавать интеграции и партнёрства с учреждениями, транспортными операторами и технологическими компаниями.',
      },
    ],
  },

  fr: {
    label: 'Entreprise',
    heading: 'Platforma SAS',
    description: 'STM Balance est un produit développé par Platforma SAS, une entreprise technologique uruguayenne spécialisée dans les solutions numériques et la mobilité urbaine.',
    details: [
      {
        title: 'Entreprise uruguayenne',
        description: 'Platforma SAS est une entreprise technologique constituée en Uruguay.',
      },
      {
        title: 'STM Balance',
        description: 'STM Balance est l’un des produits développés par Platforma SAS afin de créer de nouvelles solutions numériques de mobilité.',
      },
      {
        title: 'Orientation technologique',
        description: 'L’entreprise travaille sur des solutions numériques, des applications mobiles, des infrastructures technologiques et des services dédiés à la mobilité urbaine.',
      },
      {
        title: 'Développement et partenariats',
        description: 'Platforma SAS développe STM Balance et cherche à créer des intégrations et des partenariats avec des institutions, des opérateurs et des partenaires technologiques.',
      },
    ],
  },

  de: {
    label: 'Unternehmen',
    heading: 'Platforma SAS',
    description: 'STM Balance ist ein Produkt von Platforma SAS, einem uruguayischen Technologieunternehmen mit Schwerpunkt auf digitalen Lösungen und urbaner Mobilität.',
    details: [
      {
        title: 'Uruguayisches Unternehmen',
        description: 'Platforma SAS ist ein in Uruguay gegründetes Technologieunternehmen.',
      },
      {
        title: 'STM Balance',
        description: 'STM Balance ist eines der von Platforma SAS entwickelten Produkte zur Schaffung neuer digitaler Mobilitätslösungen.',
      },
      {
        title: 'Technologischer Schwerpunkt',
        description: 'Das Unternehmen arbeitet an digitalen Lösungen, mobilen Anwendungen, technologischer Infrastruktur und Dienstleistungen für urbane Mobilität.',
      },
      {
        title: 'Entwicklung und Partnerschaften',
        description: 'Platforma SAS treibt die Entwicklung von STM Balance voran und strebt Integrationen und Partnerschaften mit Institutionen, Verkehrsunternehmen und Technologiepartnern an.',
      },
    ],
  },
};
