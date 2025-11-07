type PickByValueType<T, V> = {
  [K in keyof T as T[K] extends V ? K : never]: T[K]
};

// ---- KOD BLOKU (DOKUNMAYIN) ----
type Sample = { name: string; age: number; active: boolean; };
type StringOrNumberProps = PickByValueType<Sample, string | number>;

// StringOrNumberProps tipi artık sadece { name: string; age: number; }

const valid: StringOrNumberProps = {
  name: "Ali",
  age: 30
};

// @ts-expect-error - 'active' (boolean) bu tipte OLMAMALIDIR
// TypeScript hatası: Tip '{ name: string; age: number; active: boolean; }' tipine atanabilir değil '{ name: string; age: number; }'
const invalid: StringOrNumberProps = {
  name: "Veli",
  age: 40,
  active: true
};

console.log("Soru 15 Başarılı!", valid.name);

// BEKLENEN "EKRAN ÇIKTISI":
// (Derleyicide hata olmaması ve konsolda "Soru 15 Başarılı!" yazması)