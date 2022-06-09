import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//m-ui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

// Icons
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import  { AiOutlineRise}  from "react-icons/ai";
import { AiOutlineFolder } from "react-icons/ai";
import { FaLongArrowAltRight} from "react-icons/fa";
//custom-hook
import useForm from "../hooks/forms";

import MyButton from "../util/MyButton";
import { deleteItem, editItem } from "../redux/actions/dataActions";
import ItemDialog from "../components/ItemDialog";
import { addToCart } from "../redux/actions/dataActions";

import { AiOutlineScissor } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRupeeSign,FaSign,FaPenSquare } from "react-icons/fa";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    height: "180",
    width: "60%",
  },
  snackbar: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function ItemCard(props) {
  const classes = useStyles();
  const { title, imageUrl, description, price, _id } = props;
  const imageUrlSplit = imageUrl.split("\\");
  const finalImageUrl = `${process.env.REACT_APP_SERVER_URL}/${imageUrlSplit[0]}/${imageUrlSplit[1]}`; //3002 - server port

  const dispatch = useDispatch();

  const {
    authenticated,
    account: { role },
  } = useSelector((state) => state.auth);
  const { addCartSuccess } = useSelector((state) => state.data);

  const [open, setOpen] = useState(false);
  const [openSnackBar, setSnackBar] = useState(false);
  const [image, setImage] = useState(null);
  const { inputs, handleInputChange } = useForm({
    title: "",
    description: "",
    price: "",
  });

  const handleFileSelect = (event) => {
    setImage(event.target.files[0]);
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
    if (image !== null) itemData.append("image", image);
    else itemData.append("image", imageUrl);
    itemData.append("title", inputs.title);
    itemData.append("description", inputs.description);
    itemData.append("price", inputs.price);
    dispatch(editItem(itemData, _id)); // eslint-disable-next-line
    handleClose();
  };

  const openEdit = () => {
    inputs.title = title;
    inputs.price = price;
    inputs.description = description;
    setOpen(true);
  };

  const handleDelete = () => {
    dispatch(deleteItem(_id));
  };

  const handleCart = () => {
    const itemData = {
      itemId: _id,
    };
    dispatch(addToCart(itemData));
  };

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      setSnackBar(false);
      return;
    }

    setSnackBar(false);
  };

  const handleSnackBar = (event, reason) => {
    if (addCartSuccess || addCartSuccess == null) setSnackBar(true);
  };

  return (
    <>
<div class="hidden md:block">
<div class="py-12">
<div class="max-w-sm rounded-lg  overflow-hidden shadow-2xl bg-gray-100">
  
       <CardMedia
          className={classes.cover}
          image={finalImageUrl}
          title="Item order"
        />
  <div class="px-6 py-4">
    <div class="font-bold text-l">
    <span class="flex">
       <FaSign />
       <span class="px-2">
      {title}</span></span>
    <img class="block mx-auto h-2 w-60 rounded-full" src="https://imgur.com/ux9PKcU.png" alt="Woman's Face"/>
    </div>
    <p class="text-gray-700  py-2 flex tx-sm">
     <span class="text-grat-900"><FaRupeeSign/></span>{price}/-Rs
  
    </p>

    <p class="text-gray-700  flex">
    <span class="flex"><FaPenSquare/> <span class="px-2">
      <small>{description}</small></span></span>
    
    </p>
           {role === "ROLE_SELLER" ? (
            <div style={{ textAlign: "center" }}>
              <MyButton tip="Edit" onClick={openEdit}>
                <AiOutlineScissor /> 
              </MyButton>
              <MyButton tip="Delete" onClick={handleDelete}>
               <AiOutlineDelete />
              </MyButton>
            </div>
          ) : authenticated ? (
            <div class="py-4">
            <button type="button" class="inline-flex items-center px-8 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => {
              handleCart();
              handleSnackBar();
            }}
            over
            >
     
            <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Add to Cart
          </button>
          </div>
          
          ) : (
            <Link to="/login">
             <div class="py-4">
             <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    
            over
            >
     
            <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Add to Cart
          </button>
              </div>
            </Link>
          )}
        </div>
 
      <ItemDialog
        open={open}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        handleFileSelect={handleFileSelect}
        inputs={inputs}
        handleInputChange={handleInputChange}
      />
      <div className={classes.snackbar}>
        <Snackbar
          open={openSnackBar}
          autoHideDuration={3600}
          onClose={handleCloseSnackBar}
        >
          <Alert
            onClose={handleCloseSnackBar}
            style={{ backgroundColor: "#157a21" }}
          >
            Item added to cart!
          </Alert>
        </Snackbar>
      </div>
</div>
</div>
</div>



<div class="lg:hidden lg:block">
  <div class="px-4 py-2">
<div class="max-w-sm rounded-lg  overflow-hidden shadow-2xl bg-gray-100">
  
  <CardMedia
     className={classes.cover}
     image={finalImageUrl}
     title="Item order"
   />
<div class="px-6 py-4">
<div class="font-bold text-l">
<span class="flex">
  <FaSign />
  <span class="px-2">
 {title}</span></span>
<img class="block mx-auto h-2 w-60 rounded-full" src="https://imgur.com/ux9PKcU.png" alt="Woman's Face"/>
</div>
<p class="text-gray-700  py-2 flex tx-sm">
<span class="text-grat-900"><FaRupeeSign/></span>{price}/-Rs

</p>

<p class="text-gray-700  flex">
<span class="flex"><FaPenSquare/> <span class="px-2">
 <small>{description}</small></span></span>

</p>
      {role === "ROLE_SELLER" ? (
       <div style={{ textAlign: "center" }}>
         <MyButton tip="Edit" onClick={openEdit}>
           <AiOutlineScissor /> 
         </MyButton>
         <MyButton tip="Delete" onClick={handleDelete}>
          <AiOutlineDelete />
         </MyButton>
       </div>
     ) : authenticated ? (
       <div class="py-4">
       <button type="button" class="inline-flex items-center px-8 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
       onClick={() => {
         handleCart();
         handleSnackBar();
       }}
       over
       >

       <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
         <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
       </svg>
       Add to Cart
     </button>
     </div>
     
     ) : (
       <Link to="/login">
        <div class="py-4">
        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

       over
       >

       <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
         <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
       </svg>
       Add to Cart
     </button>
         </div>
       </Link>
     )}
   </div>

 <ItemDialog
   open={open}
   handleClose={handleClose}
   handleSubmit={handleSubmit}
   handleFileSelect={handleFileSelect}
   inputs={inputs}
   handleInputChange={handleInputChange}
 />
 <div className={classes.snackbar}>
   <Snackbar
     open={openSnackBar}
     autoHideDuration={3600}
     onClose={handleCloseSnackBar}
   >
     <Alert
       onClose={handleCloseSnackBar}
       style={{ backgroundColor: "#157a21" }}
     >
       Item added to cart!
     </Alert>
   </Snackbar>
 </div>
</div>
</div>
</div>
    </>
  );
}
