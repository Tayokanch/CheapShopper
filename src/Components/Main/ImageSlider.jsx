import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import "../Main/ImageSlider.css";
export function ImageSlider({ randomProducts }) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === randomProducts?.length - 1) {
        return 0;
      }
      return index + 1;
    });
  }

  function showpreviousImage() {
    setImageIndex((index) => {
      if (index === 0) {
        return randomProducts?.length - 1;
      }
      return index - 1;
    });
  }
  const productUrl = randomProducts[imageIndex]?.image;
  const productTitle = randomProducts[imageIndex]?.title;

  console.log("this is the url for the product 1", productUrl);

  return (
    <div style={{ with: "100%", height: "100%", position: "relative" }}>
      <img src={productUrl} alt={productTitle} className="img-slider" />
      <button
        onClick={showNextImage}
        className="img-slider-button"
        style={{ left: 0 }}
      >
        <ArrowBigLeft />
      </button>
      <button
        onClick={showpreviousImage}
        className="img-slider-button"
        style={{ right: 0 }}
      >
        <ArrowBigRight />
      </button>
    </div>
  );
}