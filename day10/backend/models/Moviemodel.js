const mongoose = require('mongoose');
const { stringify } = require('querystring');

const Moviesschema = new mongoose.Schema({
{
    Moviename: string,
    Hero: string,
    herion: string,
    year: Number,
    rating: Number,
    genre: string
}
)
const Moviemodel = mongoose.model("Moviemodel", Moviesschema);
module.exports = Moviemodel

;
