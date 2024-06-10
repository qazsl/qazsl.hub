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
                    <h2>Ауызша сөйлесе алмайтын адамдардың қоғамның толыққанды қатысушысы болуын қамтамасыз ететін платформа.</h2>
                    <h2>Біздің мақсатымыз – қарым-қатынас мүмкіндіктеріне қарамастан, әлемді барлығына достық және қолжетімді орынға айналдыру.</h2>
                    <h2>Біз Ауызша сөйлесе алмайтын адамдарға басқалардың тілін түсінуге көмектесуге тырысамыз, өйткені көбінесе қарым-қатынас тек сөздер ғана емес, сонымен қатар ым-ишара, мимика және интонация болып табылады. QazSL ымдау тілін немесе басқа коммуникация құралдарын пайдаланатындар үшін байланысты жеңіл әрі табиғи ететін құралдар мен ресурстарды ұсынады.</h2>
                    <video className='sign_video_ai' ref={videoRef} src={sign_video}></video>
                </div>
            </div>
        )
    )
}

export default Info;
