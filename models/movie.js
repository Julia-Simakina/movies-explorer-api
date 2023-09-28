const mongoose = require('mongoose');
const { urlRegex } = require('../constants/urlRegex');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
  },
  director: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
  },
  duration: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
  },
  year: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
  },
  description: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
  },
  image: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
    validate: {
      validator(url) {
        return urlRegex.test(url);
      },
      message: 'Введён некорректный URL',
    },
  },
  trailerLink: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
    validate: {
      validator(url) {
        return urlRegex.test(url);
      },
      message: 'Введён некорректный URL',
    },
  },
  thumbnail: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
    validate: {
      validator(url) {
        return urlRegex.test(url);
      },
      message: 'Введён некорректный URL',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'Поле должно быть заполнено'],
  },
  movieId: {
    type: Number,
    required: [true, 'Поле должно быть заполнено'],
  },
  nameRU: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
  },
  nameEN: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
  },

}, { versionKey: false });

module.exports = mongoose.model('movie', movieSchema);
