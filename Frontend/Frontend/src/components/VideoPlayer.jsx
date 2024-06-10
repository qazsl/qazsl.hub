// src/components/VideoPlayer.js
import React from "react";

const VideoPlayer = ({ videoUrl }) => {
  return (
    <video width="100%" height="auto" controls>
      <source src={videoUrl} type="video/mp4" />
      Ваш браузер не поддерживает элемент <code>video</code>.
    </video>
  );
};

export default VideoPlayer;