"use client";
import { useState, useRef } from "react";

export default function Com() {
  const [recording, setRecording] = useState(false);
  const [videoURL, setVideoURL] = useState(null);
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunks = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();

      mediaRecorderRef.current = new MediaRecorder(stream);
      chunks.current = [];

      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.current.push(e.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunks.current, { type: "video/mp4" });
        setVideoURL(URL.createObjectURL(blob));
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (err) {
      alert("Camera or microphone access denied!");
      console.error(err);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Record Your Reel</h1>

      <div className="bg-white shadow-lg rounded-2xl p-4 w-full max-w-lg flex flex-col items-center">
        <video
          ref={videoRef}
          className="rounded-lg w-full h-64 bg-black object-cover mb-4"
          autoPlay
          muted
        />

        <div className="flex gap-4">
          {!recording ? (
            <button
              onClick={startRecording}
              className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full shadow hover:bg-red-600 transition"
            >
              Start Recording
            </button>
          ) : (
            <button
              onClick={stopRecording}
              className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-full shadow hover:bg-gray-800 transition"
            >
              Stop Recording
            </button>
          )}
        </div>

        {videoURL && (
          <div className="mt-6 w-full text-center">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">Your Recorded Video:</h2>
            <video
              className="w-full rounded-lg border border-gray-300 mb-4"
              src={videoURL}
              controls
            ></video>
            <a
              href={videoURL}
              download="recorded-video.mp4"
              className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600 transition"
            >
              Download Video
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
