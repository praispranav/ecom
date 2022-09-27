import React from "react";
import flag from "../assets/images/flag.jpg";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import styled from "styled-components";
import { Colors } from "../config/Colors";
import { Link } from "react-router-dom";
import {
  BsFillPersonFill,
  BsFillSuitHeartFill,
  BsCartCheckFill,
} from "react-icons/bs";

const image = { img: flag };
const cuntryName = "IND | INR";
const Shipping = "  Free Shipping Over $99";
const logo = "LOGO";

const catagoryList = [
  {
    name: "THEME DEMO",
    link: "#",
  },
  {
    name: "SHOP",
    link: "#",
  },
  {
    name: "PRODUCT",
    link: "#",
  },
  {
    name: "BLOG",
    link: "#",
  },
  {
    name: "PAGES",
    link: "#",
  },
  {
    name: "NEW IN",
    link: "#",
  },
  {
    name: "TREND",
    link: "#",
  },
  {
    name: "COLLECTIONS",
    link: "#",
  },
  {
    name: "BUY ELLA",
    link: "#",
  },
];

const Logotext = styled.p({
  fontWeight: "700",
  fontSize: "30px",
});

const Logotext2 = styled.div({
  marginLeft: "270px",
  color: "#c861b8",
});

const InputField = styled.input({
  outline: "none",
  width: "200px",
  backgroundColor: Colors.White,
  border: "none",
  borderBottom: "1px solid lightgrey",
  marginLeft: "360px",
  height: "40px",
});

const TopBar2 = styled.p({
  fontWeight: "500",
  display: "flex",
  justifyContent: "center",
});

export default function Header() {
  return (
    <div>
      <div className="m-4 d-flex">
        <img
          src={image.img}
          style={{ height: "30px", width: "30px", borderRadius: "100%" }}
        />
        <p className="mt-1 ms-2" style={{ color: "grey" }}>
          {cuntryName}
        </p>
        <FiChevronDown
          className="mt-2 ms-1"
          style={{ fontSize: "20px", color: "grey" }}
        />
        <p className="mt-1 ms-4" style={{ color: "grey" }}>
          {Shipping}
        </p>
        <Logotext2>
          <Link to={"/"}>
            <Logotext className="ms-5 ps-5" style={{ color: "#c861b8" }}>
              {logo}
            </Logotext>
          </Link>
        </Logotext2>

        <InputField type="text" placeholder="Search"></InputField>
        <div className="mt-2 " style={{ fontSize: "20px" }}>
          <FiSearch style={{ color: "#c861b8" }} />
          <BsFillPersonFill style={{ color: "#c861b8" }} className="ms-3" />
          <Link to={"/wishlist"}>
            <BsFillSuitHeartFill
              style={{ color: "#c861b8" }}
              className="ms-3"
            />
          </Link>
          <Link to={"/cart"}>
            <BsCartCheckFill className="ms-3" style={{ color: "#c861b8" }} />
          </Link>
        </div>
      </div>
      <TopBar2>
        <div className="d-flex ">
          {catagoryList.map((val, i) => (
            <div key={i} style={{ width: "130px" }}>
              <div href={val.link}>{val.name}</div>
            </div>
          ))}
        </div>
      </TopBar2>
    </div>
  );
}
