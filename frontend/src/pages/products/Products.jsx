import React, { useState, useEffect } from 'react';
import NavBar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';
import Card from '../../components/card/Card';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.mediehuset.net/bakeonline/products')
      .then(response => response.json())
      .then(data => setProducts(data.items));
  }, []);

  return (
    <>
      <NavBar />
      <div>Products page</div>
      {products.map((product, index) => (
        <Card key={index} product={product} />
      ))}
      <Footer />
    </>
  );
}

export default Products;
