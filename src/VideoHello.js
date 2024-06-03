import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './VideoHello.css';
import hello from './videos/hello.mp4';

function Video_hello() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.loop = true;
      video.play();
      setIsPlaying(true);
    }
    const handleTimeUpdate = () => {
      // Implement your time update logic here
    };
    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <div>
      <center className='back'>
        <video ref={videoRef} className='hello-video' src={hello}></video>
        <Link className='go' to='/alphabet'>
          <button>Өту</button>
        </Link>
        <h1 className='title-logo-name'>QazSL</h1>
        <h2 className='title-h2'>Қазақ ым тілі сайтына қош келдіңіз!</h2>
      </center>
    </div>
  );
}

export default Video_hello;
