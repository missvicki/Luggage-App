import { bookedTrips } from "../models/book";
import responseCodes from "../constants/responseCodes";
import responseMessages from "../constants/responseMessages";
import status from "../constants/status";
import { listTrips } from "../utils/helpers/findBuses";

export const bookTrip = async (req, res) => {
  const { name, departure, destination, luggage } = req.body;
  try {
    await bookedTrips.create(
      {
        name,
        departure,
        destination,
        luggage
      },
      async function(err, response) {
        if (err) {
          return res.status(responseCodes.SERVICE_UNAVAILABLE).json({
            message: responseMessages.UNKNOWN_ERROR,
            error: err
          });
        } else {
          if (destination === departure) {
            return res.status(responseCodes.BAD_REQUEST).json({
              message: responseMessages.DEST_DEPA_ERROR,
              status: status.ERROR
            });
          }
          const query = {
            destination,
            departure
          };
          try {
            await listTrips(query, res);
          } catch (err) {
            return res.json({
              message: responseMessages.INTERNAL_SERVER_ERROR,
              status: status.ERROR
            });
          }
        }
      }
    );
  } catch (error) {
    return res.json({
      message: responseMessages.INTERNAL_SERVER_ERROR,
      status: responseCodes.SERVER_ERROR
    });
  }
};
