import type { Language } from './languages';

type NavigationTranslations = {
  home: string;
  product: string;
  technology: string;
  institutions: string;
  team: string;
  company: string;
  contact: string;
};

type HeroSlideTranslation = {
  brand: string;
  heading: string;
  description: string;
};

type HeroSliderTranslations = {
  navigationLabel: string;
  slides: HeroSlideTranslation[];
};

type HeroTranslations = {
  label: string;
  heading: string;
  description: string;
  slider: HeroSliderTranslations;
};

type ProductFeature = {
  title: string;
  description: string;
  status: 'implemented' | 'development';
};

type ProductTranslations = {
  label: string;
  heading: string;
  description: string;
  implementedStatus: string;
  developmentStatus: string;
  features: ProductFeature[];
};

type TechnologyItem = {
  title: string;
  description: string;
};

type TechnologyTranslations = {
  label: string;
  heading: string;
  description: string;
  technologies: TechnologyItem[];
};

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

type TeamTranslations = {
  label: string;
  heading: string;
  description: string;
};

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

type FooterTranslations = {
  developedBy: string;
  location: string;
  privacy: string;
  terms: string;
};

export const navigationTranslations: Record<Language, NavigationTranslations> = {
  es: {
    home: 'Inicio',
    product: 'Producto',
    technology: 'Tecnología',
    institutions: 'Instituciones',
    team: 'Equipo',
    company: 'Empresa',
    contact: 'Contacto',
  },

  pt: {
    home: 'Início',
    product: 'Produto',
    technology: 'Tecnologia',
    institutions: 'Instituições',
    team: 'Equipe',
    company: 'Empresa',
    contact: 'Contato',
  },

  en: {
    home: 'Home',
    product: 'Product',
    technology: 'Technology',
    institutions: 'Institutions',
    team: 'Team',
    company: 'Company',
    contact: 'Contact',
  },

  ru: {
    home: 'Главная',
    product: 'Продукт',
    technology: 'Технологии',
    institutions: 'Организации',
    team: 'Команда',
    company: 'Компания',
    contact: 'Контакты',
  },

  fr: {
    home: 'Accueil',
    product: 'Produit',
    technology: 'Technologie',
    institutions: 'Institutions',
    team: 'Équipe',
    company: 'Entreprise',
    contact: 'Contact',
  },

  de: {
    home: 'Startseite',
    product: 'Produkt',
    technology: 'Technologie',
    institutions: 'Institutionen',
    team: 'Team',
    company: 'Unternehmen',
    contact: 'Kontakt',
  },
};

