export { }

interface Status {
  level: number;
  maxHP: number;
  maxMP: number;
  [attr: string]: number;
}

const status: Status = {
  level: 100,
  maxHP: 300,
  maxMP: 500,
  スタミナ: 30,
}