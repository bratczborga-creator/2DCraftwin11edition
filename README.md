# 2DCraftwin11edition

Proste menu główne w stylu Minecraft (HTML/CSS/JS).

## Jak odpalić (Windows 11)

### Najprościej
1. Kliknij dwa razy `start.bat`.
2. Powinna otworzyć się przeglądarka z adresem: `http://127.0.0.1:4173`.

`start.bat`:
- najpierw próbuje uruchomić serwer przez `py -m http.server 4173`,
- potem przez `python -m http.server 4173`,
- a jeśli Python nie jest zainstalowany, otwiera samo `index.html`.

## Ręcznie (Windows / Linux / macOS)

W folderze projektu uruchom:

```bash
python3 -m http.server 4173
```

(albo na Windows: `py -m http.server 4173`)

Następnie wejdź w przeglądarce na:

```text
http://127.0.0.1:4173
```

## Problemy i szybkie rozwiązania

- **„python/py nie jest rozpoznawany”**
  - Zainstaluj Python 3 i zaznacz opcję dodania do PATH.
- **Port zajęty**
  - Uruchom np. `py -m http.server 8080` i otwórz `http://127.0.0.1:8080`.
- **Otwiera się pusty ekran**
  - Odśwież stronę `Ctrl+F5`.
