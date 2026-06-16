import { NavLink } from "react-router-dom"
import { ArrowRight, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"

interface NavItem {
  label: string
  href: string
}

const NavItems: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Découvrir les œuvres", href: "/catalog" },
  { label: "Nos Artisans", href: "/artisans" },
  { label: "Notre histoire", href: "/about" },
]

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <div
          className="transition-transform active:scale-95"
        >
          <img
            src="LOGO.png"
            alt="Mwana Mbok'Art"
            className="h-25 w-auto object-contain"
          />
        </div>

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NavItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                  isActive
                    ? "bg-accent text-foreground"
                    : "text-muted-foreground"
                }`
              }
              key={item.label}
              to={item.href}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* ACTIONS DESKTOP */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
            variant={"ghost"}
          >
            Connexion
          </Button>
          <Button
            className="gap-1.5 text-sm font-medium shadow-sm transition-all hover:opacity-90"
          >
            Créer un compte <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* MENU MOBILE RESPONSIVE */}
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant={"ghost"}
                size={"icon"}
                className="h-9 w-9 text-foreground hover:bg-accent"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-75 border-l border-border bg-background p-6 sm:w-100"
            >
              <SheetTitle className="sr-only">Navigation mobile</SheetTitle>

              <div className="flex h-full flex-col justify-between pt-8">
                {/* Liens de navigations mobiles */}
                <div className="flex flex-col gap-2">
                  {NavItems.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.href}
                      className={({ isActive }) =>
                        `flex h-11 items-center rounded-lg px-3 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                          isActive
                            ? "bg-accent text-foreground"
                            : "text-muted-foreground"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>

                {/* Actions au bas du menu mobile */}
                <div className="flex flex-col gap-3 border-t border-border pt-6">
                  <Button
                    variant={"outline"}
                    className="w-full justify-center border-border hover:bg-accent"
                  >
                    Connexion
                  </Button>
                  <Button
                    className="w-full justify-center gap-1.5"
                  >
                    Créer un compte
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
