type DeepReadonly<T> = T extends (infer R)[]
  ? ReadonlyArray<DeepReadonly<R>>
  : T extends object
  ? { readonly [P in keyof T]: DeepReadonly<T[P]> }
  : T;

// ---- KOD BLOKU (DOKUNMAYIN) ----
type Config = { api: { url: string; }, features: string[] };
const config: DeepReadonly<Config> = {
  api: { url: "http://..." },
  features: ["A", "B"]
};

// @ts-expect-error - Bu atamanın HATA vermesi beklenir
config.api.url = "yeni-url"; // HATA: 'url' özelliği salt okunurdur.

// @ts-expect-error - Bu atamanın (diziye ekleme) HATA vermesi beklenir
config.features.push("C"); // HATA: 'push' özelliği 'ReadonlyArray' tipinde yoktur.

console.log("Soru 14 Başarılı!", config.api.url);

// BEKLENEN "EKRAN ÇIKTISI":
// (Derleyicide hata olmaması ve konsolda "Soru 14 Başarılı!" yazması)