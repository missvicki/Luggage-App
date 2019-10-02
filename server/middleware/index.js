import JoiValidator from "./validations/index";
import { createUser, loginUser, updateUser } from "./validations/user";

export const validateCreateUser = (req, res, next) => {
  return JoiValidator.validateRequestBody(req, res, next, createUser);
};

export const validateLoginUser = (req, res, next) => {
  return JoiValidator.validateRequestBody(req, res, next, loginUser);
};

export const validateUpdateUser = (req, res, next) => {
  return JoiValidator.validateRequestBody(req, res, next, updateUser);
};
