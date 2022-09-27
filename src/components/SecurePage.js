import React from "react";
import { GrDeliver } from "react-icons/gr";
import { MdStorefront, MdSecurity } from "react-icons/md";

const PosterList = [
  {
    name: "Free Standard Delivery",
    desc: "The passage is attributed to an unknown",
    title: "Learn More",
 
        icon: <GrDeliver className="mt-5 pt-2" style={{ fontSize: "60px" }} />
  },
  {
    name: " Free In Store Returns",
    desc: "The passage is attributed to an unknown",
    title: "Learn More",
    icon: <MdStorefront className="mt-5 pt-2" style={{ fontSize: "60px" }} />
  },
  {
    name: "100% Secure Checkout",
    desc: "The passage is attributed to an unknown",
    title: "Learn More",
    icon: <MdSecurity className="mt-5 pt-2" style={{ fontSize: "60px" }} />
  },
];

export default function SecurePage() {
  return (
    <div>
      <div className="d-flex">
        {PosterList.map((val, i) => (
          <div key={i}>
            <div
              style={{ height: "270px", textAlign: "center", width: "485px" }}
            >
              {val.icon}
              <h3 className="mt-3"> {val.name}</h3>
              <p className="mt-2"> {val.desc}</p>
              <p>{val.title}</p>

              {/* <Line4 /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
