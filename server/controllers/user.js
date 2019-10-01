import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { User } from "../models/user";
import responseCodes from "../constants/responseCodes";
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
          return res.status(responseCodes.BAD_REQUEST).send({
            message: responseMessages.USER_ALREADY_EXISTS
          });
        }
        sendConfirmationEmail(email);
        return res.status(responseCodes.CREATED).json({
          message: responseMessages.USER_CREATED,
          data: user
        });
      }
    );
  } catch (error) {
    return res.json({
      message: responseMessages.INTERNAL_SERVER_ERROR,
      status: responseCodes.SERVER_ERROR
    });
  }
};

export const confirmed = async (req, res) => {
  try {
    const { token } = req.body;
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          res.status(responseCodes.UNAUTHAURISED).json({
            status: "Error",
            message: "Missing token"
          });
        } else {
          User.findOneAndUpdate({ email: decoded.email }, { confirmed: true })
            .then(() => {
              res
                .status(responseCodes.OK)
                .json({ message: "Email has been confirmed" });
            })
            .catch(err => {
              res
                .status(responseCodes.NOT_FOUND)
                .json({ message: "User could not be found", error: err });
            });
        }
      });
    }
  } catch (err) {
    res
      .status(responseCodes.SERVER_ERROR)
      .json({ message: responseMessages.INTERNAL_SERVER_ERROR, error: err });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userData = await User.findOne({ email });
    if (!userData) {
      return res
        .status(responseCodes.UNAUTHAURISED)
        .json({ message: responseMessages.INVALID_CREDENTIALS });
    }
    if (!userData.confirmed) {
      return res
        .status(responseCodes.FORBIDDEN)
        .json({ message: responseMessages.INCOMPLETE_ACCOUNT });
    }
    const userPassword = await bcrypt.compare(password, userData.password);
    if (!userPassword) {
      return res
        .status(responseCodes.UNAUTHAURISED)
        .json({ message: responseMessages.INVALID_CREDENTIALS });
    }
    const payload = {
      id: userData._id,
      email: userData.email,
      firstname: userData.firstname,
      lastname: userData.lastname
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    const data = {
      user: {
        ...payload,
        token
      }
    };

    return res.status(responseCodes.OK).json({
      message: responseMessages.SUCCESSFUL_LOGIN,
      data
    });
  } catch (err) {
    res
      .status(responseCodes.SERVER_ERROR)
      .json({ message: responseMessages.INTERNAL_SERVER_ERROR, error: err });
  }
};
