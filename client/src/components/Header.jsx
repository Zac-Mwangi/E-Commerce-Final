import React from 'react'
import useStyles from '../styles'
import { Typography, Button, Grid, Container } from '@mui/material'
import SearchBar from 'material-ui-search-bar';
import AddIcon from '@mui/icons-material/Add';
import { NavLink } from 'react-router-dom'

export default function Header({ setProducts, nM }) {
    const classes = useStyles()

    function searchFunction(searchValue) {
        const itemsSearch = nM.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));
        setProducts(itemsSearch)
    }
    return (          

        <div>
            <div className={classes.container}>
                <Container maxWidth="sm">
                    <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                        E-Shop
                    </Typography>

                    <Typography variant='h5' align='center' color='textSecondary' paragraph>
                        {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto quasi sed odio reiciendis ratione sint harum, nam dolorem? Atque quidem in ratione molestias natus debitis quia et ipsa nihil magnam. */}
                    </Typography>

                    <div className={classes.button}>
                        <Grid container spacing={2} justify='center'>
                            <Grid item>
                                <Button variant='contained' color='primary'>
                                    ALL
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='primary'>
                                    LAPTOPS
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='contained' color='primary'>
                                    CLOTHING
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='primary'>
                                    LIQUOR
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='contained' color='primary'>
                                    SPORTING
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='primary'>
                                    HOUSING
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='contained' color='primary'>
                                    ELECTRONICS
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='primary'>
                                    BEAUTY
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" endIcon={<AddIcon />}>
                                    <NavLink to='/add'>ADD NEW</NavLink>
                                </Button>
                            </Grid>
                        </Grid>
                        <div style={{ marginTop: "20px" }}>
                            <SearchBar onChange={(value) => searchFunction(value)}
                                placeholder="Search Product Here..."
                            ></SearchBar>
                        </div>
                    </div>
                </Container>
            </div>



        </div>
    )
}
