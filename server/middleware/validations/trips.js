import Joi from "joi";
import responseMessages from "../../constants/responseMessages";

export const tripVal = Joi.object({
  busNumber: Joi.string()
    .required()
    .trim()
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "any.required":
            err.message = "Bus Number is required";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  busDriver: Joi.string()
    .required()
    .trim()
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "any.required":
            err.message = "Bus Driver is required";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  busConductor: Joi.string()
    .required()
    .trim()
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "any.required":
            err.message = "Bus Conductor is required";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  destination: Joi.string()
    .required()
    .trim()
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
    .required()
    .trim()
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
  departureDateTime: Joi.date(),
  destinationDateTime: Joi.date(),
  numberOfPassengers: Joi.number()
    .required()
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "any.required":
            err.message = "Number of Passengers is required";
            break;
          default:
            break;
        }
      });
      return errors;
    })
});
