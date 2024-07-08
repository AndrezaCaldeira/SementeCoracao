import { Separator } from "@/components/ui/separator";
import { ArrowUp, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { socialLinks } from "../data/socialLinks";
import { pages } from "@/data/pages";
import { policyLinks } from "@/data/policyLinks";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <nav className="mx-auto max-w-5xl px-4 flex flex-col items-center justify-between py-10 md:flex-row">
        <ul className="grid grid-cols-2 gap-x-12 gap-y-8 text-center pb-10 md:pb-0 md:flex md:items-center md:space-x-6">
          {pages.map((page) => (
            <li key={page.namePage}>
              <a
                className="font-openSansRegular text-secondary hover:text-primary transition"
                href={page.router}
                aria-label={page.namePage}
              >
                {page.namePage}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#top"
          className="flex items-center gap-x-2 text-primary hover:text-primaryLight50 transition"
          aria-label="Voltar para o topo da página"
        >
          <ArrowUp size={24} />
          Voltar para o topo da página
        </a>
      </nav>

      <Separator className="bg-white/20 mb-10" />

      <div className="text-secondary mx-auto max-w-5xl px-4 flex flex-col space-y-24 pb-10">
        <div className="flex flex-col items-center md:items-start space-y-10 md:flex-row justify-between">
          <div className="flex flex-col text-center md:text-start space-y-10 md:space-y-0 md:items-start md:justify-start md:space-x-10 md:flex-row">
            <ul className="flex items-center justify-center space-x-8">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    className="hover:text-primary transition"
                    href={social.url}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {React.createElement(social.icon, { size: 24 })}
                  </a>
                </li>
              ))}
            </ul>
            <p className="md:w-80">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda sunt nam provident, numquam reprehenderit error magnam
              vero eius ipsam minus?
            </p>
          </div>

          <ul className="flex flex-col space-y-2">
            {policyLinks.map((policy) => (
              <li key={policy.namePage} className="text-center md:text-right">
                <a
                  href={policy.router}
                  className="hover:text-primary transition"
                >
                  {policy.namePage}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-center md:text-start">
          &copy; {currentYear} Semente Coração • Todos os direitos reservados.
        </p>
      </div>
    </>
  );
}
