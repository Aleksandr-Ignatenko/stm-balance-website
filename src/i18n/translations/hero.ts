import type { Language } from '../languages';

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
