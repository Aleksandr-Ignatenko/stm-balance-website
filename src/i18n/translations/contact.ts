import type { Language } from '../languages';

type ContactItem = {
  title: string;
  description: string;
};

type ContactInfo = {
  emailLabel: string;
  emailValue: string;
  locationLabel: string;
  locationValue: string;
};

type ContactForm = {
  nameLabel: string;
  organizationLabel: string;
  emailLabel: string;
  subjectLabel: string;
  messageLabel: string;
  submitLabel: string;
  unavailableMessage: string;
};

type ContactTranslations = {
  label: string;
  heading: string;
  description: string;
  channels: ContactItem[];
  contactInfo: ContactInfo;
  form: ContactForm;
};

export const contactTranslations: Record<Language, ContactTranslations> = {
  es: {
    label: 'Contacto',
    heading: 'Contacto y colaboración',
    description: 'Estamos abiertos a colaborar con instituciones públicas, operadores de transporte, empresas tecnológicas y programas de inversión y aceleración. Contactanos si estás interesado en una alianza, integración, proyecto piloto o en el desarrollo de nuevas soluciones de movilidad urbana.',
    channels: [
      {
        title: 'Colaboración institucional',
        description: 'Cooperación con instituciones públicas, organizaciones de transporte y operadores de movilidad urbana.',
      },
      {
        title: 'Integraciones tecnológicas',
        description: 'Colaboración con empresas tecnológicas en materia de datos, infraestructura, servicios e integraciones.',
      },
      {
        title: 'Proyectos piloto y alianzas',
        description: 'Propuestas para lanzar proyectos piloto, probar soluciones de forma conjunta y desarrollar nuevas líneas de STM Balance.',
      },
    ],
    contactInfo: {
      emailLabel: 'Correo electrónico',
      emailValue: 'Correo corporativo — próximamente',
      locationLabel: 'Ubicación',
      locationValue: 'Montevideo, Uruguay',
    },
    form: {
      nameLabel: 'Nombre',
      organizationLabel: 'Organización',
      emailLabel: 'Correo electrónico',
      subjectLabel: 'Asunto',
      messageLabel: 'Mensaje',
      submitLabel: 'Enviar mensaje',
      unavailableMessage: 'El formulario de contacto estará disponible después del lanzamiento del sitio.',
    },
  },

  pt: {
    label: 'Contato',
    heading: 'Contato e colaboração',
    description: 'Estamos abertos à colaboração com instituições públicas, operadores de transporte, empresas de tecnologia e programas de investimento e aceleração. Entre em contato conosco se tiver interesse em parceria, integração, projeto-piloto ou no desenvolvimento de novas soluções de mobilidade urbana.',
    channels: [
      {
        title: 'Colaboração institucional',
        description: 'Cooperação com instituições públicas, organizações de transporte e operadores de mobilidade urbana.',
      },
      {
        title: 'Integrações tecnológicas',
        description: 'Colaboração com empresas de tecnologia em dados, infraestrutura, serviços e integrações.',
      },
      {
        title: 'Projetos-piloto e parcerias',
        description: 'Propostas para lançar projetos-piloto, testar soluções em conjunto e desenvolver novas áreas do STM Balance.',
      },
    ],
    contactInfo: {
      emailLabel: 'E-mail',
      emailValue: 'E-mail corporativo — em breve',
      locationLabel: 'Localização',
      locationValue: 'Montevidéu, Uruguai',
    },
    form: {
      nameLabel: 'Nome',
      organizationLabel: 'Organização',
      emailLabel: 'E-mail',
      subjectLabel: 'Assunto',
      messageLabel: 'Mensagem',
      submitLabel: 'Enviar mensagem',
      unavailableMessage: 'O formulário de contato estará disponível após o lançamento do site.',
    },
  },

  en: {
    label: 'Contact',
    heading: 'Contact and collaboration',
    description: 'We are open to collaboration with public institutions, transport operators, technology companies, and investment and acceleration programs. Contact us if you are interested in a partnership, integration, pilot project, or the development of new urban mobility solutions.',
    channels: [
      {
        title: 'Institutional collaboration',
        description: 'Cooperation with public institutions, transport organizations and urban mobility operators.',
      },
      {
        title: 'Technology integrations',
        description: 'Collaboration with technology companies on data, infrastructure, services and integrations.',
      },
      {
        title: 'Pilot projects and partnerships',
        description: 'Proposals for launching pilot projects, jointly testing solutions and developing new areas of STM Balance.',
      },
    ],
    contactInfo: {
      emailLabel: 'Email',
      emailValue: 'Corporate email — coming soon',
      locationLabel: 'Location',
      locationValue: 'Montevideo, Uruguay',
    },
    form: {
      nameLabel: 'Name',
      organizationLabel: 'Organization',
      emailLabel: 'Email',
      subjectLabel: 'Subject',
      messageLabel: 'Message',
      submitLabel: 'Send message',
      unavailableMessage: 'The contact form will be available after the website launch.',
    },
  },

  ru: {
    label: 'Контакты',
    heading: 'Контакты и сотрудничество',
    description: 'Мы открыты к сотрудничеству с государственными учреждениями, транспортными операторами, технологическими компаниями, инвестиционными и акселерационными программами. Свяжитесь с нами, если вы заинтересованы в партнёрстве, интеграции, пилотном проекте или развитии новых решений городской мобильности.',
    channels: [
      {
        title: 'Институциональное сотрудничество',
        description: 'Взаимодействие с государственными учреждениями, транспортными организациями и операторами городской мобильности.',
      },
      {
        title: 'Технологические интеграции',
        description: 'Сотрудничество с технологическими компаниями по вопросам данных, инфраструктуры, сервисов и интеграций.',
      },
      {
        title: 'Пилотные проекты и партнёрства',
        description: 'Предложения по запуску пилотных проектов, совместному тестированию решений и развитию новых направлений STM Balance.',
      },
    ],
    contactInfo: {
      emailLabel: 'E-mail',
      emailValue: 'Корпоративный e-mail — скоро',
      locationLabel: 'Местоположение',
      locationValue: 'Монтевидео, Уругвай',
    },
    form: {
      nameLabel: 'Имя',
      organizationLabel: 'Организация',
      emailLabel: 'E-mail',
      subjectLabel: 'Тема',
      messageLabel: 'Сообщение',
      submitLabel: 'Отправить сообщение',
      unavailableMessage: 'Форма обратной связи будет доступна после запуска сайта.',
    },
  },

  fr: {
    label: 'Contact',
    heading: 'Contact et collaboration',
    description: 'Nous sommes ouverts à la collaboration avec les institutions publiques, les opérateurs de transport, les entreprises technologiques ainsi que les programmes d’investissement et d’accélération. Contactez-nous si vous êtes intéressé par un partenariat, une intégration, un projet pilote ou le développement de nouvelles solutions de mobilité urbaine.',
    channels: [
      {
        title: 'Collaboration institutionnelle',
        description: 'Coopération avec les institutions publiques, les organisations de transport et les opérateurs de mobilité urbaine.',
      },
      {
        title: 'Intégrations technologiques',
        description: 'Collaboration avec des entreprises technologiques autour des données, de l’infrastructure, des services et des intégrations.',
      },
      {
        title: 'Projets pilotes et partenariats',
        description: 'Propositions pour lancer des projets pilotes, tester conjointement des solutions et développer de nouveaux axes de STM Balance.',
      },
    ],
    contactInfo: {
      emailLabel: 'E-mail',
      emailValue: 'E-mail professionnel — prochainement',
      locationLabel: 'Localisation',
      locationValue: 'Montevideo, Uruguay',
    },
    form: {
      nameLabel: 'Nom',
      organizationLabel: 'Organisation',
      emailLabel: 'E-mail',
      subjectLabel: 'Objet',
      messageLabel: 'Message',
      submitLabel: 'Envoyer le message',
      unavailableMessage: 'Le formulaire de contact sera disponible après le lancement du site.',
    },
  },

  de: {
    label: 'Kontakt',
    heading: 'Kontakt und Zusammenarbeit',
    description: 'Wir sind offen für die Zusammenarbeit mit öffentlichen Institutionen, Verkehrsunternehmen, Technologieunternehmen sowie Investitions- und Accelerator-Programmen. Kontaktieren Sie uns, wenn Sie an einer Partnerschaft, Integration, einem Pilotprojekt oder der Entwicklung neuer Lösungen für urbane Mobilität interessiert sind.',
    channels: [
      {
        title: 'Institutionelle Zusammenarbeit',
        description: 'Zusammenarbeit mit öffentlichen Institutionen, Verkehrsorganisationen und Betreibern urbaner Mobilität.',
      },
      {
        title: 'Technologische Integrationen',
        description: 'Zusammenarbeit mit Technologieunternehmen in den Bereichen Daten, Infrastruktur, Dienste und Integrationen.',
      },
      {
        title: 'Pilotprojekte und Partnerschaften',
        description: 'Vorschläge für Pilotprojekte, gemeinsame Tests von Lösungen und die Entwicklung neuer Bereiche von STM Balance.',
      },
    ],
    contactInfo: {
      emailLabel: 'E-Mail',
      emailValue: 'Unternehmens-E-Mail — demnächst',
      locationLabel: 'Standort',
      locationValue: 'Montevideo, Uruguay',
    },
    form: {
      nameLabel: 'Name',
      organizationLabel: 'Organisation',
      emailLabel: 'E-Mail',
      subjectLabel: 'Betreff',
      messageLabel: 'Nachricht',
      submitLabel: 'Nachricht senden',
      unavailableMessage: 'Das Kontaktformular wird nach dem Start der Website verfügbar sein.',
    },
  },
};
