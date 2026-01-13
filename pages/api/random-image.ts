import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import { promises as fsp } from 'fs';
import path from 'path';
import { imageSize } from 'image-size'; // Named import

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const imagesDir = path.join(process.cwd(), 'public', 'images');
        const { json, type } = req.query;

        // Check if directory exists
        try {
            await fsp.access(imagesDir);
        } catch {
            return res.status(500).json({ error: 'Images directory not found' });
        }

        const allFiles = await fsp.readdir(imagesDir);
        const files = allFiles.filter((name) => /\.(jpe?g|png|gif|webp)$/i.test(name));

        if (files.length === 0) {
            return res.status(404).json({ error: 'No images found' });
        }

        const randomName = files[Math.floor(Math.random() * files.length)];
        const filePath = path.join(imagesDir, randomName); // Move filePath up manually for size calc

        // Handle JSON response
        if (json === 'true' || json === '') {
            const protocol = req.headers['x-forwarded-proto'] || 'http';
            const host = req.headers.host;
            const imageUrl = `${protocol}://${host}/images/${randomName}`;

            // Read Metadata
            let metadata = {
                game: 'Unknown',
                character: 'Unknown'
            };
            // Calculate Dimensions
            let dimensions = { width: 0, height: 0 };
            try {
                const buffer = fs.readFileSync(filePath);
                const size = imageSize(buffer);

                if (size && size.width && size.height) {
                    dimensions = { width: size.width, height: size.height };
                }
            } catch (err) {
                console.error('Error calculating image size:', err);
            }

            try {
                const dataPath = path.join(process.cwd(), 'data', 'images.json');
                const dataContent = await fsp.readFile(dataPath, 'utf-8');
                const dataJson = JSON.parse(dataContent);

                if (dataJson[randomName]) {
                    const { width, height, ...rest } = dataJson[randomName];
                    // @ts-ignore
                    metadata = { ...metadata, ...rest };
                }
            } catch (e) {
                // Ignore
            }

            return res.status(200).json({
                url: imageUrl,
                ...metadata,
                ...dimensions,
                format: path.extname(randomName).substring(1)
            });
        }

        // Get file stats
        const stat = await fsp.stat(filePath);
        const ext = path.extname(randomName).substring(1).toLowerCase();
        const mimeType = ext === 'jpg' ? 'image/jpeg' : `image/${ext}`;

        // Set Headers
        res.setHeader('Content-Type', mimeType);
        res.setHeader('Content-Length', stat.size);
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

        // Stream File
        const stream = fs.createReadStream(filePath);
        stream.pipe(res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}