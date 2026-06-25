import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Phone } from "lucide-react";

export const MessagesView = () => {
  return (
    <div className="h-[calc(100vh-4rem)] flex border-t border-border/40 animate-in fade-in duration-300">
      <div className="w-80 border-r border-border/60 bg-card hidden md:flex flex-col">
        <div className="p-4 border-b border-border/60">
          <h2 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Discussions</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          <div className="p-3 bg-muted rounded-xl flex items-center gap-3 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">NM</div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold truncate">Nathalie Mukendi</p>
              <p className="text-[11px] text-muted-foreground truncate">Est-il possible de négocier la toile...</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-background">
        <div className="h-14 border-b border-border/60 px-6 flex items-center justify-between bg-card">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">NM</div>
            <div>
              <p className="text-xs font-bold">Nathalie Mukendi</p>
              <p className="text-[10px] text-muted-foreground flex items-center gap-1"><Phone className="w-2.5 h-2.5" /> Client Privé</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="flex items-start gap-3 max-w-md">
            <div className="bg-muted p-3 rounded-2xl rounded-tl-none text-xs leading-relaxed">
              Bonjour Gradi, j'adore vos créations. Est-il possible d'avoir un format sur mesure pour votre tableau "Reflets du Fleuve" ?
            </div>
          </div>
          <div className="flex items-start gap-3 max-w-md ml-auto flex-row-reverse">
            <div className="bg-primary text-primary-foreground p-3 rounded-2xl rounded-tr-none text-xs leading-relaxed">
              Bonjour Nathalie ! Absolument, je travaille sur commande également. Envoyez-moi les dimensions souhaitées.
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-border/60 bg-card flex gap-2">
          <Input placeholder="Écrire votre message..." className="h-10 text-xs pl-4" />
          <Button size="icon" className="h-10 w-10 shrink-0"><Send className="w-4 h-4" /></Button>
        </div>
      </div>
    </div>
  )
}