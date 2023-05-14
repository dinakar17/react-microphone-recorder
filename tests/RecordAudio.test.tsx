import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import RecordAudio from '../src/RecordAudio'
import useRecorder from '../src/useRecorder'

jest.mock('../src/useRecorder')

test('renders RecordAudio component', () => {
  const setAudioFileMock = jest.fn()

  ;(useRecorder as jest.Mock).mockReturnValue({
    recordingState: 'idle',
    startRecording: jest.fn(),
    pauseRecording: jest.fn(),
    resumeRecording: jest.fn(),
    stopRecording: jest.fn(),
    resetRecording: jest.fn(),
    audioURL: '',
    audioFile: null,
    audioLevel: 0,
    timeElapsed: 0,
  })

  render(<RecordAudio setAudioFile={setAudioFileMock} />)

  expect(screen.getByText('Start Recording')).toBeInTheDocument()
})
