import React, { useEffect, useState } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";

//material-ui
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Spinner from "../util/spinner/spinner";
import HardwareshopInfo from "../components/HardwareshopInfo";
import HardwareshopItems from "../components/HardwareshopItems";
import SearchBar from "../components/SearchBar";
import { fetchHardwareshop } from "../redux/actions/dataActions";

export default function Hardwareshop(props) {
  const restId = props.location.state.restId;
  const { loading } = useSelector((state) => state.data);
  const hardwareshop = useSelector((state) => state.data.hardwareshop);
  const { items } = useSelector((state) => state.data.hardwareshop);
  const dispatch = useDispatch();

  useEffect(() => {
    if (items) {
      setItemsState(items);
      setFilteredItemsState(items);
    }
  }, [items]);

  const [itemsState, setItemsState] = useState(items ? [] : null);
  const [filteredItemsState, setFilteredItemsState] = useState(
    items ? [] : null
  );

  const handleSearch = (value) => {
    // Variable to hold the original version of the list
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];

    // If the search bar isn't empty
    if (value !== "") {
      // Assign the original list to currentList
      currentList = itemsState;

      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter((item) => {
        // change current item to lowercase
        const lc = item.title.toLowerCase();
        // change search term to lowercase
        const filter = value.toLowerCase();
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list
      newList = itemsState;
    }
    // Set the filtered state based on what our rules added to newList
    setFilteredItemsState(newList);
  };

  useEffect(() => {
    console.log("in useEffect hardwareshop");
    dispatch(fetchHardwareshop(restId));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <HardwareshopInfo {...hardwareshop} />
          <div class="py-4">
          <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 gap-4">
                <div class="...">
                <p class="mt-2 text-xl leading-8 font-bold  text-gray-900 sm:text-xl">
              DEAL OF THE DAY
 </p>
 <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"></p>
  
                </div>
                
                <div class="...">
                <SearchBar page="items" handleSearch={handleSearch} />
                </div>
          </div>
          </div>
          </div>
            <HardwareshopItems items={filteredItemsState} />

        </>
      )}
    </>
  );
}
