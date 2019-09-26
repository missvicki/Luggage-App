import nodemailer from "nodemailer";
import generateAuthToken from "./tokenGenerator";

const from = "nvbethany479@gmail.com";

function setup() {
  return nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });
}

export async function sendConfirmationEmail(data) {
  try {
    const transport = setup();
    const userEmail = data;

    const generateConfirmationUrl = () => {
      return `${process.env.HOST}/api/v1/auth/confirmation/${generateAuthToken(
        userEmail
      )}`;
    };
    const email = {
      from,
      to: userEmail,
      subject: "Welcome to Luggage Identifying App",
      text: `
      Welcome to the Luggage Identifying App. Please activate your account by clicking the link below.
      <a href='${generateConfirmationUrl()}'>Activation Link</a>`
    };
    await transport.sendMail(email);
  } catch (err) {
    return err;
  }
}
