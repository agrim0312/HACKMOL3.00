import React, {useRef,useState} from 'react';
import * as tensorf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import logo from './logo.svg';
import './App.css';
import {drawHand} from "./handdots.js";

import * as fp from "fingerpose";
import {A_Gesture,B_Gesture,D_Gesture,E_Gesture} from "./customges";
import victory from "./victory.jpeg"

function App() {
  
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [emoji,setEmoji] = useState(null);
  const images = {victory:victory}; 

  const runHandpose = async () =>{
    const net = await handpose.load();
    // console.log("handpose model sucessfully loaded");
    setInterval(() => {
      detect(net)
    }, 100);
  };

  // detect our hand 
   const detect = async (net) =>{
     if(webcamRef.current!=undefined && webcamRef.current!=null && webcamRef.current.video.readyState === 4){
       // get video properties
       const video = webcamRef.current.video;
       const videoWidth = webcamRef.current.video.videoWidth;
       const videoHeight = webcamRef.current.video.videoHeight;

       // setting video height nd width
       webcamRef.current.video.width = videoWidth;
       webcamRef.current.video.height = videoHeight;

       // setting canvas height and width
       canvasRef.current.width = videoWidth;
       canvasRef.current.height = videoHeight;

       // making detection
       const hand = await net.estimateHands(video);
      //  console.log(hand);

       if (hand.length>0){
         const GE = new fp.GestureEstimator([
          fp.Gestures.VictoryGesture,
          fp.Gestures.ThumbsUpGesture,
          // A_Gesture,
          // B_Gesture,
          // D_Gesture,
          // E_Gesture
         ]);
         const gesture = await GE.estimate(hand[0].landmarks, 8);
         console.log(gesture);
         if(gesture.gestures !== undefined && gesture.gestures.length>0){
           const confidence = gesture.gestures.map(
             (prediction) => prediction.confidence
           );
           const maxConfidence = confidence.indexOf(
             Math.max.apply(null, confidence)
           );
           setEmoji(gesture.gestures[maxConfidence].name);
           console.log(emoji);
         }
       }
       // drawing mesh
       const ctx = canvasRef.current.getContext("2d");
       drawHand(hand,ctx);
     }
   };
   runHandpose();
  return (
    <div className="App">
      <header className="App-header">
        <Webcam ref={webcamRef}
            style={{    
            position:"absolute",  
            zIndex:1,   
            width:700, 
            height:500
            }} />
            <canvas 
              ref={canvasRef}
              style={{
                position:"absolute",
                zIndex:3,
                width:700, 
                height:480,
                }} />
            {emoji !== null ? <img src={images[emoji]} style={{
              position:"absolute",
              marginLeft:"auto",
              marginRight:"auto",
              left:400,
              bottom:500,
              rigth:0,
              textAlign:"center",
              height:100,
            }}/>:""}
      </header>
    </div>
  );
}

export default App;
