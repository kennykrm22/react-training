import React from "react";
import { IconButton, Typography } from "@mui/material";
import { FavoriteSharp } from "@mui/icons-material";

const QuotesFavsList = ({ favquotes, toggleItemInLocalStorage }) => {
  //const fav =

  return (
    <>
      {favquotes.map((item) => (
        <div key={item._id}>
          <Typography variant="h5" align="right">
            {item?.content}
          </Typography>
          <Typography variant="h5" align="right">
            {item?.author}
          </Typography>
          <IconButton size="large" onClick={toggleItemInLocalStorage(item)}>
            <FavoriteSharp htmlColor="red" />
          </IconButton>
        </div>
      ))}{" "}
    </>
  );
};

export default QuotesFavsList;
