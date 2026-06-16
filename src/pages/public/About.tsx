import { Navigation } from "@/components/public/Navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
 
  Palette,
  Heart,
  Globe,
  ShieldCheck,
  ArrowRight,
} from "lucide-react"

export const About = () => {

  // Valeurs statistiques fictives pour le projet
  const stats = [
    { value: "150+", label: "Artisans Référencés" },
    { value: "1200+", label: "Œuvres d'Art Créées" },
    { value: "3", label: "Villes Clés (Kinshasa, Lubumbashi, Goma)" },
    { value: "0%", label: "Commission sur les Ventes Directes" },
  ]

  // Valeurs clés de la plateforme
  const values = [
    {
      icon: <Palette className="h-6 w-6 text-primary" />,
      title: "Valorisation Culturelle",
      description:
        "Mettre en lumière la richesse infinie et la diversité de l'art contemporain et traditionnel congolais.",
    },
    {
      icon: <Heart className="h-6 w-6 text-red-500" />,
      title: "Soutien Direct",
      description:
        "Connecter les acheteurs du monde entier directement avec les artisans sans intermédiaires abusifs via WhatsApp.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-emerald-600" />,
      title: "Authenticité Garantie",
      description:
        "Chaque pièce raconte une histoire unique, sculptée, peinte ou tissée à la main au cœur de la RDC.",
    },
  ]

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-neutral-50/50 px-4 py-8 text-foreground transition-colors duration-300 sm:px-6 lg:px-8 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl space-y-16">
        <Navigation />

        {/* SECTION HÉROS À PROPOS */}
        <div className="grid gap-12 pt-4 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <Badge
              variant="outline"
              className="rounded-full border-primary/30 bg-primary/5 px-3 py-1 text-xs text-primary"
            >
              Qui sommes-nous ?
            </Badge>
            <h1 className="font-serif text-4xl font-extrabold tracking-tight sm:text-5xl">
              Propulser l'art et l'artisanat de la RDC vers le monde.
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground">
              **Mwana Mbok'Art** est une vitrine technologique et solidaire née
              d'une ambition claire : offrir aux peintres, sculpteurs,
              photographes et artisans de la République Démocratique du Congo un
              espace numérique à la hauteur de leur génie créatif.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground/90">
              De l'effervescence culturelle de **Kinshasa** aux lignes de bronze
              de **Lubumbashi**, en passant par la résilience visuelle et
              l'afrofuturisme à **Goma**, notre galerie communautaire supprime
              les barrières physiques pour connecter directement l'atelier au
              collectionneur.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                className="gap-2 rounded-xl px-5 py-5 text-xs font-medium"
              >
                Explorer le Catalogue <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="rounded-xl px-5 py-5 text-xs font-medium"
              >
                Voir les Artisans
              </Button>
            </div>
          </div>

          {/* GRILLE COMPOSÉE D'IMAGES/ILLUSTRATIONS CHALEUREUSES */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&auto=format&fit=crop&q=80"
                alt="Peinture Congolaise"
                className="h-64 w-full rounded-2xl object-cover shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&auto=format&fit=crop&q=80"
                alt="Art abstrait"
                className="h-44 w-full rounded-2xl object-cover shadow-sm"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=400&auto=format&fit=crop&q=80"
                alt="Sculpture sur bois"
                className="h-40 w-full rounded-2xl object-cover shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=400&auto=format&fit=crop&q=80"
                alt="Atelier d'artiste"
                className="h-64 w-full rounded-2xl object-cover shadow-md"
              />
            </div>
            {/* Décoration subtile en arrière-plan */}
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/5 blur-2xl" />
          </div>
        </div>

        {/* SECTION STATISTIQUES RELEVÉES */}
        <div className="grid grid-cols-2 gap-4 rounded-3xl border border-muted/60 bg-card p-8 text-center shadow-xs sm:grid-cols-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
                {stat.value}
              </div>
              <div className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* SECTION NOS VALEURS FONDATRICES */}
        <div className="space-y-10">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight">
              Ce qui guide chacun de nos choix
            </h2>
            <p className="text-sm text-muted-foreground">
              Nous croyons que la technologie doit servir l'émancipation
              économique et artistique des créateurs locaux.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, idx) => (
              <Card
                key={idx}
                className="space-y-4 rounded-2xl border-muted/60 bg-background p-6 shadow-2xs transition-shadow hover:shadow-xs"
              >
                <div className="w-fit rounded-xl bg-muted/50 p-3">
                  {value.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* FOOTER APPEL À L'ACTION */}
        <div className="relative space-y-6 overflow-hidden rounded-3xl bg-zinc-900 p-8 text-center text-zinc-100 sm:p-12 dark:border dark:bg-card">
          <div className="relative z-10 mx-auto max-w-2xl space-y-3">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Prêt à soutenir la Voie du Code et de l'Art ?
            </h2>
            <p className="text-xs leading-relaxed text-zinc-400 sm:text-sm">
              Que vous soyez un amateur d'art cherchant une œuvre unique ou un
              artisan congolais désireux d'exposer son catalogue, la communauté
              vous ouvre ses portes.
            </p>
          </div>
          <div className="relative z-10 flex justify-center gap-3 pt-2">
            <Button
              className="rounded-xl bg-white px-6 py-5 text-xs font-semibold text-zinc-900 hover:bg-zinc-100"
            >
              Rejoindre l'Aventure
            </Button>
          </div>
          {/* Filigrane discret en fond */}
          <Globe className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 text-zinc-800/40" />
        </div>
      </div>
    </div>
  )
}
