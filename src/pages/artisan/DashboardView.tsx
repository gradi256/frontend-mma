import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Layers, Bell, TrendingUp, CreditCard, ShoppingBag, ExternalLink, Edit3, Trash2, Clock } from "lucide-react";

export const DashboardView = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 animate-in fade-in duration-300">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-border/60 shadow-xs">
          <CardContent className="flex items-center gap-4 p-5">
            <div className="rounded-xl bg-primary/10 p-3 text-primary"><Layers className="h-5 w-5" /></div>
            <div>
              <span className="block text-xs font-medium text-muted-foreground">Vitrine active</span>
              <span className="text-xl font-bold">3 Œuvres</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-xs">
          <CardContent className="flex items-center gap-4 p-5">
            <div className="rounded-xl bg-amber-500/10 p-3 text-amber-600"><Bell className="h-5 w-5" /></div>
            <div>
              <span className="block text-xs font-medium text-muted-foreground">Nouvelles demandes</span>
              <span className="text-xl font-bold text-amber-600">1 Nouvelle</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-xs">
          <CardContent className="flex items-center gap-4 p-5">
            <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-600"><TrendingUp className="h-5 w-5" /></div>
            <div>
              <span className="block text-xs font-medium text-muted-foreground">Valeur de la galerie</span>
              <span className="text-xl font-bold text-emerald-600">1,200 $ USD</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-xs">
          <CardContent className="flex items-center gap-4 p-5">
            <div className="rounded-xl bg-blue-500/10 p-3 text-blue-600"><CreditCard className="h-5 w-5" /></div>
            <div className="flex-1">
              <span className="block text-xs font-medium text-muted-foreground">Abonnement kusanika</span>
              <div className="mt-0.5 flex items-center justify-between">
                <span className="text-sm font-bold text-blue-600">Annuel Actif</span>
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-base font-bold tracking-tight">
              <ShoppingBag className="h-4 w-4 text-muted-foreground" />
              Créations vedettes
            </h2>
            <button className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
              Voir mon profil public <ExternalLink className="h-3 w-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Card className="group overflow-hidden border-border/60 shadow-xs transition-all hover:shadow-sm">
              <div className="relative aspect-video w-full overflow-hidden bg-muted">
                <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-xs text-zinc-500">Aperçu Œuvre</div>
              </div>
              <CardContent className="space-y-3 p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">Sculpture</span>
                    <h3 className="mt-0.5 line-clamp-1 text-sm font-semibold">Le Penseur du Terroir</h3>
                  </div>
                  <span className="shrink-0 text-sm font-bold">450 $</span>
                </div>
                <div className="mt-1 flex items-center justify-between border-t border-border/60 pt-3">
                  <Badge variant="outline" className="rounded-full border-emerald-500/20 bg-emerald-500/5 px-2 py-0.5 text-[11px] font-medium text-emerald-600">
                    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" /> Disponible
                  </Badge>
                  <div className="flex items-center gap-0.5">
                    <Button variant="ghost" size="icon" className="h-8 w-8"><Edit3 className="h-3.5 w-3.5" /></Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive"><Trash2 className="h-3.5 w-3.5" /></Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="flex items-center gap-2 text-base font-bold tracking-tight">
            <Bell className="h-4 w-4 text-muted-foreground" />
            Dernière alerte WhatsApp
          </h2>

          <Card className="border-l-4 border-l-amber-500 bg-amber-500/1 shadow-xs">
            <CardHeader className="space-y-1 p-4">
              <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                <span className="font-bold">ID: #9482</span>
                <span>Aujourd'hui</span>
              </div>
              <CardTitle className="flex items-center justify-between text-sm font-bold pt-1">
                <span>Jean-Luc M.</span>
                <span className="rounded-md bg-muted px-2 py-0.5 text-xs font-semibold">450 $</span>
              </CardTitle>
              <CardDescription className="flex items-center gap-1 text-xs font-medium text-primary pt-0.5">
                <ShoppingBag className="h-3 w-3" /> Le Penseur du Terroir
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 p-4 pt-0">
              <div className="rounded-lg bg-muted p-2.5 text-xs leading-relaxed text-muted-foreground italic">
                "Bonjour, l'œuvre m'intéresse beaucoup pour ma collection privée. Est-elle dispo sur Kinshasa ?"
              </div>
              <div className="flex items-center justify-end gap-2 pt-1">
                <Button size="sm" variant="outline" className="h-8 gap-1 border-amber-500/30 text-amber-700 hover:bg-amber-500/10">
                  <Clock className="h-3.5 w-3.5" /> Répondre
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};