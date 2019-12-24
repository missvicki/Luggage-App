import chai from "chai";
import chaiHttp from "chai-http";

import { mockAsync } from "../common/asyncMock";
import { User } from "../../models/user";
import { Trips } from "../../models/trips";
import { AppTest } from "../common";
import { removeCollection, createUser } from "../common/base";
import responseMessages from "../../constants/responseMessages";

chai.use(chaiHttp);
chai.should();
const { expect } = chai;

describe("Book", () => {
  beforeEach(
    mockAsync(async () => {
      await removeCollection(User);
      await removeCollection(Trips);
      const user = await createUser();
      await AppTest.loginRandom(user);
    })
  );

  describe("Book a trip", () => {
    beforeEach(
      mockAsync(async () => {
        await AppTest.createTrip();
      })
    );
    it(
      "should allow a user to book a trip",
      mockAsync(async () => {
        const res = await AppTest.post("/book").send({
          name: "my name",
          departure: "Mbarara",
          destination: "Kampala",
          luggage: false
        });
        expect(res.status).to.equal(200);
      })
    );
    it(
      "should not allow a user to book a trip if name is not provided",
      mockAsync(async () => {
        const res = await AppTest.post("/book").send({
          departure: "Mbarara",
          destination: "Kampala",
          luggage: false
        });
        expect(res.status).to.equal(400);
      })
    );
    it(
      "should not allow a user to book a trip if departure is not given",
      mockAsync(async () => {
        const res = await AppTest.post("/book").send({
          name: "my name",
          destination: "Kampala",
          luggage: false
        });
        expect(res.status).to.equal(400);
      })
    );
    it(
      "should not allow a user to book a trip if destination is not given",
      mockAsync(async () => {
        const res = await AppTest.post("/book").send({
          name: "my name",
          departure: "Kampala",
          luggage: false
        });
        expect(res.status).to.equal(400);
      })
    );
    it(
      "should not allow a user to book a trip if luggage is not given",
      mockAsync(async () => {
        const res = await AppTest.post("/book").send({
          name: "my name",
          departure: "Kampala",
          destination: "Mbarara"
        });
        expect(res.status).to.equal(400);
      })
    );
    it(
      "should not allow a user to book a trip if destination and departure are similar",
      mockAsync(async () => {
        const res = await AppTest.post("/book").send({
          name: "my name",
          departure: "Kampala",
          destination: "Kampala",
          luggage: false
        });
        expect(res.body.message).to.equal(responseMessages.DEST_DEPA_ERROR);
      })
    );
  });
});
