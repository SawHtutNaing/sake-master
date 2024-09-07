import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useRef, useState, useEffect } from 'react';
import { Image } from 'mui-image';
import { Button, Container, Typography } from '@mui/material';
import { checkTotal } from '@/utilities/utilities';
import Swal from 'sweetalert2'


// Utility function to transform ingredient string to array
function changeArray(string) {
    const parsed = JSON.parse(string);
    let array = Object.keys(parsed);
    array = array.filter((el) => el !== "");
    return array;
} 

    

const OrderCocktails = ({ auth ,cocktail }) => {
    const [ingredients, setIngredients] = useState(JSON.parse(cocktail.ingredient));
    const [count, setCount] = useState(0); 
    let [formData,setFormData] = useState([]);
    let user = auth.user
    function handleSubmit(e)
    {
        e.preventDefault();
        let value = {
            ingredients: formData ,price: cocktail.price , category_id: cocktail.category_id ,id: cocktail.id , image: cocktail.image 
        }
        return router.post('/orders',value);
    }

    useEffect(() => {
        // Calculate the number of ingredients and set it as the count
        const ingredientCount = Object.keys(ingredients).filter(index => index !== "").length;
        setCount(ingredientCount);
    }, [ingredients]);


    
    
    function handleChange(event) {
        const name = event.target.name;
        const value = Number(event.target.value);
    
        // Get only the values (as numbers) of the current formData state
        const currentValues = formData.map(el => Number(el.value));
    
        // Check if this change is allowed
        const { status, nearlyFullFill } = checkTotal(currentValues, value);
    
        if (status) {
            // Find if the ingredient already exists in formData
            const existingIngredient = formData.find(el => el.name === name);
    
            if (existingIngredient) {
                // Update the existing ingredient value
                setFormData(
                    formData.map(el =>
                        el.name === name ? { ...el, value: value } : el
                    )
                );
            } else {
                // Add a new ingredient if it doesn't exist in formData
                setFormData([...formData, { name: name, value: value }]);
            }
    
            // If nearly full, show a warning
            if (nearlyFullFill) {
                // Swal.fire(`Nearly full, only ${nearlyFullFill}% left.`);
            }
        } else {
            Swal.fire("Cannot add, it's full.");
            // Reset input value to 0 if over the limit
            event.target.value = 0;
        }
    }
    




    const elements = Object.keys(ingredients).map((index) => {
        if (index !== "") {
            const el = ingredients[index];
            return (
                <Typography className='text-black' key={index}>
                    <div className='flex justify-between items-center'>
                        <Typography width='4rem'>{index}</Typography>
                        <div className='w-40 py-3 border border-black mx-auto flex flex-col justify-around items-center'>
                            <div className='flex justify-center'>
                                <input
                                    name={
                                        index
                                    }
                                max='100'
                                min ="0"
                                    type="number"
                                    className=' w-24 h-10 mb-1 px-3'
                                    onChange={handleChange
                                      
                                    }
                                />
                            </div>
                            {/* <div className='w-11/12 mx-auto h-0.5 bg-black'></div> */}
                            {/* <div className='flex justify-center mt-1'>
                                <input
                                    type="text"
                                    className='w-10 h-10'
                                    value={count}
                                    readOnly
                                />
                            </div> */}
                        </div>
                    </div>
                </Typography>
            );
        }
        return null;
    });

    
    return (
        <Container
            sx={{
                margin: "auto",
                width: '40rem',
                marginTop: '3rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: "space-between",
                padding: '3rem'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    width: '400px',
                    justifyContent: "space-around",
                    alignItems: 'end'
                }}
            >
                <Box>
                    <Image
                        src={`${cocktail.image}`}
                        width={200}
                        className="ms-auto"
                    />
                </Box>
                <Box>
                    <Typography textAlign='center' marginBottom='1rem'>
                        {cocktail.name}
                    </Typography>
                    <Typography textAlign='center' marginBottom='1rem'>
                        {cocktail.price} ¥
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ width: '400px' }}>
                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col justify-between gap-y-3 mt-4'
                    id='form'
                >
                    {elements}
                    <Button variant="contained" size='small' type="submit">
                        Order
                    </Button>
                </form>
            </Box>
        </Container>
    )
}

export default OrderCocktails;