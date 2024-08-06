import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeLogginStatus } from "../features/login/login";

const LogOut = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  useEffect(() => {
    try {
      axios.get(`${import.meta.env.VITE_BASE_API}/auth/logout`, { withCredentials: true });
      dispatch(changeLogginStatus(false))
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h1>Logging out....</h1>
    </div>
  );
};

export default LogOut;
