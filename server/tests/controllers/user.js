import chai from "chai";
import chaiHttp from "chai-http";

import { mockAsync } from "../common/asyncMock";
import { User } from "../../models/user";
import { AppTest } from "../common";
import { removeCollection, createUser } from "../common/base";
import responseMessages from "../../constants/responseMessages";

chai.use(chaiHttp);
chai.should();
const { expect } = chai;

describe("Users", function() {
  describe("Login a user", () => {
    beforeEach(
      mockAsync(async () => {
        await removeCollection(User);
        await createUser();
      })
    );
    it(
      "should return status 400 if no credentials have been provided",
      mockAsync(async () => {
        const response = await AppTest.post("/auth/signin").send({});
        expect(response.status).to.equal(400);
      })
    );
    it(
      "should fail if email is incorrect",
      mockAsync(async () => {
        const response = await AppTest.post("/auth/signin").send({
          email: "hahdhn"
        });
        expect(response.status).to.equal(400);
      })
    );
    it(
      "should fail if password does not meet criteria",
      mockAsync(async () => {
        const response = await AppTest.post("/auth/signin").send({
          password: "8283sjj"
        });
        expect(response.status).to.equal(400);
      })
    );
    it(
      "should successfully log in a user",
      mockAsync(async () => {
        const response = await AppTest.post("/auth/signin").send({
          email: "vicki@mail.com",
          password: "emaaj3923"
        });
        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal(
          responseMessages.SUCCESSFUL_LOGIN
        );
      })
    );
  });
});
