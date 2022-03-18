import * as React from "react";
import Product from './Product';
import './products.css';

const Products = ({products}) => {

  console.log(products)
  return (
    <div>
      {products.map((item) => (
        <Product item={item}/>
      ))}
    </div>
  );
};

export default Products;
