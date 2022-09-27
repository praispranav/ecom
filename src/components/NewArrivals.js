import React from "react";
import product3 from "../assets/images/product3.webp";
import { MdStarOutline, MdStar } from "react-icons/md";
import styled from "styled-components";

const Heading = "  NEW ARRIVALS";
const Content = " View All";

const NewArrivalsProduct = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Product Name",
    desc: "Lorem ipsum is placeholder text commonly",
    price: "$879",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Product Name",
    desc: "Lorem ipsum is placeholder text commonly",
    price: "$879",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Product Name",
    desc: "Lorem ipsum is placeholder text commonly",
    price: "$879",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Product Name",
    desc: "Lorem ipsum is placeholder text commonly",
    price: "$879",
  },
];

const Line2 = styled.div({
  height: "1px",
  width: "100%",
  backgroundColor: "grey",
});

export default function NewArrivals() {
  return (
    <div>
      <Line2 className="mt-4" />

      <div className="d-flex justify-content-center mt-5">
        <p className="ms-5" style={{ fontWeight: "500" }}>
          {Heading}
        </p>
      </div>

      <p className="d-flex justify-content-center ms-5 mt-1 ">{Content}</p>
      <div className="d-flex">
        {NewArrivalsProduct.map((val, i) => (
          <div key={i}>
            <div className="d-flex">
              <div
                style={{ height: "520px", width: "370px", textAlign: "center" }}
              >
                <img
                  src={`${val.imgUrl}`}
                  style={{
                    height: "380px",
                    width: "360px",
                    paddingLeft: "25px",
                    paddingTop: "25px",
                  }}
                />
                <p
                  className="mt-3"
                  style={{ fontWeight: "500", textAlign: "center" }}
                >
                  {val.name}
                </p>
                <p>{val.desc} </p>
                <MdStar className="ms-1" style={{ color: "yellow" }} />
                <MdStar style={{ color: "yellow" }} />
                <MdStar style={{ color: "yellow" }} />
                <MdStar style={{ color: "yellow" }} />
                <MdStarOutline style={{ color: "yellow" }} />
                <p style={{ fontWeight: "500" }}>{val.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
