# JavaScript évfolyam zh

## Tudnivalók

- A zárthelyi megoldására **120 perc** áll rendelkezésre. **További 30 perc**et adunk az alább olvasható `README.md` fájl kitöltésére, a feladatok elolvasására, az anyagok letöltésére, összecsomagolására és feltöltésére.
- A feladatokat a Canvas rendszeren keresztül kell beadni. **A rendszer pontban 18:30-kor lezár, ezután nincs lehetőség beadásra**.
- A feladatok megoldásához **bármilyen segédanyag használható** (dokumentáció, előadás, órai anyag, cheat sheet). A zh időtartamában igénybe vett **emberi segítség tilos** (szinkron, aszinkron, chat, fórum, stb)! Erről nyilatkoztok az alább olvasható `README.md` fájlban is, ahol tudomásul veszitek ennek következményeit.
- A feladatok nem épülnek egymásra, **tetszőleges sorrendben** megoldhatók.
- A feladatok megoldásához először [töltsd le az általunk készített keretprogramot](???). Ebben minden feladat külön könyvtárban helyezkedik el. Minden könyvtárban előkészítettük a HTML, CSS, JavaScript állományokat. Ezekben dolgozz! Általában csak a `.js` fájlhoz kell hozzányúlni, de ha kell, akkor a HTML is módosítható, sőt több `.js` fájlra is szétoszthatod a megoldásodat, de ez egyáltalán nem elvárás.
- A letöltött keretprogramban lévő `README.md` fájlban töltsétek ki a nevetek és a Neptun azonosítótokat (a <> jeleket nem kell beleírni)! **A megfelelően kitöltött `README.md` fájl nélkül a megoldást nem fogadjuk el!**
- Minden feladat könyvtárában találsz egy `TASKS.md` fájlt. Ezekben az egyes `[ ]` közötti szóközt cseréld le `x`-re azokra a részfeladatokra, amiket sikerült (akár részben) megoldanod! Ez segít nekünk abban, hogy miket kell néznünk az értékeléshez.


## 1. feladat: Időjárás JSON (weather-json, 8 pont)

Adott egy időjárás API JSON válasza. Oldd meg a következő feladatokat ezzel kapcsolatban. _Technikai segítség: A b. ponttól kezdve a feladatok megoldása tömbfüggvényekkel ajánlott._

- a. (1 pont) A JSON egyelőre egy többsoros szöveges beviteli mezőben van szövegként megadva. A "Calculate statistics" gombra kattintva olvasd ki a beviteli mező tartalmát, és a szöveges JSON-t alakítsd át JavaScript objektummá, és írd ki a konzolra! _Megjegyzés: A további feladatok az így beolvasott JavaScript objektummal fognak dolgozni. Ha nem tudod átalakítani, akkor egyszerűen másold ki a szöveges beviteli mezőből, és add egy változónak értékül. Ebben az esetben pont nem jár érte._
- b. (2 pont) A `task1` azonosítójú elembe írd ki annak a napnak az azonosítóját, amikor a déli szél felhőket hoz! A `daily` tömbbel kell dolgozni, `dt` az azonosító, déli szélnek a `wind_deg` 180-45 és 180+45 fok közé eső értékei számítanak, az időjárást pedig a `weather` tömb első elemének `main` tulajdonsága tartalmazza (`Clouds`).
- c. (1 pont) A `task2` azonosítójú elembe írd ki a legkisebb napi maximumot! A `daily` tömbbel kell dolgozni, a napi maximum a `temp` `max` tulajdonsága.
- d. (1 pont) A `task3` azonosítójú elembe írd ki, hogy vajon a légnyomás minden nap 1010 fölött van-e! A `daily` tömbbel kell dolgozni, a légnyomást a `pressure` tulajdonság tartalmazza.
- e. (2 pont) A `task4` azonosítójú elembe írd ki az átlagosan érzett napi hőmérsékletet! A `daily` tömbbel kell dolgozni, a napi érzett hőmérséklet a `feels_like` rekord `day` tulajdonsága.
- f. (1 pont) A `task5` azonosítójú elembe írd ki a szeles órák számát! Az `hourly` tömbbel kell dolgozni, szeles órának pedig az számít, amikor a `wind_speed` nagyobb, mint 3.


## 2. feladat: Képszűrők (image-filters, 8 pont)

CSS-ben lehetőség van különböző szűrőket alkalmazni egy képen: pl. `filter: contrast(200%) hue-rotate(90deg);`. Ha több szűrő is van, akkor azokat szóközzel kell elválasztani. Ebben a feladatban adott egy kép, és pár szűrő. Szeretnénk kipróbálni, hogy milyen szűrő milyen hatással van a képre: ha a szűrő jelölőmezőjét bepipáljuk, akkor alkalmazzuk a képre, a mellette lévő csúszkával pedig a szűrő értékét állíthatjuk be.

