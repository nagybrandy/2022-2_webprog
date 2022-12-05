# PHP évfolyam zh

## Tudnivalók

- A zárthelyi megoldására **120 perc** áll rendelkezésre. **További 30 perc**et adunk az alább olvasható `README.md` fájl kitöltésére, a feladatok elolvasására, az anyagok letöltésére, összecsomagolására és feltöltésére.
- A feladatokat a Canvas rendszeren keresztül kell beadni. **A rendszer pontban 18:30-kor lezár, ezután nincs lehetőség beadásra**.
- A feladatok megoldásához **bármilyen segédanyag használható** (dokumentáció, előadás, órai anyag, cheat sheet). A zh időtartamában igénybe vett **emberi segítség tilos** (szinkron, aszinkron, chat, fórum, stb)! Erről nyilatkoztok az alább olvasható `README.md` fájlban is, ahol tudomásul veszitek ennek következményeit.
- A feladatok nem épülnek egymásra, **tetszőleges sorrendben** megoldhatók.
- A feladatok megoldásához először [töltsd le az általunk készített keretprogramot](???). Ebben minden feladat külön könyvtárban helyezkedik el. Minden könyvtárban előkészítettük a feladatokat valamilyen mértékben. Ezeken kívül természetesen használhatsz más fájlokat is az adatok tárolására, a kódod további szervezésére, illetve a szerveroldali AJAX/fetch funkcionalitás megvalósítására, de a feladatok maradjanak külön könyvtárakban és az `index.php` oldalról indíthatók!
- A letöltött keretprogramban lévő `README.md` fájlban töltsétek ki a nevetek és a Neptun azonosítótokat (a <> jeleket nem kell beleírni)! **A megfelelően kitöltött `README.md` fájl nélkül a megoldást nem fogadjuk el!**
- Minden feladat könyvtárában találsz egy `TASKS.md` fájlt. Ezekben az egyes `[ ]` közötti szóközt cseréld le `x`-re azokra a részfeladatokra, amiket sikerült (akár részben) megoldanod! Ez segít nekünk abban, hogy miket kell néznünk az értékeléshez.

## 1. feladat: Projektmenedzsment (8 pont)

Egy cég alkalmazottai közösen dolgoznak egy projekten. A feladatod az időbeosztásukat táblázatosan megjelenítő oldal elkészítése. A kiindulási állományban található `$data` tömb tartalmazza a projektben résztvevő alkalmazottak nevét és beosztásban használatos színét, illetve azt, hogy a 9-től 17 óráig tartó munkaidőn belül hány órától kezdve *(mint egy asszociatív tömb kulcsa)* hány órán keresztül *(mint az említett kulcshoz tartozó érték)* vesznek részt a projekt megvalósításában. (Példa: egy `11 => 3` elem azt jelenti, hogy 10:00-tól 3 órán át, tehát 14:00-ig dolgozik.) **A kódolás megkezdése előtt érdemes tanulmányozni és megérteni az `index.php` fájlban megadott adatok szerkezetét!**

- a. (1 pont) Generálj táblázatot, amelynek címsora tartalmaz egy *Név* mezőt, majd óránkénti időpontokat 9:00-tól 16:00-ig! (*Megjegyzés: ha a 16:00-ás mező színezett, akkor az alkalmazott 16:00-16:59 között elfoglalt, ezért nincs 17 órás oszlopra szükség!*)
- b. (1 pont) Minden alkalmazotthoz egy-egy sor tartozik a táblázatban. Jelenítsd meg az alkalmazottak nevét a sorok első oszlopában!
- c. (3 pont) Amennyiben az oszloppal jelzett órában az alkalmazott nem a projekten dolgozik, akkor maradjon a cella üresen! Ha éppen a projekten dolgozik, akkor helyezz el egy összevont cellát, amely a megfelelő oszlopban kezdődik és annyi oszlopot fed le, ahány órán keresztül dolgozik. Ehhez segítséget nyújt az alábbi pszeudokód:
```
i := 9
ciklus amíg i < 17:
    ha van i-kor kezdődő feladata:
        <td colspan="feladat hossza"></td>
        i := i + feladat hossza
    különben:
        <td></td>
        i := i + 1
    ev.
cv.
```
(*Technikai segítség: a "ha van i-kor kezdődő feladata" eldöntéshez használhatod az `isset($t[$i])` vagy `in_array($i, array_keys($t))` függvényeket az elfoglaltságokat tartalmazó tömbön.*)
- d. (1 pont) Színezd az elfoglaltságot jelző cellákat az alkalmazott színére!
- e. (2 pont) A táblázat alatt jelenítsd meg, hogy összesen hány órát dolgoznak az alkalmazottak a projekten!

## 2. feladat: Munkabér (8 pont)

Amennyiben a céges alkalomazottak ellátták a feladatukat, a hónap végén fizetést is kapnak. Készíts egy oldalt, amely a megadott szempontok szerint validálja a GET paraméterként érkező bérszámfejtéshez szükséges adatokat! **Érvénytelen mező esetén olyan hibaüzenetet jeleníts meg, amelyből egyértelműen kiderül, hogy melyik feltételnek nem felelt meg az elküldött érték!**

