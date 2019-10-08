import chai from "chai";
import chaiHttp from "chai-http";

import { mockAsync } from "../common/asyncMock";
import { User } from "../../models/user";
import { AppTest } from "../common";
import { removeCollection, createUser, getCurrentUser } from "../common/base";
import responseMessages from "../../constants/responseMessages";

chai.use(chaiHttp);
chai.should();
const { expect } = chai;

describe("Trips", () => {
  beforeEach(async () => {
    await removeCollection(User);
    const user = await createUser();
    await AppTest.loginRandom(user);
  });

  describe("Create Trips", () => {
    it(
      "should successfully create a trip",
      mockAsync(async () => {
        const res = await AppTest.post("/trips").send({
          busNumber: "UAG 728Y",
          busDriver: "Paul Kayinu",
          busConductor: "Victor Gonzalex",
          destination: "Mbarara",
          departure: "Kampala",
          numberOfPassengers: 65
        });
        expect(res.body.message).to.equal(responseMessages.TRIP_CREATED);
      })
    );
    it(
      "should not create a trip if busNumber is not provided",
      mockAsync(async () => {
        const res = await AppTest.post("/trips").send({
          busDriver: "Paul Kayinu",
          busConductor: "Victor Gonzalex",
          destination: "Mbarara",
          departure: "Kampala",
          numberOfPassengers: 65
        });
        expect(res.status).to.equal(400);
      })
    );
    it(
      "should not create a trip if busDriver is not provided",
      mockAsync(async () => {
        const res = await AppTest.post("/trips").send({
          busNumber: "UAE 129N",
          busConductor: "Victor Gonzalex",
          destination: "Mbarara",
          departure: "Kampala",
          numberOfPassengers: 65
        });
        expect(res.status).to.equal(400);
      })
    );
    it(
      "should not create a trip if busDriver is not provided",
      mockAsync(async () => {
        const res = await AppTest.post("/trips").send({
          busNumber: "UAE 129N",
          busConductor: "Victor Gonzalex",
          destination: "Mbarara",
          departure: "Kampala",
          numberOfPassengers: 65
        });
        expect(res.status).to.equal(400);
      })
    );
    it(
      "should not create a trip if busConductor is not provided",
      mockAsync(async () => {
        const res = await AppTest.post("/trips").send({
          busNumber: "UAE 129N",
          busDriver: "Victor Gonzalex",
          destination: "Mbarara",
          departure: "Kampala",
          numberOfPassengers: 65
        });
        expect(res.status).to.equal(400);
      })
    );
    it(
      "should not create a trip if destination is not provided",
      mockAsync(async () => {
        const res = await AppTest.post("/trips").send({
          busNumber: "UAE 129N",
          busConductor: "Victor Gonzalex",
          busDriver: "pip",
          departure: "Kampala",
          numberOfPassengers: 65
        });
        expect(res.status).to.equal(400);
      })
    );
    it(
      "should not create a trip if departure is not provided",
      mockAsync(async () => {
        const res = await AppTest.post("/trips").send({
          busNumber: "UAE 129N",
          busConductor: "Victor Gonzalex",
          busDriver: "pip",
          destination: "Kampala",
          numberOfPassengers: 65
        });
        expect(res.status).to.equal(400);
      })
    );
    it(
      "should not create a trip if numberOfPassengers is not provided",
      mockAsync(async () => {
        const res = await AppTest.post("/trips").send({
          busNumber: "UAE 129N",
          busConductor: "Victor Gonzalex",
          busDriver: "pip",
          departure: "Kampala",
          destination: "jjdakd"
        });
        expect(res.status).to.equal(400);
      })
    );
  });
});
