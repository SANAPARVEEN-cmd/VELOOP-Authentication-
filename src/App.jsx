import AuthLayout from './components/auth/AuthLayout';
import AuthHeader from './components/auth/AuthHeader';
import AuthHero from './components/auth/AuthHero';

function App() {
  return (
    <AuthLayout>
      <AuthHeader />

      <main>
        <AuthHero />
      </main>
    </AuthLayout>
  );
}

export default App;