'use client';

import React from 'react';
import useRecorder  from './useRecorder';

const HookDemo = () => {
  const {
    startRecording,
    pauseRecording,
    stopRecording,
    resetRecording,
    resumeRecording,
    audioLevel,
    timeElapsed,
    recordingState,
    audioURL,
    audioFile,
    isRecording
  } = useRecorder();

  return (
    <div className="flex flex-col items-center justify-center p-4 dark:bg-gray-800">
      <div className="w-full max-w-md p-8 bg-white rounded shadow dark:bg-gray-700">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-900 dark:text-gray-100">Audio Level:</span>
            <span className="text-gray-900 dark:text-gray-100">{audioLevel}</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-500">
            <div className="h-full bg-green-500 rounded-full"
            style={{width: `${Math.floor(audioLevel)}%`}}
            ></div>
          </div>
        </div>
        <div className="mb-4">
          <span className="text-gray-900 dark:text-gray-100">Time: {timeElapsed}s</span>
        </div>
        <div className="flex justify-between">
          <button onClick={startRecording} className="px-4 py-2 text-white bg-blue-500 rounded shadow hover:bg-blue-600 dark:hover:bg-blue-400">Start</button>
          {
            recordingState=== "paused" ? 
            <button onClick={resumeRecording} className="px-4 py-2 text-white bg-green-500 rounded shadow hover:bg-green-600 dark:hover:bg-green-400">Resume</button>
            : 
            <button onClick={pauseRecording} className="px-4 py-2 text-white bg-yellow-500 rounded shadow hover:bg-yellow-600 dark:hover:bg-yellow-400">Pause</button>

          }
          <button onClick={stopRecording} className="px-4 py-2 text-white bg-red-500 rounded shadow hover:bg-red-600 dark:hover:bg-red-400">Stop</button>
          <button onClick={resetRecording} className="px-4 py-2 text-white bg-gray-500 rounded shadow hover:bg-gray-600 dark:hover:bg-gray-400">Reset</button>
        </div>
        <div className="mt-4">
          <span className="text-gray-900 dark:text-gray-100">Recording State: {recordingState}</span>
          {
            recordingState === "stopped" && audioFile && (
                <div className="mt-4">
                    <span className="text-gray-900 dark:text-gray-100">Audio File:</span>
                    <audio src={audioURL} controls className="mt-4"></audio>
                </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default HookDemo;
