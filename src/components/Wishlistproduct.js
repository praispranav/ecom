import React from "react";
import shirt from "../assets/images/shirt.jpg";
import { MdStarOutline, MdStar } from "react-icons/md";
import { FiX } from "react-icons/fi";
import styled from "styled-components";
import { useState } from "react";
import { Font } from "../config/Font";

const image = { img: shirt };
const Name = "Product Name";
const Description = "Lorem ipsum is placeholder text commonly used ";
const Price = "$536";

const CardBorder = styled.div({
  height: "160px",
  width: "100%",
  border: "1px solid #c3bfc3",
});


const ShopBtn = styled.button({
  height: "40px",
  width: "150px",
  backgroundColor: "#c861b8",
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
  border: "none",
  color: "white",
  fontSize: Font.Medium,
  fontWeight: "500",
  marginTop: "48px",
  marginLeft: "155px",
});

function ButtonIncrement(props) {
  return (
    <button
      style={{
        marginLeft: ".5rem",
        border: "none",
        fontSize: "25px",
        backgroundColor: "#f6eaf5",
        color: "#1dc24d",
      }}
      onClick={props.onClickFunc}
    >
      +
    </button>
  );
}
function ButtonDecrement(props) {
  return (
    <button
      style={{
        marginLeft: ".5rem",
        border: "none",
        fontSize: "25px",
        backgroundColor: "#f6eaf5",
        color: "#c21d41",
      }}
      onClick={props.onClickFunc}
    >
      -
    </button>
  );
}
function Display(props) {
  return (
    <label
      style={{
        marginLeft: ".5rem",
        border: "none",
        fontSize: "18px",
        backgroundColor: "#f6eaf5",
      }}
    >
      {props.message}
    </label>
  );
}

export default function CartProduct() {
  return (
    <div>
      <CardBorder className="mt-3">
        <div className="d-flex">
          <div
            style={{
              height: "520px",
              width: "500px",
            }}
          >
            <div className="d-flex">
              <img
                className="ms-3 pt-2 mt-2"
                src={image.img}
                style={{
                  height: "130px",
                  width: "105px",
                }}
              />
              <div className="ms-3">
                <p className=" mt-4 mb-3" style={{ fontWeight: "500" }}>
                  {Name}
                </p>

                <p className="mb-2" style={{ color: "grey" }}>
                  {Description}
                </p>
                <MdStar className="" style={{ color: "#e36c1c" }} />
                <MdStar style={{ color: "#e36c1c" }} />
                <MdStar style={{ color: "#e36c1c" }} />
                <MdStar style={{ color: "#e36c1c" }} />
                <MdStarOutline style={{ color: "#e36c1c" }} />
              </div>
            </div>
          </div>
          <p
            style={{
              fontWeight: "500",
              marginLeft: "190px",
              marginTop: "57px",
            }}
          >
            {Price}
          </p>
          <ShopBtn> ADD TO CART</ShopBtn>

          <FiX
            style={{
              color: "#c21d41",
              fontWeight: "500",
              marginLeft: "170px",
              marginTop: "60px",
              fontSize: "18px",
            }}
          />
        </div>
      </CardBorder>
    </div>
  );
}
