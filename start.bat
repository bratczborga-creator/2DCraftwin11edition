@echo off
setlocal
cd /d "%~dp0"

echo [2DCraft] Proba uruchomienia lokalnego serwera na porcie 4173...

where py >nul 2>nul
if %errorlevel%==0 (
  echo [2DCraft] Wykryto launcher Pythona (py).
  start "2DCraft Server" cmd /k "cd /d \"%~dp0\" && py -m http.server 4173"
  timeout /t 1 >nul
  start "" "http://127.0.0.1:4173"
  goto :eof
)

where python >nul 2>nul
if %errorlevel%==0 (
  echo [2DCraft] Wykryto python.
  start "2DCraft Server" cmd /k "cd /d \"%~dp0\" && python -m http.server 4173"
  timeout /t 1 >nul
  start "" "http://127.0.0.1:4173"
  goto :eof
)

echo [2DCraft] Nie znaleziono Pythona.
echo [2DCraft] Otwieram index.html bez serwera.
start "" "%~dp0index.html"

echo.
echo [INFO] Dla najlepszego dzialania zainstaluj Python 3 i uruchom ponownie start.bat
