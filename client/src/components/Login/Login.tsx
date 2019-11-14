/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FunctionComponent } from "react";
import Button from "react-bootstrap-button-loader";
import "./Login.css";

interface Props {
  email: string;
  password: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}
export const Login: FunctionComponent<Props> = (props: Props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-2" />
        <div className="col-lg-6 col-md-8 login-box">
          <div className="col-lg-12 login-title">Sign In</div>

          <div className="col-lg-12 login-form">
            <form onSubmit={props.onSubmit}>
              <div className="form-group">
                <label className="form-control-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  onChange={props.onChange}
                  name="email"
                />
              </div>
              <div className="form-group">
                <label className="form-control-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={props.onChange}
                  name="password"
                />
              </div>

              <div className="col-lg-12 login-button center-block">
                <Button
                  type="submit"
                  className="btn btn-primary"
                  loading={props.isLoading}
                >
                  LOGIN
                </Button>
              </div>
            </form>
          </div>
          <div className="col-lg-3 col-md-2" />
        </div>
      </div>
    </div>
  );
};
