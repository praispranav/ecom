import React from "react";
import styled from "styled-components";
import { Font } from "../config/Font";

const name = " NEW ARRIVALS";
const heading = " Lorem ipsum";
const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et dolore magna aliqua.";

const myStyle = {
  backgroundImage:
    "url('https://cdn.shopify.com/s/files/1/0081/3305/0458/files/h7j1-image-banner-1_1880x.jpg?v=1639989481')",
  height: "70vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const myStyle2 = {
  backgroundImage:
    "url('https://cdn.shopify.com/s/files/1/0081/3305/0458/files/h7j1-image-banner-2_1880x.jpg?v=1639989494')",
  height: "70vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const name2 = "MOST POPULAR";
const heading2 = " Lorem ipsum";
const description2 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et dolore magna aliqua.";

const ImageEdit = styled.div({
  width: "280px",
  marginLeft: "150px",
  paddingTop: "160px",
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

const ImageEdit2 = styled.div({
  width: "340px",
  marginLeft: "1000px",
  paddingTop: "160px",
});

export default function Banner() {
  return (
    <div>
      <div style={myStyle} className="">
        <ImageEdit>
          <p
            className="ms-5 "
            style={{
              fontWeight: "500",
              borderBottom: "1px solid black",
              width: "115px",
            }}
          >
            {name}
          </p>
          {/* <Line className="ms-5 "  /> */}
          <h1 className="mt-3">{heading}</h1>
          <p style={{ textAlign: "center", width: "230px" }}>{description}</p>
          <ShopBtn className="ms-4">SHOP NOW</ShopBtn>
        </ImageEdit>
      </div>

      <div className="mt-4">
        <div style={myStyle2} className="mt-4">
          <ImageEdit2>
            <p
              className="ms-5"
              style={{
                fontWeight: "500",
                borderBottom: "1px solid black",
                width: "125px",
              }}
            >
              {" "}
              {name2}
            </p>
            {/* <Line className="ms-5" /> */}
            <h1 className="mt-3">{heading2}</h1>
            <p style={{ textAlign: "center", width: "230px" }}>
              {description2}
            </p>

            <ShopBtn className="ms-4">SHOP NOW</ShopBtn>
          </ImageEdit2>
        </div>
      </div>
    </div>
  );
}
