import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create canvas
const width = 1200;
const height = 630;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Background with gradient
const backgroundGradient = ctx.createLinearGradient(0, 0, width, height);
backgroundGradient.addColorStop(0, '#0f172a');
backgroundGradient.addColorStop(0.5, '#1e293b');
backgroundGradient.addColorStop(1, '#0f172a');
ctx.fillStyle = backgroundGradient;
ctx.fillRect(0, 0, width, height);

// Add subtle accent glow (soft blue)
const glowGradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, 800);
glowGradient.addColorStop(0, 'rgba(59, 130, 246, 0.15)');
glowGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
ctx.fillStyle = glowGradient;
ctx.fillRect(0, 0, width, height);

// Center vertical position
const centerY = height / 2;
const centerX = width / 2;

// Main name - large bold
ctx.font = 'bold 88px "Arial", "Helvetica", sans-serif';
ctx.fillStyle = '#ffffff';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('Abdulmalak Al Jamous', centerX, centerY - 100);

// Subtitle - software engineer
ctx.font = 'bold 48px "Arial", "Helvetica", sans-serif';
ctx.fillStyle = '#3b82f6';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('Software Engineer (Full Stack)', centerX, centerY + 20);

// Third line - backend & cloud
ctx.font = '36px "Arial", "Helvetica", sans-serif';
ctx.fillStyle = '#e2e8f0';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('Backend & Cloud Systems', centerX, centerY + 80);

// Save PNG
const outputDir = path.join(__dirname, '../public');
const outputPath = path.join(outputDir, 'og-image.png');

// Ensure public directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const out = fs.createWriteStream(outputPath);
const stream = canvas.createPNGStream();
stream.pipe(out);

out.on('finish', () => {
  console.log(`✓ OpenGraph image generated successfully!`);
  console.log(`✓ Saved to: ${outputPath}`);
  console.log(`✓ Size: 1200x630 px`);
});

out.on('error', (err) => {
  console.error('Error writing file:', err);
  process.exit(1);
});

stream.on('error', (err) => {
  console.error('Error creating PNG stream:', err);
  process.exit(1);
});
