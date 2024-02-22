import { useState, useEffect, useContext } from "react";
import { MyContext } from "../../../App";

const Allproducts = () => {
  let url = "https://fakestoreapi.com/products";
  const { products, setProducts, search, ProductCategory, setSearch } =
    useContext(MyContext);

  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    if (search === "") {
      fetchProduct();
    }
  }, [search]);

  useEffect(() => {
    fetchProduct();
  }, [ProductCategory]);

  const fetchProduct = async () => {
    if (ProductCategory) {
      url += `/category/${ProductCategory}`;
    }
    if (ProductCategory === "") {
      url = "https://fakestoreapi.com/products";
    }
    try {
      const response = await fetch(url);
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
    const shortenedTitle = product?.title.substring(0, 20).concat("...");

    return (
      <div className="card-container">
        <div className="card" key={index}>
          <img src={product?.image} alt="" />
        </div>
        <div className="card-details">
          <p>{shortenedTitle}</p>
          <p className="price">{`£${product?.price}`}</p>
        </div>
        <h3>Shop now</h3>
      </div>
    );
  });
};

export default Allproducts;
