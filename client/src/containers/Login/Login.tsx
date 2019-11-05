import React from "react";
import { connect } from "react-redux";
import { Login } from "../../components/Login/Login";
import { login } from "../../store/actions/Login/Login";

interface State {
  email: string;
  password: string;
}

interface Props {
  history: History;
  payload: Payload;
  login: any;
  isLoading: boolean;
}

interface History {
  push(url: string): void;
}

export interface Payload {
  data: State;
  history: { push(url: string): void };
  url: string;
}

export class LoginContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      email: (e.target as HTMLInputElement).value,
      password: (e.target as HTMLInputElement).value
    });
  };

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = this.state;
    const data = { email, password };
    const url = "http://localhost:4000/api/v1/auth/signin";
    const payload = {
      data,
      history: this.props.history,
      url
    };
    this.props.login(payload);
  };

  render() {
    const loginProps = {
      email: this.state.email,
      password: this.state.password,
      onChange: this.onChange,
      onSubmit: this.onSubmit,
      isLoading: this.props.isLoading
    };
    return <Login {...loginProps} />;
  }
}

export const mapDispatchToProps = (dispatch: any) => {
  return {
    login: (payload: Payload) => dispatch(login(payload))
  };
};

export const mapStateToProps = state => {
  return { isLoading: state.login.isLoading };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
