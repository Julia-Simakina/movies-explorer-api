const router = require('express').Router();
const { createUser, login } = require('../controllers/users');

const auth = require('../middlewares/auth');
const { signUp } = require('../middlewares/validation/authValidation');
const { signIn } = require('../middlewares/validation/authValidation');
const NotFoundError = require('../errors/NotFoundError');

router.post('/signup', signUp, createUser);
router.post('/signin', signIn, login);

router.use(auth);

router.use('/users', require('./users'));
router.use('/movies', require('./movies'));

router.use('*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;
