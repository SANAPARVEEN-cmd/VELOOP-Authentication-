import AuthLayout from './components/auth/AuthLayout';
import AuthHeader from './components/auth/AuthHeader';
import AuthHero from './components/auth/AuthHero';
import AuthCard from './components/auth/AuthCard';
import Login from './pages/Login';

function App() {
  return (
    <AuthLayout>

      <AuthHeader />

      <main className="auth-container">

        <AuthHero />

        <AuthCard>
          <Login />
        </AuthCard>

      </main>

    </AuthLayout>
  );
}

export default App;