export const heroTranslations: Record<Language, HeroTranslations> = {
  es: {
    label: 'Movilidad urbana inteligente',
    heading: 'Una plataforma digital unificada para la movilidad urbana.',
    description: 'Transporte, rutas, tarjeta STM y servicios en una sola aplicación.',
    slider: {
      navigationLabel: 'Ir a la imagen',
      slides: [
        {
          brand: 'STM Balance',
          heading: 'Movilidad urbana inteligente.',
          description: 'Tarjeta STM, rutas y movilidad en una sola app.',
        },
        {
          brand: 'STM Balance',
          heading: 'Tu ciudad en movimiento.',
          description: 'Rutas, paradas y conexiones de Montevideo, en una sola app.',
        },
        {
          brand: 'STM Balance',
          heading: 'Tu ciudad en movimiento.',
          description: 'Recargá tu tarjeta STM con tarjeta bancaria.',
        },
        {
          brand: 'STM Balance',
          heading: 'Tu taxi en Montevideo, en una sola app.',
          description: 'Pedí un taxi de forma rápida, segura y confiable.',
        },
        {
          brand: 'STM Balance',
          heading: 'Tu familia, siempre en movimiento.',
          description: 'Gestioná las tarjetas STM de tus hijos y seres queridos desde una sola app.',
        },
        {
          brand: 'STM Balance',
          heading: 'La información que te mantiene en movimiento.',
          description: 'Noticias, alertas y novedades del tránsito en Montevideo.',
        },
        {
          brand: 'STM Balance',
          heading: 'Puntos de recarga STM',
          description: 'Encontrá dónde recargar tu tarjeta.',
        },
        {
          brand: 'STM Balance',
          heading: 'La ciudad en tiempo real.',
          description: 'Paradas, buses en movimiento, estacionamientos y toda la movilidad de Montevideo en una sola app.',
        },
        {
          brand: 'STM Balance',
          heading: 'Movilidad urbana inteligente.',
          description: 'Couriers, delivery y servicios urbanos en una sola app.',
        },
      ],
    },
  },

  pt: {
    label: 'Mobilidade urbana inteligente',
    heading: 'Uma plataforma digital unificada para a mobilidade urbana.',
    description: 'Transporte, rotas, cartão STM e serviços em um só aplicativo.',
    slider: {
      navigationLabel: 'Ir para a imagem',
      slides: [
        {
          brand: 'STM Balance',
          heading: 'Mobilidade urbana inteligente.',
          description: 'Cartão STM, rotas e mobilidade em um só aplicativo.',
        },
        {
          brand: 'STM Balance',
          heading: 'Sua cidade em movimento.',
          description: 'Rotas, paradas e conexões de Montevidéu em um só aplicativo.',
        },
        {
          brand: 'STM Balance',
          heading: 'Sua cidade em movimento.',
          description: 'Recarregue seu cartão STM com cartão bancário.',
        },
        {
          brand: 'STM Balance',
          heading: 'Seu táxi em Montevidéu em um só aplicativo.',
          description: 'Peça um táxi de forma rápida, segura e confiável.',
        },
        {
          brand: 'STM Balance',
          heading: 'Sua família, sempre em movimento.',
          description: 'Gerencie os cartões STM de seus filhos e entes queridos em um só aplicativo.',
        },
        {
          brand: 'STM Balance',
          heading: 'A informação que mantém você em movimento.',
          description: 'Notícias, alertas e novidades do trânsito em Montevidéu.',
        },
        {
          brand: 'STM Balance',
          heading: 'Pontos de recarga STM',
          description: 'Encontre onde recarregar seu cartão.',
        },
        {
          brand: 'STM Balance',
          heading: 'A cidade em tempo real.',
          description: 'Paradas, ônibus em movimento, estacionamentos e toda a mobilidade de Montevidéu em um só aplicativo.',
        },
        {
          brand: 'STM Balance',
          heading: 'Mobilidade urbana inteligente.',
          description: 'Couriers, delivery e serviços urbanos em um só aplicativo.',
        },
      ],
    },
  },

  en: {
    label: 'Smart urban mobility',
    heading: 'A unified digital platform for urban mobility.',
    description: 'Transport, routes, STM card and services in one app.',
    slider: {
      navigationLabel: 'Go to image',
      slides: [
        {
          brand: 'STM Balance',
          heading: 'Smart urban mobility.',
          description: 'STM card, routes and mobility in one app.',
        },
        {
          brand: 'STM Balance',
          heading: 'Your city in motion.',
          description: 'Routes, stops and connections across Montevideo in one app.',
        },
        {
          brand: 'STM Balance',
          heading: 'Your city in motion.',
          description: 'Recharge your STM card with a bank card.',
        },
        {
          brand: 'STM Balance',
          heading: 'Your taxi in Montevideo, all in one app.',
          description: 'Request a taxi quickly, safely and reliably.',
        },
        {
          brand: 'STM Balance',
          heading: 'Your family, always on the move.',
          description: 'Manage the STM cards of your children and loved ones from one app.',
        },
        {
          brand: 'STM Balance',
          heading: 'The information that keeps you moving.',
          description: 'News, alerts and traffic updates in Montevideo.',
        },
        {
          brand: 'STM Balance',
          heading: 'STM top-up points',
          description: 'Find where to top up your card.',
        },
        {
          brand: 'STM Balance',
          heading: 'The city in real time.',
          description: 'Stops, buses in motion, parking and all of Montevideo’s mobility in one app.',
        },
        {
          brand: 'STM Balance',
          heading: 'Smart urban mobility.',
          description: 'Couriers, delivery and urban services in one app.',
        },
      ],
    },
  },

  ru: {
    label: 'Умная городская мобильность',
    heading: 'Единая цифровая платформа для городской мобильности.',
    description: 'Транспорт, маршруты, карта STM и сервисы — в одном приложении.',
    slider: {
      navigationLabel: 'Перейти к изображению',
      slides: [
        {
          brand: 'STM Balance',
          heading: 'Умная городская мобильность.',
          description: 'Карта STM, маршруты и городская мобильность — в одном приложении.',
        },
        {
          brand: 'STM Balance',
          heading: 'Ваш город в движении.',
          description: 'Маршруты, остановки и пересадки по Монтевидео — в одном приложении.',
        },
        {
          brand: 'STM Balance',
          heading: 'Ваш город в движении.',
          description: 'Пополняйте карту STM с банковской карты.',
        },
        {
          brand: 'STM Balance',
          heading: 'Ваше такси в Монтевидео — в одном приложении.',
          description: 'Заказывайте такси быстро, безопасно и надёжно.',
        },
        {
          brand: 'STM Balance',
          heading: 'Ваша семья всегда в движении.',
          description: 'Управляйте картами STM ваших детей и близких из одного приложения.',
        },
        {
          brand: 'STM Balance',
          heading: 'Информация, которая держит вас в движении.',
          description: 'Новости, уведомления и обновления о дорожной ситуации в Монтевидео.',
        },
        {
          brand: 'STM Balance',
          heading: 'Точки пополнения STM',
          description: 'Найдите, где пополнить вашу карту.',
        },
        {
          brand: 'STM Balance',
          heading: 'Город в реальном времени.',
          description: 'Остановки, автобусы в движении, парковки и вся мобильность Монтевидео — в одном приложении.',
        },
        {
          brand: 'STM Balance',
          heading: 'Умная городская мобильность.',
          description: 'Курьеры, доставка и городские сервисы — в одном приложении.',
        },
      ],
    },
  },

  fr: {
    label: 'Mobilité urbaine intelligente',
    heading: 'Une plateforme numérique unifiée pour la mobilité urbaine.',
    description: 'Transports, itinéraires, carte STM et services dans une seule application.',
    slider: {
      navigationLabel: 'Aller à l’image',
      slides: [
        {
          brand: 'STM Balance',
          heading: 'Mobilité urbaine intelligente.',
          description: 'Carte STM, itinéraires et mobilité dans une seule application.',
        },
        {
          brand: 'STM Balance',
          heading: 'Votre ville en mouvement.',
          description: 'Itinéraires, arrêts et correspondances de Montevideo dans une seule application.',
        },
        {
          brand: 'STM Balance',
          heading: 'Votre ville en mouvement.',
          description: 'Rechargez votre carte STM avec une carte bancaire.',
        },
        {
          brand: 'STM Balance',
          heading: 'Votre taxi à Montevideo, dans une seule application.',
          description: 'Commandez un taxi rapidement, en toute sécurité et en toute confiance.',
        },
        {
          brand: 'STM Balance',
          heading: 'Votre famille, toujours en mouvement.',
          description: 'Gérez les cartes STM de vos enfants et de vos proches depuis une seule application.',
        },
        {
          brand: 'STM Balance',
          heading: 'L’information qui vous maintient en mouvement.',
          description: 'Actualités, alertes et nouveautés sur la circulation à Montevideo.',
        },
        {
          brand: 'STM Balance',
          heading: 'Points de recharge STM',
          description: 'Trouvez où recharger votre carte.',
        },
        {
          brand: 'STM Balance',
          heading: 'La ville en temps réel.',
          description: 'Arrêts, bus en circulation, parkings et toute la mobilité de Montevideo dans une seule application.',
        },
        {
          brand: 'STM Balance',
          heading: 'Mobilité urbaine intelligente.',
          description: 'Coursiers, livraison et services urbains dans une seule application.',
        },
      ],
    },
  },

  de: {
    label: 'Intelligente urbane Mobilität',
    heading: 'Eine einheitliche digitale Plattform für urbane Mobilität.',
    description: 'Verkehr, Routen, STM-Karte und Services in einer einzigen App.',
    slider: {
      navigationLabel: 'Zum Bild wechseln',
      slides: [
        {
          brand: 'STM Balance',
          heading: 'Intelligente urbane Mobilität.',
          description: 'STM-Karte, Routen und Mobilität in einer einzigen App.',
        },
        {
          brand: 'STM Balance',
          heading: 'Ihre Stadt in Bewegung.',
          description: 'Routen, Haltestellen und Verbindungen in Montevideo in einer einzigen App.',
        },
        {
          brand: 'STM Balance',
          heading: 'Ihre Stadt in Bewegung.',
          description: 'Laden Sie Ihre STM-Karte mit einer Bankkarte auf.',
        },
        {
          brand: 'STM Balance',
          heading: 'Ihr Taxi in Montevideo in einer einzigen App.',
          description: 'Bestellen Sie ein Taxi schnell, sicher und zuverlässig.',
        },
        {
          brand: 'STM Balance',
          heading: 'Ihre Familie, immer in Bewegung.',
          description: 'Verwalten Sie die STM-Karten Ihrer Kinder und Ihrer Angehörigen in einer einzigen App.',
        },
        {
          brand: 'STM Balance',
          heading: 'Informationen, die Sie in Bewegung halten.',
          description: 'Nachrichten, Warnungen und Verkehrsupdates aus Montevideo.',
        },
        {
          brand: 'STM Balance',
          heading: 'STM-Aufladestellen',
          description: 'Finden Sie Orte, an denen Sie Ihre Karte aufladen können.',
        },
        {
          brand: 'STM Balance',
          heading: 'Die Stadt in Echtzeit.',
          description: 'Haltestellen, fahrende Busse, Parkplätze und die gesamte Mobilität Montevideos in einer einzigen App.',
        },
        {
          brand: 'STM Balance',
          heading: 'Intelligente urbane Mobilität.',
          description: 'Kuriere, Lieferdienste und städtische Services in einer einzigen App.',
        },
      ],
    },
  },
};

