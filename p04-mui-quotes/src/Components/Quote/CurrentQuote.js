import { Typography } from "@mui/material";
import React from 'react'
import { QuotePaper } from "./Quotes.styles";


const CurrentQuote = ({quote}) => {
  
  
  return <QuotePaper>
    <Typography variant="h3">
    {quote.content}
    </Typography>

    <Typography variant="h5" align="right">
    {quote.author} - {new Date().getFullYear(quote.dateAdded)}
    </Typography>

    <Typography variant="h5" align="right">
    {quote.tags}
    </Typography>

  </QuotePaper>;
};

export default CurrentQuote;
