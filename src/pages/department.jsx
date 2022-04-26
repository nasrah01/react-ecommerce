import Products from '../components/Products/Products';
import { useSelector } from "react-redux";

const Department = () => {

  const items = useSelector((state) => state.products.departmentItems);

  return(
    <div className="department">
      <Products items={items}/>
    </div>
  )
}

export default Department;