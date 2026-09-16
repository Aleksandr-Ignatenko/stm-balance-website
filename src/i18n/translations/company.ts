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
    heading: 'Platforma SAS — empresa tecnológica de Uruguay',
    description: 'Platforma SAS es una empresa tecnológica uruguaya que desarrolla productos digitales, aplicaciones móviles y soluciones de infraestructura. STM Balance es una de las principales líneas de desarrollo de la empresa en el ámbito de la movilidad urbana, concebida como una plataforma digital escalable para usuarios, organizaciones y futuros socios.',
    details: [
      {
        title: 'Empresa uruguaya',
        description: 'Platforma SAS está constituida en Uruguay y desarrolla sus propios productos tecnológicos y soluciones digitales.',
      },
      {
        title: 'STM Balance',
        description: 'STM Balance es desarrollado por Platforma SAS como una plataforma unificada para la interacción con el sistema STM, el transporte público y futuros servicios de movilidad urbana.',
      },
      {
        title: 'Experiencia tecnológica',
        description: 'La empresa trabaja en desarrollo móvil, software, infraestructura cloud y de servidores, integraciones y servicios digitales.',
      },
      {
        title: 'Desarrollo y alianzas',
        description: 'Platforma SAS desarrolla STM Balance junto con especialistas de distintas áreas y está abierta a colaborar con instituciones públicas, operadores de transporte, empresas tecnológicas y programas de inversión y aceleración.',
      },
    ],
  },

  pt: {
    label: 'Empresa',
    heading: 'Platforma SAS — empresa de tecnologia do Uruguai',
    description: 'Platforma SAS é uma empresa uruguaia de tecnologia que desenvolve produtos digitais, aplicativos móveis e soluções de infraestrutura. STM Balance é uma das principais linhas de desenvolvimento da empresa na área de mobilidade urbana, concebida como uma plataforma digital escalável para usuários, organizações e futuros parceiros.',
    details: [
      {
        title: 'Empresa uruguaia',
        description: 'Platforma SAS é constituída no Uruguai e desenvolve seus próprios produtos tecnológicos e soluções digitais.',
      },
      {
        title: 'STM Balance',
        description: 'STM Balance é desenvolvido pela Platforma SAS como uma plataforma unificada para interação com o sistema STM, o transporte público e futuros serviços de mobilidade urbana.',
      },
      {
        title: 'Experiência tecnológica',
        description: 'A empresa atua em desenvolvimento móvel, software, infraestrutura em nuvem e servidores, integrações e serviços digitais.',
      },
      {
        title: 'Desenvolvimento e parcerias',
        description: 'Platforma SAS desenvolve STM Balance em conjunto com especialistas de diferentes áreas e está aberta à colaboração com instituições públicas, operadores de transporte, empresas de tecnologia e programas de investimento e aceleração.',
      },
    ],
  },

  en: {
    label: 'Company',
    heading: 'Platforma SAS — a technology company from Uruguay',
    description: 'Platforma SAS is a Uruguayan technology company developing digital products, mobile applications and infrastructure solutions. STM Balance is one of the company’s key areas of development in urban mobility, being built as a scalable digital platform for users, organizations and future partners.',
    details: [
      {
        title: 'Uruguayan company',
        description: 'Platforma SAS is incorporated in Uruguay and develops its own technology products and digital solutions.',
      },
      {
        title: 'STM Balance',
        description: 'STM Balance is developed by Platforma SAS as a unified platform for interaction with the STM system, public transport and future urban mobility services.',
      },
      {
        title: 'Technology expertise',
        description: 'The company works across mobile development, software, cloud and server infrastructure, integrations and digital services.',
      },
      {
        title: 'Development and partnerships',
        description: 'Platforma SAS develops STM Balance together with specialists from different fields and is open to collaboration with public institutions, transport operators, technology companies and investment and acceleration programs.',
      },
    ],
  },

  ru: {
    label: 'Компания',
    heading: 'Platforma SAS — технологическая компания из Уругвая',
    description: 'Platforma SAS — уругвайская технологическая компания, разрабатывающая цифровые продукты, мобильные приложения и инфраструктурные решения. STM Balance — одно из ключевых направлений компании в сфере городской мобильности, создаваемое как масштабируемая цифровая платформа для пользователей, организаций и будущих партнёров.',
    details: [
      {
        title: 'Уругвайская компания',
        description: 'Platforma SAS зарегистрирована в Уругвае и развивает собственные технологические продукты и цифровые решения.',
      },
      {
        title: 'STM Balance',
        description: 'STM Balance разрабатывается Platforma SAS как единая платформа для работы с системой STM, общественным транспортом и перспективными сервисами городской мобильности.',
      },
      {
        title: 'Технологическая экспертиза',
        description: 'Компания работает в направлениях мобильной разработки, программного обеспечения, облачной и серверной инфраструктуры, интеграций и цифровых сервисов.',
      },
      {
        title: 'Развитие и партнёрства',
        description: 'Platforma SAS развивает STM Balance совместно с профильными специалистами и открыта к сотрудничеству с государственными учреждениями, транспортными операторами, технологическими компаниями и инвестиционными и акселерационными программами.',
      },
    ],
  },

  fr: {
    label: 'Entreprise',
    heading: 'Platforma SAS — entreprise technologique uruguayenne',
    description: 'Platforma SAS est une entreprise technologique uruguayenne qui développe des produits numériques, des applications mobiles et des solutions d’infrastructure. STM Balance constitue l’un des principaux axes de développement de l’entreprise dans le domaine de la mobilité urbaine et est conçu comme une plateforme numérique évolutive destinée aux utilisateurs, aux organisations et aux futurs partenaires.',
    details: [
      {
        title: 'Entreprise uruguayenne',
        description: 'Platforma SAS est constituée en Uruguay et développe ses propres produits technologiques et solutions numériques.',
      },
      {
        title: 'STM Balance',
        description: 'STM Balance est développé par Platforma SAS comme une plateforme unifiée pour interagir avec le système STM, les transports publics et les futurs services de mobilité urbaine.',
      },
      {
        title: 'Expertise technologique',
        description: 'L’entreprise travaille dans les domaines du développement mobile, des logiciels, des infrastructures cloud et serveurs, des intégrations et des services numériques.',
      },
      {
        title: 'Développement et partenariats',
        description: 'Platforma SAS développe STM Balance avec des spécialistes de différents domaines et est ouverte à la collaboration avec les institutions publiques, les opérateurs de transport, les entreprises technologiques ainsi que les programmes d’investissement et d’accélération.',
      },
    ],
  },

  de: {
    label: 'Unternehmen',
    heading: 'Platforma SAS — Technologieunternehmen aus Uruguay',
    description: 'Platforma SAS ist ein uruguayisches Technologieunternehmen, das digitale Produkte, mobile Anwendungen und Infrastrukturlösungen entwickelt. STM Balance ist einer der zentralen Entwicklungsbereiche des Unternehmens im Bereich urbaner Mobilität und wird als skalierbare digitale Plattform für Nutzer, Organisationen und zukünftige Partner aufgebaut.',
    details: [
      {
        title: 'Uruguayisches Unternehmen',
        description: 'Platforma SAS ist in Uruguay gegründet und entwickelt eigene Technologieprodukte und digitale Lösungen.',
      },
      {
        title: 'STM Balance',
        description: 'STM Balance wird von Platforma SAS als einheitliche Plattform für die Nutzung des STM-Systems, des öffentlichen Verkehrs und zukünftiger Dienste für urbane Mobilität entwickelt.',
      },
      {
        title: 'Technologische Expertise',
        description: 'Das Unternehmen arbeitet in den Bereichen mobile Entwicklung, Software, Cloud- und Serverinfrastruktur, Integrationen und digitale Dienste.',
      },
      {
        title: 'Entwicklung und Partnerschaften',
        description: 'Platforma SAS entwickelt STM Balance gemeinsam mit Fachleuten aus verschiedenen Bereichen und ist offen für die Zusammenarbeit mit öffentlichen Institutionen, Verkehrsunternehmen, Technologieunternehmen sowie Investitions- und Accelerator-Programmen.',
      },
    ],
  },
};
