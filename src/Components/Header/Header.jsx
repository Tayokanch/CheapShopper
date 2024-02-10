import "../Header/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useContext} from "react";
import {MyContext} from "../../App"

function Header() {

  const {search, setSearch}= useContext(MyContext)

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const handleFetch = () =>
    useEffect(() => {
      console.log(search);
    }, [search]);
  return (
    <>
      <header>
        <figure className="logo-container">
          <h3>CheapShopper</h3>
        </figure>
        <div className="input-container">
          <input
            type="text"
            name="search"
            placeholder="search"
            onChange={handleSearch}
          />
          <button>
            <FontAwesomeIcon icon={faSearch} />
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
