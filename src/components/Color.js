import React, {useState, useEffect} from 'react';

import {rgbToHex} from "../Conversion"

function Color({ rgb , weight , index, hex }) {
  const [modal, setModal] = useState(false)
  const bcg = rgb.join(",")
  console.log(rgb)
  const hexColor = rgbToHex(...rgb)
  useEffect(() => {
    const timeout= setTimeout(()=>{
      setModal(false)
    },3000)
    return () => {
      clearTimeout(timeout)
    }
  }, [modal])
  return (
    <>
      <div
        style={{ backgroundColor: `rgb(${bcg}` }}
        className={index < 10 ? "generated-color light" : "generated-color"}
        onClick={()=>{
          setModal(true)
          navigator.clipboard.writeText(hexColor)
        }}
      >
        <p>{weight}%</p>
        <p>{hexColor}</p>
        {modal && <p className="modal">Copied</p>}
      </div>
    </>
  );
}

export default Color;