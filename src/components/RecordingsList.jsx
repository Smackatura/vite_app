import React, { useState } from 'react';

function Recordings() {
  const [recordings, setRecordings] = useState([]);

  // function to fetch recordings from API and update state
  const fetchRecordings = async () => {
    const response = await fetch('/api/recordings');
    const data = await response.json();
    setRecordings(data);
  };

  // call the fetchRecordings function when the component mounts
  useEffect(() => {
    fetchRecordings();
  }, []);

  return (
    <div>
      <h2>List of Recordings</h2>
      <ul>
        {recordings.map((recording) => (
          <li key={recording.id}>{recording.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecordingsList;