import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Bars } from 'react-loader-spinner';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const RouteProtector = ({children}) => {
  const [user , loading] = useAuthState(auth);
  const location = useLocation(); 
  if(user){
      return children;
  }
  if(loading){
    return <div className="w-full h-[660px] flex items-center justify-center"><Bars
    color="#F9AA4B"
    height={110}
    width={110}
    ariaLabel="three-circles-rotating"
  /></div>}
 else {
   return  <Navigate to="/login" replace state={{from:location}} />
 }
};

export default RouteProtector;