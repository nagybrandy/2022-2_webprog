# PHP CSOPORT ZH
```
<Hallgató neve>
<Neptun kódja>
Webprogramozás - PHP csoport ZH
Ezt a megoldást a fent írt hallgató küldte be és készítette 
a Webprogramozás kurzus JavaScript csoport ZH-jához.
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
A feladat elkészíteni az Akita ELTEnyészet kutyafarmjához készült kezdetleges nyilvántartó oldal szerveroldali kódját. A feladat kiindulófájljai és funkcióik:
- index.php: Megjelennek a kutyák kilistázva, szűrhetőek kanokra és szukákra
- adddoggo.php: Új kutyát tudunk felvenni
- isvalid.php: Kijelzi nekünk, hogy sikeres vagy sikertelen volt a kutya felvétele, ha sikeres volt, elmenti a kutyuk.json-be.
- kutyuk.json: tárolja a kutyák nevét, színét, születési idejét, és nemét
- kutyák színe: egy számmal van benne eltárolva melyet az alábbi tömbből indexelve tudtok kiolvasni. A szükséges oldalon már ott szerepel ez a tömb.

```
$kutyaszinek = ["vörös","barna-fehér", "szürkésbarna-fehér", "fehér", "sötétbarna", "szürke"];
```

A feladat legegyszerűbb megoldásához csak és kizárólag PHP-t kell használnod, ha mégis szükségesnek érzed, belenyúlhatsz bármi másba.

## Előkészületek
1. Első lépésként töltsd le github-ról a kiindulófájlokat.
2. Egészítsd ki a README.md-t.

Nézd meg a két videót az oldal működéséről:

<a href="http://nagybrandy.hu/php_zh01.mp4" target="_blank">Az oldal alapvető működése</a><br>
<a href="http://nagybrandy.hu/php_zh02.mp4" target="_blank">A szűrés</a>


## Feladatok
### <span style="color:green">addoggo.php</span>
|Sorszám|Feladat|Pontok|
|----|----|----|
| 1. | Egészítsd ki az oldalon  szereplő formot úgy, hogy az a megfelelő oldalra irányítson olyan metódussal, hogy az adatokat a böngésző keresősávjávan ne lehessen változtatni! | <span style="color:red"> 0.5 pont </span>
| 2.| Nézd meg, hogy a formban szereplő inputok attribútumait, mert ezzel fogod tudni megkapni a requesttel az isvalid.php-ban a beírt adatokat. Minden inputmezőből ugyanúgy tudjuk lekérni az adatot, ahogy órán csináltuk.   ||

### <span style="color:green">isvalid.php</span>
|Sorszám|Feladat|Pontok|
|----|----|----|
| 1. | Mentsd el a requestből kapott értékeket egy változóba! | <span style="color:red"> 1 pont </span>
| 2. | Validáld a megkapott értékeket:||
||  a, Csak akkor fogadja el őket, ha az összes be van állítva és legalább egy karakter hosszúak a két szélén lévő szóközök nélkül (trim: https://www.php.net/manual/en/function.trim.php).|<span style="color:red"> 0.5 pont </span>|
|  | b, A név hossza legalább 3 karakter hosszú. A nem lehet vagy kan, vagy szuka.|<span style="color:red"> 0.5 pont </span>|
|  | c, A hibákat fűzd hozzá az $errors tömbhöz. <br><br> A változó létre van hozva, neked viszont el kell készíteni a hibák megjelenítését!|<span style="color:red"> 0.5 pont </span>|
| 3. | Ha nincs hiba a bemenetben, fűzze hozzá az új adatokat a kutyuk.json-höz. |<span style="color:red"> 2 pont </span>|
|4. | Ha nincs hiba a fájlok beolvasásában, a \<h1> tagen belül a "Siker 😍" szöveg jelenjen meg és egy gomb, ami visszavezet a főoldalra <br>Ha van hiba benne, akkor a "Nem sikerült 😿" szöveg jelenjen meg, és egy gomb, ami visszavisz az adddoggo.php-ra. |<span style="color:red"> 1 pont </span>|

### <span style="color:green">index.php</span>
|Sorszám|Feladat|Pontok|
|----|----|----|
| 1. | A táblázat alapja készen van, jelenítsd meg az adatokat a jsonből kiolvasva. | <span style="color:red"> 2 pont </span>|
| 2. |  Az első oszlopban a kutyák képe jelenjen meg, attól függően hogy milyen színű a kutya.<br> Például, ha a kutya színének értéke nulla, akkor a "pics/0.jpg" képet nyissa meg.|<span style="color:red"> 1 pont </span>|
| 3. | A kutyák soraihoz add hozzá a ".kan" classt, ha kanok, és a ".szuka" classt, ha lányok! | <span style="color:red"> 1 pont </span>|
| 4. | Amikor a legördülő menüből kiválasztunk egy elemet, frissitődik az oldal, és újra megnyitja az oldalt például így: "index.php?nem=kan".Ezt js-ben már elkészítettem nektek. Ellenőrizd a megfelelő metódussal, hogy a linkben a szukákra vagy a kanokra szűrünk éppen, és ilyenkor csak azok az elemek jelenjenek meg a táblázatban. Ha nem ez a két dolog van beállítva, akkor mindegyik kutya megjelenjen.<br> (Az előző generáláshoz képest ez két egyszerű elágazással meg lehet oldani, ha nem megy, kérdezz nyugodtan) |<span style="color:red"> 1 pont </span>|

