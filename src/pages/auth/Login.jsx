import React, { useEffect } from "react";
import Form from "./components/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, setStatus } from "../../../store/authSlice";
import STATUSES from "../../globals/status/statuses";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, status, token } = useSelector((store) => store.auth);

  const handleLogin = (data) => {
    console.log(status);
    dispatch(login(data));
  };
  useEffect(() => {
    if (status === STATUSES.SUCCESS) {
      localStorage.setItem("jwt", token);
      console.log(status);
      navigate("/");
      dispatch(setStatus(null));
    }
  }, [status]);

  return <Form type="Login" user={user ? user : ""} onSubmit={handleLogin} />;
};

export default Login;
