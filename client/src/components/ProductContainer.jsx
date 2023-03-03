import React,{useState} from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
} from "@mui/material";
import useStyles from "../styles";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Box from "@material-ui/core/Box";
import { Rating } from "@mui/material";

import { NavLink } from 'react-router-dom'


export default function ProductContainer({ products, updateAfterDelete , setEditId }) {
  const classes = useStyles();

  function handleDelete(idd) {
    fetch("/api/products/" + idd, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => updateAfterDelete(idd));
  }

  return (
    <div style={{ marginTop: "20px", marginBottom: "20px" }}>
      <Container
        styles={{ padding: "20px 0" }}
        className={classes.cardGridS}
        maxWidth="md"
      >
        <Grid container spacing={4}>
          {products.map((card) => (
            <Grid item key={card._id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.image}
                  title={card.description}
                />

                <div style={{ backgroundColor: "#FFF" }}>
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      className={classes.multiLineEllipsis2}
                    >
                      {card.name}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h6"
                      className={classes.multiLineEllipsis}
                    >
                      {card.description}
                    </Typography>
                    <Box align="left" mb={1} borderColor="transparent">
                      <Rating value={card.rating} name="rating" />
                    </Box>
                    <div style={{ display: "flex" }}>
                      <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Ksh.{card.price}
                      </Typography>
                      <NavLink to='/edit'>
                      <IconButton
                        color="secondary"
                        aria-label="edit"
                        to="/add"
                        onClick={(e) =>setEditId(card._id)}
                      > 
                        <ModeEditIcon />
                      </IconButton>
                      </NavLink>
                      <IconButton
                        color="primary"
                        aria-label="delete"
                        onClick={(e) => handleDelete(card._id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
        
      </Container>
    </div>
  );
}
