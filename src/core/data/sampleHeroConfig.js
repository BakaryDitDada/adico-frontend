const heroImages = {
  community: '/images/slider/adico-communaute.jpg',
  healthEducation: '/images/slider/adico-sante-education.jpg',
  environment: '/images/slider/adico-agroforesterie.jpg',
  microfinance: '/images/slider/adico-microfinance.jpg'
};

export const adicoHeroConfig = {
  autoplay: true,
  interval: 6000,
  showArrows: true,
  showDots: true,
  transition: 'fade',
  slides: [
    {
      id: 'slide-1',
      subtitle: "ONG ADICO MALI",
      title: "S'engager en faveur des couches vulnérables",
      description: "Depuis 1993, nous accompagnons les femmes, les enfants et les personnes handicapées au Mali pour leur plein épanouissement.",
      background: {
        type: 'image',
        src: heroImages.community,
        alt: 'Action communautaire ADICO au Mali',
        overlayColor: '#000000',
        overlayOpacity: 0.55
      },
      contentAlignment: 'left',
      ctas: [
        {
          text: "Nos Domaines d'Intervention",
          href: '#domaines',
          variant: 'primary',
          size: 'large'
        },
        {
          text: "Nous Contacter",
          href: '/contact',
          variant: 'outline',
          size: 'large'
        }
      ],
      order: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      published: true
    },
    {
      id: 'slide-2',
      subtitle: "SANTÉ & ÉDUCATION",
      title: "Éducation de base et santé pour tous",
      description: "Promotion de la santé de la reproduction, de la nutrition, de l'alphabétisation et de l'accès à l'éducation inclusive.",
      background: {
        type: 'image',
        src: heroImages.healthEducation,
        alt: 'Activités de santé et éducation ADICO',
        overlayColor: '#000000',
        overlayOpacity: 0.55
      },
      contentAlignment: 'left',
      ctas: [
        {
          text: "Santé & Éducation",
          href: '/domaines/sante-education',
          variant: 'primary',
          size: 'large'
        },
        {
          text: "Nos Projets",
          href: '/projets',
          variant: 'outline',
          size: 'large'
        }
      ],
      order: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      published: true
    },
    {
      id: 'slide-3',
      subtitle: "AGRO-FORESTERIE & ENVIRONNEMENT",
      title: "Résilience climatique et développement agricole",
      description: "Protection de l'environnement, aménagement de bas-fonds et vulgarisation agricole durable.",
      background: {
        type: 'image',
        src: heroImages.environment,
        alt: 'Projets agro-forestiers et environnementaux ADICO',
        overlayColor: '#000000',
        overlayOpacity: 0.55
      },
      contentAlignment: 'left',
      ctas: [
        {
          text: "Actions Environnement",
          href: '/domaines/environnement',
          variant: 'primary',
          size: 'large'
        },
        {
          text: "Notre Vision",
          href: '/a-propos',
          variant: 'outline',
          size: 'large'
        }
      ],
      order: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      published: true
    },
    {
      id: 'slide-4',
      subtitle: "MICROFINANCE & GOUVERNANCE",
      title: "Autonomisation des femmes et gouvernance locale",
      description: "Appui aux activités génératrices de revenus, caisses d'épargne communautaires et citoyenneté locale.",
      background: {
        type: 'image',
        src: heroImages.microfinance,
        alt: 'Microfinance et AGR pour les femmes au Mali',
        overlayColor: '#000000',
        overlayOpacity: 0.55
      },
      contentAlignment: 'left',
      ctas: [
        {
          text: "Microfinance & AGR",
          href: '/domaines/microfinance',
          variant: 'primary',
          size: 'large'
        },
        {
          text: "Rejoignez-nous",
          href: '/contact',
          variant: 'outline',
          size: 'large'
        }
      ],
      order: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
      published: true
    }
  ]
};