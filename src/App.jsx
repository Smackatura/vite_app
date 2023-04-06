import React, { useState } from 'react';
import AudioRecorder from 'audio-recorder-polyfill';
import 'audio-recorder-polyfill/src/js/polyfill.js';

const AudioRecorderComponent = () => {
  const [recording, setRecording] = useState(false);
  const [audioList, setAudioList] = useState([]);

  const constraints = { audio: true };
  const chunks = [];

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        const mediaRecorder = new AudioRecorder(stream, {
          encoderPath: '/path/to/wavEncoder.js',
        });

        mediaRecorder.addEventListener('dataavailable', (event) => {
          chunks.push(event.data);
        });

        mediaRecorder.addEventListener('stop', () => {
          const blob = new Blob(chunks, { type: 'audio/wav' });
          setAudioList([...audioList, blob]);
        });

        mediaRecorder.start();
        setRecording(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const stopRecording = () => {
    const mediaRecorder = AudioRecorder.getInstance();
    mediaRecorder.stop();
    chunks.length = 0;
    setRecording(false);
  };

  return (
    <div>
      <button onClick={recording ? stopRecording : startRecording}>
        {recording ? 'Stop Recording' : 'Start Recording'}
      </button>
      {audioList.length > 0 && (
        <ul>
          {audioList.map((audioBlob, index) => (
            <li key={index}>
              <audio controls>
                <source src={URL.createObjectURL(audioBlob)} type="audio/wav" />
              </audio>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Audio Recorder Component</h1>
      <AudioRecorderComponent />
    </div>
  );
};

export default App;