export const productTranslations: Record<Language, ProductTranslations> = {
  es: {
    label: 'Producto',
    heading: 'Todo STM en una sola aplicación',
    description: 'STM Balance reúne las funciones esenciales de movilidad y gestión de la tarjeta STM en una experiencia digital unificada.',
    implementedStatus: 'Implementado',
    developmentStatus: 'En desarrollo',
    features: [
      {
        title: 'Tarjeta STM',
        description: 'Consulta de saldo y acceso a la información principal de la tarjeta STM desde el teléfono.',
        status: 'implemented',
      },
      {
        title: 'NFC',
        description: 'Lectura de la tarjeta STM mediante NFC para consultar sus datos directamente desde un dispositivo compatible.',
        status: 'implemented',
      },
      {
        title: 'Autobuses en tiempo real',
        description: 'Visualización de autobuses sobre el mapa y seguimiento de su movimiento en tiempo real.',
        status: 'implemented',
      },
      {
        title: 'Paradas y rutas',
        description: 'Consulta de paradas, líneas y recorridos para entender mejor la red de transporte.',
        status: 'implemented',
      },
      {
        title: 'Planificación de viajes',
        description: 'Construcción de opciones de viaje combinando recorridos en autobús y tramos a pie.',
        status: 'development',
      },
      {
        title: 'Servicios STM',
        description: 'Evolución hacia recargas, historial de viajes, tarjetas familiares y nuevas herramientas para los usuarios de STM.',
        status: 'development',
      },
    ],
  },

  pt: {
    label: 'Produto',
    heading: 'Tudo do STM em um só aplicativo',
    description: 'STM Balance reúne as funções essenciais de mobilidade e gestão do cartão STM em uma experiência digital unificada.',
    implementedStatus: 'Implementado',
    developmentStatus: 'Em desenvolvimento',
    features: [
      {
        title: 'Cartão STM',
        description: 'Consulta de saldo e acesso às principais informações do cartão STM diretamente pelo telefone.',
        status: 'implemented',
      },
      {
        title: 'NFC',
        description: 'Leitura do cartão STM por NFC para consultar seus dados diretamente em um dispositivo compatível.',
        status: 'implemented',
      },
      {
        title: 'Ônibus em tempo real',
        description: 'Visualização dos ônibus no mapa e acompanhamento de seus movimentos em tempo real.',
        status: 'implemented',
      },
      {
        title: 'Paradas e rotas',
        description: 'Consulta de paradas, linhas e trajetos para compreender melhor a rede de transporte.',
        status: 'implemented',
      },
      {
        title: 'Planejamento de viagens',
        description: 'Construção de opções de viagem combinando trajetos de ônibus e trechos a pé.',
        status: 'development',
      },
      {
        title: 'Serviços STM',
        description: 'Evolução para recargas, histórico de viagens, cartões familiares e novas ferramentas para os usuários do STM.',
        status: 'development',
      },
    ],
  },

  en: {
    label: 'Product',
    heading: 'Everything STM in one app',
    description: 'STM Balance brings together essential mobility and STM card management features in one unified digital experience.',
    implementedStatus: 'Implemented',
    developmentStatus: 'In development',
    features: [
      {
        title: 'STM Card',
        description: 'Balance checking and access to key STM card information directly from the phone.',
        status: 'implemented',
      },
      {
        title: 'NFC',
        description: 'NFC reading of the STM card to access its data directly from a compatible device.',
        status: 'implemented',
      },
      {
        title: 'Real-time buses',
        description: 'View buses on the map and follow their movement in real time.',
        status: 'implemented',
      },
      {
        title: 'Stops and routes',
        description: 'Explore stops, lines and routes to better understand the public transport network.',
        status: 'implemented',
      },
      {
        title: 'Trip planning',
        description: 'Build travel options combining bus routes with walking segments.',
        status: 'development',
      },
      {
        title: 'STM services',
        description: 'Expansion toward top-ups, trip history, family cards and new tools for STM users.',
        status: 'development',
      },
    ],
  },

  ru: {
    label: 'Продукт',
    heading: 'Всё STM в одном приложении',
    description: 'STM Balance объединяет основные функции городской мобильности и управления картой STM в едином цифровом интерфейсе.',
    implementedStatus: 'Реализовано',
    developmentStatus: 'В разработке',
    features: [
      {
        title: 'Карта STM',
        description: 'Проверка баланса и доступ к основной информации карты STM непосредственно со смартфона.',
        status: 'implemented',
      },
      {
        title: 'NFC',
        description: 'Считывание карты STM через NFC для получения её данных непосредственно на совместимом устройстве.',
        status: 'implemented',
      },
      {
        title: 'Автобусы в реальном времени',
        description: 'Отображение автобусов на карте и отслеживание их движения в реальном времени.',
        status: 'implemented',
      },
      {
        title: 'Остановки и маршруты',
        description: 'Просмотр остановок, линий и маршрутов для удобной работы с транспортной сетью.',
        status: 'implemented',
      },
      {
        title: 'Планирование поездок',
        description: 'Построение вариантов поездки с сочетанием автобусных маршрутов и пеших участков.',
        status: 'development',
      },
      {
        title: 'Сервисы STM',
        description: 'Развитие пополнения, истории поездок, семейных карт и новых инструментов для пользователей STM.',
        status: 'development',
      },
    ],
  },

  fr: {
    label: 'Produit',
    heading: 'Tout STM dans une seule application',
    description: 'STM Balance réunit les fonctions essentielles de mobilité et de gestion de la carte STM dans une expérience numérique unifiée.',
    implementedStatus: 'Implémenté',
    developmentStatus: 'En développement',
    features: [
      {
        title: 'Carte STM',
        description: 'Consultation du solde et accès aux principales informations de la carte STM directement depuis le téléphone.',
        status: 'implemented',
      },
      {
        title: 'NFC',
        description: 'Lecture de la carte STM par NFC pour consulter ses données directement depuis un appareil compatible.',
        status: 'implemented',
      },
      {
        title: 'Bus en temps réel',
        description: 'Visualisation des bus sur la carte et suivi de leurs déplacements en temps réel.',
        status: 'implemented',
      },
      {
        title: 'Arrêts et itinéraires',
        description: 'Consultation des arrêts, des lignes et des parcours afin de mieux comprendre le réseau de transport.',
        status: 'implemented',
      },
      {
        title: 'Planification des trajets',
        description: 'Création d’options de trajet combinant les parcours en bus et les portions à pied.',
        status: 'development',
      },
      {
        title: 'Services STM',
        description: 'Évolution vers les recharges, l’historique des trajets, les cartes familiales et de nouveaux outils pour les utilisateurs STM.',
        status: 'development',
      },
    ],
  },

  de: {
    label: 'Produkt',
    heading: 'Alles rund um STM in einer einzigen App',
    description: 'STM Balance vereint die wichtigsten Funktionen für Mobilität und die Verwaltung der STM-Karte in einer einheitlichen digitalen Anwendung.',
    implementedStatus: 'Implementiert',
    developmentStatus: 'In Entwicklung',
    features: [
      {
        title: 'STM-Karte',
        description: 'Guthabenabfrage und Zugriff auf die wichtigsten Informationen der STM-Karte direkt über das Smartphone.',
        status: 'implemented',
      },
      {
        title: 'NFC',
        description: 'Auslesen der STM-Karte per NFC, um ihre Daten direkt auf einem kompatiblen Gerät abzurufen.',
        status: 'implemented',
      },
      {
        title: 'Busse in Echtzeit',
        description: 'Anzeige von Bussen auf der Karte und Verfolgung ihrer Bewegung in Echtzeit.',
        status: 'implemented',
      },
      {
        title: 'Haltestellen und Routen',
        description: 'Anzeige von Haltestellen, Linien und Strecken für einen besseren Überblick über das Verkehrsnetz.',
        status: 'implemented',
      },
      {
        title: 'Reiseplanung',
        description: 'Erstellung von Fahrtoptionen durch die Kombination von Busstrecken und Fußwegen.',
        status: 'development',
      },
      {
        title: 'STM-Dienste',
        description: 'Weiterentwicklung hin zu Aufladungen, Fahrtverlauf, Familienkarten und neuen Werkzeugen für STM-Nutzer.',
        status: 'development',
      },
    ],
  },
};


