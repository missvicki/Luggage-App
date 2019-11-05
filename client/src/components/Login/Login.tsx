import React, { FunctionComponent } from "react";

interface Props {
  email: string;
  password: string;
}
export const Login: FunctionComponent<Props> = props => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="card-title">Sign In</div>
          <form>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  @
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
