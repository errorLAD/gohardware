import React from "react";
import { useDispatch } from "react-redux";

//m-ui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

// Icons
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

import { FaPlusSquare, } from "react-icons/fa";
import {
  addToCart,
  deleteCartItem,
  removeCartItem,
} from "../redux/actions/dataActions";
import MyButton from "../util/MyButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    marginTop: "10px",
  },
  itemTotal: {
    marginLeft: "62%",
    marginTop: "10px",
  },
  imgCover: { height: 184, width: 270 },
}));

export default function CartItem(props) {
  const classes = useStyles();
  const {
    quantity,
    itemId: { title, price, description, imageUrl, _id },
  } = props;
  const imageUrlSplit = imageUrl.split("\\");
  const finalImageUrl = `${process.env.REACT_APP_SERVER_URL}/${imageUrlSplit[0]}/${imageUrlSplit[1]}`;

  const dispatch = useDispatch();

  const handleAddItem = () => {
    const itemData = {
      itemId: _id,
    };
    dispatch(addToCart(itemData));
  };

  const handleDeleteItem = () => {
    const itemData = {
      itemId: _id,
    };
    dispatch(deleteCartItem(itemData));
  };

  const handleRemoveItem = () => {
    dispatch(removeCartItem(_id));
  };

  return (
    <>
  <div class="hidden md:block">
  <div class="py-2">
  <div class="max-w-md mx-auto bg-gray-100 rounded-xl shadow-xl overflow-hidden md:max-w-4xl ">
  <div class="md:flex">
    <div class="md:shrink-0">
    <img src={finalImageUrl} height="184" width="180" alt="Item" /> </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-gray-900 font-semibold py-2">
      {title} </div>
      <p class=" text-slate-500">
      {description}
      </p>

  <div class="grid grid-cols-2 gap-4 py-2">
  <div class="...">
  <span class="text-black py-2">
  Rs.{price} x {quantity}
  </span>
  </div>
  <div class="...">
  <MyButton tip="Remove Item" onClick={handleRemoveItem}>
              <RemoveIcon style={{ color: "#404040" }} />
              </MyButton>
              <MyButton tip="Add Item" onClick={handleAddItem}>
                <AddIcon style={{ color: "#202020" }} />
              </MyButton>
              <MyButton tip="Delete Item" onClick={handleDeleteItem}>
                <DeleteIcon style={{ color: "#f44336" }} />
              </MyButton>
  </div>
</div>
<p class=" text-slate-500">
<span class="tag is-link is-medium">
= Rs. {price * quantity}
</span>


      </p>

      </div>
  </div>
</div>
</div>
</div>


 <div class="lg:hidden lg:block">
  <div class="py-2">
 <div class="p-4 bg-gray-100 max-w-sm mx-auto bg-white rounded-xl shadow-2xl  flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-16 w-16" src={finalImageUrl} alt="item"/>
  </div>
  <div>
    <div class="text-xl font-medium text-black">{title}</div>
   
    <p class="text-slate-500"> <small> {description} </small></p>
     
    <div class="grid grid-cols-2 gap-4">
     <div class="py-3">
     Rs.{price} x {quantity}
     </div>
     <div>
      
     <MyButton tip="Remove Item" onClick={handleRemoveItem}>
              <RemoveIcon style={{ color: "#404040" }} />
              </MyButton>
              <MyButton tip="Add Item" onClick={handleAddItem}>
                <FaPlusSquare/>
              </MyButton>
      
     </div>
    </div>
    <span class="tag is-link is-medium">
     Rs. {price * quantity}
</span>
<span class="px-16">
<MyButton tip="Delete Item" onClick={handleDeleteItem}>
                <DeleteIcon style={{ color: "#202020" }} />
              </MyButton>
</span>
  </div>
</div>
</div>
</div>
    </>
  );
}
