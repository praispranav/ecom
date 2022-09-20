import React from "react";
import styled from "styled-components";
import { Colors } from "../config/Colors";
import { Font } from "../config/Font";

import {
  BsFillPersonFill,
  BsFillSuitHeartFill,
  BsCartCheckFill,
  BsInstagram,
} from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import {
  GrDeliver,
  GrFacebookOption,
  GrInstagram,
  GrPinterest,
  GrTwitter,
} from "react-icons/gr";
import ring from "../assets/images/ring.webp";
import product3 from "../assets/images/product3.webp";
import watch from "../assets/images/watch.jpg";
import {
  MdStarOutline,
  MdStar,
  MdStorefront,
  MdSecurity,
  MdCall,
  MdEmail,
} from "react-icons/md";
import { yellow } from "@mui/material/colors";
import TopBar from "../components/TopBar";
import Header from "../components/Header";

const myStyle = {
  backgroundImage:
    "url('https://cdn.shopify.com/s/files/1/0081/3305/0458/files/h7j1-image-banner-1_1880x.jpg?v=1639989481')",
  height: "70vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const myStyle5 = {
  backgroundImage:
    "url('https://cdn.shopify.com/s/files/1/0081/3305/0458/files/h7j1-spotlight1-1_935x.jpg?v=1638868257')",
  height: "70vh",
  width: "740px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const myStyle6 = {
  backgroundImage:
    "url(https://cdn.shopify.com/s/files/1/0081/3305/0458/files/h7j1-spotlight2-2_570x.jpg?v=1638845214",
  height: "70vh",
  width: "485px",
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

const ImageEdit = styled.div({
  width: "280px",
  marginLeft: "150px",
  paddingTop: "160px",
});

const ImageEdit2 = styled.div({
  width: "340px",
  marginLeft: "1000px",
  paddingTop: "160px",
});

const ImageEdit5 = styled.div({
  width: "500px",
  marginLeft: "190px",
  paddingTop: "280px",
});

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

const Line = styled.div({
  height: "1px",
  backgroundColor: "black",
  width: "115px",
});

const Line2 = styled.div({
  height: "1px",
  width: "100%",
  backgroundColor: "grey",
});

const Line3 = styled.div({
  height: "1px",
  backgroundColor: "black",
  width: "170px",
});

const Line4 = styled.div({
  height: "1px",
  backgroundColor: "black",
  width: "80px",
  marginLeft: "203px",
});

const InputNumber = styled.input({
  height: "40px",
  width: "150px",
  fontSize: " 14px    ",
  fontWeight: "500",
  backgroundColor: "#f9f1e9",
  border: "1px solid lightgrey",
  borderBottom: "1px solid lightgrey",
  marginTop: "20px",
  outline: "none",
});

const Continuebtn = styled.button({
  backgroundColor: Colors.GreyLight,
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
  border: "none",
  color: Colors.White,
  width: "100px",
  height: "40px",
  fontSize: Font.Normal,
  borderRadius: "2px",
  fontWeight: "500",
});

const Line5 = styled.div({
  height: "200px",
  width: "1px",
  marginTop: "25px",
  marginLeft: "20px",
  backgroundColor: "black",
});

export default function home2() {
  return (
    <div>
      <TopBar />
      <Header />


      <div className="mt-4">
        <div
          className=" pt-5"
          style={{ height: "450px", width: "100%", backgroundColor: "#f9f1e9" }}
        >
          <div className="d-flex">
            <div style={{ height: "300px", width: "420px" }}>
              <div className="mt-4 ms-5">
                <h3>Newsletter Sign up</h3>
                <p className="mt-4" style={{ fontSize: "14px" }}>
                  Sign up for new arrivals, offers, and more!
                </p>

                <InputNumber
                  type="email"
                  placeholder="Enter Your E-mail"
                ></InputNumber>

                <Continuebtn type="submit">CONTINUE</Continuebtn>

                <div className="mt-4" style={{ fontSize: "25px" }}>
                  <GrFacebookOption />
                  <GrInstagram className="ms-4" />
                  <GrPinterest className="ms-4" />
                  <GrTwitter className="ms-4" />
                </div>
              </div>
            </div>

            <div style={{ height: "300px", width: "320px" }}>
              <div className="mt-4 ms-5">
                <h3>Contact Us</h3>
                <div className="d-flex mt-3">
                  <MdCall style={{ fontSize: "25px" }} />
                  <p className="ms-2"> +919798000000</p>
                </div>

                <div className="d-flex mt-3">
                  <MdEmail style={{ fontSize: "25px" }} />
                  <p className="ms-2"> example@domain.com</p>
                </div>

                <p className="mt-3">
                  685 Market Street San Francisco, CA 94105, US
                </p>
              </div>
            </div>

            <div className="ms-3" style={{ height: "300px", width: "280px" }}>
              <div className="mt-4 ms-5">
                <h3>Help</h3>
                <p className="mt-3"> Sizing Help</p>
                <p className="mt-2">Returns & Exchanges</p>
                <p className="mt-2">Shipping</p>
                <p className="mt-2">Theme FAQs </p>
              </div>
            </div>
            <div style={{ height: "300px", width: "280px" }}>
              <div className="mt-4 ms-5">
                <h3>About</h3>
                <p className="mt-3"> Our Story</p>
                <p className="mt-2">Careers</p>
                <p className="mt-2">Press</p>
                <p className="mt-2">Blog </p>
              </div>
            </div>
            <div style={{ height: "300px", width: "280px" }}>
              <div className="mt-4 ms-">
                <h3>Shop</h3>
                <p className="mt-3"> Bibendumetos</p>
                <p className="mt-2">Pellentes Habitanto</p>
                <p className="mt-2">Senectus</p>
                <p className="mt-2">Consequatod </p>
                <p className="mt-2">Scelerisque Yurnas </p>
                <p className="mt-2">Loremouticas </p>
              </div>
            </div>
            <div style={{ height: "300px", width: "280px" }}>
              <div className="mt-4 ms-3">
                <h3>Popular Search</h3>
                <p className="mt-3"> 18K White Gold</p>
                <p className="mt-2">Rose Gold</p>
                <p className="mt-2">Wedding Jewelry</p>
                <p className="mt-2">Luxury Watches </p>
                <p className="mt-2">Gifts Under $50 </p>
                <p className="mt-2">Gift Cards </p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <p style={{ textAlign: "center", fontSize: "13px", color: "grey" }}>
              © 2020 ELLA DEMO. POWERED BY SHOPIFY.
            </p>
            <p style={{ textAlign: "center", fontSize: "13px", color: "grey" }}>
              {"SHOPIFY THEMES & TEMPLATES BY HALOTHEMES"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
