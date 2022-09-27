import React from "react";
import styled from "styled-components";
import { Font } from "../config/Font";

const Heading = "#Must Have";

const MustHaveList = [
  {
    name: "        SALE UP TO 30% OFF",
    desc: "18K Gold Bracelets",
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0081/3305/0458/files/h7j1-spotlight2-2_570x.jpg?v=1638845214",
  },
  {
    name: "   SALE UP TO 30% OFF",
    desc: "18K Gold Bracelets",
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0081/3305/0458/files/h7j1-spotlight2-1_570x.jpg?v=1638845203",
  },
  {
    name: "  SALE UP TO 30% OFF",
    desc: "18K Gold Bracelets",
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0081/3305/0458/files/h7j1-spotlight2-3_570x.jpg?v=1638845224",
  },
];

const ImageEdit6 = styled.div({
  width: "350px",
  marginLeft: "70px",
  paddingTop: "250px",
  backgroundColor: "",
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

export default function MustHave() {
  return (
    <div>
      <div className="mt-5">
        <h3 style={{ textAlign: "center" }}>{Heading}</h3>
        <div className="d-flex">
          {MustHaveList.map((val, i) => (
            <div key={i}>
              <div className="d-flex">
                <div
                  style={{
                    backgroundImage: "url(" + val.imgUrl + ")",
                    height: "70vh",
                    width: "485px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="mt-4 ms-3"
                >
                  <ImageEdit6>
                    <div className="ms-5 ps-4">
                      <p
                        className=" ms-2 mt-5"
                        style={{
                          fontWeight: "500",
                          borderBottom: "1px solid black",
                          width: "155px",
                        }}
                      >
                        {val.name}
                      </p>

                      {/* <Line3 /> */}
                    </div>
                    <h1 className="mt-2">{val.desc} </h1>
                    <div className="ms-4">
                      <ShopBtn className="ms-5">SHOP NOW</ShopBtn>
                    </div>
                  </ImageEdit6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
