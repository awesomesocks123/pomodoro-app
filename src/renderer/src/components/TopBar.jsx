import React from 'react'

export default function TopBar() {
  const handleClose = () => {
    window.electron.ipcRenderer.send('close-window')
  }
  return (
    <div
      className="flex justify-end items-center rounded-md h-5"
      style={{
        WebkitAppRegion: 'drag'
      }}
    >
      <button
        onClick={handleClose}
        style={{ WebkitAppRegion: 'no-drag' }}
        className="text-white px-5 py-2 cursor-pointer
      "
      >
        x
      </button>
    </div>
  )
}
