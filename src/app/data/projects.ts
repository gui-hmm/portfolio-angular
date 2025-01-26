export const projects = [
  {
    id: 1,
    title: 'Análise de Documentos com OCR e LLM',
    image: '/projects/ocr.png',
    description: 'Desenvolvi uma aplicação para upload, processamento e análise de documentos. A solução permite extração de texto automatizada de imagens, PDFs e arquivos. Também implementei interações inteligentes com o modelo Llama 2 (via Hugging Face) para fornecer explicações personalizadas baseadas nos textos extraídos. O sistema oferece histórico de documentos, download de dados processados e autenticação segura com JWT.',
    technologies: [
      '/skills/typescript.svg', 
      '/skills/next.svg', 
      "/skills/styled-components.svg",
      '/skills/nestjs.svg', 
      '/skills/jwt.svg', 
      '/skills/prisma.svg', 
      '/skills/postgresql.svg', 
      '/skills/azure-blob-storage.svg', 
      '/skills/hugging-face.svg',
      '/skills/vercel.svg',
      '/skills/render.jpg',
    ],
    path: '/ocr',
    href: "https://github.com/gui-hmm/ocr",
    siteHref: 'https://ocr-sandy.vercel.app/'
  },
  {
    id: 2,
    title: 'Terracota: Sistema de E-commerce',
    image: '/projects/terracota.png',
    description: 'Projeto desenvolvido em equipe, no qual atuo como líder de front-end. A solução é um e-commerce que integra uma aplicação web e mobile. No front-end web, utilizo React com TypeScript e Styled-components para construir interfaces interativas e responsivas, empregando tecnologias como gerenciamento de estado e boas práticas de desenvolvimento. Para a aplicação mobile, utilizei o Flutter, garantindo uma experiência fluida e consistente para os usuários em diferentes dispositivos.',
    technologies: [
      '/skills/typescript.svg', 
      '/skills/react.svg', 
      "/skills/styled-components.svg",
      '/skills/flutter.svg',
      '/skills/b4a.jpeg',
      '/skills/vercel.svg',
      '/skills/render.jpg',
    ],
    path: '/terracota',
    href: "https://github.com/gui-hmm/teste-frontend-v4",
    siteHref: 'https://terracota.vercel.app/'
  },
  {
    id: 3,
    title: "Aplicação de Geolocalização",
    image: "/projects/maps.png",
    description: "Desenvolvi uma aplicação de visualização da geolocalização usando a API do Google Maps. Utilizei TypeScript, React e styled-components no front-end, garantindo que o código fosse modularizado e fácil de manter. A aplicação exibe dados em tempo real no mapa, com funcionalidades de filtros, cálculo de produtividade e exibição de histórico.",
    technologies: [
      "/skills/typescript.svg",
      "/skills/react.svg",
      "/skills/styled-components.svg",
      "/skills/maps.svg"
    ],
    path: "/repositories/geolocalizacao",
    href: "https://github.com/gui-hmm/teste-frontend-v4"
  },
  {
    id: 4,
    title: "Projeto Pague Bem Brasil",
    image: "/projects/pague-bem.png",
    description: "Durante minha residência, eu e minha equipe criamos um dashboard interativo para a Pague Bem Brasil, oferecendo aos clientes um panorama completo de seus devedores, utilizando métricas como índices de pagamento, interação e regularidade. Nesse projeto pude atuar não somente como desenvolvedor front-end, mas também como PO (product owner) e co-líder de projeto. Utilizamos Python com Django no Back-end e TypeScript com React e Styled-Components para o front-end, utilizando a biblioteca Recharts.js para a exibição dos gráficos.",
    technologies: [
      "/skills/typescript.svg",
      "/skills/react.svg",
      "/skills/styled-components.svg",
      "/skills/jwt.svg",
      '/skills/vercel.svg',
    ],
    path: "/repositories/pague-bem-brasil",
    href: "https://github.com/gui-hmm/pagueBem_dashbord",
    siteHref: "https://pague-bem-dashbord.vercel.app/"
  },
  {
    id: 5,
    title: 'Caiçara',
    image: '/projects/caicara.png',
    description: 'O projeto desenvolvido consiste em um catálogo de vendas de pesca com adição e retirada de produtos. Utilizando PHP para o backend e Firebase para o gerenciamento de dados em tempo real, o sistema foi projetado para ser de fácil utilização para pescadores ribeirinhos. A minha principal contribuição foi no desenvolvimento em PHP, integração com o Firebase Realtime e criação do front-end do catálogo utilizando HTML e CSS, aprimorando minhas habilidades em backend e gestão de dados em tempo real.',
    technologies: [
      '/skills/html.svg', 
      '/skills/css.svg', 
      '/skills/php.svg', 
      '/skills/firebase.svg',
    ],
    path: '/caicara',
    href: 'https://github.com/Caicara-Web-Team/residencia_30_05/tree/main'
  },
  {
    id: 6,
    title: 'Cópia do YouTube',
    image: '/projects/youtube.png',
    description: 'Site com catálogo de vídeos tipo o YouTube, possui integração onde o front-end é em TypeScript com React e Styled-components, o back-end em Node e o banco de dados utilziado foi o MySQL.',
    technologies: [
      '/skills/typescript.svg', 
      '/skills/react.svg', 
      '/skills/node.svg', 
      '/skills/mysql.svg',
    ],
    path: '/youtube',
    href: 'https://github.com/gui-hmm/youtube'
  },
  {
    id: 7,
    title: 'Cópia do WhatsApp Web',
    image: '/projects/whatsapp.png',
    description: 'Cópia de uma aplicação WhatsApp Web utilizando Socket.IO para troca de mensagens instantâneas.',
    technologies: [
      '/skills/react.svg', 
      '/skills/node.svg', 
    ],
    path: '/whatsapp',
    href: 'https://github.com/gui-hmm/chat_socket.io'
  },
  {
    id: 8,
    title: 'Site do Homem de Ferro 3 (Spring)',
    image: '/projects/homem_ferro_spring.png',
    description: 'Projeto de um site do Homem de ferro em React, colocado em um projeto Spring e com deploy no Render.',
    technologies: [
      '/skills/javascript.svg',
      '/skills/react.svg', 
      '/skills/spring.svg',
      '/skills/render.svg',
    ],
    path: '/homem-ferro-spring',
    href: "https://github.com/gui-hmm/H_W_spring",
    siteHref: 'https://react-spring.onrender.com/'
  },
  {
    id: 9,
    title: 'Site de Cards Star Wars',
    image: '/projects/star_wars.png',
    description: 'Projeto de um site com cards de Star Wars onde estou consumindo uma API feito com o curso Profissão Programador.',
    technologies: [
      '/skills/javascript.svg',
      '/skills/react.svg',
      '/skills/vercel.svg',
    ],
    path: '/star-wars',
    href: "https://github.com/gui-hmm/cards_star_wars",
    siteHref: 'https://cards-star-wars.vercel.app/'
  },
  {
    id: 10,
    title: 'Teste de Temperamentos',
    image: '/projects/teste_temperamento.png',
    description: 'Desenvolvi um questionário online para realizar o teste de temperamentos, anteriormente feito em papel, visando facilitar o processo e promover a sustentabilidade. Este projeto foi criado para a Juventude Masculina de Schoenstatt e implementado utilizando HTML, CSS e JavaScript. O questionário foi hospedado no Vercel, permitindo acessibilidade e economia de tempo para os usuários.',
    technologies: [
      '/skills/html.svg', 
      '/skills/css.svg', 
      '/skills/javascript.svg', 
      '/skills/vercel.svg',
    ],
    path: '/teste-temperamento',
    href: "https://github.com/gui-hmm/teste_temperamento",
    siteHref: 'https://teste-temperamento.vercel.app/'
  },
  {
    id: 11,
    title: 'Portfolio',
    image: '/projects/portfolio.png',
    description: 'Este é o meu site portfolio, site desenvolvido em Angular 19. O site demonstra as minhas habilidades, quem sou eu, meus contatos e meus repositórios.',
    technologies: [
      '/skills/angular.svg', 
      '/skills/tailwind-css.svg', 
    ],
    path: '/repositories',
    href: '#'
  }
];
