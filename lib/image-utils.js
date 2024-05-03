// lib/image-utils.js
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

export async function encodeImageToBlurDataURL(imagePath) {
  const fullPath = path.join(process.cwd(), imagePath);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`File not found: ${fullPath}`);
  }
  const imageBuffer = fs.readFileSync(fullPath);
  const base64Image = await sharp(imageBuffer)
    .resize(32, 32) // 작은 해상도로 리사이즈
    .blur(1) // 약간의 흐림 효과
    .toFormat('webp') // webp 포맷으로 압축
    .toBuffer();

  return `data:image/webp;base64,${base64Image.toString('base64')}`;
}
