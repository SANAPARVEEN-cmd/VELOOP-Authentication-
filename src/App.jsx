import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import AuthLayout from './components/auth/AuthLayout';
import AuthHeader from './components/auth/AuthHeader';
import AuthHero from './components/auth/AuthHero';
import AuthCard from './components/auth/AuthCard';
import AuthFooter from './components/auth/AuthFooter';

import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';

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

                <AuthHero variant="login" />

                <AuthCard>
                  <Login />
                </AuthCard>

              </main>

              <AuthFooter />

            </AuthLayout>
          }
        />

        {/* REGISTER */}
        <Route
          path="/register"
          element={
            <AuthLayout>

              <AuthHeader />

              <main className="auth-container">

                <AuthHero variant="register" />

                <AuthCard>
                  <Register />
                </AuthCard>

              </main>

              <AuthFooter />

            </AuthLayout>
          }
        />

        {/* FORGOT PASSWORD */}
        <Route
          path="/forgot-password"
          element={
            <AuthLayout>

              <AuthHeader />

              <main className="auth-container">

                <AuthHero variant="forgotPassword" />

                <AuthCard>
                  <ForgotPassword />
                </AuthCard>

              </main>

              <AuthFooter />

            </AuthLayout>
          }
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