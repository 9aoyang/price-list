// Helper to analyze image brightness/color
export interface ImageAnalysis {
  isDark: boolean;
  backgroundColor: string;
}

export function analyzeImage(src: string): Promise<ImageAnalysis> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = src;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve({ isDark: false, backgroundColor: '#ffffff' }); // Default fallback
        return;
      }

      // Resize to a small size for averaging
      canvas.width = 1;
      canvas.height = 1;

      // Draw image to 1x1 pixel
      ctx.drawImage(img, 0, 0, 1, 1);
      const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;

      // Calculate brightness (YIQ formula)
      // Returns true if image is dark (needs light text)
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      const isDark = brightness < 128;

      const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

      resolve({ isDark, backgroundColor: hex });
    };

    img.onerror = () => {
      // If image fails or CORS blocks, default to light theme
      resolve({ isDark: false, backgroundColor: '#ffffff' });
    };
  });
}
