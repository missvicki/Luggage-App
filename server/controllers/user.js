import jwt from "jsonwebtoken";

import User from "../models/user";
import responseCode from "../constants/responseCodes";
import responseMessages from "../constants/responseMessages";
import { sendConfirmationEmail } from "../utils/mailer";

export const create = async (req, res) => {
  const { firstname, lastname, email, phoneNumber, password } = req.body;
  try {
    // make sure user does not exist already
    await User.create(
      {
        firstname,
        lastname,
        email,
        phoneNumber,
        password
      },
      function(err, user) {
        if (err) {
          return res.status(responseCode.BAD_REQUEST).send({
            message: responseMessages.USER_ALREADY_EXISTS
          });
        }
        sendConfirmationEmail(email);
        return res.status(responseCode.CREATED).json({
          message: responseMessages.USER_CREATED,
          data: user
        });
      }
    );
  } catch (error) {
    return res.json({
      message: responseMessages.INTERNAL_SERVER_ERROR,
      status: responseCode.SERVER_ERROR
    });
  }
};

export const confirmed = async (req, res) => {
  try {
    const { token } = req.body;
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          res.status(401).json({
            status: "Error",
            message: "Missing token"
          });
        } else {
          User.findOneAndUpdate({ email: decoded.email }, { confirmed: true })
            .then(() => {
              res.status(200).json({ message: "Email has been confirmed" });
            })
            .catch(err => {
              res
                .status(404)
                .json({ message: "User could not be found", error: err });
            });
        }
      });
    }
  } catch (err) {
    res
      .status(responseCode.SERVER_ERROR)
      .json({ message: responseMessages.INTERNAL_SERVER_ERROR, error: err });
  }
};
