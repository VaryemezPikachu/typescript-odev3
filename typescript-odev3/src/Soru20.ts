type ParseRouteParams<T extends string> =
    T extends `${infer Before}/:${infer ParamName}/${infer After}` 
        ? { [K in ParamName]: string } & ParseRouteParams<`/${After}`>
    : T extends `${infer Before}/:${infer ParamName}` 
        ? { [K in ParamName]: string }
    : {}; 

// ---- KOD BLOKU (DOKUNMAYIN) ----
type Route1 = "/users/:id";
type Route2 = "/posts/:postId/comments/:commentId";

type Params1 = ParseRouteParams<Route1>;

type Params2 = ParseRouteParams<Route2>;

const p1: Params1 = { id: "123" };
const p2: Params2 = { postId: "abc", commentId: "xyz" };

// @ts-expect-error - 'userId' HATA VERMELİ (doğrusu 'id')
const errorP1: Params1 = { userId: "123" }; // HATA: Tip '{ userId: string; }', tip '{ id: string; }' a atanamaz.

// @ts-expect-error - 'commentId' eksik, HATA VERMELİ
const errorP2: Params2 = { postId: "abc" }; // HATA: 'commentId' özelliği '{ postId: string; }' tipinde eksik.

console.log("Soru 20 Başarılı!", p1.id, p2.postId);
// BEKLENEN "EKRAN ÇIKTISI":
// (Derleyicide hata olmaması ve konsolda "Soru 20 Başarılı!" yazması)