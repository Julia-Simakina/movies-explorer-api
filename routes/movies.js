const router = require('express').Router();
const { addMovieValidation } = require('../middlewares/validation/movieValidation');

const {
  getMovies, addMovie, deleteMovie,
} = require('../controllers/movies');

router.get('/', getMovies);
router.post('/', addMovieValidation, addMovie);
router.delete('/:movieId', deleteMovie);

module.exports = router;
