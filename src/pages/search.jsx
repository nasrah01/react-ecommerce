import React from "react";
import { useSelector } from "react-redux";
import { selectFilteredItems } from "../redux/reducers/filterAction";

const SearchResult = () => {

  const items = useSelector(selectFilteredItems);
  console.log(items);

  return (
    <div>
      <h2>
        <span>{items.length}</span>
      </h2>
    </div>
  );
};

export default SearchResult;
