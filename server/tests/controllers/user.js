import chai from "chai";
import chaiHttp from "chai-http";

import response from "../../constants/responseMessages";
import status from "../../constants/responseCodes";
import User from "../../models/user";

chai.use(chaiHttp);
chai.should();

const data = {
  firstname: "ourfirstname",
  lastname: "ourlastname",
  email: "ourfirst@mail.com",
  phoneNumber: "092194232",
  password: "whatever",
  confirmed: false
};

const token = "ajd819n3jadAs02-jdjsd";

describe("Create a User", () => {
  it("should create a new user successfully", async () => {
    await User.create(data, (err, user) => {
      console.log(err, user, "sjjadjj");
      if (err) {
        res.status.should.equal(responseCode.BAD_REQUEST);
        res.body.message.should.equal(response.USER_ALREADY_EXISTS);
      }
      res.body.data.should.equal(user);
      res.body.message.should.equal(response.USER_CREATED);
      res.body.status.should.equal(status.CREATED);
    });
  });
  it("should confirm a user", async () => {
    User.findOneAndUpdate({ email: data.email }, { confirmed: true })
      .then(() => {
        res.status.should.equal(200);
        res.body.message.should.equal("Email has been confirmed");
      })
      .catch(err => {
        res.status.should.equal(404);
        res.body.message.should.equal("User could not be found");
        res.body.error.should.equal(err);
      });
  });
});
