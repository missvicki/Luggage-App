import { Luggage } from "../models/luggage";
import responseCodes from "../constants/responseCodes";
import responseMessages from "../constants/responseMessages";
import status from "../constants/status";
import { getCurrentUser } from "../utils/helpers/user";
export const create = async (req, res) => {
  const { type, size, color } = req.body;
  const _id = req.params.id;

  try {
    if (_id) {
    }
    const user = await getCurrentUser(req);
    if (user.admin === true) {
      await Luggage.create(
        {
          type,
          size,
          owner,
          color
        },
        async function(err, response) {
          if (err) {
            return res.status(responseCodes.SERVICE_UNAVAILABLE).json({
              message: responseMessages.UNKNOWN_ERROR,
              error: err
            });
          } else {
          }
        }
      );
    } else {
      return res.status(responseCodes.FORBIDDEN).json({
        message: responseMessages.FORBIDDEN,
        status: status.ERROR
      });
    }
  } catch (error) {
    return res.json({
      message: responseMessages.INTERNAL_SERVER_ERROR,
      status: responseCodes.SERVER_ERROR
    });
  }
};
