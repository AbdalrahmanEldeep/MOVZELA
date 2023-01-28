import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { MainData } from '../context/Context';

export default function RouteProtceter({status,children}) {
  if(status){
    return children
  }else{
    return <Navigate to="/login"/>
  }
}
