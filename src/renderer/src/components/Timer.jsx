import React, { useEffect, useState } from 'react'

export default function Timer() {
  const [time, setTime] = useState(2.4e6)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let interval
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 40)
      }, 40)
    } else if (!running) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [running])

  return (
    <div className="">
      <div className="flex justify-center text-5xl text-white">
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
      <div className="flex justify-center gap-2 mt-5">
        {!running ? (
          <button
            onClick={() => {
              setRunning(true)
            }}
            className="px-3 py-2 bg-green-300 rounded-md cursor-pointer"
          >
            Start
          </button>
        ) : (
          <button
            onClick={() => {
              setRunning(false)
            }}
            className="px-3 py-2 bg-red-300 rounded-md cursor-pointer"
          >
            Stop
          </button>
        )}
        <button
          onClick={() => {
            setTime(2.4e6)
          }}
          className="px-3 py-2 bg-gray-300 rounded-md cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
