// SoundProcessor.jsx

import React from 'react';
import { ReactMic } from 'react-mic';

// sound processing function
const processAudio = (audioData) => {
  // your sound processing code here
};

// ReactMic component with sound processing added
const SoundProcessor = ({ onStop, onData }) => {
  const onStopHandler = (recordedData) => {
    // process recorded data
    processAudio(recordedData);
    // pass data to parent component
    onStop(recordedData);
  };

  const onDataHandler = (recordedData) => {
    // process data
    processAudio(recordedData);
    // pass data to parent component
    onData(recordedData);
  };

  return <ReactMic onStop={onStopHandler} onData={onDataHandler} />;
};

export default SoundProcessor;
