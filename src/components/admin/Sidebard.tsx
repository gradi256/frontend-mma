import { Link, useLocation } from "react-router-dom"; 
import { 
  LayoutDashboard, 
  Paintbrush, 
  Users, 
  CreditCard, 
  Settings, 
  LogOut
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const location = useLocation();

  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <aside 
      className={`fixed inset-y-0 left-0 z-20 flex flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <div className="flex h-16 items-center px-4 border-b border-sidebar-border">
        {isOpen ? (
          <div className="flex flex-col">
            <span className="font-heading font-bold text-base tracking-wider text-sidebar-foreground">
              MWANA MBOK'ART
            </span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium -mt-1">
              Espace Admin
            </span>
          </div>
        ) : (
          <span className="font-bold text-lg text-sidebar-primary mx-auto">M</span>
        )}
      </div>

      <nav className="flex-1 space-y-1.5 p-3 overflow-y-auto">
        <Link
          to="/admin"
          className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
            isActive("/admin")
              ? "bg-sidebar-primary text-sidebar-primary-foreground"
              : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          }`}
        >
          <LayoutDashboard className="h-4 w-4 shrink-0" />
          {isOpen && <span>Tableau de bord</span>}
        </Link>

        <Link
          to="/admin/artworks"
          className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
            isActive("/admin/artworks")
              ? "bg-sidebar-primary text-sidebar-primary-foreground"
              : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          }`}
        >
          <Paintbrush className="h-4 w-4 shrink-0" />
          {isOpen && <span>Gestion des Œuvres</span>}
        </Link>

        <Link
          to="/admin/users"
          className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
            isActive("/admin/users")
              ? "bg-sidebar-primary text-sidebar-primary-foreground"
              : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          }`}
        >
          <Users className="h-4 w-4 shrink-0" />
          {isOpen && <span>Utilisateurs</span>}
        </Link>

        <Link
          to="/admin/subscriptions"
          className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
            isActive("/admin/subscriptions")
              ? "bg-sidebar-primary text-sidebar-primary-foreground"
              : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          }`}
        >
          <CreditCard className="h-4 w-4 shrink-0" />
          {isOpen && <span>Abonnements</span>}
        </Link>

        <div className="h-px bg-sidebar-border my-2 mx-1" />

        <Link
          to="/admin/settings"
          className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
            isActive("/admin/settings")
              ? "bg-sidebar-primary text-sidebar-primary-foreground"
              : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          }`}
        >
          <Settings className="h-4 w-4 shrink-0" />
          {isOpen && <span>Paramètres</span>}
        </Link>
      </nav>

      <div className="p-3 border-t border-sidebar-border">
        <button 
          className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-destructive/10 hover:text-destructive transition-colors text-muted-foreground"
          onClick={() => console.log("Action de déconnexion...")}
        >
          <LogOut className="h-4 w-4 shrink-0" />
          {isOpen && <span>Déconnexion</span>}
        </button>
      </div>
    </aside>
  );
}