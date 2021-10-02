import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "components/layouts/Navbar";
import Footer from "components/layouts/Footer";
import Routes from "components/routes/Routes";

const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div className='app'>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='main'>
          <Routes />
          <div className='footer'>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
