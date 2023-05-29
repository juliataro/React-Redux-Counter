import React , {useState}from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import {decrement,increment, incrementByAmount, selectCount} from './counterSlice';

export function CounterComponent()  {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('3')
  
  return (  
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={5}>
      <Button 
      onClick={() => dispatch(increment())}
      variant="contained">+</Button>
      
      </Grid>
      <Grid item xs={2}>{count}</Grid>
      <Grid item xs={5}>
      <Button 
      aria-label="Decrement value"
      onClick={() => dispatch(decrement())}
      variant="contained">-</Button>
      </Grid>
     
      {/*Increment Amount*/}
      {/*Increment Amount*/}
      <Grid item xs={4}>
      <TextField 
      value={incrementAmount}
      onChange={e=>setIncrementAmount(e.target.value)} 
      id="outlined-basic"  
      variant="outlined" />

      </Grid>
      <Grid item xs={8}>
      <Button 
      
      onClick={() =>
        dispatch(incrementByAmount(Number(incrementAmount) || 0))
      }
    >
      Add Amount</Button>
      </Grid>
    </Grid>
  </Box>
  );
}
 
