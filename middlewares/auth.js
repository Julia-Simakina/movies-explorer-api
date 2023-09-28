const { SECRET_KEY_JWT, NODE_ENV } = process.env;
const jwt = require('jsonwebtoken');
const AuthError = require('../errors/AuthError');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new AuthError('Требуется авторизация'));
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? SECRET_KEY_JWT : 'dev-secret');
  } catch (err) {
    next(new AuthError(('Требуется авторизация')));
  }

  req.user = payload; // записываем пейлоуд в объект запроса

  return next();
};
