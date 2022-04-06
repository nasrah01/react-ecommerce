import Products from '../components/Products/Products';

const Department = ({products}) => {

  return(
    <div className="department">
      <Products products={products}/>
    </div>
  )
}

export default Department;