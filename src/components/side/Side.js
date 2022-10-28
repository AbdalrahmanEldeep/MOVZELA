import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { MainData } from '../context/Context';
import './side.css';


export const Side = ({status}) => {
 let [act__index,setAct] = useState(0);
 let [list ,setList]= useState(['Home','Popular','Top rated','Coming soon'])
 let {change__base,change__page ,set__act} = useContext(MainData);

 let active__func = (e) =>{
    setAct(list.indexOf(e.target.innerText));
    set__act(e.target.innerText);
    switch(e.target.innerText){
      case "Top rated":
         change__base('top_rated');
         change__page(1);
         break;
      case "Home":
          change__base('now_playing');
         change__page(1);
          break;
      case "Coming soon":
            change__base('upcoming');
         change__page(1);
          break;
      case "Popular":
            change__page(2);
          break;
    }
 }


  return (
    <div className={!status ? "Slide" : "Slide active-slide"}>
        <ul>
            {list.map((e,index) => {
               return <li  onClick={active__func} key={index} className = {index == act__index ? "active-li" : null}>{e}</li>
            })}
        </ul>
    </div>
  )
}
