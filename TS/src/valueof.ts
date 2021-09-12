const permissions = {
  r: '0b100' as const,
  w: '0b010' as const,
  x: '0b001' as const,
}

type ValueOf<T> = T[keyof T]
type Permsnum = ValueOf<typeof permissions> // "0b100" | "0b010" | "0b001"


const species = ['rabbit', 'bear', 'fox', 'dog'] as const
type Species = typeof species[number] // "rabbit" | "bear" | "fox" | "dog"