import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Edit3, Trash2, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const CatalogView = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight font-heading">Mon Catalogue d'Art</h1>
          <p className="text-sm text-muted-foreground">Exposez vos créations, mettez à jour vos stocks et fixez vos prix.</p>
        </div>
        <Button className="h-10 text-xs font-bold shadow-xs"><Plus className="w-4 h-4 mr-2" /> Ajouter une œuvre</Button>
      </div>

      <div className="flex gap-3 max-w-sm relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input placeholder="Rechercher une pièce..." className="pl-9 h-10 text-xs" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((id) => (
          <Card key={id} className="group overflow-hidden border-border/60 shadow-xs transition-all hover:shadow-sm">
            <div className="relative aspect-square w-full overflow-hidden bg-muted">
              <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-xs text-zinc-500">Galerie Image #{id}</div>
            </div>
            <CardContent className="space-y-3 p-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">Peinture</span>
                  <h3 className="mt-0.5 line-clamp-1 text-sm font-semibold">Reflets du Fleuve Congo</h3>
                </div>
                <span className="shrink-0 text-sm font-bold">380 $</span>
              </div>
              <div className="mt-1 flex items-center justify-between border-t border-border/60 pt-3">
                <Badge variant="outline" className="rounded-full border-emerald-500/20 bg-emerald-500/5 px-2 py-0.5 text-[11px] font-medium text-emerald-600">
                  <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" /> En ligne
                </Badge>
                <div className="flex items-center gap-0.5">
                  <Button variant="ghost" size="icon" className="h-8 w-8"><Edit3 className="h-3.5 w-3.5" /></Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive"><Trash2 className="h-3.5 w-3.5" /></Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};