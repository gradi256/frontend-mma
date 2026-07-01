import React, { useState, useMemo } from "react";
import { 
  Search, 
  Filter, 
  Eye, 
  Ban, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  ChevronsLeft, 
  ChevronsRight, 
  ArrowUpDown, 
  CreditCard, 
  Users, 
  TrendingUp 
} from "lucide-react";

const initialSubscribers = [
  { id: "SUB-001", name: "Dieudonné Sana", type: "Annuel", amount: 120, status: "Actif", date: "14 Juin 2026", revenue: 4500, sales: 15 },
  { id: "SUB-002", name: "Naomi Koko", type: "Mensuel", amount: 15, status: "Actif", date: "12 Juin 2026", revenue: 2300, sales: 8 },
  { id: "SUB-003", name: "Bavon Luambo", type: "Mensuel", amount: 15, status: "Expiré", date: "01 Juin 2026", revenue: 850, sales: 3 },
  { id: "SUB-004", name: "Arlette Mwasi", type: "Annuel", amount: 120, status: "Actif", date: "28 Mai 2026", revenue: 6100, sales: 22 },
  { id: "SUB-005", name: "Claude Makélé", type: "Mensuel", amount: 15, status: "Actif", date: "15 Mai 2026", revenue: 1200, sales: 4 },
  { id: "SUB-006", name: "Sonia Mpela", type: "Annuel", amount: 120, status: "Suspendu", date: "10 Mai 2026", revenue: 3400, sales: 11 }
];

