
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Image } from 'mui-image';

const Orders = ({ auth , orders }) => {
    
  return (
<AuthenticatedLayout
 user={auth.user}
>


<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
{
    orders.map((el,index)=>{
        return       <ListItem key={index}>
        <ListItemAvatar>
          
         <Image
           src={`${el.image}?w=164&h=164&fit=crop&auto=format`}
           width={100}
           className="ms-auto"
         >
       
         </Image>
          
        </ListItemAvatar>
        <ListItemText primary={el.cocktail.name} secondary={`${el.price}  ¥` }/>
      </ListItem>
    })
}
     
   
    </List>


</AuthenticatedLayout>
  )
}

export default Orders