import React from 'react'
import { useContext } from 'react';
import { Reveal} from 'react-reveal';
import { Card } from '../card/Card';
import { MainData } from '../context/Context';
import "./stack.css";

export const Stack = () => {

  let {data ,active__selection} = useContext(MainData);

  return (
    <div className='Stack'>
      <h1>{active__selection}  <span style={{color:"var(--main-color)"}}>*</span></h1>
       <div className='stack-grid'>
          {data.map(e => {
            return (<Reveal key={e.id} bottom><Card data={e}/></Reveal>)
          })}
       </div>
    </div>
  )
}
