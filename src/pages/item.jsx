import { useSelector } from "react-redux";

const Item = () => {

  const itemSelection = useSelector((state) => state.products.item);

  console.log(itemSelection);

  return <div>{itemSelection.title}</div>;
};

export default Item;
