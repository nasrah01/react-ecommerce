import * as React from "react";
import Product from './Product';
import './products.css';
import Grid from "@mui/material/Grid";
//import { IndeterminateCheckBox } from "@mui/icons-material";

const Products = ({items}) => {

  return (
    <div className="products__grid">
      <Grid container justify="center" spacing={4}>
        {items.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
            <Product item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
