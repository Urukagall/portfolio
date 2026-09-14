export const supportedLocales = ['fr', 'en'];

export const defaultLocale = 'fr';

export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      switchLanguage: 'EN',
    },
    about: {
      title: 'À PROPOS DE MOI',
      description:
        "Je m'appelle Dany JORGE AFONSO, étudiant en développement informatique spécialisé dans les jeux vidéo. J'ai eu l'occasion de travailler sur plusieurs projets, que ce soit dans le cadre scolaire, lors de Game Jams, ou à travers des projets personnels. Ces jeux ont été développés avec Unreal Engine (en C++ et Blueprint), Unity (en C#), ainsi qu'en C++ pur, ce qui m'a permis de consolider mes compétences techniques tout en explorant différentes approches de gameplay et d'architecture logicielle.",
    },
    skills: {
      title: 'Compétences',
      engines: 'Moteurs',
      mainLanguages: 'Langages principaux',
      secondaryLanguages: 'Langages secondaires',
    },
    footer: {
      contact: 'Contact',
      phone: 'Téléphone',
      linktree: 'Linktree',
      rights: 'Tous droits réservés.',
    },
    projects: {
      sectionTitle: 'Projets',
      close: 'Fermer',
      itch: 'Lien Itch.io',
      site: 'Lien du site',
      uCave: {
        title: 'UCave (Ludum Dare 48)',
        cardDescription:
          'Un jeu d’exploration en 2D créé en 48h, où vous devez vous enfoncer toujours plus profondément dans une grotte pour en ressortir.',
        modalText:
          'UCave est le premier jeu que j’ai développé lors de la Ludum Dare 48, une Game Jam internationale de 48h sur le thème « Deeper and Deeper ». Réalisé en équipe de trois avec Unity en C#, ce projet a marqué mes débuts dans le game development. Le joueur incarne un personnage tombé dans une grotte. Pour s’échapper, il doit s’enfoncer toujours plus loin, surmonter des obstacles et trouver une corde pour remonter. Le gameplay repose sur l’exploration, des énigmes simples et une progression verticale inversée. Ce projet m’a permis de découvrir Unity, d’apprendre les bases du C# et de comprendre les enjeux du développement en temps limité.',
      },
      getOut: {
        title: 'Get Out (Brackey\'s Game Jam)',
        cardDescription:
          'Un jeu d’horreur en 3D développé en 72h, où vous explorez un hôpital psychiatrique désert, hanté par des phénomènes étranges.',
        modalText:
          'Get Out est un jeu d’horreur psychologique réalisé en 72h pour la Brackey\'s Game Jam, sur le thème « It Is Not Real ». Créé avec deux amis sur Unity en C#, ce projet nous a permis de travailler l’ambiance et la narration dans un univers inquiétant. Le joueur se réveille seul dans un hôpital psychiatrique désert. Aucun être humain à l’horizon, mais des phénomènes étranges surviennent au fil de l’exploration. L’objectif est de comprendre ce qui se passe et de trouver un moyen de s’échapper. C’était ma première expérience sur un jeu en 3D, avec un vrai travail sur le sound design, les effets visuels et l’atmosphère.',
      },
      stoneEngine: {
        title: 'Stone Engine (DirectX 12)',
        cardDescription:
          'Un moteur de jeu développé en 3 semaines avec DirectX 12, pour comprendre les fondations techniques des engines avant d’en utiliser.',
        modalText:
          'Ce moteur de jeu a été réalisé en 3 semaines dans le cadre d’un projet scolaire en équipe de 4, avec pour objectif d’apprendre le fonctionnement interne d’un game engine. Nous avons développé ce projet en C++ avec DirectX 12, sans passer par une bibliothèque tierce orientée jeu. Nous avons mis en place un moteur capable de charger et d’afficher des modèles 3D, gérer une caméra libre et des shaders de base, le tout en temps réel. L’accent a été mis sur la compréhension de la pipeline graphique, la gestion de la mémoire GPU et la création d’un framework modulaire.',
      },
      citeDesPixels: {
        title: 'Cité des Pixels (Caritatif)',
        cardDescription:
          'Un événement caritatif Minecraft pour l’UNICEF, où j’ai développé les mini-jeux et participé à l’organisation sur place.',
        modalText:
          'La Cité des Pixels était un événement caritatif organisé par des étudiants du Gaming Campus, au profit de l’UNICEF. L’événement a rassemblé plus de 94 joueurs sur un serveur Minecraft custom, avec des mini-jeux et défis en ligne et en présentiel. J’ai participé au projet en tant que développeur de plugins, en créant les systèmes de plusieurs mini-jeux proposés aux joueurs. Sur place, j’ai aussi aidé à la gestion des équipes, à la coordination des animations et au bon déroulement technique de l’événement. Ce projet m’a permis de combiner programmation, jeu vidéo et événementiel.',
      },
      portal: {
        title: 'Portal',
        cardDescription:
          'Une reconstitution du jeu Portal sur Unreal Engine en Blueprints, pour découvrir le moteur et ses mécaniques visuelles.',
        modalText:
          'Ce projet scolaire avait pour objectif de nous initier à Unreal Engine 5 à travers la création d’un prototype de jeu en Blueprints. En équipe, nous avons choisi de reconstituer le gameplay de Portal, célèbre pour ses mécaniques de téléportation et ses énigmes spatiales. Le joueur dispose d’un pistolet à portails permettant de créer deux points de passage instantanés entre différentes zones. Nous avons reproduit les mécaniques de tir, de traversée des portails et certaines énigmes basées sur la physique, le tout sans écrire une seule ligne de code, uniquement avec le système visuel de Blueprint.',
      },
      starCluster: {
        title: 'Star Cluster (Projet de fin d’année)',
        cardDescription:
          'Un jeu mobile narratif en vue top-down, où le joueur explore un monde fragmenté pour réparer l’univers.',
        modalText:
          'Ce projet de fin d’année a été réalisé en équipe sur Unity. Il s’agissait de créer un jeu mobile narratif en vue top-down, mêlant exploration et ambiance poétique. L’objectif du joueur est de parcourir un monde éclaté pour en réparer les fragments et restaurer l’équilibre de l’univers. Le gameplay repose sur l’exploration libre, la collecte d’objets-clés et des interactions scénarisées avec des éléments du décor. J’ai occupé le rôle de lead tech sur ce projet, une première pour moi.',
      },
      fft: {
        title: 'Tennis Player AI (Stage)',
        cardDescription:
          'Développement d’intelligences artificielles pour joueurs de tennis virtuels sous Unity (C#) dans le cadre d’un stage pour la Fédération Française de Tennis.',
        modalText:
          'Dans le cadre d’un stage de 4 mois au sein de la Fédération Française de Tennis (FFT), j’ai conçu et programmé des comportements d’intelligence artificielle autonomes et crédibles pour des joueurs de tennis sous Unity (C#). L’IA devait analyser en continu la trajectoire, la vitesse et le rebond de la balle afin de calculer son positionnement sur le court, son timing d’impact et le choix du coup à renvoyer. J’ai structuré la logique autour d’une machine à états gérant les différentes phases de jeu, tout en intégrant des variations de précision et de temps de réaction pour simuler différents profils et niveaux de jeu.',
      },
      stealSimulator: {
        title: 'Steal Simulator',
        cardDescription:
          'Une reconstitution du jeu Thief Simulator sur Unreal Engine en Blueprints, pour apprendre les Event Dispatcher et les interfaces.',
        modalText:
          'Ce projet scolaire avait pour objectif de nous apprendre l’utilisation des event dispatcher et des interfaces dans Unreal Engine 5. J’ai choisi de recréer le jeu Thief Simulator car son système d’interaction avec l’environnement se prêtait bien à l’apprentissage de ces concepts. Le joueur incarne un voleur qui doit s’introduire dans un magasin de voitures pour y dérober des objets de valeur. J’ai mis en place des mécaniques d’infiltration avec des caméras de sécurité, des alarmes et différents systèmes d’interaction pour fouiller les lieux et voler les objets.',
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      switchLanguage: 'FR',
    },
    about: {
      title: 'ABOUT ME',
      description:
        "My name is Dany JORGE AFONSO, a computer development student specialized in video games. I have had the opportunity to work on several projects, whether in school, during Game Jams, or through personal projects. These games were developed with Unreal Engine (C++ and Blueprint), Unity (C#), as well as pure C++, which allowed me to strengthen my technical skills while exploring different gameplay and software architecture approaches.",
    },
    skills: {
      title: 'Skills',
      engines: 'Engines',
      mainLanguages: 'Main languages',
      secondaryLanguages: 'Secondary languages',
    },
    footer: {
      contact: 'Contact',
      phone: 'Phone',
      linktree: 'Linktree',
      rights: 'All rights reserved.',
    },
    projects: {
      sectionTitle: 'Projects',
      close: 'Close',
      itch: 'Itch.io link',
      site: 'Website link',
      uCave: {
        title: 'UCave (Ludum Dare 48)',
        cardDescription:
          'A 2D exploration game created in 48 hours, where you must go deeper and deeper into a cave to find a way out.',
        modalText:
          'UCave is the first game I developed during the Ludum Dare 48, an international 48-hour Game Jam on the theme “Deeper and Deeper”. Made in a team of three with Unity in C#, this project marked my first steps in game development. The player takes the role of a character who has fallen into a cave. To escape, he must go deeper, overcome obstacles and find a rope to climb back out. The gameplay is based on exploration, simple puzzles and an inverted vertical progression. This project allowed me to discover Unity, learn the basics of C# and understand the challenges of rapid development in a limited time.',
      },
      getOut: {
        title: 'Get Out (Brackey\'s Game Jam)',
        cardDescription:
          'A 3D horror game developed in 72 hours, where you explore a deserted psychiatric hospital haunted by strange phenomena.',
        modalText:
          'Get Out is a psychological horror game made in 72 hours for the Brackey\'s Game Jam, on the theme “It Is Not Real”. Created with two friends using Unity and C#, the project allowed us to work on atmosphere and storytelling in a tense environment. The player wakes up alone in a deserted psychiatric hospital. No human beings in sight, but strange phenomena appear as the exploration unfolds. The goal is to understand what is happening and find a way to escape. It was my first experience with a 3D game, with real work on sound design, visual effects and atmosphere.',
      },
      stoneEngine: {
        title: 'Stone Engine (DirectX 12)',
        cardDescription:
          'A game engine developed in 3 weeks using DirectX 12 to understand the technical foundations of engines before using them.',
        modalText:
          'This game engine was built in 3 weeks as part of a school project in a team of 4, with the goal of understanding how a game engine works internally. We developed it in C++ with DirectX 12, without using a third-party game-focused library. We implemented a system capable of loading and displaying 3D models, handling free camera movement and basic shaders in real time. The focus was on understanding the graphics pipeline, GPU memory management and creating a modular framework.',
      },
      citeDesPixels: {
        title: 'Cité des Pixels (Charity Event)',
        cardDescription:
          'A charity Minecraft event for UNICEF, where I developed mini-games and took part in the on-site organization.',
        modalText:
          'La Cité des Pixels was a charity event organized by Gaming Campus students for UNICEF. The event brought together more than 94 players on a custom Minecraft server, with online and on-site mini-games and challenges. I took part as a plugin developer, creating systems for several mini-games offered to players. On-site, I also helped with team management, animation coordination and the overall technical flow of the event. This project let me combine programming, video games and event organization.',
      },
      portal: {
        title: 'Portal',
        cardDescription:
          'A reconstruction of Portal on Unreal Engine using Blueprints, to discover the engine and its visual mechanics.',
        modalText:
          'This school project was meant to introduce us to Unreal Engine 5 through the creation of a gameplay prototype in Blueprints. As a team, we chose to recreate the gameplay of Portal, famous for its teleportation mechanics and spatial puzzles. The player uses a portal gun to create two instant passage points between different zones. We reproduced shooting, portal traversal and some physics-based puzzles, all without writing a single line of code, only using Unreal\'s visual Blueprint system.',
      },
      starCluster: {
        title: 'Star Cluster (Final-year project)',
        cardDescription:
          'A narrative mobile game in top-down view where the player explores a fragmented world to restore the universe.',
        modalText:
          'This final-year project was created as a team on Unity. It involved creating a narrative mobile game in top-down view, mixing exploration and poetic atmosphere. The player’s goal is to travel through a shattered world to repair its fragments and restore balance to the universe. The gameplay relies on free exploration, collecting key items and scripted interactions with elements of the environment. I served as lead tech on this project, which was my first time in that role.',
      },
      fft: {
        title: 'Tennis Player AI (Internship)',
        cardDescription:
          'Development of artificial intelligence for virtual tennis players under Unity (C#) as part of an internship at the French Tennis Federation.',
        modalText:
          'During a 4-month internship at the French Tennis Federation (FFT), I designed and programmed autonomous and believable AI behaviors for tennis players in Unity (C#). The AI continuously analyzed ball trajectory, speed and bounce to calculate positioning on the court, impact timing and the shot to return. I structured the logic around a state machine handling different game phases while integrating precision and reaction-time variations to simulate different profiles and skill levels.',
      },
      stealSimulator: {
        title: 'Steal Simulator',
        cardDescription:
          'A reconstruction of Thief Simulator on Unreal Engine using Blueprints to learn Event Dispatchers and interfaces.',
        modalText:
          'This school project aimed to teach us how to use event dispatchers and interfaces in Unreal Engine 5. I chose to recreate Thief Simulator because its interaction system with the environment was ideal for learning these concepts. The player is a thief who must break into a car dealership to steal valuable objects. I implemented stealth mechanics with security cameras, alarms and various interaction systems to search the premises and steal objects.',
      },
    },
  },
};
