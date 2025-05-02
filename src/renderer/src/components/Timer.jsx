import React, { useEffect, useState } from 'react'

export default function Timer() {
  const [time, setTime] = useState(2.4e6)
  const [running, setRunning] = useState(false)
  const [inputTime, setInputTime] = useState('')
  const [editing, setEditing] = useState(false)

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

  const handleSetTime = (e) => {
    e.preventDefault()
    const seconds = parseFloat(inputTime) * 60000
    setTime(seconds)
    setEditing(false)
  }

  return (
    <div className="">
      {editing ? (
        <div className="flex justify-center items-center">
          <form onSubmit={handleSetTime}>
            <input
              type="number"
              value={inputTime}
              onChange={(e) => setInputTime(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Escape') setEditing(false) // Close on Escape
              }}
              className="px-2 w-20 text-white text-5xl no-spinners"
              autoFocus
            />
          </form>
        </div>
      ) : (
        <div
          className="flex justify-center text-5xl text-white curosr-pointer"
          onClick={() => setEditing(true)}
        >
          <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
        </div>
      )}
      <div className="flex justify-center gap-2 m-5 py-2">
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

// <div className="flex gap-2">
// <input
//   type="number"
//   value={inputTime}
//   onChange={(e) => setInputTime(e.target.value)}
//   className="px-2 w-20"
// />
// <button
//   onClick={handleSetTime}
//   className="px-3 py-2 bg-gray-300 rounded-md cursor-pointer"
// >
//   Set Time
// </button>
// </div>
