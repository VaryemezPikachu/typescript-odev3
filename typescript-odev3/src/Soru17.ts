type FilterUnion<T, U> = T extends U ? never : T;

// ---- KOD BLOKU (DOKUNMAYIN) ----
type AllStatus = 'pending' | 'active' | 'inactive' | 'deleted';
type ActiveStatus = 'active' | 'pending';

// 'AllStatus' içinden 'ActiveStatus' olanları çıkar
type InactiveStatus = FilterUnion<AllStatus, ActiveStatus>;
// InactiveStatus tipi, 'inactive' | 'deleted' olarak belirlenir.

let status1: InactiveStatus = 'inactive';
let status2: InactiveStatus = 'deleted';

// @ts-expect-error - 'pending' (filtrelendi) HATA VERMELİDİR
let errorStatus: InactiveStatus = 'pending'; // HATA: Tip '"pending"', tip 'InactiveStatus' (yani 'inactive' | 'deleted')'a atanamaz.

console.log("Soru 17 Başarılı!", status1, status2);

// BEKLENEN "EKRAN ÇIKTISI":
// (Derleyicide hata olmaması ve konsolda "Soru 17 Başarılı!" yazması)