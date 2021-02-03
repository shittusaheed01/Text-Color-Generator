import React, {useState} from 'react';

import Colors from "./Color"
import {Link} from "react-router-dom"

import Values from "values.js"
import { rgbToHex, hexToRgb, RGBregex, HEXregex } from "../Conversion";

function ColorGen(props) {
  const [color, setColor] = useState("")
  const [list, setList] = useState([])
  const [num, setNum] = useState(0)
  const [conversion, setConversion] = useState("")
  const [convResult, setConvResult] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    try{
    let colors = new Values(color).all(parseInt(num))
    setList(colors)
    }
    catch(error) {
      alert("Please enter a valid value")
    }
  }
  const handleConv =(e) => {
    e.preventDefault()
    if(RGBregex(conversion)  == true){
      let splits = conversion
        .split(/[,()]/)
        .filter((e) => e)
        .filter((num) => num >= 0)
        .map(item => parseInt(item));
      setConvResult(rgbToHex(...splits));
      console.log(splits);
    }else if(HEXregex(conversion) == true){
      // alert(hexToRgb(conversion))
      const result = hexToRgb(conversion);
      const print = `rgb(${result.r},${result.g},${result.b})`
      setConvResult(print)
    }
    else{
      alert("Please Enter A Valid RGB/HEX value")
    }
    setConversion("");
  }
  return (
    <section className="colorgen-con">
      <div className="colorgen-forms">
        <h3 className="colorgen-title">
          Col<span>or Ge</span>nerator
        </h3>
        <div className="colorgen-form-1">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="Enter Color"
            />

            <input
              type="number"
              value={num}
              onChange={(e) => setNum(e.target.value)}
              placeholder="Shade"
              min="1"
              max="20"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="conver-div">
          <form onSubmit={handleConv} className="colorgen-form-2">
            <input
              onChange={(e) => setConversion(e.target.value)}
              value={conversion}
              type="text"
              placeholder="Convert to RGB/HEX"
            />
            <button type="submit">Convert</button>
          </form>
          <div
            onClick={() => {
              navigator.clipboard.writeText(convResult);
            }}
            className="conv-result"
          >
            {convResult ? (
              <>
                <p className="color-result">{convResult}</p>
                <span className="color-copy">Copy</span>
              </>
            ) : (
              " "
            )}
          </div>
        </div>
      </div>
      <div className="generated-color-div">
        {list.map((item, index) => (
          <Colors key={index} {...item} index={index} />
        ))}
      </div>
      <div className="nav">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/textgen">
          <button>Text Gen</button>
        </Link>
      </div>
    </section>
  );
}

export default ColorGen;