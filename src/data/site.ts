export const contacto = {
  telefone: "+258 87 988 6730",
  telefoneAlt: "+258 85 507 9010",
  email: "wexacompany6@gmail.com",
  whatsapp: "https://wa.me/258879886730",
  facebook: "Wexa",
  facebookUrl: "https://facebook.com/Wexa",
  instagram: "@wexacompany",
  instagramUrl: "https://instagram.com/wexacompany",
};

export const navLinks = [
  { label: "Início", to: "/" },
  { label: "Sobre", to: "/sobre" },
  { label: "Serviços", to: "/servicos" },
  { label: "Portfólio", to: "/portfolio" },
  { label: "Preços", to: "/precos" },
  { label: "Contacto", to: "/contacto" },
] as const;

export const servicos = [
  {
    numero: "01",
    nome: "WEXA WEB",
    resumo: "Websites que trabalham por si, 24 horas por dia.",
    descricao:
      "Landing pages, sites institucionais e lojas online desenvolvidos para representar a sua marca com seriedade e transformar visitantes em clientes.",
    tituloPagina: "O seu negócio online, com a seriedade que ele merece",
    textoLongo: [
      "Um site é o primeiro lugar onde o seu cliente vai procurar por si — muitas vezes antes de qualquer contacto directo. É ali que ele decide se confia, se continua a ler, ou se volta atrás e escolhe a concorrência.",
      "Desenvolvemos websites rápidos, responsivos e pensados para converter visitantes em contactos reais. Do design à publicação, tratamos de tudo.",
    ],
    itensTitulo: "O que desenvolvemos",
    itens: [
      "Landing Pages focadas em conversão",
      "Sites Institucionais completos",
      "Lojas Online (E-commerce)",
      "Portais e plataformas de conteúdo",
      "Sistemas e plataformas web personalizadas",
    ],
    inclui:
      "Inclui ainda: painel de gestão de conteúdo, e-mails profissionais, optimização para motores de busca (SEO), certificado de segurança SSL, domínio e hospedagem no primeiro ano.",
    ctaLabel: "Ver pacotes web",
    linkLabel: "Ver soluções web",
    destaque: true,
  },
  {
    numero: "02",
    nome: "WEXA DESIGN",
    resumo: "A identidade que faz a sua marca ser lembrada.",
    descricao:
      "Logótipos, paleta de cores, manual de marca e materiais gráficos pensados para que a sua marca seja reconhecida à primeira vista.",
    tituloPagina: "A sua marca tem um nome. Nós damos-lhe uma cara.",
    textoLongo: [
      "As pessoas decidem confiar numa marca em segundos — e essa decisão é quase sempre visual, antes de ser racional. Um logótipo genérico ou uma comunicação sem consistência custam credibilidade todos os dias.",
      "Criamos identidades visuais completas, construídas para funcionar em qualquer suporte: do cartão de visita ao site, do post de Instagram ao uniforme da equipa.",
    ],
    itensTitulo: "O que criamos",
    itens: [
      "Identidade visual completa e logótipo",
      "Manual de marca",
      "Cartões de visita e papelaria institucional",
      "Templates para redes sociais",
      "Banners, flyers e materiais publicitários",
      "Apresentações institucionais e comerciais",
    ],
    inclui: "",
    ctaLabel: "Ver pacotes de design",
    linkLabel: "Ver identidade visual",
    destaque: false,
  },
  {
    numero: "03",
    nome: "WEXA MARKETING",
    resumo: "Presença constante gera resultados constantes.",
    descricao:
      "Gestão de redes sociais, criação de conteúdo e campanhas pagas para manter a sua marca visível e sempre na mente do cliente certo.",
    tituloPagina: "Ter presença é uma coisa. Ser lembrado é outra.",
    textoLongo: [
      "Redes sociais paradas são oportunidades perdidas. Cada semana sem publicar é uma semana em que a concorrência ocupa o espaço que podia ser seu na atenção do cliente.",
      "Gerimos a sua presença digital com estratégia, calendário definido e relatórios mensais — para que saiba exactamente o que está a funcionar e o que precisa de mudar.",
    ],
    itensTitulo: "O que fazemos",
    itens: [
      "Gestão de redes sociais (Instagram, Facebook, LinkedIn)",
      "Criação de conteúdo e design das publicações",
      "Gestão de comentários e mensagens",
      "Campanhas pagas (Meta Ads)",
      "Google Meu Negócio e WhatsApp Business",
      "Relatórios mensais de desempenho",
    ],
    inclui: "",
    ctaLabel: "Ver pacotes de marketing",
    linkLabel: "Ver marketing digital",
    destaque: false,
  },
] as const;

