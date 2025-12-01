# PowerShell script to prepare deployment folder for Netlify Drop
Write-Host "Building Next.js project..." -ForegroundColor Green
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed! Please check for errors." -ForegroundColor Red
    exit 1
}

Write-Host "Build completed successfully!" -ForegroundColor Green

# Check if out folder exists
if (Test-Path "out") {
    Write-Host "`nDeployment folder 'out' is ready!" -ForegroundColor Green
    Write-Host "You can now drag and drop the 'out' folder to Netlify Drop" -ForegroundColor Yellow
    Write-Host "Location: $PWD\out" -ForegroundColor Cyan
    
    # Open the out folder in explorer
    Write-Host "`nOpening 'out' folder in File Explorer..." -ForegroundColor Green
    Start-Process explorer.exe -ArgumentList $PWD\out
} else {
    Write-Host "ERROR: 'out' folder was not created!" -ForegroundColor Red
    exit 1
}

