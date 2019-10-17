// import { bookedTrips } from "../../models/book";
// import responseCodes from "../../constants/responseCodes";
// import responseMessages from "../../constants/responseMessages";
// import status from "../../constants/status";

// export const listPassengers = async (query, res) => {
//   try {
//     const bookedTrip = await bookedTrips.find(query);
//     if (bookedTrip === null) {
//       return res.status(responseCodes.NOT_FOUND).json({
//         message: responseMessages.NOT_FOUND_TRIPS,
//         status: status.ERROR
//       });
//     }

//     return res.status(responseCodes.OK).json({
//       message: responseMessages.TRIPS_FOUND,
//       status: status.SUCCESS,
//       data: { bookedTrip: bookedTrip }
//     });
//   } catch (error) {
//     return res.json({
//       message: responseMessages.INTERNAL_SERVER_ERROR,
//       status: responseCodes.SERVER_ERROR
//     });
//   }
// };
