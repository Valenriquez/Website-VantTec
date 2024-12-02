import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { HomePage, AboutPage } from './pages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

      </Routes>
    </Router>
  );
}

export default App