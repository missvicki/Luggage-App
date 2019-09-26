import Joi from "joi";
const createUser = {
  body: {
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    password: Joi.string()
      .trim()
      .required(),
    email: Joi.string()
      .email()
      .required(),
    phoneNumber: Joi.number().required(),
    confirmed: Joi.boolean()
  }
};

export default createUser;
