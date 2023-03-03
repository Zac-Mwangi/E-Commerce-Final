import React, { useState,useEffect } from "react";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";
import EditIcon from '@mui/icons-material/Edit';


export default function EditProduct({ editID }) {
  // fetch one product

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [sponsored, setSponsered] = useState("");
  const [decription, setDescription] = useState("");
  const [image, setImage] = useState("");

    useEffect(() => {
      fetch("/api/products/" + editID)
        .then((r) => r.json())
        .then((data) => {
            setName(data.name);
            setPrice(data.price);
            setDiscount(data.discount);
            setSponsered(data.sponsored);
            setDescription(data.decription);
            setImage(data.image);
        });
    }, [editID]);
 

  function handleSubmit(e) {
    e.preventDefault();
    const rate = Math.floor(Math.random() * 4.5) + 1;
    const newProduct = {
      name,
      price,
      discount,
      sponsored,
      decription,
      image,
      rating: rate,
    };

    fetch("/api/products/" + editID, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      })
        .then((r) => r.json())
        .then((updatedItem) => console.log(updatedItem));
        window.location = '/';
    }
  

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
          padding: 20,
        }}
      >
        <form
          style={{ width: "50%", border: "2px solid grey", padding: "10px" }}
        >
          <h1>EDIT PRODUCT FORM</h1>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="title">Product Name</InputLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="price">Price</InputLabel>
            <Input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="image">Discount</InputLabel>
            <Input
              type="number"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
            <br></br>
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="image">Sponsored</InputLabel>
            <Input
              type="text"
              value={sponsored}
              onChange={(e) => setSponsered(e.target.value)}
            />
            <br></br>
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="image">Image</InputLabel>
            <Input
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <br></br>
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="description">Description</InputLabel>
            <Input
            type="text"
              multiline
              rows={7}
              value={decription}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={<EditIcon /> }
            fullWidth
            onClick={handleSubmit}
          >
            EDIT PRODUCT
          </Button>
        </form>
      </div>
    </div>
  );
}
