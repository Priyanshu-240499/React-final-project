// Responsive*****************************
import "./styles.css";
import { useState } from "react";
import Form from "./components/form/form";
import Disabled from "./components/disabled/disabled";
import Content from "./components/content/content";
//Colours array Note:- Add any css color here to add it in the App
const colors = [
  "Black",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gray",
  "Plum",
  "Navy",
  "Pink",
  "Purple",
  "Coral",
  "Chocolate",
  "Orange",
  "Brown",
  "Cyan",
  "Maroon",
  "Olive"
];
//Sizes array, Note:- Add any css size here to add it in the App (default:in pixels)
const sizes = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
//font-family array, Note:- Add any css font-Family here to add it in the App
const fonts = [
  "Courier New",
  "sans-serif",
  "Calibri",
  "Tahoma",
  "Segoe Ui",
  "Times New Roman"
];

//App function Sytarts Over here.....................
export default function App() {
  const [textcolor, setColor] = useState("black");
  const [size, setSize] = useState(10);
  const [font, setFont] = useState("Courier New");
  const [isdisabled, setisdisabled] = useState(true);

  //function to Change text color.................
  function changeColor(event) {
    event.preventDefault();
    setColor(event.target.value);
  }
  //function to Change text size.................
  function changeSize(event) {
    event.preventDefault();
    setSize(event.target.value);
  }
  //function to Change text font family.................
  function changeFont(event) {
    event.preventDefault();
    setFont(event.target.value);
  }

  return (
    // Main contaier....................
    <div
      className="main"
      style={{
        color: `${textcolor}`,
        fontSize: `${size}px`,
        fontFamily: `${font}`
      }}
    >
      {/* features container.............. */}
      <div
        className="features"
        style={{ backgroundColor: isdisabled ? "grey" : "olive" }}
      >
        <Disabled isdisabled={isdisabled} setisdisabled={setisdisabled} />
        <select
          style={{ color: `${textcolor}` }}
          disabled={isdisabled}
          onChange={changeColor}
        >
          {colors.map((item) => (
            <Form key={item} item={item} />
          ))}
        </select>
        <select disabled={isdisabled} onChange={changeSize}>
          {sizes.map((item) => (
            <Form key={item} item={item} />
          ))}
        </select>
        <select
          style={{ fontFamily: `${font}` }}
          disabled={isdisabled}
          onChange={changeFont}
        >
          {fonts.map((item) => (
            <Form key={item} item={item} />
          ))}
        </select>
      </div>
      {/* Content container ......................... */}
      <div className="content">
        <Content />
      </div>
    </div>
  );
}
