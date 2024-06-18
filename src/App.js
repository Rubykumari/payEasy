import './App.scss';
import { Home } from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route >
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

