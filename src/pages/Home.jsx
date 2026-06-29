import { useState } from "react";

import Navbar from "../components/Navbar";
import MenuBar from "../components/MenuBar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";

function Home() {
  const [search, setSearch] = useState("");
const [category, setCategory] = useState("");

  return (
    <>
      <Navbar
  search={search}
  setSearch={setSearch}
  category={category}
  setCategory={setCategory}
/>

      <MenuBar />

      <Hero />

      <Features />

      <Categories />

      <FeaturedProducts search={search} />

      <Footer />
    </>
  );
}

export default Home;