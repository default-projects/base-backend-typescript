import express from "express";

import Auth from "./auth";
import validate from "./validate";

const Routes = async (router: express.Router) => {
  // check loginStatus
  router.post("/loginStatus", Auth.controllers.middleware, Auth.controllers.checkLoginStatus);

  //user api
  router.post("/login", validate.login, Auth.controllers.login);
  router.post("/signup/register", validate.register, Auth.controllers.signup);
};

export { Routes };