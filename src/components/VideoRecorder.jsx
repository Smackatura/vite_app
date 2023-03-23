import { useState, useRef } from "react";
const VideoRecorder = () => {
    const [permission, setPermission] = useState(false);
    const [stream, setStream] = useState(null);

    const getCameraPermission = async () => {
        if ("MediaRecorder" in window) {
            try {
                // Sets the MediaStream received from the getUserMedia method to the stream state variable
                const streamData = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: true,
                });
                setPermission(true);
                setStream(streamData);
            } catch (err) {
                alert(err.message);
            }
        } else {
            alert("The MediaRecorder API is not supported in your browser.");
        }
    };

    return (
        <div>
            <h2>Video Recorder</h2>
            <main>
                <div className="video-controls">
                    {!permission ? (
                        // Receives microphone permissions from the browser using the getCameraPermission function
                        <button onClick={getCameraPermission} type="button">
                            Get Camera
                        </button>
                    ):null}
                    {permission ? (
                        <button type="button">
                            Record Video
                        </button>
                    ):null}
                </div>
                <div className="live-player"></div>
            </main>
        </div>
    );
};
export default VideoRecorder;