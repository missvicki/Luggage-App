import Joi from "joi";

export const luggageVal = Joi.object({
  type: Joi.String()
    .required()
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "any.required":
            err.message = "Luggage Type is required";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  size: Joi.String()
    .required()
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "any.required":
            err.message = "Luggage Size is required";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  owner: Joi.String(),
  color: Joi.String()
    .required()
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "any.required":
            err.message = "Luggage Color is required";
            break;
          default:
            break;
        }
      });
      return errors;
    })
});
