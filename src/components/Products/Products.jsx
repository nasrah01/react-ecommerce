import * as React from "react";
import Product from './Product';
import './products.css';
import Grid from "@mui/material/Grid";

const Products = ({products}) => {

  console.log(products)
  return (
    <div className="products__grid">
      <Grid container justify="center" spacing={4}>
        {products.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Product item={item} key={item.id} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
