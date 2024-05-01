// pages/video.js

import React from "react";

interface VideoPlayerComponentProps {
  readonly title: string;
  readonly sourceVideo: string;
}

export default function VideoPlayerComponent({
  sourceVideo,
  title,
}: VideoPlayerComponentProps) {
  return (
    <div className="w-full">
      <iframe
        className="w-full"
        // width="350"
        src={sourceVideo}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}
