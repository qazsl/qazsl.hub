 // a.js
import './a.css';
import React, { useRef, useState, useEffect } from 'react';
import videoFile from './videos/8.mp4';
import playIcon from './img/play.png'; // Путь к изображению кнопки воспроизведения
import { Link } from 'react-router-dom';

function Segiz_jest() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    setProgress((video.currentTime / video.duration) * 100);
  };

  const handleSliderChange = (e) => {
    const video = videoRef.current;
    const value = e.target.value;
    video.currentTime = (value / 100) * video.duration;
    setProgress(value);
  };

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.loop = true;
      video.play();
      setIsPlaying(true);
    }
    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <div className='container-video'>
      <div className='video-title'>
        <video ref={videoRef} src={videoFile} id='video-a' onClick={handleVideoClick}></video>
        {!isPlaying && (
          <button className='play-pause-button' onClick={handleVideoClick}>
            <img src={playIcon} id='play-img' alt='Play' />
          </button>
        )}
        <h2>8 Дактилі | QazSL</h2>
        <hr></hr>
        <h4>Біз барлық 4 саусақты жарты жүрек түрінде біріктіреміз, содан кейін бас бармақты ішке қарай бүгеміз. Сондай-ақ адамдар сіздің қимылыңызды көруі үшін қолыңызды аузыңызға жақын ұстауыңыз керек.</h4>
      </div>
    </div>
  );
}

export default Segiz_jest;

