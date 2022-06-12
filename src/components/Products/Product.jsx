import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./products.css";
import CurrencyFormat from "react-currency-format";
import { urlFor } from "../../client";

const Product = ({ item }) => {

  const theme = createTheme({
    typography: {
      fontSize: 12,
    },
  });

  function truncateString(string, limit) {
    if (string.length > limit) {
      return string.substring(0, limit) + "...";
    } else {
      return string;
    }
  }

  return (
    <div>
      <Card sx={{ border: 0, boxShadow: 1, borderRadius: 1 }} variant="outlined">
        <Link to={`/item/${item.slug.current}`} style={{ textDecoration: "none" }}>
        <ThemeProvider theme={theme}>
          <CardMedia component="img" height="290" image={urlFor(item.image[0])} alt={item.title}/>
        </ThemeProvider>
        <CardContent>
          <Typography gutterBottom variant="body2" color="text.primary" component="div" sx={{ fontSize: 16 }}>
            {truncateString(item.title, 30)}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.primary" component="div" >
            {[...Array(item.rating)].map((star, index) => {
              index += 1;
              return <span className="item__star" key={index}>&#9733;</span>;
            })}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: 20 }}>
            <CurrencyFormat value={item.price.toFixed(2)} prefix={"£"} displayType={"text"} />
          </Typography>
        </CardContent>
        </Link>
      </Card>
    </div> 
  );
};

export default Product;
