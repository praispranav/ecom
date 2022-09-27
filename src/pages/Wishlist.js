import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Topbar from "../components/TopBar";
import styled from "styled-components";
import CartProduct from "../components/CartProduct";
import Wishlistproduct from "../components/Wishlistproduct";
import { MdOutgoingMail } from "react-icons/md";

const Background = styled.div({
  backgroundColor: "#f6eaf5",
  height: "1400px",
  width: "100%",
});

const ProductCard = styled.div({
  height: "40px",
  width: "100%",
  backgroundColor: "#e0dde0",
  fontWeight: "500",
});

export default function Wishlist() {
  return (
    <div>
      <Topbar />
      <Header />

      <Background>
        <div className="container pt-4">
          <ProductCard>
            <div className="d-flex justify-content-between container pt-2">
              <p>PRODUCT</p>
              <div
                className="d-flex  justify-content-between "
                style={{ width: "600px" }}
              >
                <p>PRICE</p>
                <p className="ms-5">ADD</p>
                <p className="mx-5">REMOVE</p>
              </div>
            </div>
          </ProductCard>

          <Wishlistproduct />
          <Wishlistproduct />
          <Wishlistproduct />
          <Wishlistproduct />
          <Wishlistproduct />
          <Wishlistproduct />
          <Wishlistproduct />

          <div className="d-flex mt-5">
            <MdOutgoingMail style={{ fontSize: "24px" }} />
            <p className="ms-3">Share my Wish List via email</p>
          </div>
        </div>
      </Background>

      <Footer />
    </div>
  );
}
