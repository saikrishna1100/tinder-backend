import mongoose from 'mongoose'
const cardSchema=mongoose.Schema({
    name:String,
    imgUrl:String
})
const Cards = mongoose.model('Cards',cardSchema)
export default Cards