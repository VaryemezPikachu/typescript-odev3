
type Flatten<T> = T extends (infer ElementType)[] ? ElementType : T;

// ---- KOD BLOKU (DOKUNMAYIN) ----
type NumArray = number[];
type Str = string;

// el1'in tipi: number
let el1: Flatten<NumArray> = 123;
// el2'nin tipi: string
let el2: Flatten<Str> = "hello";

// @ts-expect-error - 'NumArray'in elemanı 'number', 'string' değil
let errorEl: Flatten<NumArray> = "string"; // HATA: Tip '"string"', tip 'number'a atanamaz.

console.log("Soru 19 Başarılı!", el1, el2);

// BEKLENEN "EKRAN ÇIKTISI":
// (Derleyicide hata olmaması ve konsolda "Soru 19 Başarılı!" yazması)