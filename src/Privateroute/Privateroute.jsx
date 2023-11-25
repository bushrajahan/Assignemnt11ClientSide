import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Login from '../pages/Login';

const Privateroute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (!user) {
    // Redirect the user to the login page if not authenticated
    return <Login></Login>
  }

  // Render the children (the protected content) if the user is authenticated
  return children;
};

export default Privateroute;
