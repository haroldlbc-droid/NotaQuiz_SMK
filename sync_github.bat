@echo off
setlocal
cd /d "%~dp0"

echo Syncing project to GitHub...

if not exist ".git\" (
  echo ERROR: This folder is not a Git repository.
  echo Run git init and connect the GitHub remote first.
  goto :failed
)

git add .
if errorlevel 1 goto :failed

git diff --cached --quiet
if not errorlevel 1 (
  echo No file changes to commit.
  goto :push
)

git commit -m "Sync project updates"
if errorlevel 1 goto :failed

:push
git push origin main
if errorlevel 1 goto :failed

echo.
echo Project synced to GitHub successfully.
goto :done

:failed
echo.
echo Sync failed. Check the message above.
exit /b 1

:done
pause
endlocal
