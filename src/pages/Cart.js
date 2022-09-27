import React from "react";
import Topbar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import { border, style } from "@mui/system";
import CartProduct from "../components/CartProduct";
import { MdSecurity } from "react-icons/md";
import Product from "../components/NewArrivals";
import Products from "../components/NewArrivals";
import OrderSummary from "../components/OrderSummary";

const Background = styled.div({
  backgroundColor: "#f6eaf5",
  height: "1900px",
  width: "100%",
});

const ProductCard = styled.div({
  height: "40px",
  width: "100%",
  backgroundColor: "#e0dde0",
  fontWeight: "500",
});

const CommentInput = styled.textarea({
  fontWeight: "500",
  outline: "none",
  backgroundColor: "#f6eaf5",
  border: "1px solid #c3bfc3",
  borderRadius: "3px",
  width: "600px",
  height: "100px",
});

const Submitbtn = styled.button({
  outline: "none",
  backgroundColor: "#c861b8",
  color: "white",
  fontSize: "13px",
  border: "none",
  height: "35px",
  width: "90px",
  borderRadius: "4px ",
});

const Line = styled.div({
  height: "1px",
  width: "100%",
  backgroundColor: "black",
});

export default function Cart() {
  return (
    <div>
      <Topbar />
      <Header />

      <Background>
        <div className="container">
          <div className="row">
            <div className="col-8 mt-4">
              <ProductCard>
                <div className="d-flex justify-content-between container pt-2">
                  <p>PRODUCT</p>
                  <div className="d-flex">
                    <p>PRICE</p>
                    <p className="ms-5">QUANTITY</p>
                    <p className="mx-5">TOTAL</p>
                  </div>
                </div>
              </ProductCard>
              <CartProduct />
              <CartProduct />
              <CartProduct />
              <CartProduct />
              <div className="mt-5">
                <p className=" mt-5 mb-3" style={{ fontWeight: "500" }}>
                  Additional Comments
                </p>

                <CommentInput type="textarea" className="mt-2"></CommentInput>
                <div className="" style={{ marginLeft: "460px" }}>
                  <Submitbtn className="mt-2 ms-5">SUBMIT</Submitbtn>
                </div>
              </div>

              <div className="d-flex mt-3">
                <MdSecurity style={{ fontSize: "20px" }} />
                <p
                  className="ms-2"
                  style={{ fontSize: "15px", fontWeight: "500", color: "grey" }}
                >
                  Secure Shopping Guarantee
                </p>
              </div>
            </div>
            <div className="col-4 mt-4">
              <div className="container">
                <OrderSummary />
              </div>
            </div>

           
          </div>
        </div>
        <Products />
      </Background>

      <Footer />
    </div>
  );
}
