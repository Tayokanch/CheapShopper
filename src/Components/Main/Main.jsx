import "../Main/Main.css";
import { useState, useEffect, useContext } from "react";
import { MyContext } from "../../App";
import { ImageSlider } from "./ImageSlider";

function Main() {
  const { search, setSearch } = useContext(MyContext);
  const [allProducts, setAllProducts] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    handleFetch();
    handleFiveProducts(5);
  }, []);

  const handleFetch = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setAllProducts(data);
      console.log("This is data", data);
      console.log("This is product", allProducts);
    } catch (err) {
      console.log("Error Fetching data:", err.message);
    }
  };

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
        console.log("This is random products", products);
      }
      return randomProducts;
    } catch (err) {
      console.log("Error Fetching data:", err.message);
    }
  };

  return (
    <>
      <main>
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            height: "300px",
            margin: "0 auto",
          }}
        >
          <ImageSlider randomProducts={randomProducts}></ImageSlider>
        </div>
        {/*      {randomProducts.length > 0 &&
          randomProducts?.map((product, key) => (
            <>
              <div key={key}>
                <figure>
                  <img src={product.image} alt={product.title} />
                </figure>
                <p>{product.description}</p>
              </div>
            </>
          ))} */}
      </main>
    </>
  );
}
export default Main;
