import React, { useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import { Camera } from '@mediapipe/camera_utils';
import { HAND_CONNECTIONS, Holistic, Results, LandmarkList } from '@mediapipe/holistic';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import './Number_realtime.css';


import { Link } from 'react-router-dom';

const holistic = new Holistic({
  locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`,
});

holistic.setOptions({
  modelComplexity: 1,
  smoothLandmarks: true,
  enableSegmentation: true,
  smoothSegmentation: true,
  refineFaceLandmarks: true,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5,
});

type HandLandmarks = LandmarkList | undefined;


const recognizeGesture = (handLandmarks: HandLandmarks): number | null => {
  if (!handLandmarks) return null;

  const thumbUp = handLandmarks[4].y < handLandmarks[3].y;
  const indexUp = handLandmarks[8].y < handLandmarks[7].y;
  const middleUp = handLandmarks[12].y < handLandmarks[11].y;
  const ringUp = handLandmarks[16].y < handLandmarks[15].y;
  const pinkyUp = handLandmarks[20].y < handLandmarks[19].y;

  if (thumbUp && !indexUp && !middleUp && !ringUp && !pinkyUp) return 1;
  if (indexUp && thumbUp && !middleUp && !ringUp && !pinkyUp) return 2;
  if (thumbUp && indexUp && middleUp && !ringUp && !pinkyUp) return 3;
  if (!thumbUp && indexUp && middleUp && ringUp && pinkyUp) return 4;
  if (thumbUp && indexUp && middleUp && ringUp && pinkyUp) return 5;
  return null;
};

const recognizeGesture2 = (handLandmarks: HandLandmarks): number | null => {
  if (!handLandmarks) return null;

  const thumbUp = handLandmarks[4].y < handLandmarks[3].y;
  const indexUp = handLandmarks[8].y < handLandmarks[7].y;
  const middleUp = handLandmarks[12].y < handLandmarks[11].y;
  const ringUp = handLandmarks[16].y < handLandmarks[15].y;
  const pinkyUp = handLandmarks[20].y < handLandmarks[19].y;

  if (thumbUp && !indexUp && !middleUp && !ringUp && !pinkyUp) return 6;
  if (indexUp && thumbUp && !middleUp && !ringUp && !pinkyUp) return 7;
  if (thumbUp && indexUp && middleUp && !ringUp && !pinkyUp) return 8;
  if (!thumbUp && indexUp && middleUp && ringUp && pinkyUp) return 9;
  if (thumbUp && indexUp && middleUp && ringUp && pinkyUp) return 10;
  return null;
};

interface HandNumberProps {
  number: number;
  color: string;
  hand: 'left' | 'right';
}

const HandNumber: React.FC<HandNumberProps> = ({ number, color, hand }) => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const onResults = (results: Results) => {
    if (!webcamRef.current?.video || !canvasRef.current) return;

    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;
    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;

    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext('2d');
    if (!canvasCtx) return;

    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);


    const leftHandNumber = recognizeGesture(results.leftHandLandmarks);
    const rightHandNumber = recognizeGesture2(results.rightHandLandmarks);

    if (leftHandNumber !== null) {
      canvasCtx.font = '30px Arial';
      canvasCtx.fillStyle = 'blue';
      // Adjusted coordinates to place text above the webcam
      canvasCtx.fillText(`Сол қол: ${leftHandNumber}`, 10, 50);
    }
    if (rightHandNumber !== null) {
      canvasCtx.font = '30px Arial';
      canvasCtx.fillStyle = 'red';
      // Adjusted coordinates to place text below the webcam
      canvasCtx.fillText(`Оң қол: ${rightHandNumber}`, 10, 100);
    }

    canvasCtx.restore();
  };

  useEffect(() => {
    const holistic = new Holistic({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`,
    });

    holistic.setOptions({
      selfieMode: true,
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: true,
      smoothSegmentation: true,
      refineFaceLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    holistic.onResults(onResults);

    if (webcamRef.current?.video) {
      const camera = new Camera(webcamRef.current.video, {
        onFrame: async () => {
          if (webcamRef.current?.video) {
            await holistic.send({ image: webcamRef.current.video });
          }
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }
  }, []);

  return (
    <div>
      <Webcam id='video-cam'
        ref={webcamRef}
        videoConstraints={{
          width: 640,
          height: 480,
          facingMode: 'user',
        }}
        style={{
          position: 'absolute',
          marginLeft: 'auto',
          left: 100,
          top: 100,
          zIndex: 8,
          width: 640,
          height: 480,
        }}
      />
      <canvas id='video-cam'
        ref={canvasRef}
        style={{
          position: 'absolute',
          marginLeft: 'auto',
          left: 100,
          top: 100,
          zIndex: 9, // Changed zIndex to place canvas below the webcam
          width: 640,
          height: 480,
        }}
      />
      <div className='back-camera'>
        <h6>.</h6>
      </div>
      <div className='text-in-webcam'>
        <div className='back-realtime-text'>
          <h2>SLRealTime</h2>
          <h2 className='description'>Сандарды тану үшін саусақтарыңызды камера алдында көрсетіңіз</h2>
          <h2 className='description'>Бетіңіз бен қолыңыз камерада анық көрінетініне көз жеткізіңіз</h2>
          <Link to='/' className='back-to-home'>
            <button>Шығу</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HandNumber;