import React, { useState } from "react";
import "firebase/auth";
import "./App.css";
import first from "./assets/1.png";
import second from "./assets/2.png";
import third from "./assets/3.png";
import fourth from "./assets/4.png";
import fifth from "./assets/5.png";
import sixth from "./assets/6.png";
import seventh from "./assets/7.png";
import eighth from "./assets/8.png";
import ninth from "./assets/9.png";

const pictures = [
  { id: "image-1", image: first },
  { id: "image-2", image: second },
  { id: "image-3", image: third },
  { id: "image-4", image: fourth },
  { id: "image-5", image: fifth },
  { id: "image-6", image: sixth },
  { id: "image-7", image: seventh },
  { id: "image-8", image: eighth },
  { id: "image-9", image: ninth },
];

function App() {
  return (
    <>
      <div className="header">
        <h1>Gallery App</h1>
        <p>Drag and drop the images to rearrange them</p>
      </div>
      <div className="image-container">
        {pictures.map((picture) => (
          <div key={picture.id}>
            <img src={picture.image} alt="picture.id" className="image" />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
