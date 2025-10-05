import { useState, useEffect } from 'react'
import { Outlet, useMatches } from 'react-router-dom'

import Footer from './Components/Footer.jsx'
import BasicBreadcrumbs from './Components/BasicBreadcrumbs.jsx'
import Header from './Components/Header.jsx';

function App() {const organizationName = "Singh Engineering Works";
  const matches = useMatches();
  const currentMatch = matches[matches.length - 1];
  const pageTitle = currentMatch?.handle?.title || "Page";

  useEffect(() => {
    document.title = `${pageTitle} | ${organizationName}`;
  }, [pageTitle]);

  return (
    <div>
    
     
      <Header/>
      <BasicBreadcrumbs />
      <Outlet context={{ organizationName, pathname: location.pathname }} />
      <Footer/>
    
    </div>
  );
}

export default App
