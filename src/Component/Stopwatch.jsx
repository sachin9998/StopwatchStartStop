import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0); // In Seconds
  const [isRunning, setIsRunning] = useState(false);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((count) => count + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, time]);

  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setTime(0);
  };

  return (
    <div className="bg-white shadow-xl rounded-xl p-8 w-96 text-center">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Countdown Timer
      </h1>

      <div className="flex justify-center items-center gap-4 mb-6">
        <p className="text-4xl">{formatTime(time)}</p>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={handleStartStop}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          onClick={handleReset}
          className="bg-red-500 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-red-600 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
