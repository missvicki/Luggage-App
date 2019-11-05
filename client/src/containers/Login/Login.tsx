import React from "react";
import { Login } from "../../components/Login/Login";

interface State {
  email: string;
  password: string;
}

interface Props {}

class LoginContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    const loginProps = {
      email: this.state.email,
      password: this.state.password
    };
    return <Login {...loginProps} />;
  }
}

export default LoginContainer;
