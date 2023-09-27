const router = require('express').Router();
const { updateUserDataValidation } = require('../middlewares/validation/userValidation');

const {
  getUserData,
  updateUserData,
} = require('../controllers/users');

router.get('/me', getUserData);
router.patch('/me', updateUserDataValidation, updateUserData);

module.exports = router;
