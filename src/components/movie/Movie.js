import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Reveal} from 'react-reveal';
import { CircleLoader } from 'react-spinners';




import "./movie.css";
import { Loader } from '../Loader/Loader';

export const Movie = () => {

    let {id} = useParams();
    let [pram,setPram] = useState(id);
    let [data,setData] = useState([]);


    let get__data = async () =>{
        let FetchAxios = await axios.get(`https://api.themoviedb.org/3/movie/${pram}?api_key=8d06129e09b7dfab7831b59a09bd99ae&language=en-US`);
        setData(FetchAxios.data);
      }

    useEffect(() =>{
        get__data();
    },[])

    function fixed__date__m (){
        let min = (data.runtime / 60).toFixed(1) - Math.floor((data.runtime / 60).toFixed(1));
        return (min * 60 ).toFixed(0);
    }

  return (
    <div className='movie-container'>
     <div className='movie-details'>
      {
      data.backdrop_path ? 
       <Reveal bottom>
          <div className='movie-img'><img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} /></div>
           <div className='movie-cont'>
                <h1> {data.original_title} </h1>
                <div className='movie-info'>
                    <span> {data.release_date} </span>
                    <span> | </span>
                    <span> +18 </span>
                    <span> |  </span>
                    <span> {Math.floor((data.runtime / 60).toFixed(1))}h  {fixed__date__m()}m</span>
                    <span> | </span>
                    <span> {data.status} </span>
                </div>
                <p> {data.overview} </p>
                <button><a href={data.homepage} target="_blank">Watch Now</a></button>
            </div>
        </Reveal> : 
        <div className='loader'><Loader/></div>
      }
     </div>
    </div>
  )
}
