const httpStatus = require('http-status');
const { roleTypes } = require('../config/roles');
const ApiError = require('../utils/ApiError');

const admin = async (req, res, next) => {
  const { role } = req.user;
  if (role !== roleTypes.ADMIN) next(new ApiError(httpStatus.FORBIDDEN, 'Access denied'));
  next();
};



module.exports = {
  admin,

};
