import React, { useState } from "react";

import { Link } from "react-router-dom";

import { texts, paragraphs } from "../data";

function TextGen(props) {
  const [value, setValue] = useState("");
  const [text, setText] = useState("");
  const [display, setDisplay] = useState([]);


  const handleChange = (e) => {
    setText(e.target.value);
    setDisplay([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(value);
    if(text === "PARAGRAPHS" && !isNaN(num)){
      if (num > 21) {
        alert("Try a number between 1-21");
        setDisplay([]);
        console.log(display);}
        else{
      const newData = [...paragraphs].splice(0, num);
          setDisplay(newData);
          setValue("");
        }
    }else if (text === "WORDS" && !isNaN(num)) {
      const newData = texts.splice(0, num);
      setDisplay(newData.join(" "));
      setValue("");
    } else {
      alert("Please enter a valid value");
    }
  };

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
          <select onChange={handleChange}>
            <option value="Select Type">Select Type</option>
            <option value="WORDS">WORDS</option>
            <option value="PARAGRAPHS">PARAGRAPHS</option>
          </select>
        </div>
        <button className="textgen-btn">Generate</button>
      </form>
      <div className="generated-text-div">
        {text === "WORDS" && display.length !== 0 ? (
          <>
            <button
              onClick={() => {
                navigator.clipboard.writeText(display);
              }}
              className="textgen-copy"
            >
              Copy
            </button>
            <p>{display}</p>
          </>
        ) : text === "PARAGRAPHS" && display.length !== 0 ? (
          <>
            <button
              onClick={() => {
                navigator.clipboard.writeText(display);
              }}
              className="textgen-copy"
            >
              Copy
            </button>
            {display.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </>
        ) : (
          " "
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
