const express = require('express')

const app = express()
const PORT = 3000

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];


app.get('/', (req, res) =>{
    res.send('hello')
})


//return all plants
app.get('/plants', (req, res) => {
    // res.send(plants)
    res.status(200).json({products : plants , category: 'Botany'})
})



// return plant by index

app.get('/plants/:indexOfPlantsArray', (req, res)=>{
    // console.log(plants[req.params.indexOfPlantsArray]);
    if (plants[req.params.indexOfPlantsArray]){
        res.send(plants[req.params.indexOfPlantsArray])
    }
    else {
        res.status(404).send(`No item at index ` + req.params.indexOfPlantsArray)
    }
})


app.listen(PORT, ()=>{
    console.log('Listening on ', PORT)
})


