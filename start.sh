#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

echo "[2DCraft] Uruchamianie serwera na porcie 4173..."
python3 -m http.server 4173
