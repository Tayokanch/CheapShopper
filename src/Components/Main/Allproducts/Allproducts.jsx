import { useState, useEffect, useContext } from "react";
import { MyContext } from "../../../App";

const Allproducts = () => {
  const { products, setProducts } = useContext(MyContext);

  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    if (products) {
      console.log("this is product from data component", products);
    }
  }, [products]); // This useEffect runs every time product changes

  const fetchProduct = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("failed to fetch product");
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.log("Error Fetching data:", err.message);
    }
  };

  return products?.map((product, index) => {
    const shortenedTitle = product?.title.substring(0, 15);

    return (
      <div className="card-container">
        <div className="card" key={index}>
          <img src={product?.image} alt="" />
        </div>
        <div className="card-details">
          <p>{shortenedTitle}</p>
          <p>{`£${product?.price}`}</p>
        </div>
          <h3>Shop now</h3>
      </div>
    );
  });
};

export default Allproducts;
