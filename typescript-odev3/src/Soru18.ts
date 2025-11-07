type LastParameter<T> = T extends (...args: [...infer R, infer L]) => any ? L : never;

// ---- KOD BLOKU (DOKUNMAYIN) ----
const fn1 = (a: string, b: number, c: boolean) => {};
const fn2 = (a: Date) => {};

// p1'in tipi: boolean
let p1: LastParameter<typeof fn1> = true;
// p2'nin tipi: Date
let p2: LastParameter<typeof fn2> = new Date();

// @ts-expect-error - 'fn1'in son parametresi 'boolean', 'string' değil
let errorP: LastParameter<typeof fn1> = "string"; // HATA: Tip '"string"', tip 'boolean'a atanamaz.

console.log("Soru 18 Başarılı!", p1);

// BEKLENEN "EKRAN ÇIKTISI":
// (Derleyicide hata olmaması ve konsolda "Soru 18 Başarılı!" yazması)