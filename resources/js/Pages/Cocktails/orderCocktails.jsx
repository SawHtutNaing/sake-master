import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

const orderCocktails = ({cocktail}) => {
        console.log(cocktail);
        
        let ingredients = JSON.parse(cocktail.ingredient);
        
        
    
  return (
    <div>
     <Item>
            {cocktail.name}
          </Item>
        
          <img
        className=' h-40' 
        
        src={`${cocktail.image}?w=164&h=164&fit=crop&auto=format`}
        
        loading="lazy"
      />
      <h1>
        {cocktail.price}
      </h1>
    
    </div>
  )
}

export default orderCocktails