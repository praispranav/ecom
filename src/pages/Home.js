import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Product from "../components/Product";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import PopularProduct from "../components/PopularProduct";
import NewArrivals from "../components/NewArrivals";
import Poster from "../components/Poster";
import MustHave from "../components/MustHave";
import SecurePage from "../components/SecurePage";

export default function home2() {
  return (
    <div>
      <TopBar />
      <Header />
      <Banner />
      <PopularProduct />
      <NewArrivals />
      <Poster />
      <MustHave/>
      <SecurePage/>
      <Product />
      <Footer />
    </div>
  );
}
