import supertest from "supertest";
import app from "../../index";
import { User } from "../../models/user";

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
    await User.findOneAndUpdate({ email: data.email }, { confirmed: true });
  } catch (e) {
    return e;
  }
};

export class AppTest {
  static app = supertest(app);

  static post = url => {
    const request = this.app.post(`${baseUrl}${url}`);
    return request;
  };
  static put = url => {
    const request = this.app.put(`${baseUrl}${url}`);
    return request;
  };
}

export default AppTest;
