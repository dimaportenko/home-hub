import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { videosDirectory as dir, publicDirectory } from "@/lib/constants";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const videosDirectory = path.join(process.cwd(), `${publicDirectory}${dir}`);
  fs.readdir(videosDirectory, (err, files) => {
    if (err) {
      res.status(500).json({ error: "Failed to read video directory" });
      return;
    }
    res.status(200).json(files);
    // return JSON.stringify(files)
  });
}
