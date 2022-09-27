import React from "react";
import styled from "styled-components";
import { Font } from "../config/Font";

const PosterList = [
  {
    name: " MUST-SEE NEW STYLES",
    desc: "Birthday Collections",
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0081/3305/0458/files/h7j1-spotlight1-1_935x.jpg?v=1638868257",
  },
  {
    name: " MUST-SEE NEW STYLES",
    desc: "Birthday Collections",
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0081/3305/0458/files/h7j1-spotlight1-2_935x.jpg?v=1638868257",
  },
];

const ImageEdit5 = styled.div({
  width: "500px",
  marginLeft: "130px",
  paddingTop: "280px",
  textAlign: "center",
});

const ShopBtn = styled.button({
  height: "40px",
  width: "150px",
  backgroundColor: "black",
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
  border: "none",
  color: "white",
  fontSize: Font.Medium,
  fontWeight: "500",
  marginTop: "25px",
});

export default function Poster() {
  return (
    <div>
      <div className="d-flex mt-5">
        {PosterList.map((val, i) => (
          <div key={i}>
            <div
              style={{
                backgroundImage: "url(" + val.imgUrl + ")",
                height: "70vh",
                width: "740px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="mt-4 ms-3"
            >
              <ImageEdit5>
                <p className=" mt-5" style={{ fontWeight: "500" }}>
                  {val.name}
                </p>
                <div className=""></div>
                <h1 className="mt-2">{val.desc}</h1>
                <div className="-">
                  <ShopBtn className=" ">SHOP NOW</ShopBtn>
                </div>
              </ImageEdit5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
