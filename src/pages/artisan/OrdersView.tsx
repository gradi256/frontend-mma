import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, ShoppingBag, User, Calendar, Tag, Check, Archive, Clock, Bell } from "lucide-react";

export const OrdersView = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight font-heading">Commandes & Leads</h1>
          <p className="text-sm text-muted-foreground">Gérez vos paniers clients validés via Email et WhatsApp sans aucun intermédiaire.</p>
        </div>

        <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 text-xs font-semibold">
          <Bell className="w-4 h-4 animate-pulse" />
          <span>2 nouvelles notifications</span>
          <span className="absolute -top-1 -right-1 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
        </div>
      </div>

      <div className="space-y-4 max-w-4xl">
        <Card className="border-l-4 border-l-amber-500 bg-card shadow-xs">
          <div className="p-5 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex flex-col sm:flex-row items-start gap-4 flex-1">
              <div className="w-20 h-20 bg-zinc-800 rounded-xl flex items-center justify-center text-[10px] text-zinc-500 shrink-0 border border-border/40">
                Aperçu
              </div>
              
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="font-bold text-foreground">ID: #CMD-0941</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> 24 Juin 2026</span>
                  <Badge variant="secondary" className="text-[10px] px-2 py-0.5 font-medium bg-amber-500/10 text-amber-600 border border-amber-500/20">En cours</Badge>
                </div>
                
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="font-bold text-sm">Dieudonné Kalombo</span>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium">
                  <span className="flex items-center gap-1.5 text-primary">
                    <ShoppingBag className="w-3.5 h-3.5" /> Masque Luba Traditionnel
                  </span>
                  <span className="text-muted-foreground">Art. unique : 200 $</span>
                  <span className="text-muted-foreground">Qté : 1</span>
                  <span className="flex items-center gap-1 text-foreground font-bold bg-muted px-2 py-0.5 rounded-md">
                    <Tag className="w-3 h-3" /> Total : 200 $
                  </span>
                </div>

                <p className="text-xs text-muted-foreground bg-muted p-3 rounded-lg italic max-w-2xl leading-relaxed">
                  "Bonjour cher artiste, j'ai validé mon panier. Pouvons-nous planifier une livraison à Gombe cette semaine ?"
                </p>
              </div>
            </div>

            <div className="flex lg:flex-col items-center gap-2 w-full lg:w-auto justify-end shrink-0 border-t lg:border-t-0 pt-4 lg:pt-0 border-border/60">
              <div className="grid grid-cols-2 gap-2 w-full lg:w-44">
                <Button size="sm" variant="outline" className="h-9 text-xs gap-1 bg-amber-500/5 text-amber-600 border-amber-500/20 hover:bg-amber-500/10">
                  <Clock className="w-3.5 h-3.5" /> En cours
                </Button>
                <Button size="sm" variant="outline" className="h-9 text-xs border-zinc-700/50 gap-1 hover:bg-emerald-500/10 hover:text-emerald-600 transition-colors">
                  <Check className="w-3.5 h-3.5" /> Accepter
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-2 w-full lg:w-44">
                <Button size="sm" variant="ghost" className="h-9 text-xs gap-1 text-zinc-400 hover:text-zinc-100">
                  <Mail className="w-3.5 h-3.5" /> Email
                </Button>
                <Button size="sm" className="h-9 text-xs bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs gap-1">
                  <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="border-l-4 border-l-zinc-500 bg-card shadow-xs opacity-70">
          <div className="p-5 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex flex-col sm:flex-row items-start gap-4 flex-1">
              <div className="w-20 h-20 bg-zinc-800 rounded-xl flex items-center justify-center text-[10px] text-zinc-500 shrink-0 border border-border/40">
                Aperçu
              </div>
              
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="font-bold text-foreground">ID: #CMD-0892</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> 18 Juin 2026</span>
                  <Badge variant="secondary" className="text-[10px] px-2 py-0.5 font-medium bg-zinc-500/10 text-zinc-400 border border-zinc-500/20">Archivé</Badge>
                </div>
                
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="font-bold text-sm">Sarah Mwamba</span>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium">
                  <span className="flex items-center gap-1.5 text-primary">
                    <ShoppingBag className="w-3.5 h-3.5" /> Statuette en Bronze d'Art
                  </span>
                  <span className="text-muted-foreground">Prix : 150 $</span>
                  <span className="text-muted-foreground">Qté : 2</span>
                  <span className="flex items-center gap-1 text-foreground font-bold bg-muted px-2 py-0.5 rounded-md">
                    <Tag className="w-3 h-3" /> Total : 300 $
                  </span>
                </div>
              </div>
            </div>

            <div className="flex lg:flex-col items-center gap-2 w-full lg:w-auto justify-end shrink-0 border-t lg:border-t-0 pt-4 lg:pt-0 border-border/60">
              <Button size="sm" variant="outline" disabled className="h-9 w-full lg:w-44 text-xs gap-1.5 border-zinc-800 text-zinc-500">
                <Archive className="w-3.5 h-3.5" /> Finalisé & Archivé
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};