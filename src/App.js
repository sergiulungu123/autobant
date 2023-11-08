import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from 'react-router-dom';
import Userfront, {
  LoginForm,
} from '@userfront/toolkit/react';

import Backoffice from './routes/back-office';
import Cards from './routes/cards';

Userfront.init('7n84wr7n');

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/back-office"
          element={<RequireAuth>{<Backoffice />}</RequireAuth>}
        />
      </Routes>
    </Router>
  );
}

function Login() {
  return (
    <div>
      <LoginForm />
    </div>
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

export default App;
