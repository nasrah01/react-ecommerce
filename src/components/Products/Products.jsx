import * as React from "react";
import Product from './Product';
import './products.css';
import Grid from "@mui/material/Grid";

const Products = ({products}) => {

  return (
    <div className="products__grid">
      <Grid
        container
        direction="row-reverse"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        {products?.map((item, index) => (
          <Grid
            key={index}
            item
            xs={10}
            sm={6}
            md={4}
            lg={3}
          >
            <Product item={item} />
          </Grid>
        ))}  
      </Grid>
    </div>
  );
};

export default Products;
