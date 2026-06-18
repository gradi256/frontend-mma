import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Home,
  Paintbrush,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

const categories = [
  {
    name: "Art & Peinture",
    slug: "art-peinture",
    description:
      "Toiles vibrantes, fresques cubistes et œuvres contemporaines chargées de récits et d'émotions.",
    icon: Paintbrush,
    image: "beautiful-cubism-graffiti.jpg",
    count: "120+ œuvres",
  },
  {
    name: "Art Graphique & Dessin",
    slug: "art-graphique-dessin",
    description:
      "Portraits hyperréalistes d'une précision chirurgicale, capturés à la mine de plomb, au graphite et au stylo.",
    icon: ShieldCheck,
    image: "crayon9.jfif",
    count: "95+ dessins",
  },
  {
    name: "Maison & Déco",
    slug: "maison-deco",
    description:
      "Poteries en argile cuite, compositions de vaisselle monochrome et vases modernes pour sublimer ton intérieur.",
    icon: Home,
    image: "close-up-arrangement-modern-vases.jpg",
    count: "240+ objets",
  },
]

export const FeaturedCategorie = () => {
  return (
    <section className="border-t border-border bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Le savoir-faire de chez nous
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Catégories à la une
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Plonge dans la richesse de notre patrimoine à travers des
              créations uniques, pensées et façonnées par nos meilleurs talents.
            </p>
          </div>

          <Button
            variant={"ghost"}
            className="cursor-pointer gap-1.5 self-start text-sm font-medium text-muted-foreground hover:text-foreground md:self-auto"
          >
            Voir toutes les catégories
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <div
                key={category.name}
                className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border-border bg-card p-2 shadow-sm transition-all duration-300 hover:border-border/80 hover:shadow-xl hover:shadow-accent/10"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-muted">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="transitin-transform h-full w-full object-cover duration-700 ease-out group-hover:scale-103"
                  />
                  <span className="absolute top-3 right-3 rounded-md bg-background/90 px-2.5 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur-sm">
                    {category.count}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-4 pt-5">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-foreground">
                      {category.name}
                    </h3>
                  </div>

                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>

                  <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-foreground">
                    <span className="transtion-colors group-hover:text-primary">
                      Parcourir
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}