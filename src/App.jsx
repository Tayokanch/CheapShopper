import { useState, createContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

const MyContext = createContext();


function App() {

  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);


  return (
    <>
      <MyContext.Provider
        value={{
          search,
          setSearch,
          products,
          setProducts
        }}
      >
        <Header />
        <Main />
        <Footer />
      </MyContext.Provider>
    </>
  );
}

export  {App, MyContext}
