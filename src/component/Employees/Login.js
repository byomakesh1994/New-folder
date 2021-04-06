import { Button, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";

const initialState = {
  email: "",
  pwd: "",
};

const Login = () => {
  const [login, setLogin] = useState(initialState);

  const InputChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Paper elevation={3}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          name="email"
          value={login.email}
          onChange={InputChange}
          variant="outlined"
        />
        <TextField
          label="Password"
          name="pwd"
          value={login.pwd}
          onChange={InputChange}
          variant="outlined"
        />
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
