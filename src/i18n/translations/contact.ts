import type { Language } from '../languages';

type ContactItem = {
  title: string;
  description: string;
};

type ContactTranslations = {
  label: string;
  heading: string;
  description: string;
  channels: ContactItem[];
};

export const contactTranslations: Record<Language, ContactTranslations> = {
  es: {
    label: 'Contacto',
    heading: 'Hablemos sobre STM Balance',
    description: 'STM Balance está abierto a la colaboración institucional, tecnológica y al desarrollo de nuevos proyectos.',
    channels: [
      {
        title: 'Colaboración institucional',
        description: 'Para instituciones públicas, organizaciones y operadores interesados en colaborar con STM Balance.',
      },
      {
        title: 'Integraciones tecnológicas',
        description: 'Para empresas y socios tecnológicos interesados en integraciones, datos, infraestructura o nuevas funcionalidades.',
      },
      {
        title: 'Pilotos y desarrollo',
        description: 'Para propuestas de proyectos piloto, pruebas en entornos reales y nuevas oportunidades de desarrollo.',
      },
    ],
  },

  pt: {
    label: 'Contato',
    heading: 'Vamos conversar sobre o STM Balance',
    description: 'STM Balance está aberto à colaboração institucional, tecnológica e ao desenvolvimento de novos projetos.',
    channels: [
      {
        title: 'Colaboração institucional',
        description: 'Para instituições públicas, organizações e operadores interessados em colaborar com o STM Balance.',
      },
      {
        title: 'Integrações tecnológicas',
        description: 'Para empresas e parceiros tecnológicos interessados em integrações, dados, infraestrutura ou novas funcionalidades.',
      },
      {
        title: 'Pilotos e desenvolvimento',
        description: 'Para propostas de projetos piloto, testes em ambientes reais e novas oportunidades de desenvolvimento.',
      },
    ],
  },

  en: {
    label: 'Contact',
    heading: 'Let’s talk about STM Balance',
    description: 'STM Balance is open to institutional and technology collaboration, as well as the development of new projects.',
    channels: [
      {
        title: 'Institutional collaboration',
        description: 'For public institutions, organizations and operators interested in collaborating with STM Balance.',
      },
      {
        title: 'Technology integrations',
        description: 'For companies and technology partners interested in integrations, data, infrastructure or new functionality.',
      },
      {
        title: 'Pilots and development',
        description: 'For pilot project proposals, real-world testing and new development opportunities.',
      },
    ],
  },

  ru: {
    label: 'Контакты',
    heading: 'Давайте поговорим о STM Balance',
    description: 'STM Balance открыт для институционального и технологического сотрудничества, а также развития новых проектов.',
    channels: [
      {
        title: 'Институциональное сотрудничество',
        description: 'Для государственных учреждений, организаций и операторов, заинтересованных в сотрудничестве со STM Balance.',
      },
      {
        title: 'Технологические интеграции',
        description: 'Для компаний и технологических партнёров, заинтересованных в интеграциях, данных, инфраструктуре и новых функциях.',
      },
      {
        title: 'Пилотные проекты и развитие',
        description: 'Для предложений по пилотным проектам, тестированию в реальных условиях и новым направлениям развития.',
      },
    ],
  },

  fr: {
    label: 'Contact',
    heading: 'Parlons de STM Balance',
    description: 'STM Balance est ouvert aux collaborations institutionnelles et technologiques ainsi qu’au développement de nouveaux projets.',
    channels: [
      {
        title: 'Collaboration institutionnelle',
        description: 'Pour les institutions publiques, les organisations et les opérateurs souhaitant collaborer avec STM Balance.',
      },
      {
        title: 'Intégrations technologiques',
        description: 'Pour les entreprises et partenaires technologiques intéressés par les intégrations, les données, l’infrastructure ou de nouvelles fonctionnalités.',
      },
      {
        title: 'Pilotes et développement',
        description: 'Pour les propositions de projets pilotes, les essais en conditions réelles et les nouvelles opportunités de développement.',
      },
    ],
  },

  de: {
    label: 'Kontakt',
    heading: 'Sprechen wir über STM Balance',
    description: 'STM Balance ist offen für institutionelle und technologische Zusammenarbeit sowie für die Entwicklung neuer Projekte.',
    channels: [
      {
        title: 'Institutionelle Zusammenarbeit',
        description: 'Für öffentliche Institutionen, Organisationen und Betreiber, die an einer Zusammenarbeit mit STM Balance interessiert sind.',
      },
      {
        title: 'Technologische Integrationen',
        description: 'Für Unternehmen und Technologiepartner mit Interesse an Integrationen, Daten, Infrastruktur oder neuen Funktionen.',
      },
      {
        title: 'Pilotprojekte und Entwicklung',
        description: 'Für Vorschläge zu Pilotprojekten, Tests unter realen Bedingungen und neue Entwicklungsmöglichkeiten.',
      },
    ],
  },
};
