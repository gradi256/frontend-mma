import { z } from "zod";

export const artworkTypeSchema = z.object({
  name: z.string().min(1), // .nonempty() est déprécié dans les versions récentes de Zod
  description: z.string().optional(),
});

export type ArtworkType = z.infer<typeof artworkTypeSchema>;

export const ArtWorkTypeValidation = () => {
  return <div>ArtWorkTypeValidation</div>;
};