import { Suspense } from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { UserProvider } from './containers/UserContext';
import ProtectedRoute from './containers/ProtectedRoute';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';

export default function App() {
  return (
    <UserProvider>
      <Suspense fallback={null}>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </UserProvider>
  );
}
