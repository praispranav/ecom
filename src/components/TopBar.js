import React from "react";
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

const TopBarText = "Mid-Season Sale Up to 70% OFF";

export default function home2() {
  return (
    <div>
      <Topbar>
        <MidFont className="mt-3">{TopBarText}</MidFont>
      </Topbar>
    </div>
  );
}
