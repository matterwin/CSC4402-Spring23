import express from 'express';
import {
  postTestHandler,
  getAllTestHandler,
  getTestHandler,
  putTestHandler,
  deleteTestHandler
} from './testControllerHandler';
import { HttpMethod, type RouterConfig } from '../model';

const _BASE_PATH = `testController`;
const router = express.Router();

const getAllTest = `/${_BASE_PATH}`;
const getTest = `/${_BASE_PATH}/:_id`;
const putTest = `/${_BASE_PATH}/:_id`;
const deleteTest = `/${_BASE_PATH}/:_id`;
const postTest = `/${_BASE_PATH}`;

router.post(postTest, (req, res) => {
  void (async () => {
    await postTestHandler(req, res);
  })();
});
router.get(getAllTest, (req, res) => {
  void (async () => {
    await getAllTestHandler(req, res);
  })();
});
router.get(getTest, (req, res) => {
  void (async () => {
    await getTestHandler(req, res);
  })();
});
router.put(putTest, (req, res) => {
  void (async () => {
    await putTestHandler(req, res);
  })();
});
router.delete(deleteTest, (req, res) => {
  void (async () => {
    await deleteTestHandler(req, res);
  })();
});

const routerConfig: RouterConfig = {
  router,
  routerName: 'testController',
  routerDetails: [
    { path: postTest, type: HttpMethod.post },
    { path: getAllTest, type: HttpMethod.get },
    { path: getTest, type: HttpMethod.get },
    { path: putTest, type: HttpMethod.put },
    { path: deleteTest, type: HttpMethod.delete }
  ]
};

export default routerConfig;
