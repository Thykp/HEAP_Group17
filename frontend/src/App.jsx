// App.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import '../src/index.css';
import Layout from './components/Layout';

const App = () => {
  const location = useLocation();

  return (
    <Layout>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={500}>
          <Routes location={location}>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  );
};

export default App;
