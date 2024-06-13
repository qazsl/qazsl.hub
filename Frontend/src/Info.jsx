import React, { useRef, useEffect, useState } from 'react'; // Keep this line
// Remove this line: import React from 'react';
import './Info.css';
import sign_video from './videos/sign_video_ai.mp4';

function Info() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
  
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
          video.loop = true;
          const playPromise = video.play(); // Call play() method
          if (playPromise !== undefined) {
            playPromise.then(_ => {
              // Automatic playback started!
              // Show playing UI.
            })
            .catch(error => {
              // Auto-play was prevented
              // Show paused UI.
            });
          }
          setIsPlaying(true);
      
          const handleTimeUpdate = () => {
            // Implement your time update logic here
          };
          video.addEventListener('timeupdate', handleTimeUpdate);
      
          return () => {
            video.removeEventListener('timeupdate', handleTimeUpdate);
          };
        }
      }, []);

    return((
            <div className='about-us'>
                <hr className='hr'></hr>
                <div className='about-us2'>
                    <h1>QazSL</h1>
                    <h2>Біздің платформа Қазақстандағы есту қабілеті бұзылған адамдар арасындағы қарым-қатынасты жақсарту мақсатында құрылған. Біз заманауи технологияларды пайдалана отырып, қазақ ымдау тілін оқытуды барлық пайдаланушылар үшін қолжетімді және ыңғайлы етуге тырысамыз!</h2>
                    <h2>Наша платформа создана с целью улучшения коммуникации и взаимодействия людей с нарушениями слуха в Казахстане. Мы стремимся сделать обучение казахскому жестовому языку доступным и удобным для всех пользователей, используя современные технологии!</h2>
                    <h2>Our platform is designed to improve communication and interaction between people with hearing impairments in Kazakhstan. We strive to make Kazakh sign language training accessible and convenient for all users using modern technology!</h2>
                    <video className='sign_video_ai' ref={videoRef} src={sign_video}></video>
                </div>
            </div>
        )
    )
}

export default Info;
