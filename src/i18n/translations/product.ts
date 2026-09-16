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
    description: 'STM Balance es una plataforma móvil para interactuar con el sistema STM y la movilidad urbana. Reúne en una única interfaz digital las funciones de la tarjeta STM, información sobre el transporte público, recorridos, paradas, movimiento de los vehículos y otros servicios relacionados.',
    goalLabel: 'Nuestro objetivo',
    goalDescription: 'Nuestro objetivo es crear una plataforma digital unificada que amplíe las posibilidades del sistema STM: desde la gestión de la tarjeta y el saldo hasta el pago de distintos servicios urbanos. STM Balance busca reunir en una sola aplicación las funciones relacionadas con la movilidad urbana y ofrecer al usuario una herramienta cómoda para gestionarlas de acuerdo con sus necesidades.',
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
    description: 'STM Balance é uma plataforma móvel para interação com o sistema STM e a mobilidade urbana. Ela reúne em uma única interface digital as funções do cartão STM, informações sobre o transporte público, rotas, paradas, movimento dos veículos e outros serviços relacionados.',
    goalLabel: 'Nosso objetivo',
    goalDescription: 'Nosso objetivo é criar uma plataforma digital unificada que amplie as possibilidades do sistema STM: desde a gestão do cartão e do saldo até o pagamento de diferentes serviços urbanos. STM Balance busca reunir em um único aplicativo as funções relacionadas à mobilidade urbana e oferecer ao usuário uma ferramenta prática para gerenciá-las de acordo com suas necessidades.',
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
    description: 'STM Balance is a mobile platform for interacting with the STM system and urban mobility. It brings together STM card functions, public transport information, routes, stops, vehicle movements and other related services in a single digital interface.',
    goalLabel: 'Our goal',
    goalDescription: 'Our goal is to create a unified digital platform that expands the possibilities of the STM system: from managing the card and its balance to paying for a variety of urban services. STM Balance aims to bring urban mobility functions together in one application and provide users with a convenient tool to manage them according to their needs.',
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
    description: 'STM Balance — мобильная платформа для работы с системой STM и городской мобильностью. Она объединяет в одном цифровом интерфейсе функции карты STM, информацию об общественном транспорте, маршруты, остановки, движение транспорта и другие связанные сервисы.',
    goalLabel: 'Наша цель',
    goalDescription: 'Наша цель — создать единую цифровую платформу, которая расширяет возможности системы STM: от управления картой и балансом до оплаты различных городских сервисов. STM Balance должен объединить связанные с городской мобильностью функции в одном приложении и дать пользователю удобный инструмент для управления ими в соответствии со своими потребностями.',
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
    description: 'STM Balance est une plateforme mobile permettant d’interagir avec le système STM et la mobilité urbaine. Elle réunit dans une seule interface numérique les fonctions de la carte STM, les informations sur les transports publics, les itinéraires, les arrêts, le déplacement des véhicules et d’autres services associés.',
    goalLabel: 'Notre objectif',
    goalDescription: 'Notre objectif est de créer une plateforme numérique unifiée qui élargisse les possibilités du système STM : de la gestion de la carte et de son solde jusqu’au paiement de différents services urbains. STM Balance vise à réunir dans une seule application les fonctions liées à la mobilité urbaine et à offrir aux utilisateurs un outil pratique pour les gérer selon leurs besoins.',
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
    description: 'STM Balance ist eine mobile Plattform für die Nutzung des STM-Systems und urbaner Mobilitätsangebote. Sie vereint Funktionen der STM-Karte, Informationen zum öffentlichen Verkehr, Routen, Haltestellen, Fahrzeugbewegungen und weitere damit verbundene Dienste in einer einzigen digitalen Oberfläche.',
    goalLabel: 'Unser Ziel',
    goalDescription: 'Unser Ziel ist es, eine einheitliche digitale Plattform zu schaffen, die die Möglichkeiten des STM-Systems erweitert: von der Verwaltung der Karte und des Guthabens bis zur Bezahlung verschiedener städtischer Dienstleistungen. STM Balance soll Funktionen rund um urbane Mobilität in einer einzigen Anwendung bündeln und den Nutzern ein komfortables Werkzeug bieten, um diese entsprechend ihren Bedürfnissen zu verwalten.',
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