export const processo = [
  {
    etapa: "Briefing",
    texto:
      "Conversamos sobre o seu negócio, os seus objectivos e o que espera alcançar. Tudo começa por entender o problema antes de propor a solução.",
  },
  {
    etapa: "Estratégia",
    texto:
      "Definimos a estrutura, as funcionalidades e a direcção criativa do projecto. Você aprova antes de começarmos a produzir.",
  },
  {
    etapa: "Design",
    texto:
      "Damos forma visual à estratégia. Apresentamos, ouvimos o seu feedback e refinamos até estar certo.",
  },
  {
    etapa: "Desenvolvimento",
    texto:
      "Transformamos o design aprovado em algo funcional, rápido e preparado para todos os ecrãs.",
  },
  {
    etapa: "Lançamento",
    texto:
      "Testamos, publicamos e entregamos as credenciais. A partir daí, continuamos disponíveis no período de suporte.",
  },
] as const;

export const numeros = [
  { valor: 40, sufixo: "+", label: "Projectos entregues" },
  { valor: 30, sufixo: "+", label: "Clientes atendidos" },
  { valor: 10, sufixo: "+", label: "Sectores diferentes" },
  { valor: 100, sufixo: "%", label: "Projectos com suporte pós-entrega" },
] as const;

export const projectos = [
  {
    titulo: "Centro Médico Galeno",
    categoria: "Web",
    tipo: "Site Institucional",
    texto:
      "Um site pensado para transmitir confiança logo no primeiro contacto, no sector onde a credibilidade decide tudo.",
    imagem: "web",
  },
  {
    titulo: "Ginásio Planeta Saúde",
    categoria: "Web",
    tipo: "Identidade + Web",
    texto:
      "Modalidades, horários e planos acessíveis antes mesmo da primeira visita ao espaço.",
    imagem: "design",
  },
  {
    titulo: "Identidade Visual",
    categoria: "Design",
    tipo: "Marca construída do zero",
    texto: "Uma marca construída do zero, do símbolo ao manual de aplicação.",
    imagem: "design",
  },
  {
    titulo: "Loja Online",
    categoria: "Web",
    tipo: "E-commerce",
    texto:
      "Catálogo completo, carrinho de compras e pagamentos integrados via M-Pesa e e-Mola.",
    imagem: "web",
  },
  {
    titulo: "Gestão de Redes Sociais",
    categoria: "Marketing",
    tipo: "Presença mensal",
    texto: "Presença constante, identidade consistente e relatórios mensais.",
    imagem: "marketing",
  },
  {
    titulo: "Landing Page de Campanha",
    categoria: "Web",
    tipo: "Página de conversão",
    texto: "Uma página única, focada num só objectivo: converter.",
    imagem: "web",
  },
] as const;

export type PacoteTab = "web" | "design" | "marketing";

export const pacotes: Record<
  PacoteTab,
  {
    titulo: string;
    nota: string;
    planos: {
      nome: string;
      subtitulo: string;
      preco: string;
      resumo: string;
      destaque?: boolean;
      itens: string[];
    }[];
  }
