import { Map, FolderTree, Users, Target, Droplets, Sprout, Building, HeartHandshake, BookOpen, Trees, Coins, Heart, Shield } from 'lucide-react';

export const projectsHero = {
  title: "Nos Projets de Développementt",
  description: "Découvrez l&apos;ensemble de nos projets agricoles, d&apos;hydraulique rurale et d&apos;infrastructures qui transforment durablement la vallée du fleuve Sénégal.",
  stats: [
    {
      icon: <FolderTree />,
      number: '25+',
      label: 'Projets Réalisés',
      color: '#2563eb'
    },
    {
      icon: <Map />,
      number: '15',
      label: 'Communes Bénéficiaires',
      color: '#10b981'
    },
    {
      icon: <Target />,
      number: '5000+',
      label: 'Hectares Aménagés',
      color: '#7c3aed'
    },
    {
      icon: <Users />,
      number: '2000+',
      label: 'Agriculteurs Impactés',
      color: '#f59e0b'
    }
  ]
}

// Sample project data - replace with API call
export const projectsData = [
  {
    id: 1,
    title: "Autonomisation Économique des Femmes par le Maraîchage",
    slug: 'autonomisation-femmes-maraichage',
    description: 'Aménagement de périmètres maraîchers goutte-à-goutte solaires au profit des groupements féminins locaux.',
    category: 'autonomisation',
    categoryLabel: 'Autonomisation & Genre',
    categoryIcon: <HeartHandshake size={20} />,
    status: 'en-cours',
    location: 'Koulikoro',
    startDate: '2025',
    beneficiaries: 450,
    progress: 75,
    image: '/projects/maraichage-femmes.jpg'
  },
  {
    id: 2,
    title: 'Centres d’Alphabétisation Fonctionnelle Inclusive',
    slug: 'alphabetisation-fonctionnelle-inclusive',
    description: 'Ouverture et équipement de centres d’alphabétisation adaptés aux femmes et aux personnes handicapées.',
    category: 'education',
    categoryLabel: 'Éducation Inclusive',
    categoryIcon: <BookOpen size={20} />,
    status: 'acheve',
    location: 'Ségou',
    startDate: '2023',
    beneficiaries: 600,
    progress: 100,
    image: '/projects/alphabetisation.jpg'
  },
  {
    id: 3,
    title: 'Restauration des Sols et Agro-Foresterie Communautaire',
    slug: 'restauration-sols-agroforesterie',
    description: 'Aménagement de bas-fonds et reboisement communautaire pour lutter contre la désertification.',
    category: 'environnement',
    categoryLabel: 'Protection Environnementale',
    categoryIcon: <Trees size={20} />,
    status: 'en-cours',
    location: 'Sikasso',
    startDate: '2024',
    beneficiaries: 800,
    progress: 60,
    image: '/projects/agroforesterie.jpg'
  },
  {
    id: 4,
    title: 'Appui aux Caisses d’Épargne et de Crédit Autogérées (CECA)',
    slug: 'caisses-epargne-credit-ceca',
    description: 'Mise en place de micro-crédits et formation en gestion financière pour les activités génératrices de revenus (AGR).',
    category: 'microfinance',
    categoryLabel: 'Microfinance & AGR',
    categoryIcon: <Coins size={20} />,
    status: 'en-cours',
    location: 'Mopti',
    startDate: '2024',
    beneficiaries: 1200,
    progress: 80,
    image: '/projects/microfinance.jpg'
  },
  {
    id: 5,
    title: 'Programme Maternité Sans Risque et Santé de la Reproduction',
    slug: 'sante-reproduction-maternite',
    description: 'Campagnes de sensibilisation, dotation en kits d’hygiène et soutien aux centres de santé communautaires.',
    category: 'sante',
    categoryLabel: 'Santé & Nutrition',
    categoryIcon: <Heart size={20} />,
    status: 'planifie',
    location: 'Gao',
    startDate: '2026',
    beneficiaries: 1500,
    progress: 0,
    image: '/projects/sante-maternelle.jpg'
  },
  {
    id: 6,
    title: 'Renforcement de la Gouvernance Locale et Citoyenneté',
    slug: 'gouvernance-locale-citoyennete',
    description: 'Formations des comités locaux de développement sur l’inclusivité et la prise en compte du handicap.',
    category: 'gouvernance',
    categoryLabel: 'Gouvernance Locale',
    categoryIcon: <Shield size={20} />,
    status: 'acheve',
    location: 'Bamako',
    startDate: '2023',
    beneficiaries: 300,
    progress: 100,
    image: '/projects/gouvernance.jpg'
  }
];