- a. (2 pont) Ha egy szűrő jelölőmezője aktív, akkor olvassuk ki a jelölőmező értékeként megadott szűrőszöveget, és abban a `#` karaktert cseréljük ki a jelölőmező utáni csúszka értékére. Az így megkapott szűrőt alkalmazzuk a kép stílusán!
- b. (2 pont) Ha több jelölőmező is be van kattintva, akkor mindegyiket alkalmazzuk a képen!
- c. (1 pont) Ha egy jelölőmező jelölését eltávolítjuk, akkor az adott szűrőnek ne legyen hatása a képre!
- d. (2 pont) Ha egy csúszka értékét változtatjuk és a mellette lévő jelölőmező be van kattintva, akkor a frissített értéket alkalmazzuk a képre!
- e. (1 pont) Az `index.js` állományban adott egy `filters` tömb. Az oldal betöltésekor ennek segítségével generáld az egyes szűrőket (`<label>` és tartalma), lecserélve a statikusan megadottakat (jelölőmező `value` értéke, label szövege, csúszka `min`, `max`, `value` értéke)!

_Technikai segítség: mind a jelölőmező ki-bekapcsolása, mind a csúszkák mozgatása `input` eseményt generál. Így a feladat megoldható a jelölőmezőket tartalmazó `div`-en figyelt eseménykezelővel, amelyben megnézed, mely jelölőmezők vannak bepipálva, kiolvasod a hozzájuk tartozó csúszkák értékét, és az így előállt képszűrő szöveget alkalmazod a kép stílusára._


## 3. feladat: Idővonal (timeline, 8 pont)

Magyar és angol királyok uralkodásának intervallumait szeretnénk Canvasen ábrázolni. Ehhez a `kings.js`-ben adottak a megfeleő információk az Árpád-házi királyokhoz és a Plantagenet-uralkodóház királyairól, akikről Shakespeare néhány királydrámája szól. Az ábrázolás a következőképpen zajlik: az x tengely viselkedik speciálisan. Kezdetben az x=0 érték az 1000. évnek felel meg (`origoYear`). Az is adott, hogy egy év hány pixel széles (`pixelsPerYear`). Így egy adott évet (`year`) a következő koordinátára kell rajzolni: `(year - origoYear) * pixelsPerYear`. Azaz pl. Szent István 1038-as halála a `(1038 - 1000) * 5 = 190px`-re kerül.

- a. (1 pont) 1000-től 1500-ig 50 évesével rajzolj függőleges vörös vonalakat, és írd melléjük az évszámot! Kezdetben csak 3 vonal fog látszódni, a többi a Canvasen kívül rajzolódik.
- b. (2 pont) Rajzold fel az Árpád-házi királyok uralkodásának intervallumait zöld téglalapokként!
- c. (1 pont) Ugyanezt tedd meg a Plantagenet-ház angol királyaival is!
- d. (1 pont) A téglalapokba írd bele az uralkodó nevét és uralkodásának kezdetét és végét.
- e. (1 pont) A "Left" gombot megnyomva mozgasd el kirajzolást jobbra 10 évvel. Ehhez a `origoYear` változó értékét kell 10-zel csökkenteni.
- f. (1 pont) A "Right" gombot megnyomva mozgasd el kirajzolást balra 10 évvel. Ehhez a `origoYear` változó értékét kell 10-zel növelni.
- g. (1 pont) A "Start animation" gombot megnyomva folyamatosan mozgasd az idővonalat. Ehhez bármilyen időzítőt használhatsz, és egy animációs lépésben az `origoYear` változót változtasd `dt` értékkel. Az animációnak nem kell időalapúnak lennie.


## 4. feladat: Jelenlétek (attendance-list, 8 pont)

Adott az oldalon egy jelenléti lista: egy táblázat celláiban jelölőmezők, némelyik már kezdetben is bejelölve.

- a. (2 pont) Az oldal betöltésekor fusson le egy függvény, amely minden olyan táblázatcellát (`<td>`), amelyben bejelölt jelölőmező van, `present` stílusosztállyal lát el. _Technikai segítség: válaszd ki az összes jelölőmezőt, és azon menj végig egy ciklussal!_
- b. (1 pont) Egy cellára kattintva, kapja meg a jelölőmező a fókuszt (`focus()` metódus)!
- c. (1 pont) Egy jelölőmezőre kattintva, az ki-bekapcsolódik, színezzük újra a táblázatot az a. pontbeli függvény meghívásával!
- d. (2 pont) A négy iránybillentyű megnyomására olvassuk ki a fókuszált jelölőmezőt tartalmazzó cella x-y koordinátáit, és írjuk ki a konzolra. Ha nincs jelölőmezőn fókusz, akkor ne történjen semmi!
- e. (1 pont) Az iránybillentyűk lenyomására mozogjunk el a megfelelő irányba, és az ottani jelölőmezőre tegyük a fókuszt! Azaz a le billentyű lenyomására az eggyel lejjebb lévő jelölőmező legyen kijelölve!
- f. (1 pont) Legyen a mozgás ciklikus, azaz egy adott sor vagy oszlop valamelyik végéről lelépve a másik végére kerülünk!
