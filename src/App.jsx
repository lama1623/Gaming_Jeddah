import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SchedulePage from './pages/SchedulePage';
import { SoundProvider } from './context/SoundContext';
import BackgroundAudio from './components/BackgroundAudio';

function App() {
  return (
    <SoundProvider>
      <BackgroundAudio />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<SchedulePage />} />
          {/* Add more routes here as we implement pages */}
        </Routes>
      </Router>
    </SoundProvider>
  );
}

export default App;
