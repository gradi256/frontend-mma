import { ChevronDown, HelpCircle } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "Faut-il créer un compte pour commander un article ?",
    answer:
      "Oui. Pour pouvoir commander une création ou contacter un artisan, vous devez créer un compte client. Ce compte est 100 % gratuit, sans aucun frais ni abonnement.",
  },
  {
    question: "Comment fonctionne l'inscription pour les artisans ?",
    answer:
      "En tant qu'artisan ou vendeur, la création de compte nécessite la souscription à un abonnement (mensuel ou annuel). Cet abonnement vous donne un accès complet pour publier vos produits et gérer votre vitrine.",
  },
  {
    question: "Comment se passent le paiement et la livraison des produits ?",
    answer:
      "Mwana Mbok'Art s'occupe uniquement de la mise en relation. Une fois connecté, vous entrez en contact privé avec l'artisan sur WhatsApp pour finaliser l'achat. Vous gérez le paiement (Mobile Money, espèces, etc.) et la livraison directement avec lui.",
  },
  {
    question: "Y a-t-il des commissions sur les ventes de l'artisan ?",
    answer:
      "Absolument aucune. Nous ne prenons aucune commission (0%) sur vos transactions. Tout l'argent de vos ventes vous revient directement. C'est pour cela que la plateforme repose sur un modèle d'abonnement pour les vendeurs.",
  },
]

export const FeaturedFaq = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  return (
    <section className="border-t border-border bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Besoin d'éclaircissements ?
          </h2>
          <p className="mt-4 font-sans text-base text-muted-foreground">
            Voici les réponses aux questions les plus frequentes sur notre
            modèle d'accès direct.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index
            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-border/60 bg-card transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex w-full cursor-pointer items-center justify-between p-5 text-left font-sans text-base font-semibold text-foreground hover:bg-accent/40"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="h-4 w-4 shrink-0 text-muted-foreground" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-55 border-border/40" : "max-h-0"}`}>
                  <p className="bg-muted/20 p-5 font-sans text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
