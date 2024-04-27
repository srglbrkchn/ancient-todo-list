// import myImage from "./images/2.jpg";
import { useState } from "react";

export function TodoImage() {
  let number = Math.floor(Math.random() * 4) + 1;
  let address = `/src/images/${number}.jpg`;
  const [myImage, setMyImage] = useState(address);
  return (
    <img className="list-img" src={myImage} alt="" width={25} height={25} />
  );
}
