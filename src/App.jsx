import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import VideoRecorder from "../src/components/VideoRecorder"
import AudioRecorder from './components/AudioRecorder'
import './App.css'

const App = () => {
  // const [count, setCount] = useState(0)
  const [recordOption, setRecordOption] = useState("video");
  const toggleRecordOption = (type) => {
    return () =>{
      setRecordOption(type);
    };
  };
  return (
    <div className="App">
      <h1>React Media Recorder</h1>
      <div className="button-flex">
        <button onClick={toggleRecordOption("video")}>Record Video</button>
          {/*  npm run dev to run our env */}
        <button onClick={toggleRecordOption("audio")}>Record Audio</button>
      </div>
      <div>
        {recordOption === "video" ? <VideoRecorder /> : <AudioRecorder />}
      </div>
    </div>
  )
}

export default App
