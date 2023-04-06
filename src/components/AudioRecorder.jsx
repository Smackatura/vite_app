import React, { useState } from 'react';

function AudioRecorder() {
  const [chunks, setChunks] = useState([]);
  const [recordings, setRecordings] = useState([]);

  const handleStartRecording = () => {
    const constraints = { audio: true };
    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.addEventListener('dataavailable', (event) => {
          setChunks(prevChunks => [...prevChunks, event.data]);
        });

        mediaRecorder.addEventListener('stop', () => {
          const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });

          // Add recorded audio blob to recordings array
          setRecordings(prevRecordings => [...prevRecordings, blob]);
        });

        mediaRecorder.start();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={handleStartRecording}>Start Recording</button>
      <p>Number of recorded chunks: {chunks.length}</p>
      <ul>
        {recordings.map((recording, index) => (
          <li key={index}>
            <audio controls src={URL.createObjectURL(recording)}></audio>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AudioRecorder;