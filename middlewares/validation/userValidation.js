const { celebrate, Joi } = require('celebrate');

const updateUserDataValidation = celebrate({
  body: {
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().email().required(),
  },
});

module.exports = {
  updateUserDataValidation,
};
