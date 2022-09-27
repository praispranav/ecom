import React from "react";

const Heading = "  MOST POPULAR";
const Content = " View All";

const PopularProductList = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Product Name",
    desc: "Shop Now",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Product Name",
    desc: "Shop Now",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Product Name",
    desc: "Shop Now",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Product Name",
    desc: "Shop Now",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Product Name",
    desc: "Shop Now",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Product Name",
    desc: "Shop Now",
  },
];

export default function PopularProduct() {
  return (
    <div>
      <div>
        <p className="mt-5" style={{ fontWeight: "500", textAlign: "center" }}>
          {Heading}
        </p>
        <p style={{ fontSize: "15px", textAlign: "center" }}>{Content}</p>
      </div>
      <div className="d-flex justify-content-between">
        {PopularProductList.map((val, i) => (
          <div key={i}>
            <div className="d-flex justify-content-between">
              <div>
                <img
                  src={`${val.imgUrl}`}
                  style={{
                    height: "180px",
                    width: "180px",
                    paddingLeft: "25px",
                    paddingTop: "25px",
                  }}
                />

                <p className="ms-5 pt-3" style={{ fontWeight: "500" }}>
                  {val.name}
                </p>
                <p className="ps-5 ms-3 ">{val.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
