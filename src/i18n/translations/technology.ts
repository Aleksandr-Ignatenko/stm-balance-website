import type { Language } from '../languages';

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
