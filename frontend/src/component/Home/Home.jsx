import React from 'react'
import {CgMouse} from 'react-icons/all'
import "./Home.css"
import Product from './product.jsx'
import MetaData from '../layout/MetaDeta.jsx'

const product={
  name:"Blus Tshirt",
  images:[{url:"https://i.ibb.co./DRST11n/1.webp"}],
  price:"123$",
  _id:"himanshu"
};

const Home = () => {
  return (
    <>
    <MetaData title="ECOMMERCE"/>
      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS</h1>
        <a href="#container">
          <button>
            Scroll
            <CgMouse />
          </button>
        </a>
      </div>
      <h2 className="homeheading">Featured Products</h2>
      <div className="container" id="container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </>
  );
  };

export default Home