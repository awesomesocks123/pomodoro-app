import React from 'react'

export default function TopBar() {
  return (
    <div
      className="flex justify-end items-center rounded-md"
      style={{
        WebkitAppRegion: 'drag'
      }}
    >
      <button
        className="text-white px-5 py-2 cursor-pointer
      "
      >
        x
      </button>
    </div>
  )
}
