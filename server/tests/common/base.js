import supertest from "supertest";
import app from "../../index";
import { User } from "../../models/user";
import { generateToken } from "./jwt";

const baseUrl = "/api/v1";

export const removeCollection = async model => {
  try {
    await model.remove({});
  } catch (e) {
    return e;
  }
};

export const createUser = async () => {
  const data = {
    firstname: "vicki",
    lastname: "nomwesigwa",
    email: "vicki@mail.com",
    password: "emaaj3923",
    phoneNumber: 92939293,
    admin: true
  };
  try {
    await User.create(data);
    const user = await User.findOneAndUpdate(
      { email: data.email },
      { confirmed: true }
    );
    return user;
  } catch (e) {
    return e;
  }
};

export const getCurrentUser = async req => {
  if (!req.authorization || req.authorization.trim().length === 0) {
    return false;
  }
  const token = await req.authorization.split(" ")[1];

  try {
    if (token) {
      const decodeData = jwt.verify(token, process.env.JWT_SECRET);
      return decodeData;
    }
  } catch (err) {
    return false;
  }
};

export class AppTest {
  static app = supertest(app);

  static token = null;

  static post = url => {
    const request = this.app.post(`${baseUrl}${url}`);
    return AppTest.__addAuthorization(request);
  };
  static patch = url => {
    const request = this.app.patch(`${baseUrl}${url}`);
    return AppTest.__addAuthorization(request);
  };

  static put = url => {
    const request = this.app.put(`${baseUrl}${url}`);
    return AppTest.__addAuthorization(request);
  };

  static get = url => {
    const request = this.app.get(`${baseUrl}${url}`);
    return AppTest.__addAuthorization(request);
  };

  static delete = url => {
    const request = this.app.delete(`${baseUrl}${url}`);
    return AppTest.__addAuthorization(request);
  };

  static loginRandom = async user => {
    const userToLogin = await User.findOne({ email: user.email });
    this.token = generateToken(userToLogin.email);
  };

  static __addAuthorization(request) {
    return this.token
      ? request.set("authorization", `Bearer ${this.token}`)
      : request;
  }
}

export default AppTest;
