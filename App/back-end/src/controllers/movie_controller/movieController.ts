import express from 'express';
import {
  postMovieHandler,
  getAllMovieHandler,
  getMovieHandler,
  getMovieFeedHandler,
  getMovieWithAvgHandler,
  getAllMovieFeedHandler,
  getAllMovieNameHandler,
  deleteMovieHandler
} from './movieControllerHandler';
import { HttpMethod, type RouterConfig } from '../model';

const _BASE_PATH = `movieController`;
const router = express.Router();

const getAllMovie = `/${_BASE_PATH}`;
const getMovie = `/${_BASE_PATH}/:_id`;
const getMovieFeed = `/${_BASE_PATH}Feed/:_id`;
const getAllMovieFeed = `/${_BASE_PATH}Feed`;
const getMovieWithAvg = `/${_BASE_PATH}WithAvg/:_id`;
const getAllMovieName = `/${_BASE_PATH}Name`;
const deleteMovie = `/${_BASE_PATH}/:_id`;
const postMovie = `/${_BASE_PATH}`;

router.post(postMovie, (req, res) => {
  void (async () => {
    await postMovieHandler(req, res);
  })();
});
router.get(getAllMovie, (req, res) => {
  void (async () => {
    await getAllMovieHandler(req, res);
  })();
});
router.get(getMovie, (req, res) => {
  void (async () => {
    await getMovieHandler(req, res);
  })();
});
router.get(getMovieWithAvg, (req, res) => {
  void (async () => {
    await getMovieWithAvgHandler(req, res);
  })();
});
router.get(getAllMovieFeed, (req, res) => {
  void (async () => {
    await getAllMovieFeedHandler(req, res);
  })();
});
router.get(getAllMovieName, (req, res) => {
  void (async () => {
    await getAllMovieNameHandler(req, res);
  })();
});
router.get(getMovieFeed, (req, res) => {
  void (async () => {
    await getMovieFeedHandler(req, res);
  })();
});
router.delete(deleteMovie, (req, res) => {
  void (async () => {
    await deleteMovieHandler(req, res);
  })();
});

const routerConfig: RouterConfig = {
  router,
  routerName: 'movieController',
  routerDetails: [
    { path: postMovie, type: HttpMethod.get },
    { path: getAllMovie, type: HttpMethod.get },
    { path: getMovie, type: HttpMethod.get },
    { path: getMovieFeed, type: HttpMethod.get },
    { path: getMovieWithAvg, type: HttpMethod.get },
    { path: getAllMovieName, type: HttpMethod.get },
    { path: getAllMovieFeed, type: HttpMethod.get },
    { path: deleteMovie, type: HttpMethod.delete }
  ]
};

export default routerConfig;
