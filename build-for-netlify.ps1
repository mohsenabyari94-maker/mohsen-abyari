# Build script for Netlify Drop deployment
Write-Host "Installing dependencies..." -ForegroundColor Cyan
npm install

Write-Host "`nBuilding site for static export..." -ForegroundColor Cyan
npm run build

if (Test-Path "out") {
    Write-Host "`n✓ Build successful! The 'out' folder is ready for Netlify Drop." -ForegroundColor Green
    Write-Host "`nTo deploy:" -ForegroundColor Yellow
    Write-Host "1. Go to https://app.netlify.com/drop" -ForegroundColor White
    Write-Host "2. Drag and drop the 'out' folder" -ForegroundColor White
} else {
    Write-Host "`n✗ Build failed or 'out' folder not found. Please check the build errors above." -ForegroundColor Red
    exit 1
}

