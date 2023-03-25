const express = require("express");
const {
  postUserAuthHandler,
  getUserAuthHandler,
  getAllUserAuthHandler,
  putUserAuthHandler,
  deleteUserAuthHandler,
  loginUserAuthHandler,
} = require("./userAuthControllerHandler");

const _BASE_PATH = `userAuthController`;
const getAllUserAuth = `/${_BASE_PATH}`;
const getUserAuth = `/${_BASE_PATH}/:_id`;
const putUserAuth = `/${_BASE_PATH}/:_id`;
const deleteUserAuth = `/${_BASE_PATH}/:_id`;
const postUserAuth = `/${_BASE_PATH}`;
const loginUserAuth = `/${_BASE_PATH}Login`;
const router = express.Router();

router.post(postUserAuth, (req, res) => {
  postUserAuthHandler(req, res);
});
router.get(getAllUserAuth, (req, res) => {
  getAllUserAuthHandler(req, res);
});
router.get(getUserAuth, (req, res) => {
  getUserAuthHandler(req, res);
});
router.get(loginUserAuth, (req, res) => {
  loginUserAuthHandler(req, res);
});
router.put(putUserAuth, (req, res) => {
  putUserAuthHandler(req, res);
});
router.delete(deleteUserAuth, (req, res) => {
  deleteUserAuthHandler(req, res);
});

module.exports = {
  router,
  routerName: "userAuthController",
  routerRouteDetails: [
    { path: postUserAuth, type: "post" },
    { path: loginUserAuth, type: "get" },
    { path: getAllUserAuth, type: "get" },
    { path: getUserAuth, type: "get" },
    { path: putUserAuth, type: "put" },
    { path: deleteUserAuth, type: "delete" },
  ],
};
