import {
  Search,
  MapPin,
  Palette,
  ArrowRight,
  Star,
} from "lucide-react"
import { Navigation } from "@/components/public/Navigation"

export default function ArtistsDirectory() {
  return (
    <div className="min-h-screen bg-background px-4 py-8 font-sans text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <Navigation />

        <div className="mx-auto max-w-3xl space-y-4 pt-4 text-center">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold tracking-widest text-primary uppercase">
            Artisans de la communauté
          </span>
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Rencontrez les Créateurs
          </h1>
          <p className="text-base leading-relaxed font-light text-muted-foreground sm:text-lg">
            Découvrez les artistes et artisans talentueux de **Mwana Mbok'art**.
            Explorez leurs univers uniques et soutenez directement la création
            locale.
          </p>
        </div>

        <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm sm:flex-row">
          <div className="relative w-full flex-1">
            <Search className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Rechercher un artisan, une spécialité (peinture, bois...)..."
              className="w-full rounded-xl border border-border bg-background py-2.5 pr-4 pl-10 text-sm text-foreground transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/20 focus:outline-none"
            />
          </div>

          <div className="relative w-full sm:w-48">
            <select
              className="w-full cursor-pointer appearance-none rounded-xl border border-border bg-background py-2.5 pr-8 pl-10 text-sm font-medium text-foreground focus:border-primary focus:ring-2 focus:ring-ring/20 focus:outline-none"
            >
              <option value="Tous">Toutes les régions</option>
              <option value="Kinshasa">Kinshasa</option>
              <option value="Lubumbashi">Lubumbashi</option>
              <option value="Goma">Goma</option>
            </select>
            <MapPin className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="relative grid h-36 grid-cols-2 gap-1 overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=300&auto=format&fit=crop&q=80"
                alt="Aperçu œuvre"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <img
                src="https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=300&auto=format&fit=crop&q=80"
                alt="Aperçu œuvre"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
            </div>

            <div className="relative flex flex-1 flex-col p-6 pt-0">
              <div className="absolute -top-10 left-6">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                  alt="Avatar"
                  className="h-20 w-20 rounded-xl border-4 border-card bg-card object-cover shadow-sm"
                />
              </div>

              <div className="mt-12 flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-card-foreground transition-colors group-hover:text-primary">
                    Nom de l'artisan
                  </h3>
                  <div className="flex items-center gap-1 rounded-md bg-amber-500/10 px-2 py-0.5 text-xs font-semibold text-amber-500">
                    <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                    4.9
                  </div>
                </div>

                <p className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-primary uppercase">
                  <Palette className="h-3 w-3" /> Spécialité / Discipline
                </p>

                <p className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" /> Ville, Région
                </p>

                <p className="line-clamp-3 border-t border-border/40 pt-2 text-sm leading-relaxed font-light text-muted-foreground">
                  Biographie ou description succincte de l'univers créatif de l'artisan.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                <span className="text-xs font-medium text-muted-foreground">
                  0 œuvres disponibles
                </span>
                <button className="group/btn inline-flex items-center gap-1 text-xs font-bold text-primary transition-opacity hover:opacity-80">
                  Voir la galerie
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8 py-16 text-center">
          <Palette className="mx-auto mb-3 h-10 w-10 text-muted-foreground" />
          <p className="text-sm font-medium text-card-foreground">
            Aucun artisan ne correspond à votre recherche.
          </p>
          <p className="mt-1 text-xs font-light text-muted-foreground">
            Essayez de modifier vos filtres ou de taper un autre nom.
          </p>
        </div> */}
      </div>
    </div>
  )
}