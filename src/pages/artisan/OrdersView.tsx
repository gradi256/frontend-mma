import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone, ShoppingBag, User } from "lucide-react";

export const OrdersView = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 animate-in fade-in duration-300">
      <div>
        <h1 className="text-2xl font-bold tracking-tight font-heading">Commandes & Leads WhatsApp</h1>
        <p className="text-sm text-muted-foreground">Gérez vos relations d'achat direct sans aucun intermédiaire.</p>
      </div>

      <div className="space-y-4 max-w-4xl">
        {[1, 2].map((order) => (
          <Card key={order} className="border-l-4 border-l-amber-500 bg-card shadow-xs">
            <div className="p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="font-bold text-foreground">ID: #CMD-0941</span>
                  <span>Reçu le 24 Juin 2026</span>
                  <Badge variant="secondary" className="text-[10px] px-2 py-0.5 font-medium">En attente de contact</Badge>
                </div>
                
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="font-bold text-sm">Dieudonné Kalombo</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1 ml-2">
                    <Phone className="w-3 h-3" /> +243 812 345 678
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-primary font-medium">
                  <ShoppingBag className="w-3.5 h-3.5" /> Masque Luba Traditionnel — <span className="font-bold text-foreground ml-1">200 $</span>
                </div>

                <p className="text-xs text-muted-foreground bg-muted p-3 rounded-lg italic max-w-2xl leading-relaxed">
                  "Bonjour cher artiste, je souhaite réserver cette œuvre. Pouvons-nous planifier une livraison à Gombe cette semaine ?"
                </p>
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto justify-end shrink-0">
                <Button size="sm" variant="outline" className="h-9 text-xs border-zinc-700/50">
                  Ignorer
                </Button>
                <Button size="sm" className="h-9 text-xs bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs">
                  <MessageSquare className="w-3.5 h-3.5 mr-1.5" /> Ouvrir WhatsApp
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};