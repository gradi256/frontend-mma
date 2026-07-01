import { useState } from "react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Plus, Trash2, Palette, Pencil, X, Save } from "lucide-react"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL || "https://mwanambokart-officiel-1.onrender.com/api"

type ArtWorkType = {
  id_type: string
  name: string
  description: string
}

export function ArtworkTypeManager() {
  const queryClient = useQueryClient()
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editName, setEditName] = useState("")
  const [editDescription, setEditDescription] = useState("")

  // Fetch
  const { data: artworkTypes = [], isPending, isError } = useQuery<ArtWorkType[]>({
    queryKey: ["artworktype"],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/artworktype`)
      return data.data
    },
  })

  // Mutation: Création
  const createMutation = useMutation({
    mutationFn: async (newData: Omit<ArtWorkType, "id_type">) => {
      const { data } = await axios.post(`${API_URL}/artworktype`, newData)
      return data
    },
    onSuccess: () => {
      toast.success("Création du type avec succès")
      queryClient.invalidateQueries({ queryKey: ["artworktype"] })
      setName("")
      setDescription("")
    },
    onError: (err: any) => toast.error(err.message || "Erreur lors de la création"),
  })

  // Mutation: Modification
  const updateMutation = useMutation({
    mutationFn: async (updateData: ArtWorkType) => {
      const { data } = await axios.put(`${API_URL}/artworktype/${updateData.id_type}`, {
        name: updateData.name,
        description: updateData.description,
      })
      return data
    },
    onSuccess: () => {
      toast.success("Type d'œuvre modifié avec succès")
      queryClient.invalidateQueries({ queryKey: ["artworktype"] })
      setEditingId(null)
    },
    onError: (err: any) => toast.error(err.message || "Erreur lors de la modification"),
  })

  // Mutation: Suppression
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { data } = await axios.delete(`${API_URL}/artworktype/${id}`)
      return data
    },
    onSuccess: () => {
      toast.success("Type d'œuvre supprimé avec succès")
      queryClient.invalidateQueries({ queryKey: ["artworktype"] })
      if (editingId) setEditingId(null)
    },
    onError: (err: any) => toast.error(err.message || "Erreur lors de la suppression"),
  })

  const validateName = (val: string) => /^[A-Za-zÀ-ÿ\s-]+$/.test(val.trim())

  const handleCreateSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateName(name)) {
      toast.error("Le nom doit contenir uniquement des lettres, espaces ou tirets")
      return
    }
    createMutation.mutate({ name: name.trim(), description: description.trim() })
  }

  const handleStartEdit = (type: ArtWorkType) => {
    setEditingId(type.id_type)
    setEditName(type.name)
    setEditDescription(type.description)
  }

  const handleUpdateSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!editingId) return
    if (!validateName(editName)) {
      toast.error("Le nom doit contenir uniquement des lettres, espaces ou tirets")
      return
    }
    updateMutation.mutate({
      id_type: editingId,
      name: editName.trim(),
      description: editDescription.trim(),
    })
  }

  const handleDelete = (id: string) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce type d'œuvre ?")) {
      deleteMutation.mutate(id)
    }
  }

  return (
    <Card className="overflow-hidden border-border/60 shadow-sm">
      <CardHeader className="flex flex-row items-center gap-2 space-y-0 border-b border-border/40 bg-muted/10 p-5">
        <Palette className="h-4 w-4 stroke-[1.5] text-primary" />
        <CardTitle className="text-xs font-semibold tracking-wider uppercase">
          Types d'œuvres de la galerie
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-5">
        
        {/* FORMULAIRE DE CRÉATION */}
        <form onSubmit={handleCreateSubmit} className="max-w-xl space-y-4 rounded-lg border border-border/40 bg-muted/10 p-4">
          <p className="text-xs font-bold tracking-wide text-foreground">
            Ajouter un nouveau type d'œuvre
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-1.5 sm:col-span-1">
              <Label htmlFor="typeName">Nom du type</Label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="typeName"
                type="text"
                placeholder="Ex: Sculpture"
                required
              />
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <Label htmlFor="typeDesc">Description courte</Label>
              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="typeDesc"
                type="text"
                placeholder="Ex: Œuvres d'art..."
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button size="sm" className="gap-1.5" type="submit" disabled={createMutation.isPending}>
              <Plus className="h-4 w-4" /> Ajouter la catégorie
            </Button>
          </div>
        </form>

        {/* FORMULAIRE DE MODIFICATION */}
        {editingId && (
          <form onSubmit={handleUpdateSubmit} className="max-w-xl space-y-4 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4 animate-in fade-in-50 duration-200">
            <p className="text-xs font-bold tracking-wide text-amber-900 dark:text-amber-400">
              Modifier le type d'œuvre sélectionné
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-1.5 sm:col-span-1">
                <Label htmlFor="editTypeName">Nouveau nom</Label>
                <Input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  id="editTypeName"
                  type="text"
                  required
                />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="editTypeDesc">Nouvelle description</Label>
                <Input
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  id="editTypeDesc"
                  type="text"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button size="sm" variant="ghost" className="gap-1" type="button" onClick={() => setEditingId(null)}>
                <X className="h-3.5 w-3.5" /> Annuler
              </Button>
              <Button size="sm" variant="default" className="gap-1 bg-amber-600 hover:bg-amber-700 text-white" type="submit" disabled={updateMutation.isPending}>
                <Save className="h-3.5 w-3.5" /> Enregistrer les modifications
              </Button>
            </div>
          </form>
        )}

        {/* LISTE */}
        <div className="space-y-3">
          <p className="text-xs font-medium text-muted-foreground">Catégories actives et configurations</p>
          <div className="grid max-w-2xl gap-3">
            {isPending && <p className="animate-pulse text-xs text-muted-foreground">Chargement des catégories...</p>}
            {isError && <p className="text-xs font-medium text-destructive">Impossible de récupérer les catégories.</p>}
            
            {!isPending && !isError && artworkTypes.length === 0 && (
              <p className="text-xs text-muted-foreground italic">Aucune catégorie enregistrée.</p>
            )}

            {!isPending && !isError && artworkTypes.map((type) => (
              <div key={type.id_type} className={`flex items-start justify-between gap-4 rounded-lg border p-3 transition-colors ${editingId === type.id_type ? 'border-amber-500 bg-amber-500/10' : 'border-border/60 bg-muted/20 hover:bg-muted/40'}`}>
                <div className="space-y-0.5">
                  <span className="text-sm font-semibold text-foreground">{type.name}</span>
                  <p className="text-xs font-light text-muted-foreground">{type.description}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => handleStartEdit(type)}
                    className="h-8 w-8 text-muted-foreground/60 hover:bg-amber-500/10 hover:text-amber-600"
                    disabled={deleteMutation.isPending}
                  >
                    <Pencil className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(type.id_type)}
                    className="h-8 w-8 text-muted-foreground/60 hover:bg-rose-500/10 hover:text-rose-600"
                    disabled={deleteMutation.isPending && deleteMutation.variables === type.id_type}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}