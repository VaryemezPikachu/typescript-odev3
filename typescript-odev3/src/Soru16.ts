type Brand<K, T> = K & { __brand: T };
type UserID = Brand<string, "UserID">;
type PostID = Brand<string, "PostID">;

// ---- KOD BLOKU (DOKUNMAYIN) ----
function logID(id: string) { console.log(id); }

let userID = "user-123" as UserID;
let postID = "post-456" as PostID;

logID(userID); // String olarak kabul etmeli (UserID, string tipini içerir)
logID(postID); // String olarak kabul etmeli (PostID, string tipini içerir)

// @ts-expect-error - Bu atamanın HATA vermesi beklenir
userID = postID; // HATA: PostID tipinde '__brand: "PostID"' var, ancak UserID tipinde '__brand: "UserID"' bekleniyor.

console.log("Soru 16 Başarılı!");

// BEKLENEN EKRAN ÇIKTISI:
// user-123
// post-456
// Soru 16 Başarılı!
// (ve '@ts-expect-error' olan satır dışında derleyici hatası olmaması)