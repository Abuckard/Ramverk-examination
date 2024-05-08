All kod är skriven på engelska även om innehållet på sidan är på svenska.

VG-kriterier: UseContext som finns definierad i App.jsx och Contact.jsx
              UseEffect som finns definierad i Api.jsx

De tre vyerna på sidan är: Contact.jsx, About.jsx och Project.jsx

Det finns ett flertal komponenter som skulle kunna återanvändas men den som faktiskt återanvänds flera gånger är Header.jsx

De funktioner som finns är följande: Darkmode/lightmode, 2st separata Github API och ett interaktivt formulär med useState och props.

Kodstrukturen är uppdelad i fyra huvudmappar. Först har vi src som innehåller app, main och store + deras css motsvarigheter. Här ligger dessutom de andra mapparna som vi vill komma åt.

Därefter har vi mappen assets som endast innehåller en mapp för bilder där det just nu bara ligger en bild, men det här gör det lättare att bygga ut hemsidan vid ett senare tillfälle.

Mappen features inhåller ThemeProvider, där ligger en del av koden för redux och dark/lightmode.

I sista huvudmappen Components så ligger flertalet undermappar som innehåller själva sidorna och komponenterna som används på sidan. De mapparna har sina egna jsx och css filer för att lättare kunna felsöka och styla sidan.

Förklarande kommentarer om koden finns i kodfilerna.
