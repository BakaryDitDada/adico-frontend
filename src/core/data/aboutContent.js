import {
  Building2,
  MapPin,
  Calendar,
  Target,
  Users,
  TrendingUp,
  Eye,
  Trophy,
  Globe,
  Award,
  Coins,
  Trees,
  Heart,
  HandHeart,
  Shield,
  Leaf,
} from 'lucide-react';

export const aboutHeroData = {
  eyebrow: 'À PROPOS',

  title: 'Construire un développement',
  highlightedTitle: 'communautaire durable',
  titleSuffix: 'Depuis 1993',

  subtitle: (
    <>
      L&apos;
      <span>
        Association pour le Développement de l&apos;Initiative Communautaire (ADICO)
      </span>{' '}
      est une organisation de développement communautaire à but non lucratif,
      laïque et apolitique. Elle œuvre aux côtés des populations pour promouvoir
      un développement socio-économique durable et participatif.
    </>
  ),

  stats: [
    {
      value: '33+',
      label: "Années d'engagement",
      icon: Calendar,
    },
    {
      value: '25+',
      label: 'Personnel permanent',
      icon: Users,
    },
    {
      value: '5',
      label: "Zones d'intervention",
      // Mocked value: synthesized from the 5 geographic areas cited in the report
      icon: MapPin,
    },
    {
      value: '7+',
      label: "Domaines d'intervention",
      // Mocked value: used as a compact UI representation of ADICO's sectors
      icon: Target,
    },
  ],

  primaryCTA: {
    label: 'Nous rejoindre',
    href: '/contact',
  },

  secondaryCTA: {
    label: 'Découvrir ADICO',
    href: '#about',
  },

  badge: {
    label: "Engagée depuis 1993",
    // Mocked value: concise presentation text derived from ADICO's history
    icon: TrendingUp,
  },

  organization: {
    name: 'ADICO',
    fullName:
      "Association pour le Développement de l'Initiative Communautaire",
    shortDescription: 'Organisation de développement communautaire',
  },

  location: {
    city: 'Bamako',
    country: 'Mali',
    founded: 'Depuis 1993',
    full: "Bamako, Mali"
    // The report gives the Bamako headquarters address.
    // This shorter presentation is adapted for the hero UI.
  },

  cardStats: [
    {
      number: '33+',
      label: "Années d'expérience",
      // Based on ADICO's creation in 1993
    },
    {
      number: '25+',
      label: 'Personnel permanent',
    },
    {
      number: '11',
      label: 'Membres du Bureau exécutif',
    },
    {
      number: '7',
      label: 'Membres du CAP',
    },
  ],

  description:
    "ADICO s’engage en faveur des couches vulnérables de la société, notamment les femmes, les enfants et les personnes handicapées, et intervient dans plusieurs domaines du développement communautaire au Mali.",

  video: {
    // Mocked value: replace with ADICO's official video ID when available
    youtubeId: 'dQw4w9WgXcQ',
    title: 'Découvrez ADICO et ses actions au Mali',
  },
};

export const missionAndVision = {
  title: "Notre raison d'être",
  subtitle: "Au cœur de notre action : une mission claire, une vision ambitieuse et des valeurs encrées dans le développement durable.",
  cards: [
    {
      id: "mission",
      icon: <Target size={28} />,
      color: '#2563eb',
      title: "Notre Mission",
      description: "S'engager en faveur des couches vulnérables pour un développement intégré, inclusif et durable au Mali.",
      points: [
        "Promotion de la santé, nutrition et éducation inclusive",
        "Protection de l'environnement et agro-foresterie",
        "Appui à la microfinance et aux activités génératrices de revenus",
        "Autonomisation des femmes, des enfants et des personnes handicapées"
      ]
    },
    {
      id: "vision",
      icon: <Eye size={28} />,
      color: '#7c3aed',
      title: 'Notre Vision',
      description: 'Un Mali où chaque individu et communauté dispose des moyens nécessaires pour être maître de son propre épanouissement.',
      points: [
        "Renforcement durable des capacités communautaires",
        "Accès équitable aux ressources de développement",
        "Participation citoyenne active aux projets locaux",
        "Autonomie socio-économique des populations"
      ]
    },
    {
      id: "valeurs",
      icon: <Trophy size={28} />,
      color: '#10b981',
      title: "Nos Valeurs",
      description: "Les principes fondamentaux qui guident chacune des interventions de l'ONG ADICO.",
      points: [
        "Inclusion & respect des droits des vulnérables",
        "Transparence et redevabilité envers nos partenaires",
        "Solidarité et participation communautaire",
        "Pérennisation et durabilité des actions"
      ]
    }
  ]
};

