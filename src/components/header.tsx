import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { pages } from "@/data/pages";

export default function Header({ currentPath }: { currentPath: string }) {
  return (
    <div className="flex items-center justify-between mx-auto max-w-5xl px-4">
      <a href="/" aria-label="Início">
        <img className="size-16" src="/logo.svg" alt="Logo Semente Coração" />
      </a>

      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Menu />
          </SheetTrigger>
          <SheetContent side="top" className="bg-background">
            <SheetHeader className="border-b py-3 mb-6">
              <SheetTitle>
                <a href="/" aria-label="Início">
                  <img
                    className="size-16"
                    src="/logo.svg"
                    alt="Logo Semente Coração"
                  />
                </a>
              </SheetTitle>
            </SheetHeader>
            <ul className="space-y-8">
              {pages.map((page) => (
                <li key={page.router}>
                  <a
                    className={`font-openSansRegular text-muted-foreground hover:bg-transparent transition hover:text-primary ${
                      currentPath.replace(/^\//, "").toLowerCase() ===
                      page.router.replace(/^\//, "").toLowerCase()
                        ? "text-primary"
                        : ""
                    }`}
                    href={page.router}
                    aria-label={page.namePage}
                  >
                    {page.namePage}
                  </a>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </nav>

      <nav className="hidden md:flex">
        <ul className="flex items-center space-x-16">
          {pages.map((page) => (
            <li key={page.router}>
              <a
                className={`font-openSansRegular text-muted-foreground hover:bg-transparent transition hover:text-primary ${
                  currentPath.replace(/^\//, "").toLowerCase() ===
                  page.router.replace(/^\//, "").toLowerCase()
                    ? "text-primary"
                    : ""
                }`}
                href={page.router}
                aria-label={page.namePage}
              >
                {page.namePage}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
