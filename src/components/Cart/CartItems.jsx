const CartItems = ({title, image}) => {

  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt="cart item" height={400} width={400}/>
    </div>
  )
};

export default CartItems;