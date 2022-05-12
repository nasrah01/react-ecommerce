import Products from "../components/Products/Products";
import { useSelector } from "react-redux";
import { FcSearch } from 'react-icons/fc';


const SearchResult = () => {

  const items = useSelector((state) => state.products.filter);

  return (
    <div className="search__results">
      <h2>Search results</h2>
      {items.length > 0 ? <Products items={items} /> :  
      <div className="search__error">
        <h3>Oops nothing found! <br /> try again</h3>
        <FcSearch size={64}/>
      </div>}
    </div>
  );
};

export default SearchResult;
