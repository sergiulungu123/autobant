import {
  Link,
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
  useParams,
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
        <Route path="/reset/:uuid/:token/:type" element={<PasswordResetWithQueryParams />} />

        <Route
            path="/back-office"
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

function PasswordResetWithQueryParams() {
  // Use the useParams hook to access and parse the query parameters
  const { uuid, token, type } = useParams();

  // Now you can use uuid, token, and type in your component
  // For example:
  console.log('UUID:', uuid);
  console.log('Token:', token);
  console.log('Type:', type);

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