import {
  Link,
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Userfront, {
  LoginForm,
  PasswordResetForm,
  SignupForm
} from "@userfront/toolkit/react";

import AccordionSteps from '../src/components/accordion'
import Cards from './routes/cards';
import React from 'react';

Userfront.init("7n84wr7n");
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<PasswordReset />} />
        <Route
            path="/learn-more"
            element={
              <RequireAuth>
                <AccordionSteps />
              </RequireAuth>
            }
          />
      </Routes>
    </Router>
  );
}
function RequireAuth({ children }) {
  let location = useLocation();
  if (!Userfront.tokens.accessToken) {
    // Redirect to the /login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children
}

function PasswordReset() {
  return (
    <div>
      <h2>Password Reset</h2>
      <PasswordResetForm />
    </div>
  );
}

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
}


export default App;