import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import FormationsPage from './pages/FormationsPage';
import ScrollToTop from './components/ScrollToTop';
import FormulaireBesoinPage from './pages/FormulaireBesoinPage';
import FormationPage from './pages/FormationPage';

const AppLayout = () => {
  // Footer est caché selon la demande
  const shouldShowFooter = false;

  return (
    <div className="flex flex-col min-h-screen">
      {<Header />}
      <main className="flex-grow">
        <Routes>
          {/* <Route path="/" element={<HomePage />} />
          <Route path="/formations" element={<FormationsPage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/formulaire-besoin" element={<FormulaireBesoinPage />} /> */}
          
          {/* Route dynamique pour les pages de formation à partir de notre config */}
          <Route path="/" element={<FormationsPage />} />
          <Route path="/:slug" element={<FormationPage />} />
          <Route path="/demande-formation" element={<FormulaireBesoinPage />} /> 
        </Routes>
      </main>
      {shouldShowFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AppLayout />
      </Router>
    </HelmetProvider>
  );
}

export default App;
