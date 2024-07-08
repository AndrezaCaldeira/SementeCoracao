export const policyLinks: PolicyLink[] = [
  {
    router: "/termos-de-uso",
    namePage: "Termos de Uso",
  },
  {
    router: "/politica-de-privacidade",
    namePage: "Política de Privacidade",
  },
];

type PolicyLink = {
  router: string;
  namePage: string;
};
