import express from 'express';
import {
  postUserAuthHandler,
  getSpecUserAuthHandler,
  getUserAuthHandler,
  getAllUserAuthHandler,
  putUserAuthHandler,
  deleteUserAuthHandler,
  loginUserAuthHandler,
} from './userAuthControllerHandler';
import { type RouterConfig, HttpMethod } from '../model';

const _BASE_PATH = `userAuthController`;
const getAllUserAuth = `/${_BASE_PATH}`;
const getUserAuth = `/${_BASE_PATH}Info`;
const putUserAuth = `/${_BASE_PATH}/:_id`;
const deleteUserAuth = `/${_BASE_PATH}/:_id`;
const postUserAuth = `/${_BASE_PATH}`;
const loginUserAuth = `/${_BASE_PATH}Login`;
const getSpecUserAuth = `/${_BASE_PATH}Spec`;
const router = express.Router();

router.post(postUserAuth, (req, res) => {
  void (async () => {
    await postUserAuthHandler(req, res);
  })();
});
router.get(getAllUserAuth, (req, res) => {
  void (async () => {
    await getAllUserAuthHandler(req, res);
  })();
});
router.get(getUserAuth, (req, res) => {
  void (async () => {
    await getUserAuthHandler(req, res);
  })();
});
router.get(loginUserAuth, (req, res) => {
  void (async () => {
    await loginUserAuthHandler(req, res);
  })();
});
router.get(getSpecUserAuth, (req, res) => {
  void (async () => {
    await getSpecUserAuthHandler(req, res);
  })();
});
router.put(putUserAuth, (req, res) => {
  void (async () => {
    await putUserAuthHandler(req, res);
  })();
});
router.delete(deleteUserAuth, (req, res) => {
  void (async () => {
    await deleteUserAuthHandler(req, res);
  })();
});

const routerConfig: RouterConfig = {
  router,
  routerName: 'userAuthController',
  routerDetails: [
    { path: postUserAuth, type: HttpMethod.post },
    { path: loginUserAuth, type: HttpMethod.get },
    { path: getAllUserAuth, type: HttpMethod.get },
    { path: getUserAuth, type: HttpMethod.get },
    { path: getSpecUserAuth, type: HttpMethod.get },
    { path: putUserAuth, type: HttpMethod.put },
    { path: deleteUserAuth, type: HttpMethod.delete },
  ],
};

export default routerConfig;
