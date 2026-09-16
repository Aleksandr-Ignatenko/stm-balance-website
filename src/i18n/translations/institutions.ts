import type { Language } from '../languages';

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
