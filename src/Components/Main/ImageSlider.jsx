import { useState, useEffect } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import "../Main/ImageSlider.css";
import shoppingBg from "../../assets/bg2.jpeg";
import videoBg from "../../assets/videoBg.mp4";

export function ImageSlider() {
  const [imageIndex, setImageIndex] = useState(0);
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    handleFiveProducts(5);
  }, []);

  const handleFiveProducts = async (count) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch Products");
      }
      const data = await response.json();
      const products = [];

      for (let i = 0; i <= count; i++) {
        const randomIndex = Math.floor(Math.random() * data.length);
        products.push(data[randomIndex]);
        setRandomProducts(products);
        //console.log("This is random products", products);
      }
      return randomProducts;
    } catch (err) {
      console.log("Error Fetching data:", err.message);
    }
  };

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

  //console.log("this is the url for the product 1", productUrl);

  return (
    <section className="promo_section" style={{}}>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <video
          src={videoBg}
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <div className="image_container">
        <h3>50% Discount</h3>
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
    </section>
  );
}
