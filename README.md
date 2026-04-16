# 🛒 My Online E-Shop

Detta är ett webbaserat e-handelsprojekt utvecklat som en del av kursen i JavaScript 1. Applikationen hämtar produktdata från ett externt API och visar upp dem i ett användarvänligt gränssnitt där användare kan navigera och se detaljer om sortimentet.

## 📝 Projektbeskrivning

Projektet fokuserar på att använda moderna webbtekniker för att kommunicera med servrar och hantera data dynamiskt. Systemet bygger på följande koncept:
* **API-kommunikation:** Använder `fetch()` för att hämta JSON-data asynkront.
* **Dynamisk rendering:** Produkterna skapas och visas i DOM:en med JavaScript.
* **RESTful design:** Applikationen följer REST-principer för att strukturera anrop mot databasen.

## 🚀 Instruktioner för att köra projektet

Följ stegen nedan för att få igång projektet lokalt på din dator:

1. **Klona repot:**
   ```bash
   git clone https://github.com/Appsar/OnlineShop
   ```
   
2. Gå in i mappen:
  
  ```Bash
  cd din-mappnamn
  ```
  
3. Öppna projektet:

Alternativ A: Öppna filen index.html direkt i din webbläsare.

Alternativ B: Använd tillägget Live Server i VS Code för att köra projektet med automatisk uppdatering.

Användning:
När sidan laddas skickas ett asynkront anrop till API:et. Om allt går bra (Status 200) visas produkterna på skärmen. Vid eventuella fel (t.ex. nätverksproblem) visas ett felmeddelande i konsolen eller direkt på sidan.
