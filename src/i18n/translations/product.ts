import type { Language } from '../languages';

type ProductFeature = {
  title: string;
  description: string;
  status: 'implemented' | 'development' | 'future';
};

type ProductTranslations = {
  label: string;
  heading: string;
  description: string;
  goalLabel: string;
  goalDescription: string;
  implementedStatus: string;
  developmentStatus: string;
  futureStatus: string;
  features: ProductFeature[];
};

export const productTranslations: Record<Language, ProductTranslations> = {
  es: {
    label: 'Producto',
    heading: 'Una plataforma digital unificada para la movilidad urbana',
    description: 'STM Balance es una plataforma móvil que integra la gestión de la tarjeta STM, el transporte público, las rutas y los servicios urbanos relacionados en una única interfaz digital. El proyecto evoluciona por etapas: desde las funciones básicas para los usuarios de STM hacia un ecosistema más amplio de movilidad urbana, orientado a la comodidad, la accesibilidad y la integración de diferentes servicios.',
    implementedStatus: 'Implementado',
    developmentStatus: 'En desarrollo',
    futureStatus: 'A futuro',
    features: [
      {
        title: 'Tarjeta STM',
        description: 'Consulta de saldo y acceso a la información principal de la tarjeta STM directamente desde el teléfono.',
        status: 'implemented',
      },
      {
        title: 'NFC',
        description: 'Lectura de la tarjeta STM mediante NFC en dispositivos móviles compatibles.',
        status: 'implemented',
      },
      {
        title: 'Transporte en tiempo real',
        description: 'Visualización de autobuses, paradas y recorridos en el mapa con actualización de los datos de transporte.',
        status: 'implemented',
      },
      {
        title: 'Planificación de viajes',
        description: 'Construcción de opciones de viaje teniendo en cuenta el transporte público, las conexiones y los tramos a pie.',
        status: 'development',
      },
      {
        title: 'Servicios STM',
        description: 'Desarrollo de funciones de recarga, historial de viajes, tarjetas familiares y gestión de las tarjetas de los miembros de la familia.',
        status: 'development',
      },
      {
        title: 'Expansión del ecosistema urbano',
        description: 'Integración de servicios adicionales de movilidad urbana, incluyendo taxis, delivery, estacionamiento, micromovilidad y otras áreas.',
        status: 'future',
      },
    ],
  },

  pt: {
    label: 'Produto',
    heading: 'Uma plataforma digital unificada para a mobilidade urbana',
    description: 'STM Balance é uma plataforma móvel que integra a gestão do cartão STM, o transporte público, as rotas e os serviços urbanos relacionados em uma única interface digital. O projeto evolui por etapas: das funções básicas para os usuários do STM para um ecossistema mais amplo de mobilidade urbana, voltado à conveniência, acessibilidade e integração de diferentes serviços.',
    implementedStatus: 'Implementado',
    developmentStatus: 'Em desenvolvimento',
    futureStatus: 'No futuro',
    features: [
      {
        title: 'Cartão STM',
        description: 'Consulta de saldo e acesso às principais informações do cartão STM diretamente pelo telefone.',
        status: 'implemented',
      },
      {
        title: 'NFC',
        description: 'Leitura do cartão STM por NFC em dispositivos móveis compatíveis.',
        status: 'implemented',
      },
      {
        title: 'Transporte em tempo real',
        description: 'Visualização de ônibus, paradas e trajetos no mapa com atualização dos dados de transporte.',
        status: 'implemented',
      },
      {
        title: 'Planejamento de viagens',
        description: 'Construção de opções de viagem considerando o transporte público, as conexões e os trechos a pé.',
        status: 'development',
      },
      {
        title: 'Serviços STM',
        description: 'Desenvolvimento de funções de recarga, histórico de viagens, cartões familiares e gestão dos cartões dos membros da família.',
        status: 'development',
      },
      {
        title: 'Expansão do ecossistema urbano',
        description: 'Integração de serviços adicionais de mobilidade urbana, incluindo táxis, delivery, estacionamento, micromobilidade e outras áreas.',
        status: 'future',
      },
    ],
  },

  en: {
    label: 'Product',
    heading: 'A unified digital platform for urban mobility',
    description: 'STM Balance is a mobile platform that brings together STM card management, public transport, routes and related urban services in a single digital interface. The project is being developed in stages: from essential functions for STM users toward a broader urban mobility ecosystem focused on convenience, accessibility and the integration of different services.',
    implementedStatus: 'Implemented',
    developmentStatus: 'In development',
    futureStatus: 'Future',
    features: [
      {
        title: 'STM Card',
        description: 'Balance checking and access to key STM card information directly from the phone.',
        status: 'implemented',
      },
      {
        title: 'NFC',
        description: 'STM card reading via NFC on compatible mobile devices.',
        status: 'implemented',
      },
      {
        title: 'Real-time transport',
        description: 'Display of buses, stops and routes on the map with updated transport data.',
        status: 'implemented',
      },
      {
        title: 'Trip planning',
        description: 'Building travel options that take into account public transport routes, connections and walking segments.',
        status: 'development',
      },
      {
        title: 'STM services',
        description: 'Development of top-up functions, trip history, family cards and management of family members’ cards.',
        status: 'development',
      },
      {
        title: 'Urban ecosystem expansion',
        description: 'Integration of additional urban mobility services, including taxis, delivery, parking, micromobility and other areas.',
        status: 'future',
      },
    ],
  },

  ru: {
    label: 'Продукт',
    heading: 'Единая цифровая платформа для городской мобильности',
    description: 'STM Balance — мобильная платформа, объединяющая работу с картой STM, общественный транспорт, маршруты и связанные городские сервисы в едином цифровом интерфейсе. Проект развивается поэтапно: от базовых функций для пользователей STM к более широкой экосистеме городской мобильности, ориентированной на удобство, доступность и интеграцию различных сервисов.',
    implementedStatus: 'Реализовано',
    developmentStatus: 'В развитии',
    futureStatus: 'В перспективе',
    features: [
      {
        title: 'Карта STM',
        description: 'Проверка баланса и доступ к основной информации карты STM непосредственно со смартфона.',
        status: 'implemented',
      },
      {
        title: 'NFC',
        description: 'Считывание карты STM через NFC на совместимых мобильных устройствах.',
        status: 'implemented',
      },
      {
        title: 'Транспорт в реальном времени',
        description: 'Отображение автобусов, остановок и маршрутов на карте с актуализацией транспортных данных.',
        status: 'implemented',
      },
      {
        title: 'Планирование поездок',
        description: 'Построение вариантов поездки с учётом маршрутов общественного транспорта, пересадок и пеших участков.',
        status: 'development',
      },
      {
        title: 'Сервисы STM',
        description: 'Развитие функций пополнения, истории поездок, семейных карт и управления картами членов семьи.',
        status: 'development',
      },
      {
        title: 'Расширение городской экосистемы',
        description: 'Интеграция дополнительных сервисов городской мобильности, включая такси, доставку, парковку, микромобильность и другие направления.',
        status: 'future',
      },
    ],
  },

  fr: {
    label: 'Produit',
    heading: 'Une plateforme numérique unifiée pour la mobilité urbaine',
    description: 'STM Balance est une plateforme mobile qui réunit la gestion de la carte STM, les transports publics, les itinéraires et les services urbains associés dans une seule interface numérique. Le projet se développe par étapes : des fonctions essentielles pour les utilisateurs de STM vers un écosystème plus large de mobilité urbaine, axé sur la simplicité, l’accessibilité et l’intégration de différents services.',
    implementedStatus: 'Implémenté',
    developmentStatus: 'En développement',
    futureStatus: 'À venir',
    features: [
      {
        title: 'Carte STM',
        description: 'Consultation du solde et accès aux principales informations de la carte STM directement depuis le téléphone.',
        status: 'implemented',
      },
      {
        title: 'NFC',
        description: 'Lecture de la carte STM via NFC sur les appareils mobiles compatibles.',
        status: 'implemented',
      },
      {
        title: 'Transport en temps réel',
        description: 'Affichage des bus, des arrêts et des itinéraires sur la carte avec actualisation des données de transport.',
        status: 'implemented',
      },
      {
        title: 'Planification des trajets',
        description: 'Création d’options de trajet tenant compte des transports publics, des correspondances et des portions à pied.',
        status: 'development',
      },
      {
        title: 'Services STM',
        description: 'Développement des fonctions de recharge, de l’historique des trajets, des cartes familiales et de la gestion des cartes des membres de la famille.',
        status: 'development',
      },
      {
        title: 'Extension de l’écosystème urbain',
        description: 'Intégration de services supplémentaires de mobilité urbaine, notamment les taxis, la livraison, le stationnement, la micromobilité et d’autres domaines.',
        status: 'future',
      },
    ],
  },

  de: {
    label: 'Produkt',
    heading: 'Eine einheitliche digitale Plattform für urbane Mobilität',
    description: 'STM Balance ist eine mobile Plattform, die die Verwaltung der STM-Karte, den öffentlichen Verkehr, Routen und damit verbundene städtische Dienste in einer einzigen digitalen Oberfläche zusammenführt. Das Projekt wird schrittweise entwickelt: von grundlegenden Funktionen für STM-Nutzer hin zu einem umfassenderen Ökosystem für urbane Mobilität mit Fokus auf Komfort, Zugänglichkeit und die Integration verschiedener Dienste.',
    implementedStatus: 'Implementiert',
    developmentStatus: 'In Entwicklung',
    futureStatus: 'Geplant',
    features: [
      {
        title: 'STM-Karte',
        description: 'Guthabenabfrage und Zugriff auf die wichtigsten Informationen der STM-Karte direkt über das Smartphone.',
        status: 'implemented',
      },
      {
        title: 'NFC',
        description: 'Auslesen der STM-Karte über NFC auf kompatiblen Mobilgeräten.',
        status: 'implemented',
      },
      {
        title: 'Verkehr in Echtzeit',
        description: 'Anzeige von Bussen, Haltestellen und Routen auf der Karte mit aktualisierten Verkehrsdaten.',
        status: 'implemented',
      },
      {
        title: 'Reiseplanung',
        description: 'Erstellung von Fahrtoptionen unter Berücksichtigung des öffentlichen Verkehrs, von Umstiegen und Fußwegen.',
        status: 'development',
      },
      {
        title: 'STM-Dienste',
        description: 'Entwicklung von Funktionen für Aufladungen, Fahrtverlauf, Familienkarten und die Verwaltung der Karten von Familienmitgliedern.',
        status: 'development',
      },
      {
        title: 'Erweiterung des urbanen Ökosystems',
        description: 'Integration zusätzlicher Dienste für urbane Mobilität, darunter Taxis, Lieferdienste, Parken, Mikromobilität und weitere Bereiche.',
        status: 'future',
      },
    ],
  },
};
