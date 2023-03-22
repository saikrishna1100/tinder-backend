import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards.js'
import cors from 'cors'
// var express =require('express')
// var mongoose=require('mongoose')

//app config
const app=express();
const port =process.env.PORT || 8001
const connection_url="mongodb+srv://tinder:2wqoWZlvrfPwQSII@cluster0.atoczyy.mongodb.net/tinderdb?retryWrites=true&w=majority"
//"mongodb://localhost:27017/tinderdb"


//middlewares
app.use(cors())
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000'
  }));
  
//dbconfig
mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{console.log("data base connected sucessfully")}).catch((error)=>{console.log(error)})

//api endpoints
app.get('/',(req,res)=>{
    res.status(200).send("Hello");
    })

    app.post('/tinder/cards', (req, res) => {
        const dbCard = req.body;
      
        Cards.create(dbCard)
          .then((data) => res.status(201).send(data))
          .catch((err) => res.status(500).send(err));
      });
      
app.get('/tinder/cards', (req, res) => {
    Cards.find()
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(500).send(err));
    
  });

//listners
app.listen(port,()=>{console.log(`listning on localhost ${port}`)})

