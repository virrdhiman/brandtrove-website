# Restore Brandtrove public assets (logo + images)
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$public = Join-Path $root 'public'
$images = Join-Path $public 'images'
New-Item -ItemType Directory -Force -Path $images | Out-Null

$logoSrc = 'C:\Users\virrd\.cursor\projects\c-Users-virrd-OneDrive-Desktop-Programs\assets\c__Users_virrd_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_Logo-e56ac0a5-947e-42e6-ae9a-2d275df3ba5e.png'
$founderSrc = 'C:\Users\virrd\.cursor\projects\c-Users-virrd-OneDrive-Desktop-Programs\assets\c__Users_virrd_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_248e51_84f6fbf5ef2c486484c01a74b402fbb1_mv2-94fd9dab-095e-49e8-ac9c-89d044b2499b.png'

if (Test-Path $logoSrc) { Copy-Item -Force $logoSrc (Join-Path $public 'logo.png') }
if (Test-Path $founderSrc) { Copy-Item -Force $founderSrc (Join-Path $images 'founder-virender.png') }

$stock = @{
  'hero-partnerships.jpg' = 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=85'
  'sports.jpg'            = 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=85'
  'influencer.jpg'        = 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1200&q=85'
  'entertainment.jpg'     = 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85'
  'events.jpg'            = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85'
  'global.jpg'            = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=85'
  'strategy.jpg'          = 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=85'
}

foreach ($name in $stock.Keys) {
  $dest = Join-Path $images $name
  if (-not (Test-Path $dest)) {
    try { Invoke-WebRequest -Uri $stock[$name] -OutFile $dest -UseBasicParsing } catch { Write-Warning "Failed $name" }
  }
}

Write-Host 'Assets restored to' $public
