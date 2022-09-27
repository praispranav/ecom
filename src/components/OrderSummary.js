import React from "react";
import styled from "styled-components";

const Line = styled.div({
  height: "1.20px",
  width: "100%",
  backgroundColor: "black",
});

const Line2 = styled.div({
  height: "1px",
  width: "100%",
  backgroundColor: "#c3bfc3",
});

const Shippinbtn = styled.button({
  width: "100%",
  height: "40px",
  border: "none",
  outline: "none",
  backgroundColor: "#c861b8",
  borderRadius: "4px ",
  color: "white",
  fontSize: "17px",
  fontWeight: "500",
});

export default function OrderSummary() {
  return (
    <div>
      <h5>ORDER SUMMARY</h5>
      <Line />

      <div className="d-flex justify-content-between  mt-3">
        <p style={{ fontWeight: "500" }}>Subtotal</p>
        <h5>$4352</h5>
      </div>

      <Line2 />

      <p className="mt-3" style={{ fontWeight: "500" }}>
        Get Shipping Estimate:
      </p>

      <div
        className="p-1"
        style={{
          border: "1px solid  grey",
          height: "38px",
          width: "100%",
          borderRadius: "3px",
        }}
      >
        <select
          style={{
            outline: "none",
            border: "none",
            width: "100%",
            height: "29px",
            backgroundColor: "#f6eaf5",
          }}
          name="state"
          id="state"
        >
          <option value="Bihar">Bihar</option>
          <option value="New Delhi">New Delhi</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Haryan">Haryan</option>
        </select>
      </div>

      <div className=" mt-3 d-flex justify-content-between">
        <select
          style={{
            outline: "none",
            border: "1px solid grey",
            borderRadius: "3px",
            width: "50%",
            height: "37px",
            backgroundColor: "#f6eaf5",
          }}
          name="state"
          id="state"
        >
          <option value="Sitamarhi">Sitamarhi</option>
          <option value="Patna">Patna</option>
          <option value="Madhubani ">Madhubani</option>
          <option value="Darbhanga">Darbhanga</option>
          <option value="Sitamarhi">Sitamarhi</option>
          <option value="Patna">Patna</option>
          <option value="Madhubani ">Madhubani</option>
          <option value="Darbhanga">Darbhanga</option>
        </select>

        <input
          className="ps-2"
          type="number"
          placeholder="Pin Code"
          style={{
            outline: "none",
            width: "47%",
            border: "1px solid grey",
            borderRadius: "3px",
            backgroundColor: "#f6eaf5",
          }}
        ></input>
      </div>
      <div>
        <Shippinbtn className="mt-3">Shipping</Shippinbtn>
      </div>

      <Line2 className="mt-4" />

      <p className="mt-3" style={{ fontWeight: "500" }}>
        Get Shipping Estimate:
      </p>

      <input
        className="ps-2"
        type="text"
        placeholder="Enter Coupon Code"
        style={{
          height: "40px",
          outline: "none",
          width: "100%",
          border: "1px solid grey",
          borderRadius: "3px",
          backgroundColor: "#f6eaf5",
        }}
      ></input>

      <p className="mt-2" style={{ color: "grey" }}>
        Coupon code will be applied on the checkout page
      </p>

      <Line2 />
      <div className="d-flex justify-content-between">
        <p
          className="mt-3"
          style={{
            fontFamily: "sans-serif",
            fontWeight: "600",
            fontSize: "17px",
          }}
        >
          TOTAL:
        </p>
        <p
          className="mt-3"
          style={{
            fontFamily: "sans-serif",
            fontWeight: "700",
            fontSize: "20px",
          }}
        >
          $4352
        </p>
      </div>

      <Line2 />

      <div className="d-flex mt-3">
        <input
          className="mt-1"
          type="checkbox"
          style={{
            height: "15px",
            width: "15px",
          }}
        ></input>
        <p className="ms-2" style={{ fontWeight: "500" }}>
          I agree withTerms & Conditions
        </p>
      </div>

      <div>
        <Shippinbtn className="mt-3">PROCEED TO CHECKOUT</Shippinbtn>
      </div>

      <div>
        <Shippinbtn className="mt-3">CONTINUE SHOPPING</Shippinbtn>
      </div>
    </div>
  );
}
