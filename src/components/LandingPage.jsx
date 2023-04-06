import React from "react";
import AudioRecorder from "../components/AudioRecorder";
import AudioList from "../components/AudioList";

function LandingPage() {
  return (
    <div>
      <nav>
        {/* Your navbar code here */}
      </nav>
      <div className="container">
        <h1>Welcome to Music Studio App</h1>
        <p>Start your recording here:</p>
        <AudioRecorder />
        <hr />
        <h2>My Audio Recordings</h2>
        <AudioList />
      </div>
    </div>
  );
}

export default LandingPage;




