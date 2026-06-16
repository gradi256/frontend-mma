interface Paragraph {
  p1: string
  p2: string
}
export const Stats = ({ p1, p2 }: Paragraph) => {
  return (
    <div>
      <p className="text-2xl font-bold text-foreground">{p1}</p>
      <p className="text-xs text-muted-foreground">{p2}</p>
    </div>
  )
}
