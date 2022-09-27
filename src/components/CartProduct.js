import React from "react";
import shirt from "../assets/images/shirt.jpg";
import { MdStarOutline, MdStar } from "react-icons/md";
import { FiX } from "react-icons/fi";
import styled from "styled-components";
import { useState } from "react";

const CardBorder = styled.div({
  height: "160px",
  width: "100%",
  border: "1px solid #c3bfc3",
});

const QuantiytFont = styled.div({
  width: "100px",
  height: "41px",
  border: "1px solid #c3bfc3",
  marginTop: "46px",
  marginLeft: "40px",
});

const image = { img: shirt };
const Name = "Product Name";
const Description = "Lorem ipsum is placeholder text commonly used ";
const Price = "$536";
const TotalPrice = "$8758";

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
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 1) {
    decrementCounter = () => setCounter(1);
  }
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
              marginLeft: "32px",
              marginTop: "57px",
            }}
          >
            {Price}
          </p>
          <QuantiytFont>
            <ButtonIncrement onClickFunc={incrementCounter} />
            <Display message={counter} />
            <ButtonDecrement onClickFunc={decrementCounter} />
          </QuantiytFont>
          <p
            style={{
              fontWeight: "500",
              marginLeft: "40px",
              marginTop: "57px",
            }}
          >
            {TotalPrice}
          </p>
          <FiX
            style={{
              color: "#c21d41",
              fontWeight: "500",
              marginLeft: "20px",
              marginTop: "60px",
              fontSize: "18px",
            }}
          />
        </div>
      </CardBorder>
    </div>
  );
}