export default function Subscriptions() {
  const [subscribers, setSubscribers] = useState(initialSubscribers);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("Tous");
  const [typeFilter, setTypeFilter] = useState("Tous");
  
  // Configurations du tri et de la pagination
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  // Fonction de tri des colonnes
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // Fonction pour changer le statut d'un abonnement (ex: suspendre/activer)
  const toggleStatus = (id) => {
    setSubscribers(subscribers.map(sub => {
      if (sub.id === id) {
        return { ...sub, status: sub.status === "Actif" ? "Suspendu" : "Actif" };
      }
      return sub;
    }));
  };

  // Filtrage et tri combine des abonnés
  const processedSubscribers = useMemo(() => {
    let result = subscribers.filter(sub => {
      const matchesSearch = sub.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            sub.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === "Tous" || sub.status === statusFilter;
      const matchesType = typeFilter === "Tous" || sub.type === typeFilter;
      
      return matchesSearch && matchesStatus && matchesType;
    });

    if (sortConfig.key) {
      result.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }

    return result;
  }, [subscribers, searchTerm, statusFilter, typeFilter, sortConfig]);

  // Calculs de pagination
  const totalPages = Math.ceil(processedSubscribers.length / pageSize) || 1;
  const paginatedSubscribers = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return processedSubscribers.slice(startIndex, startIndex + pageSize);
  }, [processedSubscribers, currentPage, pageSize]);

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="space-y-8 max-w-[1600px] mx-auto w-full px-1">
      
      <div className="space-y-1">
        <h2 className="text-xl font-bold tracking-tight text-foreground font-heading md:text-2xl 2xl:text-3xl">
          Gestion des Abonnements
        </h2>
        <p className="text-xs md:text-sm text-muted-foreground font-light tracking-wide">
          Suivi unique de la formule Vendeur Pro pour les créateurs de la plateforme.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="bg-card p-5 rounded-xl border border-border/60 shadow-sm space-y-4 md:col-span-1">
          <div>
            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              Unique - Réservé Vendeurs
            </span>
            <h3 className="text-lg font-bold tracking-tight mt-2 text-foreground">Plan Mwana Vendeur Pro</h3>
          </div>
          <div className="space-y-2 border-t border-border/40 pt-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground font-light">Tarif Mensuel :</span>
              <span className="font-semibold text-foreground">15 $ / mois</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground font-light">Tarif Annuel :</span>
              <span className="font-semibold text-foreground">120 $ / an <span className="text-xs text-emerald-600 font-normal">(-33%)</span></span>
            </div>
          </div>
        </div>

        <div className="bg-card p-5 rounded-xl border border-border/60 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
            <Users className="h-6 w-6 stroke-[1.5]" />
          </div>
          <div>
            <p className="text-xs font-light text-muted-foreground uppercase tracking-wider">Abonnés Actifs</p>
            <h4 className="text-xl font-bold text-foreground mt-0.5">
              {subscribers.filter(s => s.status === "Actif").length} vendeurs
            </h4>
          </div>
        </div>

        <div className="bg-card p-5 rounded-xl border border-border/60 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-500">
            <TrendingUp className="h-6 w-6 stroke-[1.5]" />
          </div>
          <div>
            <p className="text-xs font-light text-muted-foreground uppercase tracking-wider">Revenus Globaux Générés</p>
            <h4 className="text-xl font-bold text-foreground mt-0.5">
              {subscribers.reduce((acc, curr) => acc + curr.revenue, 0).toLocaleString()} $
            </h4>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between bg-card p-4 rounded-xl border border-border/60 shadow-[0_1px_2px_rgba(0,0,0,0.01)]">
        <div className="relative flex-1 max-w-md w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/70 stroke-[1.5]" />
          <input
            type="text"
            placeholder="Rechercher par nom de vendeur ou ID..."
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
            className="w-full pl-9 pr-4 py-2 bg-background border border-border rounded-lg text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all"
          />
        </div>
        
        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-start lg:justify-end">
          <div className="relative min-w-[150px]">
            <select
              value={typeFilter}
              onChange={(e) => { setTypeFilter(e.target.value); setCurrentPage(1); }}
              className="w-full appearance-none pl-3 pr-8 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 font-medium cursor-pointer"
            >
              <option value="Tous">Toutes récurrences</option>
              <option value="Mensuel">Mensuel</option>
              <option value="Annuel">Annuel</option>
            </select>
            <Filter className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/70 pointer-events-none stroke-[1.5]" />
          </div>

          <div className="relative min-w-[150px]">
            <select
              value={statusFilter}
              onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
              className="w-full appearance-none pl-3 pr-8 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 font-medium cursor-pointer"
            >
              <option value="Tous">Tous les statuts</option>
              <option value="Actif">Actif</option>
              <option value="Expiré">Expiré</option>
              <option value="Suspendu">Suspendu</option>
            </select>
            <Filter className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/70 pointer-events-none stroke-[1.5]" />
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border/60 bg-card shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="border-b border-border/60 bg-muted/20 text-xs font-medium uppercase tracking-wider text-muted-foreground/80">
                <th className="py-3.5 px-4 cursor-pointer hover:text-foreground transition-colors" onClick={() => handleSort("id")}>
                  <div className="flex items-center gap-1">Abonnement ID <ArrowUpDown className="h-3 w-3" /></div>
                </th>
                <th className="py-3.5 px-4 cursor-pointer hover:text-foreground transition-colors" onClick={() => handleSort("name")}>
                  <div className="flex items-center gap-1">Vendeur <ArrowUpDown className="h-3 w-3" /></div>
                </th>
                <th className="py-3.5 px-4">Récurrence</th>
                <th className="py-3.5 px-4 cursor-pointer hover:text-foreground transition-colors" onClick={() => handleSort("amount")}>
                  <div className="flex items-center gap-1">Montant Payé <ArrowUpDown className="h-3 w-3" /></div>
                </th>
                <th className="py-3.5 px-4 cursor-pointer hover:text-foreground transition-colors" onClick={() => handleSort("sales")}>
                  <div className="flex items-center gap-1">Œuvres Vendues <ArrowUpDown className="h-3 w-3" /></div>
                </th>
                <th className="py-3.5 px-4 cursor-pointer hover:text-foreground transition-colors" onClick={() => handleSort("revenue")}>
                  <div className="flex items-center gap-1">Chiffre d'Affaires <ArrowUpDown className="h-3 w-3" /></div>
                </th>
                <th className="py-3.5 px-4">Statut</th>
                <th className="py-3.5 px-4 text-right w-[140px]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40 text-sm">
              {paginatedSubscribers.map((sub) => (
                <tr key={sub.id} className="hover:bg-muted/10 transition-colors group">
                  <td className="py-3.5 px-4 font-mono text-[11px] text-muted-foreground font-medium">
                    {sub.id}
                  </td>
                  <td className="py-3.5 px-4 font-medium text-foreground tracking-tight">
                    {sub.name}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium border ${
                      sub.type === "Annuel" 
                        ? "bg-purple-500/10 text-purple-600 border-purple-500/20" 
                        : "bg-blue-500/10 text-blue-600 border-blue-500/20"
                    }`}>
                      <CreditCard className="h-3 w-3 stroke-[1.5]" />
                      {sub.type}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-foreground">
                    {sub.amount} $
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground/80 font-light">
                    {sub.sales} ventes
                  </td>
                  <td className="py-3.5 px-4 font-medium text-emerald-600">
                    {sub.revenue.toLocaleString()} $
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                      sub.status === "Actif" 
                        ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" 
                        : sub.status === "Suspendu"
                        ? "bg-rose-500/10 text-rose-600 border-rose-500/20"
                        : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                    }`}>
                      <span className={`h-1 w-1 rounded-full ${
                        sub.status === "Actif" ? "bg-emerald-500" : sub.status === "Suspendu" ? "bg-rose-500" : "bg-amber-500"
                      }`} />
                      {sub.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-90 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all" title="Historique des paiements">
                        <Eye className="h-4 w-4 stroke-[1.5]" />
                      </button>
                      
                      {sub.status === "Actif" ? (
                        <button 
                          onClick={() => toggleStatus(sub.id)}
                          className="p-1.5 rounded-md text-rose-600 hover:bg-rose-500/10 transition-all" 
                          title="Suspendre l'abonnement"
                        >
                          <Ban className="h-4 w-4 stroke-[1.5]" />
                        </button>
                      ) : (
                        <button 
                          onClick={() => toggleStatus(sub.id)}
                          className="p-1.5 rounded-md text-emerald-600 hover:bg-emerald-500/10 transition-all" 
                          title="Réactiver l'abonnement"
                        >
                          <CheckCircle2 className="h-4 w-4 stroke-[1.5]" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              {processedSubscribers.length === 0 && (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-sm text-muted-foreground/70 font-light">
                    Aucun abonnement trouvé pour cette sélection.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between px-4 py-4 border-t border-border/60 bg-muted/10 text-sm">
          <div className="flex items-center gap-4 text-muted-foreground text-xs md:text-sm">
            <span className="font-light">
              Affichage de <span className="font-medium text-foreground">{processedSubscribers.length === 0 ? 0 : (currentPage - 1) * pageSize + 1}</span> à{" "}
              <span className="font-medium text-foreground">{Math.min(currentPage * pageSize, processedSubscribers.length)}</span> sur{" "}
              <span className="font-medium text-foreground">{processedSubscribers.length}</span> abonnés
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-light">Lignes :</span>
              <select
                value={pageSize}
                onChange={(e) => { setPageSize(Number(e.target.value)); setCurrentPage(1); }}
                className="bg-background border border-border rounded px-1.5 py-0.5 text-xs text-foreground font-medium focus:outline-none"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-1 self-end sm:self-center">
            <button
              onClick={() => changePage(1)}
              disabled={currentPage === 1}
              className="p-1.5 rounded-md border border-border bg-background hover:bg-accent disabled:opacity-40 disabled:hover:bg-background transition-all"
            >
              <ChevronsLeft className="h-4 w-4 stroke-[1.5]" />
            </button>
            <button
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-1.5 rounded-md border border-border bg-background hover:bg-accent disabled:opacity-40 disabled:hover:bg-background transition-all"
            >
              <ChevronLeft className="h-4 w-4 stroke-[1.5]" />
            </button>
            
            <div className="px-3 text-xs font-medium text-foreground">
              Page {currentPage} sur {totalPages}
            </div>

            <button
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-1.5 rounded-md border border-border bg-background hover:bg-accent disabled:opacity-40 disabled:hover:bg-background transition-all"
            >
              <ChevronRight className="h-4 w-4 stroke-[1.5]" />
            </button>
            <button
              onClick={() => changePage(totalPages)}
              disabled={currentPage === totalPages}
              className="p-1.5 rounded-md border border-border bg-background hover:bg-accent disabled:opacity-40 disabled:hover:bg-background transition-all"
            >
              <ChevronsRight className="h-4 w-4 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}