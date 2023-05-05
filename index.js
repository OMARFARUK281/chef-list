const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chef = require('./ChefFood/chef.json');
const foods = require('./ChefFood/foods.json');

app.use(cors());

app.get('/', (req, res) =>{
    res.send('Chef Foods is running')
});

app.get('/chef', (req, res) =>{
    res.send(chef);
})


app.get('/foods', (req, res) =>{
    res.send(foods);
})

app.get('/foods', (req, res) =>{    
    res.send(foods);
})

app.get('/foods/:id', (req, res) =>{
    const id = req.params.id;
    console.log(id);
    const selectedFoods = foods.find(n => n.id === id);
    res.send(selectedFoods); 
})


app.get('/chef/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    if(id === 0){
        res.send(foods)
    }
    else{
        const  chefFoods = foods.filter(n => parseInt(n.id) === id);
        res.send(chefFoods)
    }
})


app.listen(port, () =>{
    console.log(`Foods API is running on port: ${port}`)
})