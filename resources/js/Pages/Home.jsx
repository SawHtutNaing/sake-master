import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
export default function Home({ auth , cocktails }) {
    
let user = auth.user ; 

    return (
        <AuthenticatedLayout
            user={auth.user ? auth.user : null }
          
        >
            <Head title="Home" />

            
       
              <Box sx={{ width: '100%', 

                display:'flex',
                justifyContent:"center" ,
                marginTop:'5rem'

              }}
                
              >
      <Grid container  
      sx={{ width: '75%' }}
      
      
      rowSpacing={5} columnSpacing={6} >
      {
                cocktails.map((el , index )=>

      <Grid item xs={4} key={index} >
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="30"
          image={`${el.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {el.name}
          </Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
                   

       {user ?   <Button size="large" 
        className='w-full'
        color="primary" href={route('cocktails.show',el.id)}>
   Order
   
        </Button> : ''}
      </CardActions>
    </Card>
    
    
    </Grid>
                )
             }
      
      </Grid>
    </Box>
          
        </AuthenticatedLayout>
    );
}
