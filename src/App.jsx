import React from 'react';
import Navbarr from './assets/Navbarr';
import Hero from './assets/Hero';
import Features from './assets/Features';
import Login from './assets/Login';
import Register from './assets/Register';
import CTA from './assets/CTA';
import Doctors from './assets/Doctors';
import Services from './assets/Services';
import Products from './assets/Products';
import { useState } from 'react';
function App(){
  const [page, setPage] = useState('home'); 
  const [loggedIn, setLoggedIn]=useState(false);

  const showHome = () => setPage('home');
  const showLogin = () => setPage('login');
  const showRegister = () => setPage('register');
  const showProducts = () => setPage('products'); 

  const handleLoginSuccess=()=>{
    setLoggedIn(true);
    alert("Login Successful!")
    showHome();
  };
  return(
    <>
<Navbarr loggedIn={loggedIn} showLogin={showLogin} showHome={showHome}  />
{page === 'home' && (
<>
<Hero> </Hero>
<Services></Services>
<Doctors></Doctors>
<Features></Features>
<CTA showProducts={showProducts} />
        </>
      )}
      {page === 'login' && <Login switchToRegister={showRegister} Onsuccess={handleLoginSuccess} />}
      {page === 'register' && <Register switchToLogin={showLogin} backToHome={showHome} />}
      {page === 'products' && <Products backToHome={showHome}/>}
    </>
);
}
export default App;