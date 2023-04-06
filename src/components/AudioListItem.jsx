import React from 'react';
import AudioList from './RecordingsList';

const AudioListItem = ({ audio }) => {
  const handlePlay = () => {
    const audioPlayer = new Audio(audio.url);
    audioPlayer.play();
  };
  const ListItem = ({ url, index, deleteAudio, downloadAudio}) =>{
    const handleClick = () => {
        deleteAudio(index);
      };
  }
  return (
    <div>
        <div className="audio-item">
      <audio src={url} controls />
      <div className="audio-item-buttons">
        <button onClick={deleteAudio}>Delete</button>
        <button onClick={onDownload}>Download</button>
      </div>
    </div>
    <div>
      <h3>{audio.name}</h3>
      <button onClick={handlePlay}>Play</button>
    </div>
    </div>
    
  );
};

export default AudioListItem;
