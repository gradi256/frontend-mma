import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, CreditCard, Sparkles } from "lucide-react";

export const BillingView = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-4xl animate-in fade-in duration-300">
      <div>
        <h1 className="text-2xl font-bold tracking-tight font-heading">Abonnement & Facturation</h1>
        <p className="text-sm text-muted-foreground">Pilotez votre formule et accédez à vos factures kusanika.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-1 md:col-span-2 border-primary/30 bg-primary/1 shadow-xs flex flex-col justify-between">
          <CardHeader className="p-6 pb-2">
            <div className="flex justify-between items-start">
              <div>
                <Badge className="bg-primary text-primary-foreground mb-2 text-[10px] uppercase">Plan Actif</Badge>
                <CardTitle className="text-lg font-bold">Abonnement Annuel</CardTitle>
              </div>
              <span className="text-2xl font-black">$144<span className="text-xs text-muted-foreground font-normal">/an</span></span>
            </div>
            <CardDescription className="text-xs pt-1">
              Profitez de la plateforme à taux de commission réduit avec exposition illimitée.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-6 py-4 border-y border-border/40 my-2 space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Prochain prélèvement :</span>
              <span className="font-semibold">24 Juin 2027</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Mode de paiement :</span>
              <span className="font-semibold flex items-center gap-1"><CreditCard className="w-3.5 h-3.5" /> Mobile Money (M-Pesa)</span>
            </div>
          </CardContent>
          <CardFooter className="p-6 flex gap-3">
            <Button variant="outline" className="h-9 text-xs flex-1">Changer de plan</Button>
            <Button variant="destructive" className="h-9 text-xs flex-1 bg-red-500/5 hover:bg-red-500/10 text-red-500 border-red-500/20">Suspendre</Button>
          </CardFooter>
        </Card>

        <Card className="border-border/60 shadow-xs p-6 flex flex-col justify-center text-center space-y-4">
          <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold">Avantages kusanika</h3>
            <p className="text-xs text-muted-foreground mt-1">Vous économisez 20% chaque année sur votre accès artisan.</p>
          </div>
          <div className="text-left bg-muted/40 p-3 rounded-lg border border-border/40 space-y-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>0% de commission</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Profil vérifié</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};