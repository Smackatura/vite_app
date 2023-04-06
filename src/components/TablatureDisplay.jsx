import React from 'react';

class TablatureDisplay extends React.Component {
  render() {
    const { recording } = this.props;
    return (
      <div>
        <h2>Tablature Display</h2>
        <p>{recording.title}</p>
        <p>{recording.description}</p>
        <p>{recording.tags}</p>
        <img src={recording.imageUrl} alt={recording.title} />
      </div>
    );
  }
}

export default TablatureDisplay;
