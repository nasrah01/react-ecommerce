import Products from "../components/Products/Products";
import { useSelector } from "react-redux";


const SearchResult = () => {

  const items = useSelector((state) => state.products.filter);

  console.log(items);
  return (
    <div>
      <h2>Search results</h2>
      {items.length > 0 ? <Products items={items} /> :  <div>Search not found</div>}
    </div>
  );
};

export default SearchResult;
