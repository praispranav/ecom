import React from "react";
import watch from "../assets/images/watch.jpg";
import styled from "styled-components";
import { BsInstagram } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

const Heading = "   #Image Gallery";
const Content = " Phasellus lorem malesuada ligula pulvinar commodo maecenas";
const icon = <BsInstagram className="pt-1 mt-1" style={{ fontSize: "24px" }} />;
const plusicon = <AiOutlinePlus style={{ fontSize: "70px" }} />;
const ProductList = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1612548403247-aa2873e9422d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1522273500616-6b4757e4c184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1614806687792-7fcec07dcbbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA1fHxwcm9kdWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1555487505-8603a1a69755?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
];

const Line2 = styled.div({
  height: "1px",
  width: "100%",
  backgroundColor: "grey",
});

export default function Product() {
  return (
    <div>
      <Line2 />

      <div className="d-flex justify-content-center mt-5">
        {icon}
        <p className="ms-2" style={{ fontWeight: "700", fontSize: "24px" }}>
          {Heading}
        </p>
      </div>
      <div>
        <p className="mt-1" style={{ textAlign: "center" }}>
          {Content}
        </p>
      </div>
      <div className="d-flex">
        {ProductList.map((val, i) => (
          <div key={i}>
            <div className="mt-3">
              <img
                src={`${val.imgUrl}`}
                style={{
                  height: "340px",
                  width: "300px",
                  paddingLeft: "10px",
                  paddingTop: "25px",
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-4">{plusicon}</div>
    </div>
  );
}
