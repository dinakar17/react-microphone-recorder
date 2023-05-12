"use client";

import React from "react";
import useRecorder from "./useRecorder";

interface RecordAudioProps {
  setAudioFile: React.Dispatch<React.SetStateAction<File | undefined>>;
}

const RecordAudio: React.FC<RecordAudioProps> = (props) => {
  const {
    recordingState,
    startRecording,
    pauseRecording,
    resumeRecording,
    stopRecording,
    resetRecording,
    audioURL,
    audioFile,
    audioLevel,
    timeElapsed,
  } = useRecorder();

  if (audioFile) {
    props.setAudioFile(audioFile);
  }

  return (
    <div className="border relative flex flex-col justify-center items-center h-72 w-full shadow-lg rounded-md">
      <div className="absolute top-6 w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
        <div
          className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center"
          style={{
            transform: `scale(${audioLevel / 10})`,
          }}
        >
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        </div>
        {/* Render svg microphone icon here */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-mic absolute"
        >
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" x2="12" y1="19" y2="22"></line>
        </svg>
      </div>
      <div className="mt-24">
        {recordingState === "idle" && (
          <button
            className="flex gap-1 bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={startRecording}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Start Recording
          </button>
        )}
        {["recording", "paused"].includes(recordingState) && (
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center gap-2">
              {recordingState === "recording" && (
                <button
                  className="flex gap-1 bg-red-500 text-white px-4 py-2 rounded-md"
                  onClick={pauseRecording}
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pause"><rect width="4" height="16" x="6" y="4"></rect><rect width="4" height="16" x="14" y="4"></rect></svg>
                  Pause Recording
                </button>
              )}
              {recordingState === "paused" && (
                <button
                  className="flex gap-1 bg-green-500 text-white px-4 py-2 rounded-md"
                  onClick={resumeRecording}
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  Resume Recording
                </button>
              )}

              <button
                className="flex gap-1 bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={stopRecording}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-stop-circle"><circle cx="12" cy="12" r="10"></circle><rect width="6" height="6" x="9" y="9"></rect></svg>
                Stop Recording
              </button>
            </div>
            <p className="text-gray-500 text-lg mt-4">Time: {timeElapsed}s</p>
          </div>
        )}
        {recordingState === "stopped" && (
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center gap-4">
              {/* Add a Download button */}
              <button className="flex gap-1 bg-green-500 text-white px-4 py-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                <a href={audioURL} download="recorded_audio.mp3">
                  Download
                </a>
              </button>
              <button
                className="flex gap-1 bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={resetRecording}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-repeat"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
                Record Again
              </button>
            </div>
            <audio src={audioURL} controls className="mt-4"></audio>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecordAudio;
