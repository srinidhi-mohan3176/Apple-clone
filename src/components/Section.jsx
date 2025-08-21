function Section() {
  return (
    <section className="relative w-full h-screen">
      {/* Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/f1.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

      {/* Content over video */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-8 text-center">
        <h1 className="text-blue-300 text-3xl sm:text-5xl font-bold mb-4">
          Apple Watch
        </h1>
        <h3 className="text-white text-lg sm:text-xl font-medium mb-6">
          New launch. Black color
        </h3>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition">
            Learn more
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-500 transition">
            Buy
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section;
