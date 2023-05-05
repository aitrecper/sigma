import { useState } from 'react';
import { Content, Contentoutside } from './components/other/Content/Content';
import { Footer } from './components/other/footer/footer';
import Header from './components/other/header/header';
import { AllRoutes, AllRoutes2 } from './Routes/AllRoutes';
import { BrowserRouter } from 'react-router-dom';
import logosigma from './components/Pages/Home/sigmalogoprincipal.png';
import './App.css';

function App() {
  const [isLogged, setIsLogged] = useState(true);

  function handleLogin() {
    setIsLogged(true);
  }

  function handleLogout() {
    setIsLogged(false);
  }

  return (
    <BrowserRouter>
      <Header isLogged={isLogged} onLogin={handleLogin} onLogout={handleLogout} />
      <Content isLogged={isLogged}>
        {isLogged ? (
          <AllRoutes />
        ) : (
          <AllRoutes2 />
        )}
      </Content>
      <div className="footer-container">
        <Footer isLogged={isLogged} />
      </div>
    </BrowserRouter>
  );
}

export default App;