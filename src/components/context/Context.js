import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react'

let MainData = createContext();

const ContextData = ({children}) => {
  let [dataPath,setDataPath] = useState('now_playing');
  let [data,setData] = useState([]);
  let [pages,setPages] = useState(0)
  let [data__loader,setDataLoader] = useState([]);
  let [page , setPage] = useState(1);
  let [active__selection , setActSlc] = useState('Home');
  let [tester,setTester] = useState(null);
  let [img__base,setImageBase] = useState('https://image.tmdb.org/t/p/w500/');



  let set__act = (val) =>{
    setActSlc(val);
  }

  let change__base = (val) =>{
    setDataPath(val);
  }
  let change__page = (val) =>{
    setPage(val);
  }

  let get__data = async () =>{
    let FetchAxios = await axios.get(`https://api.themoviedb.org/3/movie/${dataPath}?api_key=8d06129e09b7dfab7831b59a09bd99ae&query=black&language=en-US&page=${page}`);
    setData(FetchAxios.data.results);
    setPages(FetchAxios.data.total_pages);
  }

  let Loader = async () =>{
    let FetchAxios = await axios.get(`https://api.themoviedb.org/3/movie/${dataPath}?api_key=8d06129e09b7dfab7831b59a09bd99ae&query=black&language=en-US&page=${page}`);
    setDataLoader(FetchAxios.data.results);
  }

  let search__inp = async (val) =>{
    if(val === ""){
      get__data();
    }else{
      let FetchAxios = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8d06129e09b7dfab7831b59a09bd99ae&query=${val}&language=en-US&page=${page}&include_adult=false`);
      setData(FetchAxios.data.results);
      setPages(FetchAxios.data.total_pages);
    }
    setTester(val);
  }

  useEffect(() =>{
    get__data();
  },[])

  useEffect(() =>{
    get__data();
    Loader();
  },[dataPath,page])


  return (
    <MainData.Provider value={{data,change__base,img__base,change__page,search__inp,data__loader,set__act,active__selection,pages}}>
        {children}
    </MainData.Provider>
  )
}
export {ContextData,MainData}