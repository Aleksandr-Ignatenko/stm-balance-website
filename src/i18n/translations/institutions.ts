import type { Language } from '../languages';

type InstitutionItem = {
  title: string;
  description: string;
};

type InstitutionsTranslations = {
  label: string;
  heading: string;
  description: string;
  directions: InstitutionItem[];
};

export const institutionsTranslations: Record<Language, InstitutionsTranslations> = {
  es: {
    label: 'Instituciones',
    heading: 'Colaboración para desarrollar la movilidad del futuro',
    description: 'STM Balance busca colaborar con instituciones públicas, operadores de transporte y organizaciones del ecosistema de movilidad para impulsar nuevas soluciones digitales para los usuarios.',
    directions: [
      {
        title: 'Instituciones públicas',
        description: 'Colaboración con organismos públicos vinculados al transporte, la movilidad urbana y los servicios para la ciudadanía.',
      },
      {
        title: 'Operadores de transporte',
        description: 'Integración con empresas y operadores responsables de los servicios de transporte público.',
      },
      {
        title: 'Socios tecnológicos',
        description: 'Cooperación con empresas tecnológicas y proveedores de soluciones que puedan complementar la plataforma STM Balance.',
      },
      {
        title: 'Programas de apoyo y aceleradoras',
        description: 'Participación en programas de innovación, aceleración y apoyo al desarrollo de empresas tecnológicas.',
      },
      {
        title: 'Pilotos e integraciones',
        description: 'Desarrollo de proyectos piloto e integraciones que permitan validar nuevas funcionalidades en entornos reales.',
      },
    ],
  },

  pt: {
    label: 'Instituições',
    heading: 'Colaboração para desenvolver a mobilidade do futuro',
    description: 'STM Balance busca colaborar com instituições públicas, operadores de transporte e organizações do ecossistema de mobilidade para impulsionar novas soluções digitais para os usuários.',
    directions: [
      {
        title: 'Instituições públicas',
        description: 'Colaboração com órgãos públicos ligados ao transporte, à mobilidade urbana e aos serviços para os cidadãos.',
      },
      {
        title: 'Operadores de transporte',
        description: 'Integração com empresas e operadores responsáveis pelos serviços de transporte público.',
      },
      {
        title: 'Parceiros tecnológicos',
        description: 'Cooperação com empresas de tecnologia e fornecedores de soluções que possam complementar a plataforma STM Balance.',
      },
      {
        title: 'Programas de apoio e aceleradoras',
        description: 'Participação em programas de inovação, aceleração e apoio ao desenvolvimento de empresas de tecnologia.',
      },
      {
        title: 'Pilotos e integrações',
        description: 'Desenvolvimento de projetos piloto e integrações para validar novas funcionalidades em ambientes reais.',
      },
    ],
  },

  en: {
    label: 'Institutions',
    heading: 'Collaboration to build the mobility of the future',
    description: 'STM Balance seeks to collaborate with public institutions, transport operators and mobility ecosystem organizations to develop new digital solutions for users.',
    directions: [
      {
        title: 'Public institutions',
        description: 'Collaboration with public organizations involved in transport, urban mobility and services for citizens.',
      },
      {
        title: 'Transport operators',
        description: 'Integration with companies and operators responsible for public transport services.',
      },
      {
        title: 'Technology partners',
        description: 'Cooperation with technology companies and solution providers that can complement the STM Balance platform.',
      },
      {
        title: 'Support programs and accelerators',
        description: 'Participation in innovation, acceleration and support programs for the development of technology companies.',
      },
      {
        title: 'Pilots and integrations',
        description: 'Development of pilot projects and integrations to validate new functionality in real-world environments.',
      },
    ],
  },

  ru: {
    label: 'Организации',
    heading: 'Сотрудничество для развития мобильности будущего',
    description: 'STM Balance стремится сотрудничать с государственными учреждениями, транспортными операторами и организациями экосистемы городской мобильности для развития новых цифровых решений для пользователей.',
    directions: [
      {
        title: 'Государственные учреждения',
        description: 'Сотрудничество с государственными организациями, связанными с транспортом, городской мобильностью и сервисами для граждан.',
      },
      {
        title: 'Транспортные операторы',
        description: 'Интеграция с компаниями и операторами, отвечающими за работу общественного транспорта.',
      },
      {
        title: 'Технологические партнёры',
        description: 'Сотрудничество с технологическими компаниями и поставщиками решений, способных дополнить платформу STM Balance.',
      },
      {
        title: 'Программы поддержки и акселераторы',
        description: 'Участие в программах инноваций, акселерации и поддержки развития технологических компаний.',
      },
      {
        title: 'Пилотные проекты и интеграции',
        description: 'Разработка пилотных проектов и интеграций для проверки новых функций в реальных условиях.',
      },
    ],
  },

  fr: {
    label: 'Institutions',
    heading: 'Collaborer pour développer la mobilité de demain',
    description: 'STM Balance souhaite collaborer avec les institutions publiques, les opérateurs de transport et les organisations de l’écosystème de la mobilité afin de développer de nouvelles solutions numériques pour les utilisateurs.',
    directions: [
      {
        title: 'Institutions publiques',
        description: 'Collaboration avec les organismes publics liés au transport, à la mobilité urbaine et aux services destinés aux citoyens.',
      },
      {
        title: 'Opérateurs de transport',
        description: 'Intégration avec les entreprises et les opérateurs responsables des services de transport public.',
      },
      {
        title: 'Partenaires technologiques',
        description: 'Coopération avec des entreprises technologiques et des fournisseurs de solutions pouvant compléter la plateforme STM Balance.',
      },
      {
        title: 'Programmes de soutien et accélérateurs',
        description: 'Participation à des programmes d’innovation, d’accélération et de soutien au développement des entreprises technologiques.',
      },
      {
        title: 'Pilotes et intégrations',
        description: 'Développement de projets pilotes et d’intégrations permettant de valider de nouvelles fonctionnalités dans des conditions réelles.',
      },
    ],
  },

  de: {
    label: 'Institutionen',
    heading: 'Gemeinsam die Mobilität der Zukunft entwickeln',
    description: 'STM Balance möchte mit öffentlichen Institutionen, Verkehrsunternehmen und Organisationen des Mobilitätsökosystems zusammenarbeiten, um neue digitale Lösungen für die Nutzer zu entwickeln.',
    directions: [
      {
        title: 'Öffentliche Institutionen',
        description: 'Zusammenarbeit mit öffentlichen Einrichtungen aus den Bereichen Verkehr, urbane Mobilität und Dienstleistungen für Bürger.',
      },
      {
        title: 'Verkehrsunternehmen',
        description: 'Integration mit Unternehmen und Betreibern, die für öffentliche Verkehrsdienste verantwortlich sind.',
      },
      {
        title: 'Technologiepartner',
        description: 'Zusammenarbeit mit Technologieunternehmen und Lösungsanbietern, die die STM-Balance-Plattform ergänzen können.',
      },
      {
        title: 'Förderprogramme und Acceleratoren',
        description: 'Teilnahme an Innovations-, Accelerator- und Förderprogrammen für die Entwicklung von Technologieunternehmen.',
      },
      {
        title: 'Pilotprojekte und Integrationen',
        description: 'Entwicklung von Pilotprojekten und Integrationen zur Erprobung neuer Funktionen unter realen Bedingungen.',
      },
    ],
  },
};
