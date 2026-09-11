// This file contains sample data for UI components used in the application. It includes an array of FAQ items, each with a title and content. The content can be a string or a React component, allowing for rich formatting and interactivity.
export const faqData = [
  {
    title: "Comment ADICO intervient-elle sur le terrain ?",
    content: "Nous travaillons directement avec les communautés locales pour identifier leurs besoins et co-créer des solutions durables, en mettant l'accent sur le renforcement des capacités."
  },
  {
    title: "Où se trouvent vos zones d'intervention ?",
    content: "Nos actions se concentrent principalement dans les régions rurales du Mali, avec un bureau central basé à Bamako pour coordonner nos opérations."
  },
  {
    title: "Comment puis-je soutenir vos actions ?",
    content: (
      <div>
        <p style={{ marginBottom: '1rem' }}>Vous pouvez nous soutenir de plusieurs manières :</p>
        <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
          <li>En devenant partenaire de nos projets.</li>
          <li>En partageant notre mission sur vos réseaux.</li>
          <li>En rejoignant notre équipe en tant que bénévole.</li>
        </ul>
      </div>
    )
  }
];

export const testimonialsData = [
  {
    quote: "Grâce à l'intervention d'ADICO, notre commune dispose désormais d'un plan de développement clair et participatif. Les citoyens se sentent enfin écoutés.",
    name: "Ousmane Traoré",
    role: "Maire, Commune Rurale de Ségou",
    avatar: "https://i.pravatar.cc/150?u=ousmane",
    rating: 5
  },
  {
    quote: "La formation sur la gouvernance locale a transformé notre approche. Nous gérons maintenant les ressources communautaires avec une transparence totale.",
    name: "Aminata Diallo",
    role: "Présidente d'Association de Femmes",
    avatar: "https://i.pravatar.cc/150?u=aminata",
    rating: 4
  },
  {
    quote: "Leur approche n'est pas d'imposer des solutions, mais de nous donner les outils pour construire nous-mêmes notre plein épanouissement.",
    name: "Ibrahim Coulibaly",
    role: "Leader Communautaire",
    avatar: "https://i.pravatar.cc/150?u=ibrahim",
    rating: 5
  }
];