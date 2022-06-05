import { ConnectedTvOutlined } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { client } from '../client';
import Products from '../components/Products/Products';

const Department = () => {

  const [ category, setDepartmentProducts ] = useState()
  const department = "Kids";

   useEffect(() => {
     client
       .fetch(
         `*[_type == "product" && department == "${department}"]{
            image,
            department,
            title,
            slug,
            price,
            details,
            rating
        }`
       )
       .then((data) => {
         setDepartmentProducts(data);
         console.log(data);
       })
       .catch((error) => console.log(error.message));
   }, []);


  console.log(category)

  return(
    <div className="department">
      <Products />
    </div>
  )
}

export default Department;