import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const videosDirectory = path.join(process.cwd(), "public/videos");
  fs.readdir(videosDirectory, (err, files) => {
    if (err) {
      res.status(500).json({ error: "Failed to read video directory" });
      return;
    }
    res.status(200).json(files);
    // return JSON.stringify(files)
  });
}
