import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import SchedulePage from './pages/SchedulePage';
import MatchesPage from './pages/MatchesPage';
import TournamentsPage from './pages/TournamentsPage';
import TeamsPage from './pages/TeamsPage';
import NewsPage from './pages/NewsPage';
import PromptJourneyPage from './pages/PromptJourneyPage';
import { SoundProvider } from './context/SoundContext';
import BackgroundAudio from './components/BackgroundAudio';
import ScrollToTop from './components/ScrollToTop';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          } 
        />
        <Route 
          path="/schedule" 
          element={
            <PageWrapper>
              <SchedulePage />
            </PageWrapper>
          } 
        />
        <Route 
          path="/matches" 
          element={
            <PageWrapper>
              <MatchesPage />
            </PageWrapper>
          } 
        />
        <Route 
          path="/tournaments" 
          element={
            <PageWrapper>
              <TournamentsPage />
            </PageWrapper>
          } 
        />
        <Route 
          path="/teams" 
          element={
            <PageWrapper>
              <TeamsPage />
            </PageWrapper>
          } 
        />
        <Route 
          path="/news" 
          element={
            <PageWrapper>
              <NewsPage />
            </PageWrapper>
          } 
        />
        <Route 
          path="/journey" 
          element={
            <PageWrapper>
              <PromptJourneyPage />
            </PageWrapper>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <SoundProvider>
      <BackgroundAudio />
      <Router>
        <ScrollToTop />
        <AnimatedRoutes />
      </Router>
    </SoundProvider>
  );
}

export default App;
