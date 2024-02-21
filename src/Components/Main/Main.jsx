import "../Main/Main.css";
import { useState, useEffect, useContext } from "react";
import { MyContext } from "../../App";
import { ImageSlider } from "./ImageSlider";
import bg2 from "../../assets/bg2.jpeg";
import Allproducts from "./Allproducts/Allproducts.jsx";

function Main() {
  const { search, setSearch } = useContext(MyContext);

  return (
    <>
      <main style={{}}>
        <section
          style={{}}
        >
          <ImageSlider></ImageSlider>
        </section>
        <section>
          <Allproducts />
        </section>
      </main>
    </>
  );
}
export default Main;
