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
    resumo: "Websites, Landing Pages e Lojas Online",
    descricao:
      "Sites rápidos, pensados para converter visitantes em clientes — com estrutura clara, conteúdo estratégico e base sólida para crescer.",
    itens: [
      "Landing Pages",
      "Sites Institucionais",
      "Lojas Online (E-commerce)",
      "Portais e Blogs",
      "Sistemas e plataformas web",
      "Sites personalizados",
    ],
    destaque: true,
  },
  {
    numero: "02",
    nome: "WEXA DESIGN",
    resumo: "Identidade visual e design gráfico",
    descricao:
      "Marcas consistentes e reconhecíveis, com regras claras de aplicação para que a sua empresa comunique sempre da mesma forma.",
    itens: [
      "Identidade visual",
      "Logotipos",
      "Manual de marca",
      "Social media",
      "Banners e flyers",
      "Apresentações",
      "Materiais publicitários",
    ],
    destaque: false,
  },
  {
    numero: "03",
    nome: "WEXA MARKETING",
    resumo: "Gestão de redes sociais e campanhas",
    descricao:
      "Presença digital constante e campanhas medidas, com relatórios que mostram o que funcionou e o que vamos ajustar.",
    itens: [
      "Gestão de redes sociais",
      "Criação de conteúdo",
      "Campanhas pagas (Meta Ads)",
      "Google Meu Negócio",
      "WhatsApp Business",
      "Relatórios de desempenho",
    ],
    destaque: false,
  },
] as const;

export const processo = [
  {
    etapa: "Briefing",
    texto: "Ouvimos o negócio, os objectivos e o público antes de desenhar nada.",
  },
  {
    etapa: "Estratégia",
    texto: "Definimos estrutura, mensagem e prioridades do projecto.",
  },
  { etapa: "Design", texto: "Construímos a direcção visual e validamos com o cliente." },
  {
    etapa: "Desenvolvimento",
    texto: "Implementamos com foco em velocidade, SEO e experiência.",
  },
  { etapa: "Lançamento", texto: "Colocamos no ar, medimos e continuamos a acompanhar." },
] as const;

export const numeros = [
  { valor: 120, sufixo: "+", label: "Projectos entregues" },
  { valor: 85, sufixo: "+", label: "Clientes satisfeitos" },
  { valor: 6, sufixo: "", label: "Anos de experiência" },
  { valor: 14, sufixo: "", label: "Sectores atendidos" },
] as const;

export const projectos = [
  {
    titulo: "Centro Médico Galeno",
    categoria: "Web",
    tipo: "Site Institucional",
    imagem: "web",
  },
  {
    titulo: "Ginásio Planeta Saúde",
    categoria: "Design",
    tipo: "Identidade + Web",
    imagem: "design",
  },
  {
    titulo: "Moza Store",
    categoria: "Web",
    tipo: "Loja Online",
    imagem: "web",
  },
  {
    titulo: "Escola Horizonte",
    categoria: "Marketing",
    tipo: "Gestão de Redes Sociais",
    imagem: "marketing",
  },
  {
    titulo: "Construtora Índico",
    categoria: "Design",
    tipo: "Manual de Marca",
    imagem: "design",
  },
  {
    titulo: "Café Maputo Central",
    categoria: "Marketing",
    tipo: "Campanhas Meta Ads",
    imagem: "marketing",
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
      destaque?: boolean;
      itens: string[];
    }[];
  }
> = {
  web: {
    titulo: "WEXA WEB",
    nota: "Preços em Meticais. Prazos definidos no briefing.",
    planos: [
      {
        nome: "ESSENCIAL",
        subtitulo: "Landing Page / One-Page",
        preco: "14.900 MT",
        itens: [
          "1 página completa",
          "Formulário de contacto",
          "Botão WhatsApp",
          "Totalmente responsivo",
        ],
      },
      {
        nome: "PROFISSIONAL",
        subtitulo: "Site Institucional",
        preco: "29.900 MT",
        destaque: true,
        itens: [
          "4 a 6 páginas",
          "CMS para edição de conteúdo",
          "E-mail profissional",
          "SEO inicial + certificado SSL",
        ],
      },
      {
        nome: "PREMIUM",
        subtitulo: "Loja Online",
        preco: "a partir de 64.900 MT",
        itens: [
          "Catálogo de produtos",
          "Carrinho e checkout",
          "Pagamentos integrados",
          "Gestão de stock",
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
        itens: ["Logótipo", "Paleta de cores", "Cartão de visita"],
      },
      {
        nome: "PROFISSIONAL",
        subtitulo: "Marca aplicada",
        preco: "15.900 MT",
        destaque: true,
        itens: [
          "Tudo do Essencial",
          "Manual de marca básico",
          "Papel timbrado",
          "5 templates para redes sociais",
        ],
      },
      {
        nome: "PREMIUM",
        subtitulo: "Sistema de marca completo",
        preco: "29.900 MT",
        itens: [
          "Tudo do Profissional",
          "Manual de marca completo",
          "15 templates sociais",
          "Monograma + 6 mockups",
        ],
      },
    ],
  },
  marketing: {
    titulo: "WEXA MARKETING",
    nota: "Mensalidades. Investimento em anúncios facturado à parte.",
    planos: [
      {
        nome: "ESSENCIAL",
        subtitulo: "Presença constante",
        preco: "6.900 MT/mês",
        itens: ["1 rede social", "8 publicações por mês", "Relatório mensal"],
      },
      {
        nome: "PROFISSIONAL",
        subtitulo: "Crescimento activo",
        preco: "13.900 MT/mês",
        destaque: true,
        itens: [
          "2 redes sociais",
          "16 publicações por mês",
          "Campanhas pagas",
          "Relatório de desempenho detalhado",
        ],
      },
      {
        nome: "PREMIUM",
        subtitulo: "Operação completa",
        preco: "24.900 MT/mês",
        itens: [
          "3 redes sociais",
          "24+ publicações por mês",
          "Gestor dedicado",
          "Estratégia e optimização contínua",
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
