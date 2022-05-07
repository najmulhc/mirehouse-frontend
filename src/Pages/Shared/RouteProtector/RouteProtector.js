import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const RouteProtector = ({children}) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  if(user){
      return children;
  }
  navigate("/login")
};

export default RouteProtector;