type CreateGetters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};


// ---- KOD BLOKU (DOKUNMAYIN) ----
type UserProps = { id: number; name: string; };
type UserGetters = CreateGetters<UserProps>;

const userGetters: UserGetters = {
  getId: () => 1,
  getName: () => "Ali"
};

// @ts-expect-error - Dönüş tipi 'string' olmalı, 'number' değil.
const errorGetter: UserGetters = {
  getId: () => 1,
  getName: () => 123
};

console.log("Soru 13 Başarılı!", userGetters.getName());
// BEKLENEN "EKRAN ÇIKTISI":
// (Derleyicide hata olmaması ve konsolda "Soru 13 Başarılı!" yazması)