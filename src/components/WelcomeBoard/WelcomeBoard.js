// import libraries
import React from "react";
import Box from "@mui/material/Box";

function WelcomeBoard(props) {
  const boxConfig = {
    width: props.width,
    height: props.height,
    backgroundColor: "#C79FE7",
    padding: props.padding,
    borderRadius: "10px",
    boxShadow: "5px 10px 10px -3px rgba(0,0,0,0.4)",
    "&:hover": {
      backgroundColor: "primary.main",
      opacity: [0.9, 0.8, 0.7]
    }
  };

  return (
    <Box sx={boxConfig}>
      <p>{props.content}</p>
    </Box>
  );
}

export default WelcomeBoard;
