import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { changeLogginStatus } from "../features/login/login";

const Root = () => {
  const login = useSelector((state) => state.login.loggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_API}/auth/verify`, {
          withCredentials: true,
        });
        const verifyLoggedIn = response.data.verified;
        dispatch(changeLogginStatus(verifyLoggedIn));
      } catch (error) {
        dispatch(changeLogginStatus(false));
        console.log(error);
      }
    };

    verifyUser();
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
