import React from "react";
import styled from "styled-components";
import { Colors } from "../config/Colors";
import { Font } from "../config/Font";
import { MdCall, MdEmail } from "react-icons/md";
import {
  GrFacebookOption,
  GrInstagram,
  GrPinterest,
  GrTwitter,
} from "react-icons/gr";

const Newsletter = [
  {
    heading: "Newsletter Sign Up",
    content: "   Sign up for new arrivals, offers, and more!",
  },
];

const Contact = [
  {
    heading: "Contact Us",
    number: "+919798000000",
    email: "example@domain.com",
    address: "685 Market Street San Francisco, CA 94105, US",
  },
];

const Help = [
  {
    heading: "Help",
    sizing: "Sizing Help",
    return: "Returns & Exchanges",
    shipping: "Shipping",
    theme: "Theme FAQs",
  },
];

const About = [
  {
    heading: "About",
    story: "Our Story",
    career: "Careers",
    press: "Press",
    blog: "Blog",
  },
];

const Shop = [
  {
    heading: "Shop",
    product1: "Bibendumetos",
    product2: "    Pellentes Habitanto",
    product3: "Senectus",
    product4: "Consequatod",
    product5: "Scelerisque Yurnas",
    product6: "Loremouticas",
  },
];

const Popular = [
  {
    heading: "Popular Search",
    popular1: "18K White Gold",
    popular2: "Rose Gold",
    popular3: "Wedding Jewelry",
    popular4: "Luxury Watches",
    popular5: "Gifts Under $50",
    popular6: "Gift Cards",
  },
];

const InputNumber = styled.input({
  height: "40px",
  width: "150px",
  fontSize: " 14px    ",
  fontWeight: "500",
  backgroundColor: "#f9f1e9",
  border: "1px solid lightgrey",
  borderBottom: "1px solid lightgrey",
  marginTop: "10px",
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

export default function Footer() {
  return (
    <div>
      <div className="mt-4">
        <div
          className=" pt-5"
          style={{
            height: "470px",
            width: "100%",
            backgroundColor: "rgb(245, 202, 234)",
          }}
        >
          <div className="d-flex">
            <div style={{ height: "300px", width: "420px" }}>
              <div className="mt-4 ms-5">
                {Newsletter.map((val, i) => (
                  <div key={i}>
                    <h3>{val.heading}</h3>
                    <p className="mt-4" style={{ fontSize: "14px" }}>
                      {val.content}
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
                ))}
              </div>
            </div>

            <div style={{ height: "300px", width: "320px" }}>
              <div className="mt-4 ms-5">
                {Contact.map((val, i) => (
                  <div key={i}>
                    <h3>{val.heading}</h3>
                    <div className="d-flex mt-3">
                      <MdCall style={{ fontSize: "25px" }} />
                      <p className="ms-2"> {val.number} </p>
                    </div>

                    <div className="d-flex mt-">
                      <MdEmail style={{ fontSize: "25px" }} />
                      <p className="ms-2"> {val.email}</p>
                    </div>

                    <p className="mt-">{val.address}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="ms-3" style={{ height: "300px", width: "280px" }}>
              <div className="mt-4 ms-5">
                {Help.map((val, i) => (
                  <div key={i}>
                    <h3>{val.heading}</h3>
                    <p className="mt-3"> {val.sizing} </p>
                    <p className="mt-2">{val.return}</p>
                    <p className="mt-2">{val.shipping}</p>
                    <p className="mt-2">{val.theme} </p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ height: "300px", width: "280px" }}>
              <div className="mt-4 ms-5">
                {About.map((val, i) => (
                  <div key={i}>
                    <h3>{val.heading}</h3>
                    <p className="mt-3"> {val.story}</p>
                    <p className="mt-2">{val.career}</p>
                    <p className="mt-2">{val.press}</p>
                    <p className="mt-2">{val.blog} </p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ height: "300px", width: "280px" }}>
              <div className="mt-4 ms-">
                {Shop.map((val, i) => (
                  <div key={i}>
                    <h3>{val.heading}</h3>
                    <p className="mt-3"> {val.product1}</p>
                    <p className="mt-2">{val.product2}</p>
                    <p className="mt-2">{val.product3}</p>
                    <p className="mt-2">{val.product4} </p>
                    <p className="mt-2"> {val.product5}</p>
                    <p className="mt-2">{val.product6} </p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ height: "300px", width: "280px" }}>
              <div className="mt-4 ms-3">
                {Popular.map((val, i) => (
                  <div key={i}>
                    <h3>{val.heading}</h3>
                    <p className="mt-3"> {val.popular1}</p>
                    <p className="mt-2">{val.popular2}</p>
                    <p className="mt-2">{val.popular3} </p>
                    <p className="mt-2">{val.popular4} </p>
                    <p className="mt-2">{val.popular5} </p>
                    <p className="mt-2">{val.popular6} </p>
                  </div>
                ))}
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
