import React from 'react'

const Video = () => {
  return (
   <section className="relative w-full h-screen">
      {/* Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      </section>
  )
}

export default Video