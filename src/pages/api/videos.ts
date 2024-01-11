import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { videosDirectory as dir, publicDirectory } from "@/lib/constants";

// Function to recursively get all video files
function getVideoFiles(
  dirPath: string,
  baseDir: string,
  arrayOfFiles: string[] = [],
) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getVideoFiles(filePath, baseDir, arrayOfFiles);
    } else {
      // Add more video file extensions if needed
      if (/\.(mp4|mov|wmv|avi|mkv)$/i.test(file)) {
        // Store relative path
        arrayOfFiles.push(path.relative(baseDir, filePath));
      }
    }
  });

  return arrayOfFiles;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {name} = req.query;
  try {
    const pubDir = `${publicDirectory}/${dir}/${name}`;
    const baseDir = path.join(process.cwd(), pubDir);
    const videoFiles = getVideoFiles(baseDir, baseDir);
    res.status(200).json(videoFiles);
  } catch (err) {
    res.status(500).json({ error: "Failed to read video directory" });
  }
} // Function to recursively get all video files
