"use client";
import { videosDirectory } from "@/lib/constants";
import { useEffect, useState } from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default function Videos({ params }: Props) {
  const [videos, setVideos] = useState<string[]>([]);

  useEffect(() => {
    fetch(`/api/videos?name=${params.slug}`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data: string[]) => setVideos(data));
  }, [params.slug]);

  return (
    <main className="flex min-h-screen flex-col p-10">
      <div>
        <h1>Videos</h1>
        <div className="flex flex-1 flex-row flex-wrap gap-4 ">
          {videos.map((video, index) => (
            <div key={index}>
              <div className="max-w-[320px] p-4">
                <video width="320" height="240" controls>
                  <source
                    src={`${params.slug}/${video}`}
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
