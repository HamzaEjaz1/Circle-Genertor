import React from 'react'
import './App.css'
import { useState } from 'react'
const App = () => {
  const [wid, setwid] = useState(20);
  const [hei, sethei] = useState(20);
  const [Br, setBr] = useState(20);
  const [clr, setclr] = useState("black");
  return (
<>
<div className='container'>
  <div className='Controls'>
    <label>Width</label>
    <input type="range" min="0" max="500" value={wid} onChange={(e)=> setwid(e.target.value)}></input>
    <label>height</label>
    <input type="range" min="0" max="500" value={hei} onChange={(e)=> sethei(e.target.value)}></input>
    <label>Border Radius</label>
    <input type="range" min="0" max="500" value={Br} onChange={(e)=> setBr(e.target.value)}></input>
    <label>Color</label>
    <input type="color"  value={clr} onChange={(e)=> setclr(e.target.value)}></input>
    <p style={{backgroundColor:"GrayText" ,textAlign:'center' ,padding:"20px"}}>
      height :{hei}
    <br>
    </br>
    width : {wid}
    <br/>
    border Radius : {Br}
    <br/>
    color :{clr}
    </p>
  </div>
  <div className='box'> 
  <div className='innerBox' style={{height:`${hei}px`, width:`${wid}px`,backgroundColor:`${clr}`, borderRadius:`${Br}px`}}></div>
   </div>
</div>
</>
  )
}

export default App