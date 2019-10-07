import { getCurrentUser } from "../utils/helpers/user";
import { Trips } from "../models/trips";
import responseCodes from "../constants/responseCodes";
import responseMessages from "../constants/responseMessages";
import status from "../constants/status";

export const create = async (req, res) => {
  const {
    busNumber,
    busDriver,
    busConductor,
    destination,
    departure,
    departureDateTime,
    destinationDateTime,
    numberOfPassengers
  } = req.body;
  const user = await getCurrentUser(req);
  if (user.admin === true) {
    try {
      await Trips.create(
        {
          busNumber,
          busDriver,
          busConductor,
          destination,
          departure,
          departureDateTime,
          destinationDateTime,
          numberOfPassengers
        },
        (err, response) => {
          if (err) {
            res.status(responseCodes.SERVICE_UNAVAILABLE).json({
              message: responseMessages.UNKNOWN_ERROR,
              error: err
            });
          }
          res.status(responseCodes.CREATED).json({
            message: responseMessages.TRIP_CREATED,
            status: status.SUCCESS,
            data: { trips: response }
          });
        }
      );
    } catch (error) {
      return res.json({
        message: responseMessages.INTERNAL_SERVER_ERROR,
        status: responseCodes.SERVER_ERROR
      });
    }
  } else {
    res.status(responseCodes.FORBIDDEN).json({
      message: responseMessages.FORBIDDEN,
      status: status.ERROR
    });
  }
};
