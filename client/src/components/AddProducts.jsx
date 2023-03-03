import React, { useState } from 'react'
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';

export default function AddProducts() {

    const url = "/api/products";

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [discount, setDiscount] = useState("")
    const [sponsored, setSponsered] = useState("")
    // const [rating, setRating] = useState("")
    const [decription, setDescription] = useState("")
    const [image, setImage] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
            const rate = Math.floor(Math.random() * 4.5) + 1
            const newProduct = {
                name,
                price,
                discount,
                sponsored,
                decription,
                image,
                "rating": rate
            }

            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProduct),
            })
                .then((r) => r.json())
                .then((data) => {
                    window.location = '/';
                });
        }
    

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: 20,
                    padding: 20
                }}
            >
                <form style={{ width: "50%", border: "2px solid grey", padding: "10px" }}>
                    <h1>ADD PRODUCT FORM</h1>

                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="title">Product Name</InputLabel>
                        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </FormControl>

                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="price">Price</InputLabel>
                        <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </FormControl>

                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="image">Discount</InputLabel>
                        <Input type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} /><br></br>
                    </FormControl>

                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="image">Sponsored</InputLabel>
                        <Input type="text" value={sponsored} onChange={(e) => setSponsered(e.target.value)} /><br></br>
                    </FormControl>

                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="image">Image</InputLabel>
                        <Input type="url" value={image} onChange={(e) => setImage(e.target.value)} /><br></br>
                    </FormControl>

                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="description">Description</InputLabel>
                        <Input multiline rows={7} value={decription} onChange={(e) => setDescription(e.target.value)} />
                    </FormControl>

                    <Button variant="contained" color="primary" size="large" endIcon={<AddIcon />} fullWidth onClick={handleSubmit}>
                        ADD
                    </Button>
                </form>
            </div>
        </div>
    )
}
