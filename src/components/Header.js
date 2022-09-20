import React from "react";
import flag from "../assets/images/flag.jpg";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import styled from "styled-components";
import { Colors } from "../config/Colors";
import {
    BsFillPersonFill,
    BsFillSuitHeartFill,
    BsCartCheckFill,
} from "react-icons/bs";

const Logotext = styled.p({
    fontWeight: "700",
    fontSize: "30px",
  });
  
  const Logotext2 = styled.div({
    marginLeft: "270px",
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
    alignItems: "center",
    justifyContent: "center",
  });
  
export default function Header (){
    return(
        <div>
              <div className="m-4 d-flex">
        <img
          src={flag}
          style={{ height: "30px", width: "30px", borderRadius: "100%" }}
        />
        <p className="mt-1 ms-2" style={{ color: "grey" }}>
          IND | INR
        </p>
        <FiChevronDown
          className="mt-2 ms-1"
          style={{ fontSize: "20px", color: "grey" }}
        />
        <p className="mt-1 ms-4" style={{ color: "grey" }}>
          Free Shipping Over $99{" "}
        </p>
        <Logotext2>
          <Logotext className="ms-5 ps-5">LOGO</Logotext>
        </Logotext2>

        <InputField type="text" placeholder="Search"></InputField>
        <div className="mt-2 " style={{ fontSize: "20px" }}>
          <FiSearch />
          <BsFillPersonFill className="ms-3" />
          <BsFillSuitHeartFill className="ms-3" />
          <BsCartCheckFill className="ms-3" />
        </div>
      </div>
      <TopBar2>
        <p>Theme Demo</p>
        <p className="ms-5">Shop</p>
        <p className="ms-5">Product</p>
        <p className="ms-5">Blog</p>
        <p className="ms-5">Pages</p>
        <p className="ms-5">New In</p>
        <p className="ms-5">Trend</p>
        <p className="ms-5">Collections</p>
        <p className="ms-5" style={{ color: "rgb(178, 23, 30)" }}>
          Buy Theme
        </p>
      </TopBar2>
        </div>
    )
}