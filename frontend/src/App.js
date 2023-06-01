import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Products from './pages/products/Products'
import Kontakt from './pages/kontakt/Kontakt';

function App() {

  const Layout = () => {
    return (
      <div className="app">
        {/* Uncomment the components and add necessary imports if you want to use these
        <QueryClientProvider client={queryClient}>
          <NavBar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
        */}
      </div>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/products" element={<Products />} />
        
      </Routes>
    </Router>
  );
}

export default App;
