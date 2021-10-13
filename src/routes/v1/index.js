const express = require("express");
const authRoute = require("./authRoute");
const profileRoute = require("./profileRoute");
const categoryRoute = require("./categoryRoute");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/profile",
    route: profileRoute,
  },
  {
    path: "/category",
    route: categoryRoute,
  },
  {
    path: "/product",
    route: categoryRoute,
  },
  {
    path: "/room",
    route: categoryRoute,
  },
  {
    path: "/variant",
    route: categoryRoute,
  },
  {
    path: "/manual",
    route: categoryRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
