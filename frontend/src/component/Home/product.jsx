import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';



const options={
    edit:false,
    color:"rgba(20,20,20,0.1",
    size:window.innerWidth<600?20:25,
    activeColor:"tomato",
    value:2.5,
    isHalf:true,
}

const Product = ({product}) => {
  return (
   <Link className="productCard" to={Product.id}>
   <img src={product.images[0].url}/>
   <p>{product.name}</p>
   <div>
    <ReactStars  {...options}/><span>256 Reviews</span>
   </div>
   <span>{product.price}</span>


   </Link>
  )
}

export default Product