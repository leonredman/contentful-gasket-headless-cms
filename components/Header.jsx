import React from "react";

const headerStyle = {
  backgroundColor: "black",
  fontFamily: "arial",
  color: "white",
  fontWeight: "bold",
  fontSize: "1.5rem",
  padding: "15px 20px",
  display: "flex",
  alignItems: "center",
  marginBottom: "15px",
  overflowX: "hidden",
  boxSizing: "border-box",
};

export default function Header() {
  return <header style={headerStyle}>ShoDaddy</header>;
}
