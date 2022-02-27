import React, { useEffect, useState} from 'react'

export const Home = () => {

  const [result, setResult] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=4&sort=desc"
      );

      const data = await response.json();
      setResult(data);
    };
    getData();
  }, []);

  console.log(result)

  return (
    <div>
      <div>slider</div>
      <div>product feed</div>
    </div>
  )
}

export default Home