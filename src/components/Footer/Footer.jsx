import React from 'react';
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <div>
      <Box>social</Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 3,
          bgcolor: "#161616",
        }}
      >
        <p>&copy; Shop and Kart plc (UK)</p>
        <span className="footer__pipeline">|</span>
        <p>Terms & Conditions</p>
        <p>Privacy</p>
        <p>Cookies</p>
        <p>Accessibility</p>
        <p>Sustainability</p>
      </Box>
    </div>
  );
}

export default Footer