export const technologyTranslations: Record<Language, TechnologyTranslations> = {
  es: {
    label: 'Tecnología',
    heading: 'Tecnología preparada para la movilidad urbana',
    description: 'STM Balance combina tecnologías móviles, geolocalización, datos en tiempo real y NFC para construir una experiencia de transporte moderna y unificada.',
    technologies: [
      {
        title: 'NFC',
        description: 'Lectura de tarjetas STM mediante tecnología NFC desde dispositivos compatibles.',
      },
      {
        title: 'Geolocalización',
        description: 'Ubicación del usuario y representación de elementos de movilidad sobre el mapa.',
      },
      {
        title: 'Datos en tiempo real',
        description: 'Actualización continua de la posición de los autobuses y del estado de la información de transporte.',
      },
      {
        title: 'Mapas y rutas',
        description: 'Visualización de paradas, recorridos y rutas para facilitar la navegación por la ciudad.',
      },
      {
        title: 'Arquitectura móvil',
        description: 'Base tecnológica preparada para integrar nuevas funciones y servicios dentro de STM Balance.',
      },
    ],
  },

  pt: {
    label: 'Tecnologia',
    heading: 'Tecnologia preparada para a mobilidade urbana',
    description: 'STM Balance combina tecnologias móveis, geolocalização, dados em tempo real e NFC para construir uma experiência de transporte moderna e unificada.',
    technologies: [
      {
        title: 'NFC',
        description: 'Leitura de cartões STM por tecnologia NFC em dispositivos compatíveis.',
      },
      {
        title: 'Geolocalização',
        description: 'Localização do usuário e representação de elementos de mobilidade no mapa.',
      },
      {
        title: 'Dados em tempo real',
        description: 'Atualização contínua da posição dos ônibus e do estado das informações de transporte.',
      },
      {
        title: 'Mapas e rotas',
        description: 'Visualização de paradas, trajetos e rotas para facilitar a navegação pela cidade.',
      },
      {
        title: 'Arquitetura móvel',
        description: 'Base tecnológica preparada para integrar novas funções e serviços ao STM Balance.',
      },
    ],
  },

  en: {
    label: 'Technology',
    heading: 'Technology built for urban mobility',
    description: 'STM Balance combines mobile technologies, geolocation, real-time data and NFC to create a modern and unified transport experience.',
    technologies: [
      {
        title: 'NFC',
        description: 'STM card reading through NFC technology on compatible devices.',
      },
      {
        title: 'Geolocation',
        description: 'User positioning and representation of mobility elements on the map.',
      },
      {
        title: 'Real-time data',
        description: 'Continuous updates of bus positions and transport information status.',
      },
      {
        title: 'Maps and routes',
        description: 'Visualization of stops, routes and journeys to make navigation around the city easier.',
      },
      {
        title: 'Mobile architecture',
        description: 'A technology foundation designed to support new features and services within STM Balance.',
      },
    ],
  },

  ru: {
    label: 'Технологии',
    heading: 'Технологии для современной городской мобильности',
    description: 'STM Balance объединяет мобильные технологии, геолокацию, данные в реальном времени и NFC для создания современной единой транспортной среды.',
    technologies: [
      {
        title: 'NFC',
        description: 'Считывание карт STM с помощью технологии NFC на совместимых устройствах.',
      },
      {
        title: 'Геолокация',
        description: 'Определение местоположения пользователя и отображение объектов городской мобильности на карте.',
      },
      {
        title: 'Данные в реальном времени',
        description: 'Постоянное обновление положения автобусов и актуальной транспортной информации.',
      },
      {
        title: 'Карты и маршруты',
        description: 'Отображение остановок, маршрутов и траекторий движения для удобной навигации по городу.',
      },
      {
        title: 'Мобильная архитектура',
        description: 'Технологическая основа, подготовленная для интеграции новых функций и сервисов STM Balance.',
      },
    ],
  },

  fr: {
    label: 'Technologie',
    heading: 'Une technologie conçue pour la mobilité urbaine',
    description: 'STM Balance combine les technologies mobiles, la géolocalisation, les données en temps réel et le NFC pour créer une expérience de transport moderne et unifiée.',
    technologies: [
      {
        title: 'NFC',
        description: 'Lecture des cartes STM grâce à la technologie NFC sur les appareils compatibles.',
      },
      {
        title: 'Géolocalisation',
        description: 'Localisation de l’utilisateur et représentation des éléments de mobilité sur la carte.',
      },
      {
        title: 'Données en temps réel',
        description: 'Mise à jour continue de la position des bus et des informations de transport.',
      },
      {
        title: 'Cartes et itinéraires',
        description: 'Visualisation des arrêts, des parcours et des itinéraires pour faciliter les déplacements en ville.',
      },
      {
        title: 'Architecture mobile',
        description: 'Une base technologique conçue pour intégrer de nouvelles fonctions et de nouveaux services à STM Balance.',
      },
    ],
  },

  de: {
    label: 'Technologie',
    heading: 'Technologie für moderne urbane Mobilität',
    description: 'STM Balance verbindet mobile Technologien, Geolokalisierung, Echtzeitdaten und NFC zu einem modernen und einheitlichen Mobilitätserlebnis.',
    technologies: [
      {
        title: 'NFC',
        description: 'Auslesen von STM-Karten per NFC-Technologie auf kompatiblen Geräten.',
      },
      {
        title: 'Geolokalisierung',
        description: 'Bestimmung des Nutzerstandorts und Darstellung von Mobilitätselementen auf der Karte.',
      },
      {
        title: 'Echtzeitdaten',
        description: 'Kontinuierliche Aktualisierung der Buspositionen und der aktuellen Verkehrsinformationen.',
      },
      {
        title: 'Karten und Routen',
        description: 'Darstellung von Haltestellen, Strecken und Routen für eine einfachere Navigation durch die Stadt.',
      },
      {
        title: 'Mobile Architektur',
        description: 'Eine technologische Grundlage für die Integration neuer Funktionen und Dienste in STM Balance.',
      },
    ],
  },
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

export const teamTranslations: Record<Language, TeamTranslations> = {
  es: {
    label: 'Equipo',
    heading: 'Un equipo multidisciplinario detrás de STM Balance',
    description: 'STM Balance es desarrollado por un equipo con experiencia en producto, desarrollo móvil, infraestructura, DevOps, diseño y calidad.',
  },

  pt: {
    label: 'Equipe',
    heading: 'Uma equipe multidisciplinar por trás do STM Balance',
    description: 'STM Balance é desenvolvido por uma equipe com experiência em produto, desenvolvimento móvel, infraestrutura, DevOps, design e qualidade.',
  },

  en: {
    label: 'Team',
    heading: 'A multidisciplinary team behind STM Balance',
    description: 'STM Balance is developed by a team with experience in product, mobile development, infrastructure, DevOps, design and quality.',
  },

  ru: {
    label: 'Команда',
    heading: 'Междисциплинарная команда STM Balance',
    description: 'STM Balance разрабатывается командой с опытом в продуктовой разработке, мобильных приложениях, инфраструктуре, DevOps, дизайне и качестве.',
  },

  fr: {
    label: 'Équipe',
    heading: 'Une équipe multidisciplinaire derrière STM Balance',
    description: 'STM Balance est développé par une équipe expérimentée en produit, développement mobile, infrastructure, DevOps, design et qualité.',
  },

  de: {
    label: 'Team',
    heading: 'Ein multidisziplinäres Team hinter STM Balance',
    description: 'STM Balance wird von einem Team mit Erfahrung in Produktentwicklung, mobiler Entwicklung, Infrastruktur, DevOps, Design und Qualität entwickelt.',
  },
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

export const footerTranslations: Record<Language, FooterTranslations> = {
  es: {
    developedBy: 'Desarrollado por Platforma SAS',
    location: 'Montevideo — 2026',
    privacy: 'Política de Privacidad',
    terms: 'Términos y Condiciones',
  },

  pt: {
    developedBy: 'Desenvolvido pela Platforma SAS',
    location: 'Montevidéu — 2026',
    privacy: 'Política de Privacidade',
    terms: 'Termos e Condições',
  },

  en: {
    developedBy: 'Developed by Platforma SAS',
    location: 'Montevideo — 2026',
    privacy: 'Privacy Policy',
    terms: 'Terms and Conditions',
  },

  ru: {
    developedBy: 'Разработано Platforma SAS',
    location: 'Монтевидео — 2026',
    privacy: 'Политика конфиденциальности',
    terms: 'Условия использования',
  },

  fr: {
    developedBy: 'Développé par Platforma SAS',
    location: 'Montevideo — 2026',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions générales',
  },

  de: {
    developedBy: 'Entwickelt von Platforma SAS',
    location: 'Montevideo — 2026',
    privacy: 'Datenschutzerklärung',
    terms: 'Allgemeine Geschäftsbedingungen',
  },
};
