import React from 'react';

function MasteringPanel({ recording, gain, onGainChange, eq, onEQChange, compression, onCompressionChange }) {
  const handleGainChange = (event) => {
    onGainChange(event.target.value);
  };

  const handleLowEQChange = (event) => {
    const newEQ = { ...eq, low: event.target.value };
    onEQChange(newEQ);
  };

  const handleMidEQChange = (event) => {
    const newEQ = { ...eq, mid: event.target.value };
    onEQChange(newEQ);
  };

  const handleHighEQChange = (event) => {
    const newEQ = { ...eq, high: event.target.value };
    onEQChange(newEQ);
  };

  const handleThresholdChange = (event) => {
    const newCompression = { ...compression, threshold: event.target.value };
    onCompressionChange(newCompression);
  };

  const handleRatioChange = (event) => {
    const newCompression = { ...compression, ratio: event.target.value };
    onCompressionChange(newCompression);
  };

  return (
    <div>
      <h2>Mastering Panel</h2>
      <div>
        <label htmlFor="gain-control">Gain:</label>
        <input type="range" min="-20" max="20" step="0.1" id="gain-control" value={gain} onChange={handleGainChange} />
        <span>{gain} dB</span>
      </div>
      <div>
        <label htmlFor="low-eq-control">Low EQ:</label>
        <input type="range" min="-20" max="20" step="0.1" id="low-eq-control" value={eq.low} onChange={handleLowEQChange} />
        <span>{eq.low} dB</span>
      </div>
      <div>
        <label htmlFor="mid-eq-control">Mid EQ:</label>
        <input type="range" min="-20" max="20" step="0.1" id="mid-eq-control" value={eq.mid} onChange={handleMidEQChange} />
        <span>{eq.mid} dB</span>
      </div>
      <div>
        <label htmlFor="high-eq-control">High EQ:</label>
        <input type="range" min="-20" max="20" step="0.1" id="high-eq-control" value={eq.high} onChange={handleHighEQChange} />
        <span>{eq.high} dB</span>
      </div>
      <div>
        <label htmlFor="threshold-control">Threshold:</label>
        <input type="range" min="-60" max="0" step="0.1" id="threshold-control" value={compression.threshold} onChange={handleThresholdChange} />
        <span>{compression.threshold} dBFS</span>
      </div>
      <div>
        <label htmlFor="ratio-control">Ratio:</label>
        <input type="range" min="1" max="10" step="0.1" id="ratio-control" value={compression.ratio} onChange={handleRatioChange} />
        <span>{compression.ratio}:1</span>
      </div>
    </div>
  );
}

export default MasteringPanel;