import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainData } from '../context/Context'
import "./card.css"

export const Card = ({data}) => {

let {img__base} = useContext(MainData);

  return (
    <Link to={`/movie/${data.id}`}>
      <div className='Card'>
        <div className='img-content'>
          <div className='card-img'>
            <img src={`${img__base}${data.poster_path}`} width="200px" height="300px"/>
            <span className='rate'>{data.vote_average}</span>
          </div>
        </div>
        <div className='card-info'>
          <p className='card-title'>{data.original_title}</p>
          <p className='card-info-per'>{data.release_date}</p>   
        </div>
      </div>
    </Link>
  )
}
