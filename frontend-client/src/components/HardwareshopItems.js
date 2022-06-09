import React from "react";

import ItemCard from "../components/ItemCard";
import { useSelector } from "react-redux";

//material-ui
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  para: {
    fontSize: "x-large",
    marginLeft: "32%",
  },
  paraSeller: {
    fontSize: "x-large",
    marginLeft: "28%",
  },
});

function HardwareshopItems(props) {
  const classes = useStyles();
  const { items } = props;
  const {
    account: { role },
  } = useSelector((state) => state.auth);

  return (
    <Grid item container direction="row">
      <Grid item xs={12} sm={1} />
      <Grid item xs={12} sm={10}>
        <Grid container spacing={8}>
          {items ? (
            items.length > 0 ? (
              items.map((item) => (
                <Grid item xs={12} sm={4} key={item._id}>
                  <ItemCard {...item} />
                </Grid>
              ))
            ) : role === "ROLE_SELLER" ? (
              
          <div class="text-center">
              <img class="block mx-auto h-30 w-40 rounded-full sm:mx-0 sm:shrink-0" src="https://imgur.com/YgLUU5y.png" alt="Woman's Face"/>
    
             <p class=" max-w-3xl text-l leading-4   text-gray-600 px-8">
             No Items present, start adding Items to get your first order.
             </p>
         </div>

      
            ) : (

             
              <p class="px-48 py-12    text-gray-900 sm:text-">
              <span class="tag is-warning is-light is-medium">  No Items present to order, Come back Later.</span>
              </p>
            )
          ) : null}
        </Grid>
      </Grid>
      <Grid item xs={12} sm={1} />
    </Grid>
  );
}

export default React.memo(HardwareshopItems);
