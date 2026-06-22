import { useState } from "react";
import { NavLink } from "react-router";
import { Check, ArrowRight, Paintbrush, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const SubscriptionPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState("annual-plan");

  const pricingOptions = [
    {
      id: "monthly-plan",
      slug: "monthly",
      name: "Abonnement Mensuel",
      price: "$15",
      period: "/mois",
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
      color: "border-border",
    },
    {
      id: "annual-plan",
      slug: "annual",
      name: "Abonnement Annuel",
      price: "$144",
      period: "/an",
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
      color: "border-primary shadow-lg shadow-primary/10",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col lg:flex-row w-full overflow-hidden">
      
      <div className="relative w-full lg:w-[35%] min-h-[30vh] lg:min-h-screen flex flex-col justify-center p-8 lg:p-12 overflow-hidden">
        <div className="absolute inset-0 z-0 w-full h-full">
          <video
            src="/6722180-uhd_2160_3840_25fps.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 space-y-5 max-w-sm">
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
              <Paintbrush className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight font-heading">
              Propulsez votre art au niveau supérieur.
            </h2>
          </div>
          <p className="text-sm text-zinc-300 leading-relaxed">
            Félicitations pour votre inscription ! La dernière étape consiste à choisir l'abonnement qui correspond le mieux à vos ambitions.
          </p>
          <div className="pt-4 flex items-center gap-3 text-white/80 text-xs bg-white/10 p-3 rounded-lg border border-white/10 backdrop-blur-md">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span>Paiements sécurisés et gestion de forfait flexible.</span>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[65%] flex flex-col items-center bg-background px-4 py-12 lg:px-12 overflow-y-auto justify-center">
        <div className="w-full max-w-3xl">
          
          <div className="text-center lg:text-left mb-10 space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-foreground font-heading">Choisissez votre forfait</h1>
            <p className="text-muted-foreground">Sélectionnez une offre pour activer votre boutique.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {pricingOptions.map((plan) => (
              <Card 
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative cursor-pointer transition-all duration-300 hover:scale-[1.02] flex flex-col border-2 ${
                  selectedPlan === plan.id ? plan.color : "hover:border-muted-foreground/30"
                }`}
              >
                {plan.isPopular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-primary text-primary-foreground">
                    Recommandé
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl font-bold mt-2">{plan.name}</CardTitle>
                  <CardDescription className="text-xs leading-relaxed min-h-10 pt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 space-y-6">
                  <div className="text-center">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button 
                    variant={selectedPlan === plan.id ? "default" : "outline"}
                    className="w-full transition-all"
                  >
                    {selectedPlan === plan.id ? "Plan sélectionné" : "Choisir ce plan"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-muted/30 border border-border">
            <div className="text-center sm:text-left">
              <p className="text-sm font-medium">Besoin d'aide ou d'un autre moyen de paiement ?</p>
              <p className="text-xs text-muted-foreground">Notre équipe support est disponible pour vous accompagner à tout moment.</p>
            </div>
            <div className="flex items-center gap-4">
              <NavLink to="/support">
                <Button variant="ghost" className="text-xs">Support</Button>
              </NavLink>
              <NavLink to="/dashboard">
                <Button className="shadow-lg shadow-primary/20">
                  Activer mon compte <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </NavLink>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};