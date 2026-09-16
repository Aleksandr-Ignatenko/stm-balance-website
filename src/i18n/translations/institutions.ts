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
    heading: 'Alianzas e integraciones para desarrollar la movilidad urbana',
    description: 'STM Balance se desarrolla como una plataforma tecnológica abierta a la colaboración. Buscamos establecer alianzas con instituciones públicas, operadores de transporte, empresas tecnológicas y programas de apoyo para crear proyectos piloto, integraciones y nuevos servicios digitales de movilidad urbana.',
    directions: [
      {
        title: 'Instituciones públicas',
        description: 'Colaboración con organismos responsables del transporte público, la movilidad urbana y los servicios digitales para la ciudadanía.',
      },
      {
        title: 'Operadores de transporte',
        description: 'Integración con empresas y operadores del sistema de transporte para conectar datos, rutas, servicios y funcionalidades para los usuarios.',
      },
      {
        title: 'Socios tecnológicos',
        description: 'Trabajo conjunto con proveedores de soluciones cartográficas, de pagos, nube, infraestructura y otras tecnologías.',
      },
      {
        title: 'Programas de apoyo y aceleradoras',
        description: 'Participación en programas de innovación, aceleración, financiamiento y apoyo institucional para desarrollar y escalar el proyecto.',
      },
      {
        title: 'Pilotos e integraciones',
        description: 'Implementación de soluciones piloto, integraciones de prueba y proyectos conjuntos para validar nuevas funciones en condiciones reales de movilidad urbana.',
      },
    ],
  },

  pt: {
    label: 'Instituições',
    heading: 'Parcerias e integrações para desenvolver a mobilidade urbana',
    description: 'STM Balance é desenvolvido como uma plataforma tecnológica aberta à colaboração. Buscamos estabelecer parcerias com instituições públicas, operadores de transporte, empresas de tecnologia e programas de apoio para criar projetos-piloto, integrações e novos serviços digitais de mobilidade urbana.',
    directions: [
      {
        title: 'Instituições públicas',
        description: 'Colaboração com órgãos responsáveis pelo transporte público, mobilidade urbana e serviços digitais para os cidadãos.',
      },
      {
        title: 'Operadores de transporte',
        description: 'Integração com empresas e operadores do sistema de transporte para conectar dados, rotas, serviços e funcionalidades para os usuários.',
      },
      {
        title: 'Parceiros tecnológicos',
        description: 'Trabalho conjunto com fornecedores de soluções cartográficas, de pagamentos, nuvem, infraestrutura e outras tecnologias.',
      },
      {
        title: 'Programas de apoio e aceleradoras',
        description: 'Participação em programas de inovação, aceleração, financiamento e apoio institucional para desenvolver e escalar o projeto.',
      },
      {
        title: 'Pilotos e integrações',
        description: 'Implementação de soluções-piloto, integrações de teste e projetos conjuntos para validar novas funções em condições reais de mobilidade urbana.',
      },
    ],
  },

  en: {
    label: 'Institutions',
    heading: 'Partnerships and integrations for the development of urban mobility',
    description: 'STM Balance is being developed as a technology platform open to collaboration. We seek partnerships with public institutions, transport operators, technology companies and support programs to create pilot projects, integrations and new digital urban mobility services.',
    directions: [
      {
        title: 'Public institutions',
        description: 'Collaboration with organizations responsible for public transport, urban mobility and digital services for citizens.',
      },
      {
        title: 'Transport operators',
        description: 'Integration with transport companies and system operators to connect data, routes, services and user-facing functionality.',
      },
      {
        title: 'Technology partners',
        description: 'Joint work with providers of mapping, payment, cloud, infrastructure and other technology solutions.',
      },
      {
        title: 'Support programs and accelerators',
        description: 'Participation in innovation, acceleration, funding and institutional support programs to develop and scale the project.',
      },
      {
        title: 'Pilots and integrations',
        description: 'Launch of pilot solutions, test integrations and joint projects to validate new functionality in real urban mobility environments.',
      },
    ],
  },

  ru: {
    label: 'Организации',
    heading: 'Партнёрство и интеграции для развития городской мобильности',
    description: 'STM Balance развивается как открытая к сотрудничеству технологическая платформа. Мы заинтересованы в партнёрстве с государственными учреждениями, транспортными операторами, технологическими компаниями и программами поддержки для создания пилотных проектов, интеграций и новых цифровых сервисов городской мобильности.',
    directions: [
      {
        title: 'Государственные учреждения',
        description: 'Сотрудничество с организациями, отвечающими за общественный транспорт, городскую мобильность и цифровые сервисы для жителей.',
      },
      {
        title: 'Транспортные операторы',
        description: 'Интеграция с перевозчиками и операторами транспортной системы для подключения данных, маршрутов, сервисов и пользовательских функций.',
      },
      {
        title: 'Технологические партнёры',
        description: 'Совместная работа с поставщиками картографических, платёжных, облачных, инфраструктурных и других технологических решений.',
      },
      {
        title: 'Программы поддержки и акселераторы',
        description: 'Участие в программах инноваций, акселерации, финансирования и институциональной поддержки для развития и масштабирования проекта.',
      },
      {
        title: 'Пилотные проекты и интеграции',
        description: 'Запуск пилотных решений, тестовых интеграций и совместных проектов для проверки новых функций в реальных условиях городской транспортной среды.',
      },
    ],
  },

  fr: {
    label: 'Institutions',
    heading: 'Partenariats et intégrations pour développer la mobilité urbaine',
    description: 'STM Balance se développe comme une plateforme technologique ouverte à la collaboration. Nous souhaitons établir des partenariats avec des institutions publiques, des opérateurs de transport, des entreprises technologiques et des programmes de soutien afin de créer des projets pilotes, des intégrations et de nouveaux services numériques de mobilité urbaine.',
    directions: [
      {
        title: 'Institutions publiques',
        description: 'Collaboration avec les organismes responsables des transports publics, de la mobilité urbaine et des services numériques destinés aux citoyens.',
      },
      {
        title: 'Opérateurs de transport',
        description: 'Intégration avec les entreprises et opérateurs du système de transport afin de connecter les données, les itinéraires, les services et les fonctionnalités destinées aux utilisateurs.',
      },
      {
        title: 'Partenaires technologiques',
        description: 'Travail conjoint avec des fournisseurs de solutions cartographiques, de paiement, cloud, d’infrastructure et d’autres technologies.',
      },
      {
        title: 'Programmes de soutien et accélérateurs',
        description: 'Participation à des programmes d’innovation, d’accélération, de financement et de soutien institutionnel afin de développer et de faire évoluer le projet.',
      },
      {
        title: 'Pilotes et intégrations',
        description: 'Mise en œuvre de solutions pilotes, d’intégrations de test et de projets communs afin de valider de nouvelles fonctionnalités dans des conditions réelles de mobilité urbaine.',
      },
    ],
  },

  de: {
    label: 'Institutionen',
    heading: 'Partnerschaften und Integrationen für die Entwicklung urbaner Mobilität',
    description: 'STM Balance wird als Technologieplattform entwickelt, die offen für Zusammenarbeit ist. Wir streben Partnerschaften mit öffentlichen Institutionen, Verkehrsunternehmen, Technologieunternehmen und Förderprogrammen an, um Pilotprojekte, Integrationen und neue digitale Dienste für urbane Mobilität zu entwickeln.',
    directions: [
      {
        title: 'Öffentliche Institutionen',
        description: 'Zusammenarbeit mit Organisationen, die für öffentlichen Verkehr, urbane Mobilität und digitale Dienste für Bürger verantwortlich sind.',
      },
      {
        title: 'Verkehrsunternehmen',
        description: 'Integration mit Verkehrsunternehmen und Betreibern des Verkehrssystems, um Daten, Routen, Dienste und nutzerbezogene Funktionen anzubinden.',
      },
      {
        title: 'Technologiepartner',
        description: 'Gemeinsame Arbeit mit Anbietern von Karten-, Zahlungs-, Cloud-, Infrastruktur- und weiteren Technologielösungen.',
      },
      {
        title: 'Förderprogramme und Acceleratoren',
        description: 'Teilnahme an Innovations-, Accelerator-, Finanzierungs- und institutionellen Förderprogrammen zur Entwicklung und Skalierung des Projekts.',
      },
      {
        title: 'Pilotprojekte und Integrationen',
        description: 'Umsetzung von Pilotlösungen, Testintegrationen und gemeinsamen Projekten zur Validierung neuer Funktionen unter realen Bedingungen urbaner Mobilität.',
      },
    ],
  },
};
