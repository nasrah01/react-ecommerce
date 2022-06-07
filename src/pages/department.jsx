import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { client } from '../client';
import Products from '../components/Products/Products';

const Department = () => {

  const [ category, setDepartmentProducts ] = useState()

  const { id } = useParams()

   useEffect(() => {
     client
       .fetch(
         `*[_type == "product" && department == "${id}"]{
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
         setDepartmentProducts(data);
       })
       .catch((error) => console.log(error.message));
   }, [id]);

  return(
    <div className="department">
      <Products products={category}/>
    </div>
  )
}


export default Department;