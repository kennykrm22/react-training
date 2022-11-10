import { Grid, IconButton, Typography } from '@mui/material'
import React,{useState, useEffect} from 'react'
import Current from './CurrentQuote'
import { useTimer } from "../Hooks/Timer";
import { SkipNext, FavoriteBorderOutlined,FavoriteSharp } from '@mui/icons-material';
import { QuoteActions, QuoteContainer, QuoteListContainer } from './Quotes.styles'
import QuotesFavsList from './QuotesFavsList';
import Axios from "axios";


const Quotes = () => {
  const [quote, setQuote]= useState('');
  const [isMarked, setMarked]= useState(false);
  const { pause, reset, running, seconds, start } = useTimer();

  const getNextQuote = async() =>{
    const result = await Axios.get('https://api.quotable.io/random')
    setQuote(result.data);
    console.log(result.data)
  }

  const [favquotes, setfavQuotes] = useState(() => {
    const ls = localStorage.getItem("favquotes");
    if (ls) return JSON.parse(ls);
    else return [];
  });

  const toggleItemInLocalStorage = (id) => () => {
    const isMarked = favquotes.includes(id);
    setMarked(isMarked);
    if (isMarked) setfavQuotes((prev) => prev.filter((b) => b !== id));
    else setfavQuotes((prev) => [...prev, id]);
  };

  useEffect(() => {
    if(seconds===30) {getNextQuote();}
  },[seconds]);


  useEffect(() => {
    localStorage.setItem("favquotes", JSON.stringify(favquotes));
  }, [favquotes]);

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <QuoteContainer>
            <QuoteActions>
              <div>
                <IconButton color="primary" onClick={running ? pause : start}>
                  {seconds}s
                </IconButton>
                <IconButton color="primary" size="large" onClick={reset}>
                  <SkipNext/>
                </IconButton>
              </div>
              <IconButton size="large"  onClick={toggleItemInLocalStorage(quote)} >
                {isMarked?<FavoriteSharp  htmlColor="red"/>:<FavoriteBorderOutlined  htmlColor="red"/>} 
              </IconButton>
            </QuoteActions>
            <Current quote={quote}/>
          </QuoteContainer>
        </Grid>

        <Grid item xs={4}>
          <QuoteListContainer>
            <Typography variant="h4">
              List of favorites quotes
            </Typography>
            <QuotesFavsList favquotes={favquotes} toggleItemInLocalStorage={toggleItemInLocalStorage} /> 
            
          </QuoteListContainer>
        </Grid>

      </Grid>

    </>
  )
}



export default Quotes

