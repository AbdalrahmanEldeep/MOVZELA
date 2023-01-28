import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { MainData } from '../context/Context';

export const AuthRouteProtceter = ({status,children}) => {
    if(!status){
       return children
     }else{
      return <Navigate to="/"/>
     }
}
