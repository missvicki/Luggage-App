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
          email: "vickiil.com",
          password: "emaaj3923"
        });
        expect(response.status).to.equal(400);
      })
    );
    it(
      "should fail if password does not meet criteria",
      mockAsync(async () => {
        const response = await AppTest.post("/auth/signin").send({
          email: "vicki@mail.com",
          password: "ema3"
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
    it(
      "should not successfully log in a user if email is missing",
      mockAsync(async () => {
        const response = await AppTest.post("/auth/signin").send({
          password: "emaaj3923"
        });
        expect(response.status).to.equal(400);
      })
    );
    it(
      "should not successfully log in a user if password is empty",
      mockAsync(async () => {
        const response = await AppTest.post("/auth/signin").send({
          email: "vicki@mail.com",
          password: ""
        });
        expect(response.status).to.equal(400);
      })
    );
  });

  describe("Create a new user", () => {
    beforeEach(
      mockAsync(async () => {
        await removeCollection(User);
      })
    );
    it("should successfully create a new user", async () => {
      const response = await AppTest.post("/auth/signup").send({
        firstname: "vikskdj",
        lastname: "ajjjakdka",
        email: "ahdja@mial.com",
        password: "ajdj92jasA",
        phoneNumber: 8183093029,
        admin: false
      });
      expect(response.body.message).to.equal(responseMessages.USER_CREATED);
    });
    it("should not create a new user if email is missing", async () => {
      const response = await AppTest.post("/auth/signup").send({
        firstname: "vikskdj",
        lastname: "ajjjakdka",
        password: "ajdj92jasA",
        phoneNumber: 8183093029,
        admin: false
      });
      expect(response.status).to.equal(400);
    });
    it("should not create a new user if firstname is missing", async () => {
      const response = await AppTest.post("/auth/signup").send({
        email: "vikskdj@maidils.com",
        lastname: "ajjjakdka",
        password: "ajdj92jasA",
        phoneNumber: 8183093029,
        admin: false
      });
      expect(response.status).to.equal(400);
    });
    it("should not create a new user if lastname is missing", async () => {
      const response = await AppTest.post("/auth/signup").send({
        email: "vikskdj@maidils.com",
        firstname: "ajjjakdka",
        password: "ajdj92jasA",
        phoneNumber: 8183093029,
        admin: false
      });
      expect(response.status).to.equal(400);
    });
    it("should not create a new user if password is missing", async () => {
      const response = await AppTest.post("/auth/signup").send({
        email: "vikskdj@maidils.com",
        lastname: "ajjjakdka",
        firstname: "ajdj92jasA",
        phoneNumber: 8183093029,
        admin: false
      });
      expect(response.status).to.equal(400);
    });

    it("should not create a new user if phoneNumber is missing", async () => {
      const response = await AppTest.post("/auth/signup").send({
        email: "vikskdj@maidils.com",
        lastname: "ajjjakdka",
        firstName: "ajdj92jasA",
        password: "uadn283S",
        admin: false
      });
      expect(response.status).to.equal(400);
    });
    it("should not create a new user if admin status is missing", async () => {
      const response = await AppTest.post("/auth/signup").send({
        email: "vikskdj@maidils.com",
        lastname: "ajjjakdka",
        firstName: "ajdj92jasA",
        password: "uadn283S",
        phoneNumber: 2881090319
      });
      expect(response.status).to.equal(400);
    });
    it("should not create a new user if password is incorrect", async () => {
      const response = await AppTest.post("/auth/signup").send({
        email: "ajjjd2@mail.com",
        firstname: "vikskdj",
        lastname: "ajjjakdka",
        password: "ajasA",
        phoneNumber: 8183093029,
        admin: false
      });
      expect(response.status).to.equal(400);
    });
    it("should not create a new user if email is incorrect", async () => {
      const response = await AppTest.post("/auth/signup").send({
        email: "ajjjd2ail.com",
        firstname: "vikskdj",
        lastname: "ajjjakdka",
        password: "ajasA2893",
        phoneNumber: 8183093029,
        admin: false
      });
      expect(response.status).to.equal(400);
    });
    it("should not create a new user if password is empty", async () => {
      const response = await AppTest.post("/auth/signup").send({
        email: "ajjjd2ail.com",
        firstname: "vikskdj",
        lastname: "ajjjakdka",
        password: "",
        phoneNumber: 8183093029,
        admin: false
      });
      expect(response.status).to.equal(400);
    });
    it("should not create a new user if password is not a string", async () => {
      const response = await AppTest.post("/auth/signup").send({
        email: "ajjjd2ail.com",
        firstname: "vikskdj",
        lastname: "ajjjakdka",
        password: 283828,
        phoneNumber: 8183093029,
        admin: false
      });
      expect(response.status).to.equal(400);
    });
  });
});
