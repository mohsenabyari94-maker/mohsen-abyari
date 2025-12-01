@echo off
echo ========================================
echo Building Next.js for Netlify Drop
echo ========================================
echo.

echo Step 1: Installing dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: npm install failed!
    pause
    exit /b 1
)

echo.
echo Step 2: Building project...
call npm run build
if errorlevel 1 (
    echo ERROR: Build failed!
    pause
    exit /b 1
)

echo.
echo ========================================
echo Build Complete!
echo ========================================
echo.
echo The 'out' folder is now ready for deployment.
echo.
echo To deploy:
echo 1. Go to https://app.netlify.com/drop
echo 2. Drag and drop the 'out' folder
echo.
echo Opening 'out' folder...
if exist "out" (
    start explorer.exe "%~dp0out"
    echo.
    echo SUCCESS! The 'out' folder is ready to deploy.
) else (
    echo ERROR: 'out' folder was not created!
    pause
    exit /b 1
)

pause

