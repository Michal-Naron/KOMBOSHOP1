# Kombo - strona kombuchy w React + SCSS + Docker

Gotowa, responsywna strona prezentująca cztery warianty kombuchy. Projekt nie ma koszyka ani płatności — zamówienia są realizowane telefonicznie.

## Najszybsze uruchomienie w Dockerze

Wymagany jest zainstalowany **Docker Desktop**.

1. Rozpakuj plik ZIP.
2. Otwórz terminal w folderze `komba-kombucha-react`.
3. Uruchom:

```bash
docker compose up --build
```

4. Otwórz w przeglądarce:

```text
http://localhost:8080
```

Zatrzymanie strony:

```bash
docker compose down
```

Ponowne zbudowanie po zmianach:

```bash
docker compose up --build --force-recreate
```

## Uruchomienie lokalne bez Dockera

Wymagany Node.js 20 lub nowszy.

```bash
npm install
npm run dev
```

Strona będzie dostępna pod adresem wyświetlonym przez Vite, zwykle:

```text
http://localhost:5173
```

Wersja produkcyjna:

```bash
npm run build
npm run preview
```

## Gdzie zmienić dane

- **Kolory całej strony:** `src/styles/_variables.scss`
- **Produkty, ceny, opisy i składniki:** `src/data/products.js`
- **Telefony, e-mail, adres i godziny:** `src/data/contact.js`
- **Slajdy banera:** `src/data/bannerImages.js`
- **Breakpointy:** `src/styles/_breakpoints.scss`

## Zdjęcia użyte w projekcie

Zdjęcia zostały skopiowane do projektu i otrzymały techniczne nazwy bez spacji oraz polskich znaków. Dzięki temu importy działają stabilnie na Windowsie, macOS i w Dockerze.

### Banery

| Oryginalna nazwa | Nazwa w projekcie |
|---|---|
| `Baner na strone na komputer.JPG` | `src/assets/images/banners/banner-1-desktop.jpg` |
| `Baner na strone na telefon.JPG` | `src/assets/images/banners/banner-1-mobile.jpg` |
| `Baner na storne na komputern 2.JPG` | `src/assets/images/banners/banner-2-desktop.jpg` |
| `Baner na storn na telefon 2.JPG` | `src/assets/images/banners/banner-2-mobile.jpg` |
| `baner do slajdena na komputer 3.JPG` | `src/assets/images/banners/banner-3-desktop.jpg` |
| `baner do slajedenra na telefon 3.JPG` | `src/assets/images/banners/banner-3-mobile.jpg` |

Slider automatycznie wybiera zdjęcie desktopowe lub telefoniczne przez znacznik `<picture>`.

### Produkty

| Oryginalna nazwa | Nazwa w projekcie |
|---|---|
| `butelka kombuchy o samku hibiskowyj i maliny przod.JPG` | `src/assets/images/products/hibiscus-raspberry-front.jpg` |
| `butelka kombuchy o samku hibiskowyj i maliny tyl.JPG` | `src/assets/images/products/hibiscus-raspberry-back.jpg` |
| `Kombucha butleka z zielonej herbaty.JPG` | `src/assets/images/products/green-tea-front.jpg` |
| `butleka kombucha z zielonej herbaty tyl.JPG` | `src/assets/images/products/green-tea-back.jpg` |
| `Jun na zielonej herbacie i miodzie przod.JPG` | `src/assets/images/products/jun-honey-front.jpg` |
| `Jun na zielonej herbacie i miodzie tył.JPG` | `src/assets/images/products/jun-honey-back.jpg` |
| `Przód butelki o samku hibiskowaym.JPG` | `src/assets/images/products/hibiscus-front.jpg` |
| `tył butelki kombhuchy o smaku hibiskusowym.JPG` | `src/assets/images/products/hibiscus-back.jpg` |

## Dodawanie nowego produktu

1. Wklej zdjęcia do `src/assets/images/products/`.
2. Zaimportuj je na początku `src/data/products.js`.
3. Dodaj nowy obiekt do tablicy `products`.

Routing produktu zostanie utworzony automatycznie na podstawie pola `slug`, np.:

```text
/oferta/nowy-smak
```

## Ważna uwaga o treści

Ceny, opisy i lista składników są przykładowe i znajdują się w jednym pliku. Przed publikacją porównaj je z aktualnymi etykietami oraz ofertą marki.

## Rozwiązanie błędu `npm error Exit handler never called!`

W poprawionej wersji projektu plik `package-lock.json` korzysta z publicznego rejestru npm, a etap budowania używa obrazu `node:20-bookworm-slim` zamiast obrazu Alpine.

Po pobraniu poprawionej wersji uruchom:

```bash
docker compose down --remove-orphans
docker builder prune -f
docker compose build --no-cache
docker compose up
```
