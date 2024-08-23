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
  
export default function Hello({ auth , cocktails }) {
    
    // function click(el){
    //     let id = el.id ;
    //     console.log('hello');
    //     route('cocktails.show',id)
    // }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Home" />

            
       
              <Box sx={{ width: '100%', 

                display:'flex',
                justifyContent:"center"

              }}
                
              >
      <Grid container  
      sx={{ width: '75%' }}
      
      
      rowSpacing={1} columnSpacing={6} >
      {
                cocktails.map((el , index )=>

                <Grid item xs={5} key={index} >
                    <Link href={route('cocktails.show',el.id)}>
                    <Item>
            {el.name}
          </Item>
        
          <img
        srcSet={`${el.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`${el.image}?w=164&h=164&fit=crop&auto=format`}
        
        loading="lazy"
      /></Link>
        
          
        </Grid>

    

                )
             }
      
      </Grid>
    </Box>
          
        </AuthenticatedLayout>
    );
}
