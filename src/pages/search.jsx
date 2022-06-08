import Products from "../components/Products/Products";
import { FcSearch } from 'react-icons/fc';
import { useParams } from 'react-router-dom';
import { client } from '../client'
import { useState, useEffect } from 'react'


const SearchResult = () => {
  const [ itemResults, setResponse ] = useState([])
  const [ isFound, setIsFound ] = useState(false)

  const { term } = useParams()
  
  useEffect(() => {
    client
      .fetch(
        `*[_type == "product" && tags match "${term}"]{
            image,
            department,
            title,
            slug{
              current,
            },
            price,
            details,
            rating
        }`
      )
      .then((data) => {
        console.log(data[0]);
        setResponse(data)
        setIsFound(true)
      })
      .catch((error) => console.log(error.message));
  }, [term]);

  return (
    <div className="search__results">
      <h2>Search results</h2>
      {isFound && itemResults.length > 0 ? <Products products={itemResults} /> :  
      <div className="search__error">
        <h3>Oops nothing found! <br /> try again</h3>
        <FcSearch size={64}/>
      </div>}
    </div>
  );
};

export default SearchResult;
