import React from 'react';
import Waveform from 'waveform';


class WaveformDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.waveform = null;
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    const { recording } = this.props;
    this.waveform = Waveform({
      container: this.containerRef.current,
      waveColor: 'gray',
      progressColor: 'black',
      cursorColor: 'red',
      barWidth: 2,
    });
    this.waveform.load(recording.blobUrl);
  }

  componentWillUnmount() {
    this.waveform.destroy();
  }

  render() {
    return <div ref={this.containerRef}></div>;
  }
}

export default WaveformDisplay;