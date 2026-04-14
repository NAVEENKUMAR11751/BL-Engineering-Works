import "./ImageScroller.css";

function ImageScroller() {
  const images = [
    `${import.meta.env.BASE_URL}assets/images/projects/trenching.jpg`,
    `${import.meta.env.BASE_URL}assets/images/projects/rcc.jpg`,
    `${import.meta.env.BASE_URL}assets/images/projects/ofc.jpg`,
    `${import.meta.env.BASE_URL}assets/images/projects/earthing.jpg`,
    `${import.meta.env.BASE_URL}assets/images/projects/signal.jpg`
  ];

  return (
    <div className="scroller-container">
      <div className="scroller-track">
        {images.concat(images).map((img, index) => (
          <img key={index} src={img} alt="Work" />
        ))}
      </div>
    </div>
  );
}

export default ImageScroller;
