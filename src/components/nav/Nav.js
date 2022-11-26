import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MainData } from '../context/Context';
import './nav.css';

export const Nav = ({status,hidder,slide__status}) => {
    let [inp__class,setInp] = useState(false);
    let {search__inp} = useContext(MainData);

    function controller(){
        !inp__class ? setInp(true) : setInp(false);
    }

    function slide__controller(){
        status();

    }

    function search(e){
        search__inp(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
    }

  return (
    <div className='nav-container d-flex-r'>
        <div className='logo-search-inp d-flex-r'>
            <div className='logo-img'><img src='../../../assets/Logo.svg'  width="80px" height="80px"/></div>
            {hidder ? <>
            <div className={!inp__class ? "inp-search d-flex-r" : "inp-search inp-search-active d-flex-r"}>
                <form>
                    <img src='./assets/search-outline.svg' className='search-icon' width="30px" height="30px"/>
                    <input onChange={search} type="text"  placeholder='search movies...'/>
                </form>
            </div>
            </> : null}
        </div>
        {
           hidder ? <>
            <div className='user-info d-flex-c'>
                <div className='user-name'>Black Wolf</div>
                <div className='user-img'><img src='assets/user.png' width="60px" height="60px"/></div>
            </div>
            <div className='toggle-search'>
                <img src='./assets/search-outline.svg'  onClick ={controller} width="30px" height="30px" />
                <span style={{marginLeft:"30px",cursor:"pointer"}} onClick={slide__controller} className='toggle'>
                     {!slide__status ?  <img src='./assets/List.png' width="30px" height="30px" /> :  <img src='./assets/close.png' width="30px" height="30px" />}
                </span>
            </div>
           
           </> : <Link to='/' className='back-home'>Home</Link>
        }
    </div>
  )
}
