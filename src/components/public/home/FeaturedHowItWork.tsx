import { CheckCircle2, MessageSquare, Search } from "lucide-react"

const steps = [
  {
    id: "01",
    name: "Abonnement simple",
    description:
      "Choisissez votre forfait (mensuel ou annuel) pour débloquer un accès complet à la plateforme, sans frais cachés ni commissions.",
    icon: CheckCircle2,
  },
  {
    id: "02",
    name: "Mise en relation directe",
    description:
      "Les acheteurs parcourent le catalogue africain et entrent directement en contact avec les artisans locaux en un clic.",
    icon: MessageSquare,
  },
  {
    id: "03",
    name: "Transactions en toute liberté",
    description:
      "Paiement, prix final et mode de livraison : vous gérez tout directement entre vous, selon vos propres préférences.",
    icon: Search,
  },
]

export const FeaturedHowItWork = () => {
  return (
    <section className="border-t border-border bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="mb-12 flex flex-col justify-center lg:col-span-5 lg:mb-0">
            <div className="mb-3 inline-flex items-center self-start rounded-full border border-primary/10 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Transparence totale
            </div>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              <span className="text-primary">0% </span>
              de commission. 100% de liberté
            </h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground">
              Mwana Mbok'Art est un espace d'exposition et de connexion. Nous ne
              nous immisçons pas dans vos ventes : vous payez un abonnement
              fixe, vous publiez vos œuvres, et vous traitez directement avec
              vos clients.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-8 lg:col-span-7">
            <div className="grid grid-cols-1 gap-8">
              {steps.map((step) => {
                const IconComponent = step.icon
                return (
                  <div
                    key={step.id}
                    className="group relative flex flex-col gap-4 rounded-2xl border border-border/40 bg-card/50 p-5 transition-all duration-300 hover:border-border hover:bg-card hover:shadow-sm sm:flex-row"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <IconComponent className="h-5 w-5" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-sans text-xs font-semibold tracking-wider text-muted-foreground/60">
                          {step.id}
                        </span>
                        <h3 className="font-sans text-base font-semibold tracking-tight text-foreground">
                          {step.name}
                        </h3>
                      </div>
                      <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}