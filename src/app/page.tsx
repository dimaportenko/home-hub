"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [videos, setVideos] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/videos")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data: string[]) => setVideos(data));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Videos</h1>
        <div>
          {videos.map((video, index) => (
            <div key={index}>
              <video width="320" height="240" controls>
                <source src={`/videos/${video}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
