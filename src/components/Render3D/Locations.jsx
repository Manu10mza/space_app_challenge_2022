import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import rock from "./roca.jpg";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import Dot from "./Dot";

export default function Locations(data) {
  return (
    <>
      {data.data.map((location, index) => {
        // const { lat, lon, type } = location;
        return <Dot location={location} key={index} />;
      })}
    </>
  );
}
