# PHP CSOPORT ZH
```
<Hallgató neve>
<Neptun kódja>
Webprogramozás - PHP csoport ZH
Ezt a megoldást a fent írt hallgató küldte be és készítette 
a Webprogramozás kurzus PHP csoport ZH-jához.
Kijelentem, hogy ez a megoldás a saját munkám. Nem másoltam vagy 
használtam harmadik féltől származó megoldásokat. Nem továbbítottam 
megoldást hallgatótársaimnak, és nem is tettem közzé. Az Eötvös Loránd 
Tudományegyetem Hallgatói Követelményrendszere (ELTE szervezeti és 
működési szabályzata, II. Kötet, 74/C. §) kimondja, hogy mindaddig, 
amíg egy hallgató egy másik hallgató munkáját - vagy legalábbis annak 
jelentős részét - saját munkájaként mutatja be, az fegyelmi vétségnek számít. 
A fegyelmi vétség legsúlyosabb következménye a hallgató elbocsátása az egyetemről.
```


## Leírás
A feladat elkészíteni a hűtőnkhöz készült kezdetleges nyilvántartó oldal szerveroldali kódját. A feladat kiindulófájljai és funkcióik:
- index.php: Megjelennek a kaják kilistázva, a lejárt ételeket piros színnel jelzi
- addfood.php: Új ételt tudunk felvenni
- isvalid.php: Kijelzi nekünk, hogy sikeres vagy sikertelen volt a kaja felvétele, ha sikeres volt, elmenti a food.json-be.
- food.json: tárolja az ételek nevét, típusát, darabszámát, a hűtőbe rakás dátumát, és a lejárati dátumot


A feladat legegyszerűbb megoldásához csak és kizárólag PHP-t kell használnod, ha mégis szükségesnek érzed, belenyúlhatsz bármi másba.

## Előkészületek
1. Első lépésként töltsd le github-ról a kiindulófájlokat.
2. Egészítsd ki a README.md-t.

Nézd meg a két videót az oldal működéséről:

## Feladatok

### <span style="color:green">index.php</span>
|Sorszám|Feladat|Pontok|
|----|----|----|
| 1. | A táblázat alapja készen van, jelenítsd meg az adatokat a jsonből kiolvasva. | <span style="color:red"> 3 pont </span>|
| 2. | A kaják soraihoz add hozzá a ".lejart" classt, ha az étel már lejárt! Ehhez alakítsd át a lejárati dátumot az `strtotime()` függvénnyel, és hasonlítsd össze a mai dátummal (`date('Y-m-d')`)| <span style="color:red"> 1 pont </span>|

### <span style="color:green">addfood.php</span>
|Sorszám|Feladat|Pontok|
|----|----|----|
| 1. | Egészítsd ki az oldalon  szereplő formot úgy, hogy az a megfelelő oldalra irányítson olyan metódussal, hogy az adatokat a böngésző keresősávján NE lehessen látni! | <span style="color:red"> 0.5 pont </span>
| 2.| Nézd meg, hogy a formban szereplő inputok attribútumait, mert ezzel fogod tudni megkapni a requesttel az isvalid.php-ban a beírt adatokat. Minden inputmezőből ugyanúgy tudjuk lekérni az adatot, ahogy órán csináltuk.   ||

### <span style="color:green">isvalid.php</span>
|Sorszám|Feladat|Pontok|
|----|----|----|
| 1. | Mentsd el a requestből kapott értékeket egy változóba! | <span style="color:red"> 1 pont </span>
| 2. | Validáld a nevet, illetve a lejárati dátumot:||
| |  a, A nevet csak akkor fogadja el, ha létezik, és legalább 3 karakter hosszú a két szélén lévő szóközök nélkül! (trim: https://www.php.net/manual/en/function.trim.php).|<span style="color:red"> 1 pont </span>|
|  | b, A lejárati dátum akkor valid, ha meg van adva! |<span style="color:red"> 1 pont </span>|
|  | c, A három lehetséges hibaüzenetet fűzd hozzá az `errors` tömbhöz! |<span style="color:red"> 0.5 pont </span>|
| 3. | A 'date' kulcshoz rendeld hozzá a mai dátumot a ` date('Y-m-d')` függvény segítségével, majd az új adatokat fűzd hozzá a food.jsonhöz! |<span style="color:red"> 2 pont </span>|
|4. | Attól függően, hogy van-e hiba a validálásban, az oldalon megfelelő részeket jelenítsd meg! |<span style="color:red"> 1 pont </span>|

