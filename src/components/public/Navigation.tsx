import { Home, ShoppingBag, Users, LogIn } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

export const Navigation = () => {
  const location = useLocation()

  // Fonction pour vérifier si le lien est actif et appliquer le style
  const isActive = (path: string) => location.pathname === path

  const navLinks = [
    { to: "/", icon: <Home className="h-5 w-5 sm:h-3.5 sm:w-3.5" />, label: "Accueil" },
    { to: "/catalog", icon: <ShoppingBag className="h-5 w-5 sm:h-3.5 sm:w-3.5" />, label: "Catalogue" },
    { to: "/artisans", icon: <Users className="h-5 w-5 sm:h-3.5 sm:w-3.5" />, label: "Artisans" },
    { to: "/auth", icon: <LogIn className="h-5 w-5 sm:h-3.5 sm:w-3.5" />, label: "Connexion" },
  ]

  return (
    <header className="w-full max-w-7xl mx-auto mb-6 bg-card border border-muted/60 rounded-2xl shadow-xs transition-all duration-300">
      
      {/* VERSION GRAND ÉCRAN (Avec logo à gauche et liens textuels à droite) */}
      <div className="hidden sm:flex items-center justify-between p-4 gap-4">
        <Link to="/" className="flex items-center transition-opacity hover:opacity-90">
          <img 
            src="LOGO.png" 
            alt="Mwana Mbok'Art" 
            className="h-20 w-auto object-contain" 
          />
        </Link>

        <nav className="flex items-center gap-1 text-xs font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-colors ${
                isActive(link.to)
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* VERSION MOBILE (En haut, sans logo, UNIQUEMENT LES ICÔNES) */}
      <div className="sm:hidden p-1.5">
        <nav className="flex justify-between items-center gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.to)
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex-1 flex items-center justify-center py-3 px-1 rounded-xl transition-all ${
                  active
                    ? "bg-primary/10 text-primary scale-105"
                    : "text-muted-foreground active:bg-muted"
                }`}
                title={link.label} // Affiche une infobulle au surlong s'il y a lieu
              >
                {link.icon}
              </Link>
            )
          })}
        </nav>
      </div>

    </header>
  )
}