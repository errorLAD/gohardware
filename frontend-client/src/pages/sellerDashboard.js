import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

//custom-hook
import useForm from "../hooks/forms";

import ItemDialog from "../components/ItemDialog";
import HardwareshopInfo from "../components/HardwareshopInfo";
import HardwareshopItems from "../components/HardwareshopItems";
import SearchBar from "../components/SearchBar";
import { addItem } from "../redux/actions/dataActions";

//
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineNotification } from "react-icons/ai";



const useStyles = makeStyles((theme) => ({
  ...theme.spreadThis,
  button: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    width: "40%",
    margin: "40px 0 0 30%",
    "&:hover": {
      backgroundColor: "#5a5c5a",
    },
  },
}));

export default function SellerDashboard() {
  const classes = useStyles();
  const sellerData = useSelector((state) => state.auth);
  const { items } = sellerData;
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
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState({});
  const { inputs, handleInputChange } = useForm({
    title: "",
    description: "",
    price: "",
  });

  const handleFileSelect = (event) => {
    setImage(event.target.files[0]);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    inputs.title = "";
    inputs.description = "";
    inputs.price = "";
    setImage(null);
    setOpen(false);
  };

  const handleSubmit = () => {
    const itemData = new FormData();
    itemData.append("image", image);
    itemData.append("title", inputs.title);
    itemData.append("description", inputs.description);
    itemData.append("price", inputs.price);
    dispatch(addItem(itemData)); // eslint-disable-next-line
    handleClose();
  };

  const handleSearch = (value) => {
    // Variable to hold the original version of the list
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];

    // If the search bar isn't empty
    if (value !== "") {
      // Assign the original list to currentList
      currentList = itemsState;

      newList = currentList.filter((item) => {
        const lc = item.title.toLowerCase();
        const filter = value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list
      newList = itemsState;
    }
    // Set the filtered state based on what our rules added to newList
    setFilteredItemsState(newList);
  };

  return (
    <>
      <HardwareshopInfo {...sellerData} />
  <div class="bg-gray-50">
  <div class="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
  <SearchBar page="items" handleSearch={handleSearch} />
    <div class="mt-8  lg:mt-0 lg:flex-shrink-0">
    <p class="flex text-lg  font-normal text-gray-600  tracking-wide text-right  flex">
 <span class="py-4"></span> ADD | EDIT | DELETE | ITEMS IN YOUR SHOP
    </p>
    <img class="block mx-auto h-5 w-40 rounded-full sm:mx-0 sm:shrink-0" src="https://imgur.com/oyNiuFx.png" alt="Woman's Face"/>
    
    </div>
  </div>
</div>
<div class="">
<HardwareshopItems items={filteredItemsState} />
</div>
<div class="py-4">
      <Button style={{
              backgroundColor: "#000000",
              color:"#FFFFFF"
          }} 
          fullWidth className={classes.button} onClick={handleOpen}>
        Add Item
      </Button>
      <ItemDialog
        open={open}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        handleFileSelect={handleFileSelect}
        inputs={inputs}
        handleInputChange={handleInputChange}
      />
      </div>
    </>
  );
}
