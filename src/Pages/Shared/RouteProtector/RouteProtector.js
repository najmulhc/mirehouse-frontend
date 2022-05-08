import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const RouteProtector = ({children}) => {
  const [user] = useAuthState(auth);
  const location = useLocation();
  const navigate = useNavigate();
  if(user){
      return children;
  }
 else {
   return  <Navigate to="/login" replace state={{from:location}} />
 }
};

export default RouteProtector;