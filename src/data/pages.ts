export const pages: Page[] = [
  {
    router: "/",
    namePage: "Início",
  },
  {
    router: "/sobre",
    namePage: "Sobre",
  },
  {
    router: "/trabalhos",
    namePage: "Trabalhos",
  },
  {
    router: "/eventos",
    namePage: "Eventos",
  },
];

type Page = {
  router: string;
  namePage: string;
};
