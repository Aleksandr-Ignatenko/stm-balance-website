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
    heading: 'Plataforma tecnológica para la movilidad urbana moderna',
    description: 'STM Balance integra tecnologías móviles, NFC, geolocalización, servicios cartográficos y datos en tiempo real en una única base tecnológica. La arquitectura de la plataforma está diseñada para facilitar su expansión futura, la integración con la infraestructura de transporte, servicios externos y nuevas soluciones digitales de movilidad urbana.',
    technologies: [
      {
        title: 'NFC',
        description: 'Interacción con tarjetas STM mediante NFC en dispositivos móviles compatibles para acceder de forma rápida y sencilla a la información de la tarjeta.',
      },
      {
        title: 'Geolocalización',
        description: 'Determinación de la ubicación del usuario y visualización de elementos actuales de movilidad urbana teniendo en cuenta su posición.',
      },
      {
        title: 'Datos en tiempo real',
        description: 'Recepción y actualización de información de transporte, incluida la posición de los autobuses, su movimiento a lo largo de las rutas y otros datos dinámicos.',
      },
      {
        title: 'Mapas y planificación de rutas',
        description: 'Visualización de paradas, rutas, elementos de transporte y construcción de opciones de desplazamiento dentro de una única interfaz cartográfica.',
      },
      {
        title: 'Arquitectura escalable',
        description: 'Base tecnológica diseñada para incorporar nuevas funciones, servicios externos, integraciones institucionales y continuar desarrollando el ecosistema STM Balance.',
      },
    ],
  },

  pt: {
    label: 'Tecnologia',
    heading: 'Plataforma tecnológica para a mobilidade urbana moderna',
    description: 'STM Balance integra tecnologias móveis, NFC, geolocalização, serviços cartográficos e dados em tempo real em uma única base tecnológica. A arquitetura da plataforma é desenvolvida para permitir sua expansão futura, a integração com a infraestrutura de transporte, serviços externos e novas soluções digitais de mobilidade urbana.',
    technologies: [
      {
        title: 'NFC',
        description: 'Interação com cartões STM por NFC em dispositivos móveis compatíveis para acesso rápido e simples às informações do cartão.',
      },
      {
        title: 'Geolocalização',
        description: 'Determinação da localização do usuário e visualização de elementos atuais da mobilidade urbana de acordo com sua posição.',
      },
      {
        title: 'Dados em tempo real',
        description: 'Recepção e atualização de informações de transporte, incluindo a posição dos ônibus, seu movimento ao longo das rotas e outros dados dinâmicos.',
      },
      {
        title: 'Mapas e planejamento de rotas',
        description: 'Visualização de paradas, rotas, elementos de transporte e construção de opções de deslocamento em uma única interface cartográfica.',
      },
      {
        title: 'Arquitetura escalável',
        description: 'Base tecnológica preparada para incorporar novas funções, serviços externos, integrações institucionais e continuar desenvolvendo o ecossistema STM Balance.',
      },
    ],
  },

  en: {
    label: 'Technology',
    heading: 'A technology platform for modern urban mobility',
    description: 'STM Balance brings together mobile technologies, NFC, geolocation, mapping services and real-time data within a unified technology foundation. The platform architecture is designed for future expansion, integration with transport infrastructure, external services and new digital urban mobility solutions.',
    technologies: [
      {
        title: 'NFC',
        description: 'Interaction with STM cards through NFC on compatible mobile devices for fast and convenient access to card information.',
      },
      {
        title: 'Geolocation',
        description: 'Determining the user’s location and displaying relevant urban mobility elements based on their current position.',
      },
      {
        title: 'Real-time data',
        description: 'Receiving and updating transport information, including bus positions, movement along routes and other dynamic data.',
      },
      {
        title: 'Maps and route planning',
        description: 'Displaying stops, routes and transport objects, and building travel options within a unified mapping interface.',
      },
      {
        title: 'Scalable architecture',
        description: 'A technology foundation designed to support new features, external services, institutional integrations and the continued development of the STM Balance ecosystem.',
      },
    ],
  },

  ru: {
    label: 'Технологии',
    heading: 'Технологическая платформа для современной городской мобильности',
    description: 'STM Balance объединяет мобильные технологии, NFC, геолокацию, картографические сервисы и данные в реальном времени в единую технологическую основу. Архитектура платформы создаётся с расчётом на дальнейшее расширение, интеграцию с транспортной инфраструктурой, внешними сервисами и новыми цифровыми решениями городской мобильности.',
    technologies: [
      {
        title: 'NFC',
        description: 'Работа с картами STM через NFC на совместимых мобильных устройствах для быстрого и удобного доступа к данным карты.',
      },
      {
        title: 'Геолокация',
        description: 'Определение местоположения пользователя и отображение актуальных объектов городской мобильности с учётом его текущей позиции.',
      },
      {
        title: 'Данные в реальном времени',
        description: 'Получение и обновление транспортной информации, включая положение автобусов, движение по маршрутам и другие динамические данные.',
      },
      {
        title: 'Карты и маршрутизация',
        description: 'Отображение остановок, маршрутов, транспортных объектов и построение вариантов передвижения в едином картографическом интерфейсе.',
      },
      {
        title: 'Масштабируемая архитектура',
        description: 'Технологическая основа, рассчитанная на подключение новых функций, внешних сервисов, институциональных интеграций и дальнейшее развитие экосистемы STM Balance.',
      },
    ],
  },

  fr: {
    label: 'Technologie',
    heading: 'Une plateforme technologique pour la mobilité urbaine moderne',
    description: 'STM Balance réunit les technologies mobiles, le NFC, la géolocalisation, les services cartographiques et les données en temps réel au sein d’une base technologique unifiée. L’architecture de la plateforme est conçue pour permettre son évolution future, son intégration avec les infrastructures de transport, les services externes et de nouvelles solutions numériques de mobilité urbaine.',
    technologies: [
      {
        title: 'NFC',
        description: 'Interaction avec les cartes STM via NFC sur les appareils mobiles compatibles pour un accès rapide et pratique aux informations de la carte.',
      },
      {
        title: 'Géolocalisation',
        description: 'Détermination de la position de l’utilisateur et affichage des éléments actuels de mobilité urbaine en fonction de sa localisation.',
      },
      {
        title: 'Données en temps réel',
        description: 'Réception et mise à jour des informations de transport, notamment la position des bus, leurs déplacements sur les itinéraires et d’autres données dynamiques.',
      },
      {
        title: 'Cartes et planification des itinéraires',
        description: 'Affichage des arrêts, itinéraires et éléments de transport, ainsi que création d’options de déplacement dans une interface cartographique unifiée.',
      },
      {
        title: 'Architecture évolutive',
        description: 'Une base technologique conçue pour intégrer de nouvelles fonctions, des services externes, des intégrations institutionnelles et poursuivre le développement de l’écosystème STM Balance.',
      },
    ],
  },

  de: {
    label: 'Technologie',
    heading: 'Eine Technologieplattform für moderne urbane Mobilität',
    description: 'STM Balance vereint mobile Technologien, NFC, Geolokalisierung, Kartendienste und Echtzeitdaten in einer einheitlichen technologischen Grundlage. Die Plattformarchitektur ist auf zukünftige Erweiterungen, die Integration mit Verkehrsinfrastruktur, externen Diensten und neuen digitalen Lösungen für urbane Mobilität ausgelegt.',
    technologies: [
      {
        title: 'NFC',
        description: 'Interaktion mit STM-Karten über NFC auf kompatiblen Mobilgeräten für einen schnellen und komfortablen Zugriff auf Kartendaten.',
      },
      {
        title: 'Geolokalisierung',
        description: 'Bestimmung des Nutzerstandorts und Anzeige aktueller Elemente der urbanen Mobilität unter Berücksichtigung der momentanen Position.',
      },
      {
        title: 'Echtzeitdaten',
        description: 'Empfang und Aktualisierung von Verkehrsinformationen, einschließlich Buspositionen, Bewegungen entlang der Routen und weiterer dynamischer Daten.',
      },
      {
        title: 'Karten und Routenplanung',
        description: 'Darstellung von Haltestellen, Routen und Verkehrsobjekten sowie Erstellung von Fahrtoptionen in einer einheitlichen Kartenoberfläche.',
      },
      {
        title: 'Skalierbare Architektur',
        description: 'Eine technologische Grundlage für neue Funktionen, externe Dienste, institutionelle Integrationen und die weitere Entwicklung des STM-Balance-Ökosystems.',
      },
    ],
  },
};
