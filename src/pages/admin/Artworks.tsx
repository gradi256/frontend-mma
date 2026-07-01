import React, { useState, useMemo, useEffect } from "react";
import { 
  Plus, 
  Search, 
  Filter, 
  Eye, 
  Edit3, 
  Trash2, 
  Heart, 
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ArrowUpDown,
  ChevronUp,
  ChevronDown,
  BarChart3
} from "lucide-react";
// Importations Recharts
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const initialArtworks = [
  { id: "ART-001", title: "Échos du Fleuve", artist: "Dieudonné Sana", category: "Peinture", price: 450, date: "14 Juin 2026", likes: 124, orders: 8, image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=100&auto=format&fit=crop&q=60" },
  { id: "ART-002", title: "Masque de Demain", artist: "Naomi Koko", category: "Sculpture", price: 800, date: "14 Juin 2026", likes: 42, orders: 0, image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=100&auto=format&fit=crop&q=60" },
  { id: "ART-003", title: "Symphonie Urbaine", artist: "Bavon Luambo", category: "Photographie", price: 320, date: "13 Juin 2026", likes: 89, orders: 12, image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=100&auto=format&fit=crop&q=60" },
  { id: "ART-004", title: "Renaissance", artist: "Arlette Mwasi", category: "Peinture", price: 1100, date: "12 Juin 2026", likes: 15, orders: 1, image: "https://images.unsplash.com/photo-1579783928621-7a13d66a6211?w=100&auto=format&fit=crop&q=60" },
  { id: "ART-005", title: "Lumières de Kinshasa", artist: "Dieudonné Sana", category: "Peinture", price: 600, date: "10 Juin 2026", likes: 210, orders: 5, image: "https://images.unsplash.com/photo-1579783928621-7a13d66a6211?w=100&auto=format&fit=crop&q=60" },
  { id: "ART-006", title: "Regard Ancestral", artist: "Naomi Koko", category: "Sculpture", price: 950, date: "09 Juin 2026", likes: 76, orders: 2, image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=100&auto=format&fit=crop&q=60" },
  { id: "ART-007", title: "Rythmes Noirs", artist: "Bavon Luambo", category: "Photographie", price: 280, date: "08 Juin 2026", likes: 34, orders: 0, image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=100&auto=format&fit=crop&q=60" }
];

export default function Artworks() {
  const [artworks, setArtworks] = useState(initialArtworks);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("Tous");
  const [likesFilter, setLikesFilter] = useState("Tous");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handleDelete = (id) => {
    setArtworks((prev) => prev.filter(artwork => artwork.id !== id));
  };

  // Filtrage et tri des données
  const processedArtworks = useMemo(() => {
    const lowerSearch = searchTerm.toLowerCase();
    
    const result = artworks.filter(artwork => {
      const matchesSearch = !searchTerm || 
                            artwork.title.toLowerCase().includes(lowerSearch) || 
                            artwork.artist.toLowerCase().includes(lowerSearch) ||
                            artwork.id.toLowerCase().includes(lowerSearch);
      
      const matchesCategory = categoryFilter === "Tous" || artwork.category === categoryFilter;
      
      let matchesLikes = true;
      if (likesFilter === "50+") matchesLikes = artwork.likes >= 50;
      else if (likesFilter === "100+") matchesLikes = artwork.likes >= 100;
      else if (likesFilter === "200+") matchesLikes = artwork.likes >= 200;

      return matchesSearch && matchesCategory && matchesLikes;
    });

    if (sortConfig.key) {
      result.sort((a, b) => {
        const valA = a[sortConfig.key];
        const valB = b[sortConfig.key];
        if (typeof valA === 'string') {
          return sortConfig.direction === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
        }
        return sortConfig.direction === "asc" ? valA - valB : valB - valA;
      });
    }
    return result;
  }, [artworks, searchTerm, categoryFilter, likesFilter, sortConfig]);

  // Préparation des données spécifiquement raccourcies pour le graphique (évite la surcharge visuelle)
  const chartData = useMemo(() => {
    return processedArtworks.map(art => ({
      name: art.title.length > 15 ? `${art.title.substring(0, 12)}...` : art.title,
      Likes: art.likes,
      Commandes: art.orders,
    }));
  }, [processedArtworks]);

  const totalPages = Math.ceil(processedArtworks.length / pageSize) || 1;
  
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const paginatedArtworks = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return processedArtworks.slice(startIndex, startIndex + pageSize);
  }, [processedArtworks, currentPage, pageSize]);

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderSortIcon = (key) => {
    if (sortConfig.key !== key) return <ArrowUpDown className="h-3 w-3 text-muted-foreground/40" />;
    return sortConfig.direction === "asc" 
      ? <ChevronUp className="h-3 w-3 text-primary stroke-[2.5]" /> 
      : <ChevronDown className="h-3 w-3 text-primary stroke-[2.5]" />;
  };

  return (
    <div className="space-y-8 max-w-[1600px] mx-auto w-full px-1">
      
      {/* SECTION : En-tête */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h2 className="text-xl font-bold tracking-tight text-foreground font-heading md:text-2xl 2xl:text-3xl">
            Gestion des Œuvres
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground font-light tracking-wide">
            Modérez, éditez et suivez l'ensemble du catalogue artistique de la plateforme.
          </p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-all shrink-0 self-start sm:self-center">
          <Plus className="h-4 w-4 stroke-[2]" />
          <span>Ajouter une œuvre</span>
        </button>
      </div>

      {/* SECTION : Graphique analytique réactif aux filtres */}
      {chartData.length > 0 && (
        <div className="rounded-xl border border-border/60 bg-card p-5 shadow-[0_1px_3px_rgba(0,0,0,0.01)] space-y-4">
          <div className="flex items-center gap-2 border-b border-border/40 pb-3">
            <BarChart3 className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-semibold text-foreground tracking-tight">Performance des œuvres filtrées</h3>
          </div>
          <div className="w-full h-[240px] text-xs">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(var(--border), 0.15)" />
                <XAxis dataKey="name" stroke="#888888" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis yAxisId="left" stroke="#888888" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis yAxisId="right" orientation="right" stroke="#888888" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ background: "hsl(var(--card))", borderColor: "hsl(var(--border))", borderRadius: "8px" }}
                  labelStyle={{ fontWeight: "bold", color: "hsl(var(--foreground))" }}
                />
                <Legend verticalAlign="top" height={36} iconType="circle" />
                <Bar yAxisId="left" dataKey="Likes" fill="#f43f5e" radius={[4, 4, 0, 0]} maxBarSize={40} name="Likes" />
                <Line yAxisId="right" type="monotone" dataKey="Commandes" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} name="Commandes" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* SECTION : Filtres */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between bg-card p-4 rounded-xl border border-border/60 shadow-[0_1px_2px_rgba(0,0,0,0.01)]">
        <div className="relative flex-1 max-w-md w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/70 stroke-[1.5]" />
          <input
            type="text"
            placeholder="Rechercher une œuvre, un artiste, un ID..."
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
            className="w-full pl-9 pr-4 py-2 bg-background border border-border rounded-lg text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-sidebar-primary/40 transition-all"
          />
        </div>
        
        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-start lg:justify-end">
          <div className="relative min-w-[140px]">
            <select
              value={categoryFilter}
              onChange={(e) => { setCategoryFilter(e.target.value); setCurrentPage(1); }}
              aria-label="Filtrer par catégorie"
              className="w-full appearance-none pl-3 pr-8 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all font-medium cursor-pointer"
            >
              <option value="Tous">Toutes catégories</option>
              <option value="Peinture">Peinture</option>
              <option value="Sculpture">Sculpture</option>
              <option value="Photographie">Photographie</option>
            </select>
            <Filter className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/70 pointer-events-none stroke-[1.5]" />
          </div>

          <div className="relative min-w-[140px]">
            <select
              value={likesFilter}
              onChange={(e) => { setLikesFilter(e.target.value); setCurrentPage(1); }}
              aria-label="Filtrer par seuil de likes"
              className="w-full appearance-none pl-3 pr-8 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all font-medium cursor-pointer"
            >
              <option value="Tous">Tous les likes</option>
              <option value="50+">≥ 50 likes</option>
              <option value="100+">≥ 100 likes</option>
              <option value="200+">≥ 200 likes</option>
            </select>
            <Filter className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/70 pointer-events-none stroke-[1.5]" />
          </div>
        </div>
      </div>

      {/* SECTION : Tableau principal des œuvres */}
      <div className="rounded-xl border border-border/60 bg-card shadow-[0_1px_3px_rgba(0,0,0,0.01)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="border-b border-border/60 bg-muted/20 text-xs font-medium uppercase tracking-wider text-muted-foreground/80 select-none">
                <th className="py-3.5 px-4 w-[100px]">Visuel</th>
                <th className="py-3.5 px-4 cursor-pointer hover:text-foreground transition-colors" onClick={() => handleSort("title")}>
                  <div className="flex items-center gap-1">Œuvre / ID {renderSortIcon("title")}</div>
                </th>
                <th className="py-3.5 px-4 cursor-pointer hover:text-foreground transition-colors" onClick={() => handleSort("artist")}>
                  <div className="flex items-center gap-1">Artiste {renderSortIcon("artist")}</div>
                </th>
                <th className="py-3.5 px-4">Catégorie</th>
                <th className="py-3.5 px-4 cursor-pointer hover:text-foreground transition-colors" onClick={() => handleSort("price")}>
                  <div className="flex items-center gap-1">Prix {renderSortIcon("price")}</div>
                </th>
                <th className="py-3.5 px-4 text-center cursor-pointer hover:text-foreground transition-colors" onClick={() => handleSort("likes")}>
                  <div className="flex items-center gap-1 justify-center">Likes {renderSortIcon("likes")}</div>
                </th>
                <th className="py-3.5 px-4 text-center cursor-pointer hover:text-foreground transition-colors" onClick={() => handleSort("orders")}>
                  <div className="flex items-center gap-1 justify-center">Commandes {renderSortIcon("orders")}</div>
                </th>
                <th className="py-3.5 px-4">Date de dépôt</th>
                <th className="py-3.5 px-4 text-right w-[140px]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40 text-sm">
              {paginatedArtworks.map((artwork) => (
                <tr key={artwork.id} className="hover:bg-muted/10 transition-colors group">
                  <td className="py-3 px-4">
                    <img 
                      src={artwork.image} 
                      alt={artwork.title} 
                      className="h-12 w-12 rounded-lg object-cover border border-border/40 bg-muted shrink-0 shadow-sm"
                    />
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-col">
                      <span className="font-medium text-foreground tracking-tight group-hover:text-sidebar-primary transition-colors">
                        {artwork.title}
                      </span>
                      <span className="text-[11px] text-muted-foreground/70 font-mono mt-0.5">
                        {artwork.id}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground font-light">
                    {artwork.artist}
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-muted text-muted-foreground border border-border/20">
                      {artwork.category}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-medium text-foreground">
                    {artwork.price} $
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="inline-flex items-center gap-1 text-muted-foreground/80">
                      <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500/10 stroke-[1.5]" />
                      <span className="text-xs font-medium">{artwork.likes}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="inline-flex items-center gap-1 text-muted-foreground/80">
                      <ShoppingBag className="h-3.5 w-3.5 text-blue-500 stroke-[1.5]" />
                      <span className="text-xs font-medium">{artwork.orders}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground/70 font-light">
                    {artwork.date}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-90 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all" title="Voir l'œuvre" aria-label={`Voir l'œuvre ${artwork.title}`}>
                        <Eye className="h-4 w-4 stroke-[1.5]" />
                      </button>
                      <button className="p-1.5 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all" title="Modifier" aria-label={`Modifier l'œuvre ${artwork.title}`}>
                        <Edit3 className="h-4 w-4 stroke-[1.5]" />
                      </button>
                      <button 
                        onClick={() => handleDelete(artwork.id)}
                        className="p-1.5 rounded-md text-destructive hover:bg-destructive/10 transition-all" 
                        title="Supprimer"
                        aria-label={`Supprimer l'œuvre ${artwork.title}`}
                      >
                        <Trash2 className="h-4 w-4 stroke-[1.5]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {processedArtworks.length === 0 && (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-sm text-muted-foreground/70 font-light">
                    Aucune œuvre d'art ne correspond à vos critères de recherche.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* SECTION : Pagination */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between px-4 py-4 border-t border-border/60 bg-muted/10 text-sm">
          <div className="flex items-center gap-4 text-muted-foreground text-xs md:text-sm">
            <span className="font-light">
              Affichage de <span className="font-medium text-foreground">{processedArtworks.length === 0 ? 0 : (currentPage - 1) * pageSize + 1}</span> à{" "}
              <span className="font-medium text-foreground">{Math.min(currentPage * pageSize, processedArtworks.length)}</span> sur{" "}
              <span className="font-medium text-foreground">{processedArtworks.length}</span> œuvres
            </span>
            <div className="flex items-center gap-1.5">
              <label htmlFor="pageSize-select" className="text-xs font-light">Lignes :</label>
              <select
                id="pageSize-select"
                value={pageSize}
                onChange={(e) => { setPageSize(Number(e.target.value)); setCurrentPage(1); }}
                className="bg-background border border-border rounded px-1.5 py-0.5 text-xs text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-1 self-end sm:self-center">
            <button
              onClick={() => changePage(1)}
              disabled={currentPage === 1}
              aria-label="Première page"
              className="p-1.5 rounded-md border border-border bg-background hover:bg-accent disabled:opacity-40 disabled:hover:bg-background transition-all"
            >
              <ChevronsLeft className="h-4 w-4 stroke-[1.5]" />
            </button>
            <button
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Page précédente"
              className="p-1.5 rounded-md border border-border bg-background hover:bg-accent disabled:opacity-40 disabled:hover:bg-background transition-all"
            >
              <ChevronLeft className="h-4 w-4 stroke-[1.5]" />
            </button>
            
            <div className="px-3 text-xs font-medium text-foreground min-w-[80px] text-center">
              Page {currentPage} sur {totalPages}
            </div>

            <button
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Page suivante"
              className="p-1.5 rounded-md border border-border bg-background hover:bg-accent disabled:opacity-40 disabled:hover:bg-background transition-all"
            >
              <ChevronRight className="h-4 w-4 stroke-[1.5]" />
            </button>
            <button
              onClick={() => changePage(totalPages)}
              disabled={currentPage === totalPages}
              aria-label="Dernière page"
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