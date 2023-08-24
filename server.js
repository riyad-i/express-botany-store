const express = require('express')

const app = express()
const PORT = 3000

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];


app.get('/', (req, res) =>{
    res.send('hello')
})


app.get('/plants', (req, res) => {
    // res.send(plants)
    res.status(200).json({products : plants , category: 'Botany'})
})




app.listen(PORT, ()=>{
    console.log('Listening on ', PORT)
})


