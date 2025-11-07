Bu proje, temel OOP (Nesne Yönelimli Programlama) kavramlarından başlayarak, TypeScript'in en ileri seviye özelliklerine (Koşullu Tipler, Mapped Tipler ve Template Literal Tipler) kadar geniş bir yelpazede örnekler sunmayı amaçlamaktadır.

Soru1.ts => Fonksiyonlara esneklik katmak ve farklı veri tipleriyle güvenli bir şekilde çalışmak için kullanılan Generic tipleri ($<T, U>$) gösterir. İki farklı tipteki diziyi birleştirir.

Soru2.ts => Bir değişkenin birden fazla tipe sahip olabileceği Union tipleri

Soru3.ts => logHistory değişkenini private anahtar kelimesi ile tanımlayarak sınıf dışından erişimi kısıtlar ve kapsülleme ilkesini uygular. Bir sınıfın temel yapısını ve metotlarını gösterir.

Soru4.ts => Bir nesnenin anahtar (key) tiplerini kısıtlamak için K extends keyof T kısıtlamasını ve bir anahtar aracılığıyla nesnenin değer tipine erişmek için Indexed Access Tipleri (T[K]) kullanır. Güvenli özellik erişimini sağlar.

Soru5.ts => Aynı isimde birden fazla fonksiyon imzası tanımlayarak (yalnızca parametre sayısına/tipine göre) bir fonksiyonun farklı girdilere göre farklı dönüş tiplerine sahip olmasını sağlar.

Soru6.ts => Bir sınıfın (Cache) depolayacağı anahtar (K) ve değer (V) tiplerini dinamik olarak belirlemek için Generic kullanır. Veri saklama için standart bir JavaScript veri yapısı olan Map'in tip güvenli kullanımını gösterir.

Soru7.ts => Mevcut bir tipin tüm alanlarını opsiyonel yapan Partial<T> ve tüm alanlarını salt okunur yapan Readonly<T> hazır Utility Tiplerini kullanır. Object.freeze() ile birlikte değişmezlik (immutability) kavramını vurgular.

Soru8.ts => Bir fonksiyona sınırsız sayıda argüman geçilmesini sağlayan ve bu argümanları bir dizi olarak yakalayan Rest Parametreler (...numbers: number[]) kullanımını gösterir.

Soru9.ts => Doğrudan örneği oluşturulamayan ve alt sınıfların uygulamak zorunda olduğu metotları (abstract getArea(): number;) tanımlayan Soyut Sınıf kullanımını gösterir. Soyutlama (Abstraction) ve Kalıtım (Inheritance) kavramlarını içerir.

Soru10.ts => Bir sınıfa ait, ancak sınıfın bir örneğine (instance) bağlı olmayan statik özellikler (static readonly PI) ve metotlar (static calculateCircumference) tanımlar. Sınıf üzerinden direkt erişim sağlanır.

Soru11.ts => Bir tipin Promise olup olmadığını kontrol eden ve eğer Promise ise içindeki tipini (<infer U>) çıkaran bir Koşullu Tip (UnwrapPromise<T>) kullanır.

Soru12.ts => Bir fonksiyon tipinin dönüş tipini (<infer R>) çıkaran ve bu sayede fonksiyonun döndüreceği değeri statik olarak tipleyen bir Koşullu Tip (GetReturnType<T>) kullanır.

Soru13.ts => Mevcut bir tipin her bir özelliğini, adını get ile başlatıp büyük harfe çevirerek yeniden haritalayan (Key Remapping) ve dönüş tipi orijinal özelliğin tipi olan bir getter metodu oluşturan Mapped Tip (CreateGetters<T>) kullanır.

Soru14.ts => Bir nesne tipinin yalnızca ilk seviyesini değil, iç içe geçmiş tüm alt nesnelerini ve dizi elemanlarını da özyinelemeli olarak readonly yapan ileri seviye bir Mapped Tip kullanır.

Soru15.ts => Bir tipten, yalnızca belirtilen değere (V) sahip özellikleri filtreleyen ve seçen (T[K] extends V ? K : never) dinamik bir Mapped Tip kullanır. boolean tipindeki özelliği filtreleyerek dışarıda bırakır.

Soru16.ts => Temelde aynı olan (örneğin string) ancak mantıksal olarak farklı olması gereken tipleri (UserID, PostID) birbirinden ayırmak için & { __brand: T } yapısını kullanarak Nominal Tiplendirme (Branding) uygular.

Soru17.ts => Koşullu Tipleri kullanarak birleşim (Union) tipinden belirtilen alt tipleri (T extends U ? never : T) çıkaran bir mekanizma (FilterUnion<T, U>) oluşturur. Bu, TypeScript'in yerleşik Exclude Utility Tipinin mantığıdır.

Soru18.ts => Fonksiyon tipinin parametrelerini tuple olarak çıkarırken, sondan bir önceki parametreleri bir dizi (...infer R) ve son parametreyi (infer L) yakalamak için infer anahtar kelimesini kullanan ileri seviye bir Koşullu Tip kullanır.

Soru19.ts => Bir tipin dizi olup olmadığını kontrol eden ve eğer dizi ise eleman tipini (infer ElementType) çıkaran, değilse tipi olduğu gibi bırakan basit bir Koşullu Tip (Flatten<T>) kullanır.

Soru20.ts => Template Literal Tipleri ve Özyinelemeli Koşullu Tipleri kullanarak, bir URL rotası dizesindeki (/users/:id) dinamik parametre adlarını (:id) ayrıştırıp, tip olarak karşılık gelen bir nesne ({ id: string }) oluşturan karmaşık bir tip (ParseRouteParams<T>) kullanır.
