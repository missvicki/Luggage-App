import JoiValidator from "../validations/index";
import { createUser } from "../validations/user";

export const validateCreateUser = (req, res, next) => {
  return JoiValidator.validateRequestBody(req, res, next, createUser);
};
