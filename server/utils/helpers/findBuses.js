import { Trips } from "../../models/trips";
import responseCodes from "../../constants/responseCodes";
import responseMessages from "../../constants/responseMessages";
import status from "../../constants/status";
import { filterTrips } from "./filter";

export const listTrips = async (query, res) => {
  try {
    // short way to pass query data
    const trips = await Trips.find(query);
    // const { destination, departure, busDriver } = req.query;
    // const tripData = {
    //   destination,
    //   departure,
    //   busDriver
    // };
    if (trips === null) {
      return res.status(responseCodes.NOT_FOUND).json({
        message: responseMessages.NOT_FOUND_TRIPS,
        status: status.ERROR
      });
    }
    //  long way to do the querying
    // const filteredTrips = filterTrips(trips, tripData);

    return res.status(responseCodes.OK).json({
      message: responseMessages.TRIPS_FOUND,
      status: status.SUCCESS,
      data: { trips: trips }
    });
  } catch (error) {
    return res.json({
      message: responseMessages.INTERNAL_SERVER_ERROR,
      status: responseCodes.SERVER_ERROR
    });
  }
};
