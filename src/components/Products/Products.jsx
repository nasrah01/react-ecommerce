import * as React from "react";
import Product from './Product';
import './products.css';
import Grid from "@mui/material/Grid";
//import { IndeterminateCheckBox } from "@mui/icons-material";

const Products = ({products}) => {
  
  return (
    <div className="products__grid">
      <Grid container justify="center" spacing={4}>
        {products.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Product item={item} key={index} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
