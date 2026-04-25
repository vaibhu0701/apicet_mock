
@echo off
setlocal

set "NODE_EXE=C:\Users\VICTUS\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
set "APP_DIR=%~dp0"

if not exist "%NODE_EXE%" (
  echo Bundled Node runtime not found:
  echo %NODE_EXE%
  pause
  exit /b 1
)

cd /d "%APP_DIR%"
echo Starting AP ICET mock test server...
echo Open http://127.0.0.1:3000 in your browser
echo.

"%NODE_EXE%" server.js

echo.
echo Server stopped.
pause
