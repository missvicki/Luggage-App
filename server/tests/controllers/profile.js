import chai from "chai";
import chaiHttp from "chai-http";

import { mockAsync } from "../common/asyncMock";
import { User } from "../../models/user";
import { AppTest } from "../common";
import { removeCollection, createUser } from "../common/base";

chai.use(chaiHttp);
chai.should();
const { expect } = chai;

describe("User profile", () => {
  describe("Get users", () => {
    beforeEach(
      mockAsync(async () => {
        await removeCollection(User);
        const user = await createUser();
        await AppTest.loginRandom(user);
      })
    );
    it(
      "should fetch all users successfully",
      mockAsync(async () => {
        const response = await AppTest.get("/users").send();
        expect(response.status).to.equal(200);
      })
    );
    it(
      "should fetch one user successfully ",
      mockAsync(async () => {
        const response = await AppTest.get("/users/vicki@mail.com").send();
        expect(response.status).to.equal(200);
      })
    );
  });
});
