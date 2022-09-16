const { Schema, model } = require('mongoose');
const moviesSchema = new Schema({

movieId: {
    type: String
    
  },
  movieTitle: {
    type: String
    
  },
  movieImage:{
    type: String
  }
})

const Movies = model('Movies', moviesSchema);

module.exports = Movies;