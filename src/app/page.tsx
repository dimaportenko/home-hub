"use client";
import { videosDirectory } from "@/lib/constants";
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
    <main className="flex min-h-screen flex-col p-10">
      <div>
        <h1>Videos</h1>
        <div className="flex flex-1 flex-row flex-wrap gap-4 ">
          {videos.map((video, index) => (
            <div key={index} >
              <div className="max-w-[320px] p-4">
                <video width="320" height="240" controls>
                  <source
                    src={`${videosDirectory}/${video}`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="max-w-[320px] flex flex-wrap">
                  <span className="break-all">{video}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
