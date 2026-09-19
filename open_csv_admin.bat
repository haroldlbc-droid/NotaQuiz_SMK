@echo off
cd /d "%~dp0"
start "CSV Admin" "http://127.0.0.1:3000"
node "_adminitrative\admin_server.js"
