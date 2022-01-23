import {useEffect, useState} from "react"
import * as React from 'react';
import {
    Card,
    CardHeader,
    Avatar,
    IconButton,
    CardMedia,
    CardContent,
    CardActions,
    Typography, Grid,
} from '@mui/material'
import {red} from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'

const Product = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
            .then((res) => res.json())
            .then((items) => setProducts(items));
    }, [])
    return (
        <Grid container spacing={2}>
            {
                products !== undefined && products.map(item => {
                    return (<>
                            <Grid item xs={4}>
                                <Card sx={{maxWidth: 345}}>
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                                                P
                                            </Avatar>
                                        }
                                        title={item.title}
                                        subheader={item.category}
                                    />
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={item.image}
                                        alt={item.title}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.description.slice(1, 120)}
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="add to favorites">
                                            <FavoriteIcon/>
                                        </IconButton>
                                        <IconButton aria-label="share">
                                            <ShareIcon/>
                                        </IconButton>
                                        <CardContent>
                                            <Typography>
                                                Rating : {item.rating.rate}
                                            </Typography>
                                            <Typography>
                                                Total Rating : {item.rating.count}
                                            </Typography>
                                        </CardContent>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </>
                    )
                })
            }
        </Grid>
    );
}
export default Product