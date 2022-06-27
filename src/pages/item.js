import { useDispatch } from "react-redux";
import CurrencyFormat from "react-currency-format";
import { addToCart } from "../redux/reducers/cart";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";
import { urlFor } from "../client";

const Item = () => {
  const [itemDetails, setItemDetails] = useState(null);
  const [hasItem, setHasItem] = useState(false);
  const [selectedSize, setSize] = useState('');
  const [sizeError, setSizeError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[_type == "product" && slug.current == "${slug}"]{
            _id,
            image,
            department,
            title,
            price,
            details,
            rating,
            sizes
        }`
      )
      .then((data) => {
        setItemDetails(data[0]);
        setHasItem(true);
      })
      .catch((error) => console.log(error.message));
  }, [slug]);

  const dispatch = useDispatch();

  const addItemToCart = () => {
    if (itemDetails.sizes?.length > 0 && selectedSize === '') {
      setSizeError("Please select a size");
    } else {
      itemDetails["id"] = itemDetails._id;
      itemDetails["size"] = selectedSize;

      dispatch(addToCart(itemDetails));
    }
  };

  const handleChange = (e) => {
    setSizeError(null);
    const sizeValue = e.target.value;

    setSize(sizeValue);
  };

  return (
    <div className="item__container">
      {hasItem && (
        <div className="item">
          <div className="item__image">
            <img src={urlFor(itemDetails.image[0])} alt={itemDetails.title} />
          </div>
          <div className="item__description">
            <p className="item__department">
              {itemDetails.department.toUpperCase()}
            </p>
            <h2 className="item__title">{itemDetails.title}</h2>
            <div>
              {[...Array(itemDetails.rating)].map((star, index) => {
                index += 1;
                return (
                  <span className="item__star" key={index}>
                    &#9733;
                  </span>
                );
              })}
            </div>
            <CurrencyFormat
              className="item__price"
              value={itemDetails.price}
              prefix={"£"}
              displayType={"text"}
            />
            {sizeError && <div className="item__size--error">{sizeError}</div>}
            {itemDetails.sizes && (
              <div className="item__sizing">
                <select name="size" id="sizes" onChange={handleChange}>
                  <option value="">Select Size</option>
                  {itemDetails.sizes.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div className="item__details">
              <h3>Product details</h3>
              <p>{itemDetails.details}</p>
            </div>
            <div className="item__checkout--btn">
              <button onClick={addItemToCart} className="btn btn-1">
                Add to basket
              </button>
              <Link to="/checkout" style={{ textDecoration: "none" }}>
                <button className="btn btn-2">checkout</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Item;
