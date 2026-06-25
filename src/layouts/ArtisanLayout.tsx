import { useState } from "react";
import { 
  Layers, ShoppingBag, Bell, CreditCard, 
  MessageSquare, LogOut, Menu, X 
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
  activePage: string;
  setActivePage: (page: string) => void;
}

export const ArtisanLayout = ({ children, activePage, setActivePage }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { id: "dashboard", name: "Tableau de bord", icon: <Layers className="h-4 w-4" /> },
    { id: "catalog", name: "Mes Créations", icon: <ShoppingBag className="h-4 w-4" /> },
    { id: "orders", name: "Commandes WhatsApp", icon: <Bell className="h-4 w-4" /> },
    { id: "messages", name: "Messagerie client", icon: <MessageSquare className="h-4 w-4" /> },
    { id: "billing", name: "Mon Abonnement", icon: <CreditCard className="h-4 w-4" /> },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={() => setIsOpen(false)} />
      )}

      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform lg:transform-none lg:opacity-100 transition-all duration-200 flex flex-col justify-between ${
        isOpen ? "translate-x-0 opacity-100" : "-translate-x-full lg:translate-x-0"
      }`}>
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/LOGO.png" alt="kusanika" className="w-8 h-8 object-cover rounded-xl" />
              <span className="font-bold tracking-tight font-heading text-lg">kusanika</span>
            </div>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <nav className="mt-8 space-y-1">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActivePage(item.id); setIsOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  activePage === item.id 
                    ? "bg-primary text-primary-foreground shadow-sm shadow-primary/10" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {item.icon}
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-border/60 space-y-1">
          <Button variant="ghost" className="w-full justify-start gap-3 rounded-xl text-muted-foreground hover:text-destructive">
            <LogOut className="h-4 w-4" /> Déconnexion
          </Button>
        </div>
      </aside>

      <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
        <header className="h-16 bg-card border-b border-border/60 flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-30">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
          <div className="ml-auto flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-semibold">Atelier Gradi</p>
              <p className="text-[10px] text-muted-foreground">Artisan Certifié</p>
            </div>
            <div className="h-9 w-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-sm text-primary">
              GK
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};