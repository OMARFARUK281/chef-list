const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chef = require('./ChefFood/chef.json');

app.use(cors());

app.get('/', (req, res) =>{
    res.send('Chef Foods is running')
});

app.get('/chef', (req, res) =>{
    res.send(chef);
})



/* const foods = require('./ChefFood/foods.json');

app.get('/foods', (req, res) =>{
    res.send(foods);
})

app.get('/foods/:id', (req, res) =>{
    const id = req.params.id;
    console.log(id);
    const selectedFoods = foods.find(n = n.id === id);
    res.send(selectedFoods)
}) */



app.listen(port, () =>{
    console.log(`Foods API is running on port: ${port}`)
})