<?php
// Create a 1200x900px image (WordPress recommended size)
$image = imagecreatetruecolor(1200, 900);

// Colors
$white = imagecolorallocate($image, 255, 255, 255);
$blue = imagecolorallocate($image, 59, 130, 246);
$gray = imagecolorallocate($image, 107, 114, 128);
$dark = imagecolorallocate($image, 31, 41, 55);

// Fill background
imagefill($image, 0, 0, $white);

// Draw header background
imagefilledrectangle($image, 0, 0, 1200, 80, $white);

// Draw site title
$font = __DIR__ . '/assets/fonts/Inter-Bold.ttf';
imagettftext($image, 24, 0, 40, 50, $dark, $font, 'Custom Post Theme');

// Draw project grid
$cardWidth = 350;
$cardHeight = 300;
$padding = 30;
$startY = 120;

for ($row = 0; $row < 2; $row++) {
    for ($col = 0; $col < 3; $col++) {
        $x = $padding + ($col * ($cardWidth + $padding));
        $y = $startY + ($row * ($cardHeight + $padding));
        
        // Card background
        imagefilledrectangle($image, $x, $y, $x + $cardWidth, $y + $cardHeight, $white);
        imagerectangle($image, $x, $y, $x + $cardWidth, $y + $cardHeight, $gray);
        
        // Card image placeholder
        imagefilledrectangle($image, $x, $y, $x + $cardWidth, $y + 180, $blue);
        
        // Card title
        imagettftext($image, 18, 0, $x + 20, $y + 220, $dark, $font, 'Project Title');
        
        // Card excerpt
        imagettftext($image, 14, 0, $x + 20, $y + 250, $gray, $font, 'Project description...');
    }
}

// Output the image
header('Content-Type: image/png');
imagepng($image);
imagedestroy($image);