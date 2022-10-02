import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer.jsx";
import Render3D from "../Render3D/Render3D.jsx";
//import Moon from "../Render3D/Moon.jsx";

export default function Landing() {
  return (
    <div>
      <NavBar />
      <Render3D />
      <Footer />
    </div>
  );
}
