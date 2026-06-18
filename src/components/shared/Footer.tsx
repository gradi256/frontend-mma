import { Shield } from "lucide-react"
import { NavLink } from "react-router-dom"

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-border/60 pb-8 xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4 xl:col-span-1">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-foreground" />
              <span className="font-sans text-lg font-bold tracking-tight text-foreground">
                {" "}
                Mwana Mbok'Art
              </span>
            </div>
            <p className="max-w-md font-sans text-sm leading-relaxed text-muted-foreground">
              La vitrine d'élite de l'artisanat et de la culture locale. Une
              connexion directe, transparente et sans intermédiaire entre
              créateurs et passionnés
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="">
                <h3 className="font-sans text-sm font-semibold tracking-wider text-foreground uppercase">
                  Plateforme
                </h3>
                <ul className="mt-4 space-y-2.5">
                  <li>
                    <NavLink
                      to={"/catalog"}
                      className={
                        "font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
                      }
                    >
                      Découvrir les œuvres
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"#"}
                      className={
                        "font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
                      }
                    >
                      Tarifs d'accès
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-sans text-sm font-semibold tracking-wider text-foreground uppercase">
                  Support & Charte
                </h3>
                <ul className="mt-4 space-y-2.5">
                  <li>
                    <NavLink
                      to={"#"}
                      className={
                        "font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
                      }
                    >
                      Aide & FAQ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"#"}
                      className="font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Règles de la communauté
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="">
              <h3 className="font-sans text-sm font-semibold tracking-wider text-foreground uppercase">
                Légal
              </h3>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <NavLink
                    to={"#"}
                    className="font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Conditions d'utilisation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"#"}
                    className="font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Confidentialité
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-sans text-xs tracking-wide text-muted-foreground">
            &copy; {currentYear} Mnara. Tous droits réservés.
          </p>
          <p className="font-sans text-[10px] tracking-wider text-muted-foreground/40 uppercase">0% Commission &bull; 100% Liberté</p>
        </div>
      </div>
    </footer>
  )
}