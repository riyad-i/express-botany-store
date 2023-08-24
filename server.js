const express = require('express')

const app = express()
const PORT = 3000

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];


app.get('/', (req, res) =>{
    res.send('hello')
})


//routes matched from top-bottom, specificity matters


//return all plants
app.get('/plants', (req, res) => {
    // res.send(plants)
    res.status(200).json({products : plants , category: 'Botany'})
})



// return plant by index

app.get('/:indexOfPlantsArray', (req, res)=>{
    // console.log(req.params);
    if (plants[req.params.indexOfPlantsArray]){
        res.send(plants[req.params.indexOfPlantsArray])
    }
    else {
        res.status(404).send(`No item at index ` + req.params.indexOfPlantsArray)
    }
})

//route with 2 params
//route goes through with 2 params, doesn't get caught by indexofplantsarray
// app.get('/:firstName/:lastName', (req, res)=> {
//     console.log(req.params)
//     res.send(`Hello ${req.params.firstName} ${req.params.lastName}` )
// })



//query
app.get('/howdy/:firstName', (req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(`Hello ${req.query.title} ${req.params.firstName}`)
})


app.listen(PORT, ()=>{
    console.log('Listening on ', PORT)
})


