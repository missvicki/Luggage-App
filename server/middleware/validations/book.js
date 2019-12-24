import Joi from "joi";

export const bookTrip = Joi.object({
  destination: Joi.string()
    .trim()
    .required()
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "any.required":
            err.message = "Destination is required";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  departure: Joi.string()
    .trim()
    .required()
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "any.required":
            err.message = "Departure is required";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  name: Joi.string()
    .trim()
    .required()
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "any.required":
            err.message = "Name is required";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  luggage: Joi.boolean()
    .required()
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "any.required":
            err.message = "Luggage is required";
            break;
          default:
            break;
        }
      });
      return errors;
    })
});
