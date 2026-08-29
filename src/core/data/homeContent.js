// Assuming you have icons imported like:
import { Target, TrendingUp, Users, Award, Heart, BookOpen, Trees, Coins, Shield, Globe, Eye, Building2, MessageSquare } from 'lucide-react';

export const homeContent = {
  navItems: [
      { label: "Accueil", href: "/" },
      { label: "Qui sommes-nous", href: "/about" },
      { label: "Actualités", href: "/news" },
      { label: "Nos Projets", href: "/projects" },
      { label: "Documentation", href: "/documents" },
      { label: "Contact", href: "/contact" },
  ],

  topNavIem: {
    contactInfo: [],
    socialMediaInfo: [],
    platformLink: "/platform"
  },
  
  about: {
    title: "Qui sommes-nous ?",
    description: "Créée en 1993, l'ONG ADICO (Appui au Développement Intégré des Communautés) est une organisation malienne œuvrant pour le plein épanouissement des couches vulnérables. Nous accompagnons activement les femmes, les enfants et les personnes handicapées à travers des actions communautaires de proximité.",
    mission: {
      title: "Notre Mission",
      description: "S'engager en faveur des couches vulnérables pour un développement intégré, inclusif et durable au Mali.",
      points: [
        "Promotion de la santé, de la nutrition et de l'éducation inclusive",
        "Protection de l'environnement et développement agro-forestier",
        "Appui aux activités génératrices de revenus (AGR) et à la microfinance",
        "Renforcement de la gouvernance locale et de la citoyenneté",
        "Accompagnement et autonomisation des femmes et des personnes handicapées",
      ],
    },
  },

  stats: {
    title: "Nos Chiffres Clés",
    subtitle: "Impact tangible de notre action pour le plein épanouissement des couches vulnérables au Mali",
    data: [
      {
        id: 1,
        icon: <Heart size={32} />,
        endValue: 30,
        suffix: '+',
        label: 'Années d’Engagement',
        duration: 2,
        color: '#10b981'
      },
      {
        id: 2,
        icon: <Users size={32} />,
        endValue: 5000,
        suffix: '+',
        label: 'Femmes et Enfants Soutenus',
        duration: 2.5,
        color: '#3b82f6'
      },
      {
        id: 3,
        icon: <Trees size={32} />,
        endValue: 40,
        suffix: '+',
        label: 'Projets Communautaires',
        duration: 2.2,
        color: '#0ea5e9'
      },
      {
        id: 4,
        icon: <Coins size={32} />,
        endValue: 150,
        suffix: '+',
        label: 'Caisses d’Épargne & Groupements',
        duration: 1.5,
        color: '#8b5cf6'
      }
    ]
  },

  // Interventions Section
  features: {
    title: "Nos Domaines d'Intervention",
    subtitle: "Des actions de proximité pour le plein épanouissement des couches vulnérables au Mali",
    data: [
      {
        id: 1,
        icon: <Heart size={28} />,
        title: 'Santé & Nutrition',
        description: 'Promotion de la santé de la reproduction, de la nutrition et de la prise en charge des couches vulnérables.',
        color: '#10b981'
      },
      {
        id: 2,
        icon: <BookOpen size={28} />,
        title: 'Éducation & Alphabétisation',
        description: 'Soutien à l’éducation de base, alphabétisation et accès à l’éducation inclusive pour tous.',
        color: '#0ea5e9'
      },
      {
        id: 3,
        icon: <Trees size={28} />,
        title: 'Agro-foresterie & Environnement',
        description: 'Protection de l’environnement, aménagement de bas-fonds et résilience climatique rurale.',
        color: '#22c55e'
      },
      {
        id: 4,
        icon: <Coins size={28} />,
        title: 'Microfinance & AGR',
        description: 'Mise en place de caisses d’épargne et appui aux activités génératrices de revenus pour les femmes.',
        color: '#f59e0b'
      },
      {
        id: 5,
        icon: <Users size={28} />,
        title: 'Gouvernance Locale',
        description: 'Renforcement des capacités organisationnelles, de la citoyenneté et de la participation communautaire.',
        color: '#8b5cf6'
      },
      {
        id: 6,
        icon: <Shield size={28} />,
        title: 'Protection des Groupes Vulnérables',
        description: 'Actions ciblées pour l’inclusion et le bien-être des femmes, des enfants et des personnes handicapées.',
        color: '#3b82f6'
      },
      {
        id: 7,
        icon: <Globe size={28} />,
        title: 'Partenariats & Collaboration',
        description: 'Travail en synergie avec les collectivités, les services techniques et les partenaires au développement.',
        color: '#6366f1'
      },
      {
        id: 8,
        icon: <Award size={28} />,
        title: 'Sécurité Alimentaire',
        description: 'Initiatives communautaires visant à renforcer l’autonomie alimentaire et les moyens d’existence durables.',
        color: '#ec4899'
      }
    ]
  },

  achievements: [
    {
      id: 1,
      icon: <Target size={24} />,
      year: '2023',
      title: 'Actions Communautaires et Vulnérabilités',
      description: 'Renforcement du soutien ciblé aux femmes, aux enfants et aux personnes handicapées à travers des programmes de proximité.',
      color: '#10b981'
    },
    {
      id: 2,
      icon: <TrendingUp size={24} />,
      year: '2022',
      title: 'Appui aux Caisses d’Épargne',
      description: 'Structuration et développement d’initiatives locales de microfinance pour soutenir les activités génératrices de revenus.',
      color: '#3b82f6'
    },
    {
      id: 3,
      icon: <Users size={24} />,
      year: '2023',
      title: 'Campagnes d’Alphabétisation et de Santé',
      description: 'Déploiement de programmes d’éducation de base, d’alphabétisation et de sensibilisation à la santé de la reproduction.',
      color: '#8b5cf6'
    },
    {
      id: 4,
      icon: <Award size={24} />,
      year: '2024',
      title: 'Aménagement de Bas-fonds et Agro-foresterie',
      description: 'Mise en œuvre de projets axés sur la protection environnementale et l’amélioration de la résilience climatique rurale.',
      color: '#f59e0b'
    }
  ],
  
  values: {
    title: "Nos Valeurs Fondamentales",
    subtitle: "Les principes qui guident chaque action et décision au sein de l'ONG ADICO.",
    data: [
      {
        id: 1,
        icon: <Heart size={24} />,
        title: 'Inclusion',
        description: 'Intégration systématique et respect des droits des couches vulnérables, notamment les femmes, les enfants et les personnes handicapées.',
        color: '#ef4444'
      },
      {
        id: 2,
        icon: <Eye size={24} />,
        title: 'Transparence',
        description: 'Dans la gestion des ressources et la redevabilité envers nos bénéficiaires et partenaires[cite: 1].',
        color: '#3b82f6'
      },
      {
        id: 3,
        icon: <Target size={24} />,
        title: 'Solidarité',
        description: 'Action collective et entraide au cœur des communautés locales pour un développement partagé.',
        color: '#8b5cf6'
      },
      {
        id: 4,
        icon: <Shield size={24} />,
        title: 'Durabilité',
        description: 'Pérennisation des acquis et des actions entreprises pour un impact social à long terme.',
        color: '#10b981'
      },
      {
        id: 5,
        icon: <Users size={24} />,
        title: 'Participation Locale',
        description: 'Implication active des populations locales dans la conception et la mise en œuvre des projets[cite: 1].',
        color: '#f59e0b'
      },
      {
        id: 6,
        icon: <TrendingUp size={24} />,
        title: 'Engagement',
        description: 'Dévouement constant pour l’épanouissement socio-économique des communautés depuis 1993[cite: 1].',
        color: '#ec4899'
      },
      {
        id: 7,
        icon: <Globe size={24} />,
        title: 'Respect',
        description: 'De l’environnement, des cultures locales et des valeurs traditionnelles des communautés d’intervention.',
        color: '#0ea5e9'
      },
      {
        id: 8,
        icon: <Award size={24} />,
        title: 'Responsabilité',
        description: 'Envers nos bénéficiaires, nos partenaires techniques et financiers, et les institutions de tutelle.',
        color: '#6366f1'
      }
    ]
  },
  
  partners: {
    title: "Nos Partenaires",
    subtitle: "L'ONG ADICO collabore étroitement avec diverses institutions pour maximiser son impact social.",
    data: [
      { name: "Ministères de Tutelle (Santé, Éducation, Femme)", icon: <Building2 size={28} />, color: "#0f766e" },
      { name: "Collectivités Territoriales et Mairies", icon: <Users size={28} />, color: "#3b82f6" },
      { name: "Organisations à Base Communautaire (OBC)", icon: <Shield size={28} />, color: "#ef4444" },
      { name: "Partenaires Techniques et Financiers (PTF)", icon: <Globe size={28} />, color: "#10b981" },
      { name: "Réseaux d'ONG Nationales et Internationales", icon: <Award size={28} />, color: "#f59e0b" },
      { name: "Associations Féminines et Groupements", icon: <Heart size={28} />, color: "#ec4899" },
      { name: "Structures d'Alphabétisation et d'Éducation", icon: <BookOpen size={28} />, color: "#0ea5e9" },
      { name: "Comités Locaux de Développement", icon: <Trees size={28} />, color: "#22c55e" },
    ],

    benefits: [
      'Plein épanouissement des couches vulnérables (femmes, enfants, personnes handicapées)',
      'Mobilisation de ressources pour le développement communautaire intégré',
      'Renforcement des capacités organisationnelles et de la citoyenneté locale',
      'Partage d’expertises à travers des actions de proximité',
      'Amélioration de la gouvernance locale et de la redevabilité',
      'Pérennisation et durabilité des actions entreprises depuis 1993'
    ]
  },

  ctaSectionContent: {
    title: "Rejoignez notre mission",
    description: "Ensemble, œuvrons pour le plein épanouissement des couches vulnérables et un développement inclusif et durable au Mali.",
    actions: [
      {
        label: 'Nous contacter',
        href: '/contact',
        icon: MessageSquare,
      },
      {
        label: 'À propos de nous',
        href: '/about',
        icon: Users,
        variant: 'secondary',
      },
    ]
  },

  contacts: {
    organizationName: "ONG ADICO",
    country: "Mali",
    tagline: "S'engager en faveur des couches vulnérables pour un développement intégré, inclusif et durable au Mali depuis 1993.",
    address: {
      street: "Siège Social",
      city: "Bamako / Localités d'intervention",
      country: "Mali",
      full: "ONG ADICO, Siège Social, Mali"
    },
    phone: {
      display: "+223 20 20 20 20",
      value: "+22320202020"
    },
    email: {
      primary: "contact@adico-mali.org",
      support: "support@adico-mali.org"
    },
    hours: {
      days: "Lundi à Vendredi",
      time: "de 8h à 16h30",
      weekdays:"Lun-Ven: 8h à 16h30"
    },
    socials: {
      facebook: "https://facebook.com/adicomali",
      twitter: "https://twitter.com/adicomali",
      linkedin: "https://linkedin.com/company/adicomali",
      instagram: "https://instagram.com/adicomali"
    },
    legalLinks: [
      { label: 'Politique de confidentialité', href: '/privacy' },
      { label: "Conditions d'utilisation", href: '/terms' },
      { label: 'Accessibilité', href: '/accessibility' },
      { label: 'Plan du site', href: '/sitemap' },
    ],
    quickLinks: [
      { label: 'Notre Mission', href: '/about#mission' },
      { label: 'Nos Projets', href: '/projects' },
      { label: 'Actualités', href: '/news' },
      { label: "Domaines d'intervention", href: '/about#domains' },
    ]
  }
};

export default homeContent;