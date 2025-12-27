import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import { promises as fsp } from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const imagesDir = path.join(process.cwd(), 'public', 'images');
    
    // 改用非同步讀取
    const allFiles = await fsp.readdir(imagesDir);
    const files = allFiles.filter((name) => /\.(jpe?g|png|gif|webp)$/i.test(name));

    if (files.length === 0) {
      return res.status(404).json({ error: 'No images found' });
    }

    const randomName = files[Math.floor(Math.random() * files.length)];
    const filePath = path.join(imagesDir, randomName);
    
    // 獲取檔案資訊
    const stat = await fsp.stat(filePath);
    const ext = path.extname(randomName).substring(1).toLowerCase();
    const mimeType = ext === 'jpg' ? 'image/jpeg' : `image/${ext}`;

    // 設定 Headers
    res.setHeader('Content-Type', mimeType);
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

    // 串流回傳
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  } catch (error) {
    res.status(500).end('Internal Server Error');
  }
}