- a. (1 pont) A `fullname` (munkavállaló neve) paraméter kitöltése kötelező, legalább két szóból áll!
- b. (1 pont) A `job_title` (munkakör) paraméter kitöltése kötelező!
- c. (1 pont) A `department` (részleg) paraméter kitöltése kötelező, csak az űrlapon megadott három érték egyikét veheti fel!
- d. (1 pont) A `gross_income` (bruttó munkabér) paraméter kitöltése kötelező, csak 200000-nél nagyobb egész szám lehet!
- e. (1 pont) Az oldalon elhelyezett űrlap legyen állapottartó, tehát az elküldött értékek íródjanak vissza a mezőkbe!
- f. (1 pont) Hibás bemenet esetén a hibaüzenet a hibás mező mellett piros színnel jelenjen meg!
- g. (1 pont) Ha minden paraméter megfelelt a fenti feltételeknek és a `tax_free` (SZJA-mentesség) mező nincs bejelölve, akkor az oldalon jelenjen meg a nettó munkabér értéke, ami a bruttó munkabér 66,5%-a!
- h. (1 pont) Ha minden paraméter megfelelt a fenti feltételeknek és a munkavállaló SZJA-mentességet élvez, akkor az előző helyett a bruttó munkabér 81,5%-a jelenjen meg nettó munkabérként!

## 3. feladat: Projektórák (8 pont)

Most kaptuk a hírt, hogy mivel a cég alkalmazottai egyidejűleg több projekten is dolgoznak, a teljes beosztás áttekintéséhez nem elegendő az első feladatban elkészített rendszer. A feladat most egy olyan oldal elkészítése, amellyel nyilvántartható, hogy az egyes projekteken hány órát dolgoztak az alkalmazottak. **A beérkező adatokat ebben a feladatban nem kell validálni. A kódolás megkezdése előtt érdemes tanulmányozni és megérteni a `data.json` fájlban megadott adatok szerkezetét!**

- a. (1 pont) Töltsd fel az oldalon elhelyezett legördülő listát a `data.json˙ állományban található alkalmazottak neveivel úgy, hogy minden név pontosan egyszer szerepeljen! *(Technikai segítség: a rekordok tömbjéből egy adott mező szerinti értékek tömbjét az [array_column()](https://www.php.net/manual/en/function.array-column.php) függvénnyel tudod kinyerni, valamint az [array_unique()](https://www.php.net/manual/en/function.array-unique.php) függvényt alkalmazva megkaphatók a tömbben szereplő egyedi értékek.)*
- b. (2 pont) Amennyiben az űrlapot úgy küldjük el, hogy a projekt neve üres, jelenjen meg az adott alkalmazotthoz tartozó összes projektnév-munkaóra pár! Ekkor nem kell semmit sem menteni vagy módosítani.
- c. (2 pont) Ha az űrlapot nem üres projektnévvel küldjük el, akkor adjunk hozzá az alkalmazotthoz egy új projektet a megadott óraszámmal, és jelenítsük meg az új állapotot az űrlap alatt!
- d. (2 pont) Egészítsük ki az előző pontot azzal, hogy az alkalmazottnál már létező projektnév beírása esetén új bejegyzés beszúrása helyett a munkaórák hozzáadódjanak az eddigi értékhez (módosítás)!
- e. (1 pont) Mivel könyvelési hibák mindig vannak, ezért a rendszer azt is megengedi, hogy negatív munkaórát adjunk hozzá javításként. Biztosítsd, hogy amennyiben egy alkalmazott adott projektben töltött munkaóráinak száma 0-ra vagy annál kisebb számra módosul, törlődjön a fájlból a bejegyzés!

## 4. feladat: Belépőkártya (8 pont)

A cég székházán belül különféle termek találhatók, amelyekbe belépőkártyával lehet bejutni. A kiindulási állományban található `$rooms` tömb tartalmazza, hogy az egyes szobákból merre lehetséges menni. A feladatod egy belépéseket naplózó rendszer megírása, amelyben linkek segítségével lehet az egyes termek között mozogni, miközben **munkamenetben** követhető az adott alkalmazott mozgása. **A feladat AJAX/fetch funkciókat NEM igényel!**

- a. (1 pont) Ha a felhasználó először lép az oldalra (vagyis a munkamenet még nem jött létre), tároljuk el **munkamenetbe**, hogy jelenlegi helye a `porta`!
- b. (2 pont) Az oldalon egy-egy paraméterezett linkként (pl. `index.php?goto=aula`) jelenítsük meg a jelenlegi helyről elérhető termeket! *(Figyelem! Első megnyitáskor ez a portáról elérhető termeket jelenti; de később már nem biztos, hogy így lesz, mert a munkamenet már létrejöhetett korábban!)*
- c. (1 pont) Az előző pontban generált linkek egyikére kattintva módosuljon a munkamenetben tárolt helyszín, és jelenjenek meg az onnan elérhető szobák!
- d. (2 pont) A termek közötti átlépéseket (honnan, hová, mikor) naplózd a munkamenetben, és jelenítsd meg az oldalon táblázatként! A napló első bejegyzése a külvilágból a portára történő belépés a munkamenet kezdetekor.
- e. (2 pont) A napló felhasználásával jelenjen meg egy `Vissza az előző terembe` lehetőség is a linkek között, amely mindig arra a teremre mutat, amelyet legutóbb elhagyott a felhasználó!
