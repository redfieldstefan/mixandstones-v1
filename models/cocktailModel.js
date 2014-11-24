var mongoose = require('mongoose'),
  cocktailSchema = mongoose.Schema({
    name: String,
    url: String,
    description: String,
    ingredients: Array
  });

module.exports = mongoose.model('Cocktail', cocktailSchema);