import { getCurrentUser } from "../utils/helpers/user";
import { Trips } from "../models/trips";
import responseCodes from "../constants/responseCodes";
import responseMessages from "../constants/responseMessages";
import status from "../constants/status";
import { filterTrips } from "../utils/helpers/filter";

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
            return res.status(responseCodes.SERVICE_UNAVAILABLE).json({
              message: responseMessages.UNKNOWN_ERROR,
              error: err
            });
          }
          return res.status(responseCodes.CREATED).json({
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
    return res.status(responseCodes.FORBIDDEN).json({
      message: responseMessages.FORBIDDEN,
      status: status.ERROR
    });
  }
};

export const list = async (req, res) => {
  const { destination, departure, busDriver } = req.query;

  const tripData = {
    destination,
    departure,
    busDriver
  };

  // short way to pass wuery data
  const trips = await Trips.find(req.query);

  if (!trips.length) {
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
};

export const findOne = async (req, res) => {
  const _id = req.params.id;
  const trip = await Trips.findById({ _id });
  if (trip === null) {
    return res.status(responseCodes.NOT_FOUND).json({
      message: responseMessages.NOT_FOUND,
      status: status.ERROR
    });
  }
  return res.status(responseCodes.OK).json({
    message: responseMessages.TRIPS_FOUND,
    status: status.SUCCESS,
    data: { trips: trip }
  });
};
