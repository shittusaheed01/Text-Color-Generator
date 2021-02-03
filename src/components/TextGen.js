import React, {useState} from 'react';

import { Link } from "react-router-dom";

import { texts, paragraphs} from "../data"

function TextGen(props) {
  const [value, setValue] = useState("")
  const [text, setText] = useState("")
  const [display, setDisplay] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const num=parseInt(value)
    if(value==="" || text===""){
      alert("Please enter a valid value")
    }
    else if(text==="WORDS" || e.keypress==="enter"){
      const newData = texts.splice(0,num)
      setDisplay(newData.join(" "))
      setValue("")
    }
    else{
      if(num > 21 ){
        alert("Try a number between 1-21")
      }
      else{
        const newData = paragraphs.splice(0,num)
        setDisplay(newData);
        setValue("");
      }
    }
  }
  return (
    <section className="textgen-con">
      <div className="textgen-title">
        <p>
          Generate Lo<span>rem Ips</span>um placeho
          <span>lder words and para</span>graphs by ente
          <span>ring the number of te</span>xts and hit generate!
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="textgen-no"
            type="number"
            placeholder="0"
            max="80"
            min="1"
          />
          <select onChange={(e) => setText(e.target.value)}>
            <option value="Select Type">Select Type</option>
            <option value="WORDS">WORDS</option>
            <option value="PARAGRAPHS">PARAGRAPHS</option>
          </select>
        </div>
        <button className="textgen-btn">Generate</button>
      </form>
      <div className="generated-text-div">
        {text === "WORDS" ? (
          <p>{display}</p>
        ) : (
          display.map((item, index) => <p key={index}>{item}</p>)
        )}

      </div>
      <div className="nav">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/colorgen">
          <button>Color Gen</button>
        </Link>
      </div>
    </section>
  );
}

export default TextGen;