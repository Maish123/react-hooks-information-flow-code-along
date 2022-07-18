import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);//initial value of color state of the parent div
  const[childrenColor,setChildrenColor]= useState("#FFF")

  function handleChangeColor(newChildColor){
    console.log(newChildColor);
    const newRandomColor = getRandomColor();
    setColor(newRandomColor) // this handles the color randomness of the parent div when the child is clicked
    setChildrenColor(newChildColor)//this handles the color randomness of the children components
  } 


  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor} onChangeColor={handleChangeColor}/>
      <Child color={childrenColor} onChangeColor={handleChangeColor}/>
    </div>
  );
}

export default Parent;