export const timeline = {
  title: "Notre Parcours d'Engagement",
  description: "Plus de 30 ans d'actions communautaires au service des populations et des couches vulnérables au Mali.",
  milestones: [
    {
      year: '1993',
      title: "Fondation de l'ONG ADICO",
      description: "Création de l'ONG pour s'engager en faveur de l'épanouissement des femmes, des enfants et des personnes handicapées.",
      icon: <Target size={24} />
    },
    {
      year: '2000',
      title: "Premières Caisses d'Épargne",
      description: "Lancement des initiatives de microfinance et structuration des premiers groupements féminins.",
      icon: <Coins size={24} />
    },
    {
      year: '2008',
      title: "Extension Santé & Alphabétisation",
      description: "Déploiement des programmes intégrés de santé de la reproduction et des centres d'alphabétisation inclusive.",
      icon: <Users size={24} />
    },
    {
      year: '2015',
      title: "Projets Agro-Forestiers",
      description: "Mise en place des premières initiatives d'aménagement de bas-fonds et de protection environnementale.",
      icon: <Trees size={24} />
    },
    {
      year: '2020',
      title: "Renforcement de la Gouvernance",
      description: "Appui aux collectivités locales et promotion de la participation citoyenne et de l'inclusivité.",
      icon: <Heart size={24} />
    },
    {
      year: '2024',
      title: "Pérennisation et Impact Durable",
      description: "Consolidation des partenariats et accompagnement continu de milliers de bénéficiaires à travers le Mali.",
      icon: <Award size={24} />
    }
  ]
};

export const teamData = {
  title: "Notre Équipe Dirigeante et Technique",
  description: "Des professionnels passionnés et dévoués à l'autonomisation des communautés et à l'épanouissement des couches vulnérables.",
  members: [
    {
      id: 1,
      name: 'Abdramane SANGARE',
      role: 'Co-fondateur & Coordonnateur Général',
      bio: 'Co-fondateur de l\'ONG ADICO, engagé depuis 1993 dans la promotion du développement communautaire et la protection des couches vulnérables.',
      expertise: ['Gestion Stratégique', 'Développement Communautaire', 'Plaidoyer & Gouvernance'],
      social: { linkedin: '#', email: `a.sangare@gmail.com` }
    },
    {
      id: 2,
      name: 'Aguib COULIBALY',
      role: 'Co-fondateur & Responsable Projets',
      bio: 'Co-fondateur de l\'ONG, expert dans la conception et le pilotage des programmes sociaux, de santé et d\'environnement.',
      expertise: ['Ingénierie de Projets', 'Partenariats PTF', 'Développement Durable'],
      social: { linkedin: '#', email: `a.coulibaly@yahoo.fr` }
    },
    {
      id: 3,
      name: 'Seydou DIARRA',
      role: 'Permanent & Responsable Opérationnel',
      bio: 'Membre permanent assurant la coordination quotidienne des équipes sur le terrain et la mise en œuvre des actions de proximité.',
      expertise: ['Coordination de Terrain', 'Suivi-Évaluation', 'Mobilisation Sociale'],
      social: { linkedin: '#', email: `s.diarra@gmail.com` }
    },
    {
      id: 4,
      name: 'Fatoumata KÉÏTA',
      role: 'Responsable Programmes Genre & Autonomisation',
      bio: 'Spécialiste de l\'accompagnement socio-économique des femmes et de la structuration des activités génératrices de revenus.',
      expertise: ['Entrepreneuriat Féminin', 'Inclusion Sociale', 'Microfinance'],
      social: { linkedin: '#', email: `f.keita@gmail.com` }
    },
    {
      id: 5,
      name: 'Ousmane SISSOKO',
      role: 'Responsable Santé & Nutrition Communautaire',
      bio: 'Coordonnateur des campagnes de sensibilisation à la santé de la reproduction et des programmes nutritionnels.',
      expertise: ['Santé Publique', 'Nutrition', 'Éducation Communautaire'],
      social: { linkedin: '#', email: `o.sissoko@gmail.com` }
    },
    {
      id: 6,
      name: 'Aïssata TRAORÉ',
      role: 'Chargée de l\'Éducation & Inclusion',
      bio: 'Spécialiste en ingénierie de formation, dédiée aux centres d\'alphabétisation et à l\'intégration des personnes handicapées.',
      expertise: ['Éducation Inclusive', 'Alphabétisation', 'Droits des Personnes Handicapées'],
      social: { linkedin: '#', email: `a.traore@gmail.com` }
    }
  ]
};

export const valuesData = {
  title: "Nos Principes et Valeurs Directrices",
  description: "Les valeurs éthiques et morales qui guident l'ensemble des actions de l'ONG ADICO sur le terrain depuis 1993.",
  values: [
    {
      icon: Users,
      title: 'Inclusion & Équité',
      description: 'Intégration systématique des couches vulnérables, notamment les femmes, les enfants et les personnes handicapées.',
      color: '#7c3aed'
    },
    {
      icon: Shield,
      title: 'Transparence & Redevabilité',
      description: 'Gestion rigoureuse et éthique des ressources envers nos bénéficiaires et nos partenaires financiers.',
      color: '#2563eb'
    },
    {
      icon: Heart,
      title: 'Solidarité Communautaire',
      description: 'Entraide et action collective au cœur des villages et communes pour un développement partagé.',
      color: '#ec4899'
    },
    {
      icon: Target,
      title: 'Pérennisation des Acquis',
      description: 'Mise en place de solutions durables assurant la continuité des impacts sociaux à long terme.',
      color: '#10b981'
    },
    {
      icon: HandHeart,
      title: 'Participation Citoyenne',
      description: 'Implication active des populations locales dans la conception et le suivi de leurs propres projets.',
      color: '#f59e0b'
    },
    {
      icon: Leaf,
      title: 'Respect du Milieu & Des Cultures',
      description: 'Préservation des ressources naturelles et respect strict des valeurs traditionnelles locales.',
      color: '#22c55e'
    }
  ]
};