import "../Header/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useContext } from "react";
import { MyContext } from "../../App";

function Header() {
  const {
    search,
    setSearch,
    products,
    setProducts,
    ProductCategory,
    setProductCategory,
  } = useContext(MyContext);

  const [newProduct, setNewproduct] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const searchProduct = () => {
    const foundProduct = products?.filter((product) =>
      product?.title?.toLowerCase().includes(search.toLowerCase())
    );
    if (foundProduct) {
      setProducts(foundProduct);
      console.log("this is the searchedProducts", foundProduct);
    }
  };

  const handleCategories = (e) => {
    setProductCategory(e.target.value);
    console.log("this is product category", ProductCategory);
  };

  useEffect(() => {
    searchProduct();
  }, [search]);
  return (
    <>
      <header>
        <figure className="logo-container">
          <h3>CheapShopper</h3>
        </figure>
        <div className="input-container">
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <input
            type="text"
            name="search"
            placeholder="search"
            onChange={handleSearch}
          />
          <button>
            <select
              name="categories"
              id="categories"
              onChange={handleCategories}
            >
              <option value="all">All</option>
              <option value="jewelery">jeweleries</option>
              <option value="electronics">Electronics</option>
              <option value="men's clothing">Men's Wear</option>
              <option value="women's clothing">Women's Wear</option>
            </select>
          </button>
        </div>
        <div className="signup-container">
          <p>
            sign up Today <span>and get discount </span>{" "}
          </p>
        </div>

        <div className="chart-container">
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
      </header>
    </>
  );
}

export default Header;
