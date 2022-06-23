import Products from "../components/Products/Products";
import { FcSearch } from 'react-icons/fc';
import { useParams } from 'react-router-dom';
import { client } from '../client'
import { useState, useEffect } from 'react'


const SearchResult = () => {
  const [ itemResults, setResponse ] = useState([])
  const [ isLoaded, setIsLoaded ] = useState(false)

  const { term } = useParams()
  
  useEffect(() => {
    client
      .fetch(
        `*[_type == "product" && tags match "${term}"]{
            _id,
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
        setResponse(data)
        setIsLoaded(true)
      })
      .catch((error) => console.log(error.message));
  }, [term]);

  return (
    <div className="search__results">
      <h2>Search results for <span className="search__results--term">{term}</span></h2>
      {isLoaded && itemResults.length === 0 ? (
        <div className="search__error">
          <h3>Oops nothing found! <br /> try again</h3>
          <FcSearch size={64}/>
      </div>
      ) :
      ( 
       <Products products={itemResults} /> 
      )}
    </div>
  );
};

export default SearchResult;
