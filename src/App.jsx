import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import AuthLayout from './components/auth/AuthLayout';
import AuthHeader from './components/auth/AuthHeader';
import AuthHero from './components/auth/AuthHero';
import AuthCard from './components/auth/AuthCard';

import Login from './pages/Login';

// Temporary placeholder pages
function Register() {
  return <div>Register Page</div>;
}

function ForgotPassword() {
  return <div>Forgot Password Page</div>;
}

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* LOGIN */}
        <Route
          path="/login"
          element={
            <AuthLayout>

              <AuthHeader />

              <main className="auth-container">

                <AuthHero />

                <AuthCard>
                  <Login />
                </AuthCard>

              </main>

            </AuthLayout>
          }
        />

        {/* REGISTER - temporary */}
        <Route
          path="/register"
          element={<Register />}
        />

        {/* FORGOT PASSWORD - temporary */}
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        {/* DEFAULT ROUTE */}
        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;