@echo off
:: Batch file to automatically free up 15-20 GB on C: drive
title C: Drive Space Cleanup
color 0B

echo ================================================================
echo               C: DRIVE DEEP CLEANUP TOOL
echo ================================================================
echo.

:: Check for Administrator permissions
net session >nul 2>&1
if %errorLevel% neq 0 (
    color 0C
    echo [ERROR] Aa file ne "Run as administrator" karvi padshe!
    echo Krupaya aa file par Right Click karo ane "Run as administrator" select karo.
    echo.
    pause
    exit /b
)

echo [1/3] Removing Hibernation File (hiberfil.sys - 6.75 GB)...
powercfg -h off
echo [OK] Hibernation turned off successfully!
echo.

echo [2/3] Cleaning Windows Update Download Cache...
net stop wuauserv >nul 2>&1
del /q /s /f "%SystemRoot%\SoftwareDistribution\Download\*" >nul 2>&1
net start wuauserv >nul 2>&1
echo [OK] Windows Update Cache cleaned!
echo.

echo [3/3] Cleaning Windows Update Old Component Files (DISM)...
echo (Thodok samay lagse, krupaya wait karo...)
dism.exe /online /Cleanup-Image /StartComponentCleanup /ResetBase
echo.

echo ================================================================
echo                     CLEANUP COMPLETED!
echo ================================================================
echo.
powershell -NoProfile -Command "$c = Get-Volume -DriveLetter C; Write-Host ('Total Free Space on C: ' + [math]::Round($c.SizeRemaining/1GB, 2) + ' GB') -ForegroundColor Green"
echo.
echo Press any key to exit...
pause >nul
