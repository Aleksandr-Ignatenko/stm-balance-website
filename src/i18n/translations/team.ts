import type { Language } from '../languages';

type TeamTranslations = {
  label: string;
  heading: string;
  description: string;
};

export const teamTranslations: Record<Language, TeamTranslations> = {
  es: {
    label: 'Equipo',
    heading: 'Un equipo de profesionales que crea STM Balance',
    description: 'STM Balance es desarrollado por un equipo de especialistas en producto, aplicaciones móviles, infraestructura, DevOps, diseño UX/UI y control de calidad. Cada miembro es responsable de su área, y el trabajo conjunto del equipo permite desarrollar STM Balance como una plataforma de movilidad urbana sólida, cómoda y escalable.',
  },

  pt: {
    label: 'Equipe',
    heading: 'Uma equipe de profissionais que desenvolve o STM Balance',
    description: 'STM Balance é desenvolvido por uma equipe de especialistas em produto, aplicativos móveis, infraestrutura, DevOps, design UX/UI e controle de qualidade. Cada integrante é responsável por sua área, e o trabalho conjunto da equipe permite desenvolver STM Balance como uma plataforma de mobilidade urbana sólida, conveniente e escalável.',
  },

  en: {
    label: 'Team',
    heading: 'A team of professionals building STM Balance',
    description: 'STM Balance is developed by a team of specialists in product development, mobile applications, infrastructure, DevOps, UX/UI design and quality assurance. Each team member is responsible for their own area, while their combined expertise allows STM Balance to evolve as a reliable, user-friendly and scalable urban mobility platform.',
  },

  ru: {
    label: 'Команда',
    heading: 'Команда профессионалов, создающая STM Balance',
    description: 'Над STM Balance работает команда специалистов в области продуктовой разработки, мобильных приложений, инфраструктуры, DevOps, UX/UI-дизайна и контроля качества. Каждый участник отвечает за своё направление, а совместная работа команды позволяет развивать STM Balance как технологически устойчивую, удобную и масштабируемую платформу городской мобильности.',
  },

  fr: {
    label: 'Équipe',
    heading: 'Une équipe de professionnels qui développe STM Balance',
    description: 'STM Balance est développé par une équipe de spécialistes du produit, des applications mobiles, de l’infrastructure, du DevOps, du design UX/UI et du contrôle qualité. Chaque membre est responsable de son domaine, et le travail collectif de l’équipe permet de développer STM Balance comme une plateforme de mobilité urbaine fiable, pratique et évolutive.',
  },

  de: {
    label: 'Team',
    heading: 'Ein Team von Fachleuten, das STM Balance entwickelt',
    description: 'STM Balance wird von einem Team aus Fachleuten für Produktentwicklung, mobile Anwendungen, Infrastruktur, DevOps, UX/UI-Design und Qualitätssicherung entwickelt. Jedes Teammitglied verantwortet seinen eigenen Bereich, und die gemeinsame Arbeit ermöglicht es, STM Balance als zuverlässige, benutzerfreundliche und skalierbare Plattform für urbane Mobilität weiterzuentwickeln.',
  },
};
