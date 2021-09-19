type Permission = 'r' | 'w' | 'x';

type RW1 = Extract<Permission, 'r' | 'w'>;
type RW2 = Exclude<Permission, 'x'>;

type T1 = NonNullable<string | null | undefined>;
type T2 = NonNullable<number[] | null | undefined>;

// const str: T1 = undefined; compile error;
// const ar: T2 = null; compile error

