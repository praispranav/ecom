import React  from "react";
import styled from "styled-components";


const Topbar = styled.div({
    height: "43px",
    width: "100%",
    backgroundColor: "rgb(245, 202, 234)",
    color: "#b05d5d",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  
  const MidFont = styled.p({
    // paddingRight: "500px",
  });

export default function home2() {
    return (
        <div>
            <Topbar>
        <MidFont className="mt-3">
          Mid-Season Sale Up to 70% OFF. Shop Now
        </MidFont>
      </Topbar>
        </div>
    )
}