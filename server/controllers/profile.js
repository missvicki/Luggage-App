import { User } from "../models/user";
import responseCodes from "../constants/responseCodes";
import responseMessages from "../constants/responseMessages";
import status from "../constants/status";

export const list = async (req, res) => {
  try {
    const userData = await User.find({});
    if (!userData) {
      return res
        .status(responseCodes.NOT_FOUND)
        .json({ message: responseMessages.NO_USERS, error: err });
    }
    const data = {
      userData
    };
    return res.status(responseCodes.OK).json({ success: true, data });
  } catch (error) {
    return res
      .status(responseCodes.SERVER_ERROR)
      .json({ message: responseMessages.INTERNAL_SERVER_ERROR });
  }
};

export const findAUser = async (req, res) => {
  const email = req.params.email;
  try {
    const userData = await User.findOne({ email });
    if (!userData) {
      return res
        .status(responseCodes.NOT_FOUND)
        .json({ message: responseMessages.NO_USERS, error: err });
    }
    const data = {
      userData
    };
    return res.status(responseCodes.OK).json({ status: status.SUCCESS, data });
  } catch (error) {
    return res
      .status(responseCodes.SERVER_ERROR)
      .json({ message: responseMessages.INTERNAL_SERVER_ERROR });
  }
};
