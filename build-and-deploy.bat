@echo off
echo ========================================
echo Building site for Netlify Drop
echo ========================================
echo.

echo Step 1: Installing dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: npm install failed
    pause
    exit /b 1
)

echo.
echo Step 2: Building site...
call npm run build
if errorlevel 1 (
    echo ERROR: Build failed
    pause
    exit /b 1
)

echo.
echo Step 3: Creating deploy-ready folder...
if exist "out" (
    if exist "deploy-ready" rmdir /s /q "deploy-ready"
    xcopy /E /I /Y "out" "deploy-ready" >nul
    echo.
    echo ========================================
    echo Build Complete!
    echo ========================================
    echo.
    echo The 'deploy-ready' folder is now ready for Netlify Drop!
    echo.
    echo To deploy:
    echo 1. Go to https://app.netlify.com/drop
    echo 2. Drag and drop the 'deploy-ready' folder
    echo.
) else (
    echo ERROR: Build output folder 'out' not found
    echo Please check for build errors above
    pause
    exit /b 1
)

pause