> = {
  web: {
    titulo: "WEXA WEB",
    nota: "Preços em Meticais. Domínio e hospedagem do 1.º ano incluídos nos pacotes Profissional e Premium.",
    planos: [
      {
        nome: "ESSENCIAL",
        subtitulo: "Landing Page / One-Page",
        preco: "14.900 MT",
        resumo: "Ideal para campanhas, lançamentos e captação directa de clientes.",
        itens: [
          "1 página focada em conversão",
          "Design 100% responsivo",
          "Formulário de contacto",
          "Botão de WhatsApp integrado",
          "1 revisão incluída",
          "Entrega em 1 a 2 semanas",
          "Suporte de 7 dias",
        ],
      },
      {
        nome: "PROFISSIONAL",
        subtitulo: "Site Institucional",
        preco: "29.900 MT",
        resumo:
          "O equilíbrio certo entre credibilidade e investimento. O nosso pacote mais procurado.",
        destaque: true,
        itens: [
          "4 a 6 páginas",
          "Painel de gestão de conteúdo (CMS)",
          "E-mails profissionais configurados",
          "Optimização SEO",
          "Certificado de segurança SSL",
          "Domínio e hospedagem do 1.º ano incluídos",
          "2 revisões incluídas",
          "Entrega em 2 a 4 semanas",
          "Suporte de 15 dias",
        ],
      },
      {
        nome: "PREMIUM",
        subtitulo: "Loja Online (E-commerce)",
        preco: "a partir de 64.900 MT",
        resumo: "Para quem quer vender online de verdade.",
        itens: [
          "Catálogo completo e carrinho de compras",
          "Integração de pagamentos (M-Pesa, e-Mola)",
          "Área de clientes e histórico de encomendas",
          "Gestão de stock",
          "SEO avançado",
          "Domínio e hospedagem do 1.º ano incluídos",
          "3 revisões incluídas",
          "Entrega em 4 a 8 semanas",
          "Suporte de 30 dias",
        ],
      },
    ],
  },
  design: {
    titulo: "WEXA DESIGN",
    nota: "Entregas em ficheiros editáveis e prontos para impressão.",
    planos: [
      {
        nome: "ESSENCIAL",
        subtitulo: "Arranque de marca",
        preco: "7.900 MT",
        resumo: "Para começar com o pé direito.",
        itens: [
          "1 proposta de logótipo",
          "Paleta de cores e tipografia",
          "2 versões do logótipo (cor + preto e branco)",
          "1 modelo de cartão de visita",
          "Ficheiros PNG, JPG e PDF",
          "Entrega em 5 dias úteis",
        ],
      },
      {
        nome: "PROFISSIONAL",
        subtitulo: "Marca aplicada",
        preco: "15.900 MT",
        resumo: "Para marcas que querem crescer.",
        destaque: true,
        itens: [
          "2 propostas de logótipo",
          "4 versões completas do logótipo",
          "Manual de marca básico",
          "Papel timbrado e assinatura de e-mail",
          "5 templates para redes sociais",
          "Ficheiros editáveis (AI, EPS, SVG)",
          "Entrega em 8 dias úteis",
        ],
      },
      {
        nome: "PREMIUM",
        subtitulo: "Sistema de marca completo",
        preco: "29.900 MT",
        resumo: "Identidade completa e robusta.",
        itens: [
          "3 propostas de logótipo",
          "4 versões + monograma",
          "Manual de marca completo",
          "15 templates para redes sociais + capa",
          "6 ou mais mockups de apresentação",
          "Pacote editável completo",
          "Entrega em 15 dias úteis",
        ],
      },
    ],
  },
  marketing: {
    titulo: "WEXA MARKETING",
    nota: "Mensalidades. Investimento em anúncios pago à parte, directamente às plataformas.",
    planos: [
      {
        nome: "ESSENCIAL",
        subtitulo: "Presença constante",
        preco: "6.900 MT/mês",
        resumo: "Presença digital consistente.",
        itens: [
          "1 rede social gerida",
          "8 publicações por mês",
          "2 stories por semana",
          "Legendas e hashtags optimizadas",
          "Relatório mensal",
        ],
      },
      {
        nome: "PROFISSIONAL",
        subtitulo: "Crescimento activo",
        preco: "13.900 MT/mês",
        resumo: "Para marcas que querem crescer.",
        destaque: true,
        itens: [
          "2 redes sociais geridas",
          "16 publicações por mês",
          "4 stories por semana",
          "Gestão diária de comentários e mensagens",
          "Google Meu Negócio",
          "Campanhas pagas (até 5.000 MT investidos/mês)",
          "Relatório mensal detalhado",
        ],
      },
      {
        nome: "PREMIUM",
        subtitulo: "Operação completa",
        preco: "24.900 MT/mês",
        resumo: "Gestão de marketing completa.",
        itens: [
          "3 redes sociais geridas",
          "24 ou mais publicações por mês",
          "Stories diários",
          "Gestor de conta dedicado",
          "Campanhas pagas (até 10.000 MT investidos/mês)",
          "Email marketing mensal",
          "Relatório com análise da concorrência",
        ],
      },
    ],
  },
};

export const atributos = [
  "Moderna",
  "Jovem",
  "Ousada",
  "Criativa",
  "Tecnológica",
  "Profissional",
  "Estratégica",
  "Confiante",
  "Dinâmica",
  "Orientada a Resultados",
] as const;
