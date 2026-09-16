import type { Language } from '../languages';

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
