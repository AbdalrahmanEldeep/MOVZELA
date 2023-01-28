import React, { useEffect } from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MainData } from '../context/Context';
import {ref, listAll, getDownloadURL } from "firebase/storage";

import './nav.css';
import { storage } from '../../../firebase-init';

export const Nav = ({status,hidder,slide__status}) => {
    let [inp__class,setInp] = useState(false);
    let {search__inp,userData,setUserPhoto,userPhoto} = useContext(MainData);

    function controller(){
        !inp__class ? setInp(true) : setInp(false);
    }

    function slide__controller(){
        status();

    }

    function search(e){
        search__inp(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
    }
    const getUserData = () => {

        // Create a reference under which you want to list
        const listRef = ref(storage, `${userData.uid}/`);
        // Find all the prefixes and items.
        listAll(listRef)
          .then((res) => {
            res.prefixes.forEach((folderRef) => {
              // All the prefixes under listRef.
              // You may call listAll() recursively on them.
            });
            res.items.forEach((itemRef) => {
              // All the items under listRef.
              getDownloadURL(ref(storage, itemRef._location.path_)).then((url) => {
                setUserPhoto(url);
              });
            });
          }).catch((error) => {
            // Uh-oh, an error occurred!
            console.log();
          });
    }

    useEffect(() => {
        getUserData();
    },[])
  return (
    <div className='nav-container d-flex-r'>
        <div className='logo-search-inp d-flex-r'>
            <div className='logo-img'><img src='../../../assets/Logo.svg'  width="80px" height="80px" alt='img'/></div>
            {hidder ? <>
            <div className={!inp__class ? "inp-search d-flex-r" : "inp-search inp-search-active d-flex-r"}>
                <form>
                    <img src='./assets/search-outline.svg' className='search-icon' width="30px" height="30px" alt='img'/>
                    <input onChange={search} type="text"  placeholder='search movies...'/>
                </form>
            </div>
            </> : null}
        </div>
        {
           hidder ? <>
            <div className='user-info d-flex-c'>
                <div className='user-img'>
                    <img style={{borderRadius:"60px"}} src={userPhoto ? userPhoto : "assets/user.png"} width="60px" height="60px" alt='img'/>
                    <div className='user-name'>{userData.email}</div>
                </div>
            </div>
            <div className='toggle-search'>
             <button><img height={35} width={35} src="./assets/logout.png" alt="" /></button>
                <img src='./assets/search-outline.svg'  onClick ={controller} width="30px" height="30px" alt='img'/>
                <span style={{marginLeft:"30px",cursor:"pointer"}} onClick={slide__controller} className='toggle'>
                     {!slide__status ?  <img src='./assets/List.png' width="30px" height="30px" alt='img'/> :  <img src='./assets/close.png' width="30px" height="30px" alt='img'/>}
                </span>
            </div>
           
           </> : <Link to='/' className='back-home'>Home</Link>
        }
    </div>
  )
}
