import jwt from "jsonwebtoken";

const generateAuthToken = email => {
  const token = jwt.sign(
    {
      email
    },
    process.env.JWT_SECRET
  );
  return token;
};

export default generateAuthToken;
