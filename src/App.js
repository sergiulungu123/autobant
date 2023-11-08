import {
  Link,
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from 'react-router-dom';
import Userfront, {
  LoginForm,
  PasswordResetForm,
  SignupForm,
} from '@userfront/toolkit/react';

import AccordionSteps from '../src/components/accordion';
import Cards from './routes/cards';
import React from 'react';

Userfront.init('rbv769jn');
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/login" element={<Login />} />
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
  return children;
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
