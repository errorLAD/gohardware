import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Redirect } from "react-router-dom";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import useForm from "../hooks/forms";


import HomeStart from "../components/HomeStart";
import SearchBar from "../components/SearchBar";
import SearchbarItem from "../components/SearchbarItem";
import Spinner from "../util/spinner/spinner";
import HardwareshopContent from "../components/HardwareshopContent";
import HardwareshopItems from "../components/HardwareshopItems";
import CategoriesItem from "../components/CategoriesItem";
import BrandItem  from "../components/BrandItem";

import { addItem } from "../redux/actions/dataActions";

const useStyles = makeStyles(() => ({
    center: {
      textAlign: "center",
    },
  
  }));

  
const Allcategoriessitem = () => {
    const classes = useStyles();
    const { loading } = useSelector((state) => state.data);
    const {
      account: { role },
      authenticated,
    } = useSelector((state) => state.auth);
    const [locationStatus, setLocationStatus] = useState(
      localStorage.getItem("location") ? true : false
    );
  
    // let latlng = localStorage.getItem("latlng");
  
    // if (latlng) {
    //   const latlngArray = latlng.split(", ");
    //   dispatch(fetchRestaurantsByAddress(latlngArray[0], latlngArray[1]));
    // }
  
    let hardwareshopMarkup = loading ? <Spinner /> : <HardwareshopContent />;
    
  
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
          const lc = item.tag.toLowerCase();
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
  
    
    
    
    
    
    return( 
        <> 
             
           
             <SearchBar page="home" action={setLocationStatus} />

     <div class="py-2 px-2">
           {locationStatus ? (
                  hardwareshopMarkup
                ) : (
                  <Typography variant="body1" className={classes.center} noWrap>
                    Enter your location to view nearby Hardware | Building Material shop
                  </Typography>
                )}
        </div>
        </>
    )
}
export default Allcategoriessitem;