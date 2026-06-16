import { Button } from "@/components/ui/button"
import { Check, Shield, Sparkles } from "lucide-react"

const pricingOptions = [
  {
    id: "monthly-plan",
    slug: "monthly",
    name: "Abonnement Mensuel",
    price: "$15",
    period: "mois",
    description:
      "Profitez d’un accès complet et illimité avec la liberté d’interrompre à tout moment.",
    features: [
      "Mise en relation directe et instantanée",
      "Exposition et consultation illimitée d’œuvres",
      "0% de commission sur toutes les ventes",
      "Profil sécurisé et certifié communauté",
      "Aucun intermédiaire, gestion 100% libre",
    ],
    isPopular: false,
  },
  {
    id: "annual-plan",
    slug: "annual",
    name: "Abonnement Annuel",
    price: "$144",
    period: "an",
    description:
      "Engagez-vous sur la durée et bénéficiez de deux mois gratuits pour maximiser votre visibilité.",
    features: [
      "Mise en relation directe et instantanée",
      "Exposition et consultation illimitée d’œuvres",
      "0% de commission sur toutes les ventes",
      "Profil sécurisé et certifié communauté",
      "Aucun intermédiaire, gestion 100% libre",
      "Économisez 20% sur l’année (soit $12/mois)",
    ],
    isPopular: true,
  },
]

export const FeaturedCorePricing = () => {
  return (
    <section className="border-t border-border bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Un abonnement unique. Une liberté totale.
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground">
            Pas de mauvaise surprise, pas de fonctionnalités cachées. Choisissez
            le rythme de facturation qui vous convient pour connecter notre
            artisanat.
          </p>
        </div>

        <div className="mx-auto grid max-w-md grid-cols-1 gap-8 sm:max-w-none sm:grid-cols-2 lg:max-w-4xl">
          {pricingOptions.map((option) => (
            <div
              key={option.id}
              className={`relative flex flex-col rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-md ${
                option.isPopular
                  ? "border-foreground ring-1 ring-foreground"
                  : "border-border/60"
              }`}
            >
              {option.isPopular && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-foreground px-3 py-1 text-xs font-semibold tracking-wide text-background">
                  <Sparkles className="h-3 w-3" /> Meilleure offre
                </span>
              )}

              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 shrink-0 text-foreground" />
                  <h3 className="font-sans text-lg font-bold text-foreground">
                    {option.name}
                  </h3>
                </div>
                <p className="mt-2 min-h-10 font-sans text-sm text-muted-foreground">
                  {option.description}
                </p>
                <p className="mt-5 flex items-baseline text-foreground">
                  <span className="font-sans text-5xl font-extrabold tracking-tight">
                    {option.price}
                  </span>
                  <span className="ml-1 font-sans text-sm font-medium text-muted-foreground">
                    /{option.period}
                  </span>
                </p>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {option.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                    <span className="font-sans">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={option.isPopular ? "default" : "outline"}
                className="mt-auto w-full cursor-pointer font-sans font-medium"
              >
                Rejoindre la plateforme
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
