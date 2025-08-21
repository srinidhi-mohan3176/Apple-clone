import React, { useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = ["/r1.mp4", "/r2.mp4", "/r3.mp4"];

  const showSlide = (index) => {
    if (index >= slides.length) {
      setCurrentSlide(0);
    } else if (index < 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(index);
    }
  };

  const nextSlide = () => {
    showSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    showSlide(currentSlide - 1);
  };

  return (
   
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        maxWidth: "1400px",
        margin: "auto",
        borderRadius: "20px",
        paddingTop: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((src, index) => (
          <div
            key={`${index}-${currentSlide}`}
            style={{
              width: "100%",
              flexShrink: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <video
              key={currentSlide} // force reload when currentSlide changes
              src={src}
              autoPlay={index === currentSlide}
              muted
              onEnded={nextSlide}
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
              style={{
                width: "100%",
                maxHeight: "900px", // limit height
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
          </div>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          width: "100%",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          justifyContent: "space-between",
          padding: "0 10px",
        }}
      >
        <button
          onClick={prevSlide}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
            fontSize: "20px",
            borderRadius: "5px",
          }}
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
            fontSize: "20px",
            borderRadius: "5px",
          }}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Slider;
