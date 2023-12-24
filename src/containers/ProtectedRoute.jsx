import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import UserContext from './UserContext';

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({ children }) {
  const { user } = useContext(UserContext);
  return user ? children : <Navigate to="/home" />;
}
