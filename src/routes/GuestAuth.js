import { Navigate } from 'react-router-dom'
import { useLocation } from 'react-router';

const GuestAuth = ({ children }) => {
    const authed = false;
    const location = useLocation();
  
    return authed === true
      ? children
      : <Navigate to="/" replace state={{ path: location.pathname }} />;
}

export default GuestAuth;