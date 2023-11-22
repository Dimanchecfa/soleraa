import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { Accueil } from './components/Accueil';
import Header from './components/Header';
import { HomeToolCenterValue } from './components/HomeToolCentervalue';
import { HomeChoiceAwards } from './components/homeChoiceAwards';
import HomeFeaturedVendor from './components/homeFeaturedVendor';
import { Footer } from './components/Footer';
import HomeDresses from './components/HomeDresses';
{/* <style>
  
</style> */}
function App() {
  return (
    <>
      <Accueil />
      <main id="layoutMain" className="layoutMain">
        <article className="home">
          <Header />
          <HomeToolCenterValue />
          <HomeChoiceAwards />
          <HomeFeaturedVendor />
          <HomeDresses />
          <Footer />
        </article>
      </main>
    </>
  );
}

export default App;
