import express from 'express';
import {
  postMovieHandler,
  getAllMovieHandler,
  getMovieHandler,
  getMovieFeedHandler,
  getMovieWithAvgHandler,
  getAllMovieFeedHandler,
  getAllMovieNameHandler,
  getAllMovieWithAvgSortAscHandler,
  getAllMovieWithAvgSortAscPlusGenreHandler,
  getAllMovieWithAvgSortDescHandler,
  getAllMovieWithAvgSortDescPlusGenreHandler,
  getAllMovieWithAvgSortTopolHandler,
  getAllMovieWithAvgSortTopolPlusGenreHandler,
  getAllMovieWithAvgSortReleaseDateHandler,
  getAllMovieWithAvgSortReleaseDatePlusGenreHandler,
  getAllMovieWithAvgSortGenreHandler,
  deleteMovieHandler,
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
const getAllMovieWithAvgSortAsc = `/${_BASE_PATH}WithAvgAsc`;
const getAllMovieWithAvgSortAscPlusGenre = `/${_BASE_PATH}WithAvgAscPlusGenre`;
const getAllMovieWithAvgSortDesc = `/${_BASE_PATH}WithAvgDesc`;
const getAllMovieWithAvgSortDescPlusGenre = `/${_BASE_PATH}WithAvgDescPlusGenre`;
const getAllMovieWithAvgSortTopol = `/${_BASE_PATH}WithAvgTopol`;
const getAllMovieWithAvgSortTopolPlusGenre = `/${_BASE_PATH}WithAvgTopolPlusGenre`;
const getAllMovieWithAvgReleaseDate = `/${_BASE_PATH}WithAvgReleaseDate`;
const getAllMovieWithAvgReleaseDatePlusGenre = `/${_BASE_PATH}WithAvgReleaseDatePlusGenre`;
const getAllMovieWithAvgGenre = `/${_BASE_PATH}WithAvgGenre`;

router.get(getAllMovieWithAvgGenre, (req, res) => {
  void (async () => {
    await getAllMovieWithAvgSortGenreHandler(req, res);
  })();
});
router.get(getAllMovieWithAvgReleaseDate, (req, res) => {
  void (async () => {
    await getAllMovieWithAvgSortReleaseDateHandler(req, res);
  })();
});
router.get(getAllMovieWithAvgReleaseDatePlusGenre, (req, res) => {
  void (async () => {
    await getAllMovieWithAvgSortReleaseDatePlusGenreHandler(req, res);
  })();
});
router.get(getAllMovieWithAvgSortAsc, (req, res) => {
  void (async () => {
    await getAllMovieWithAvgSortAscHandler(req, res);
  })();
});
router.get(getAllMovieWithAvgSortAscPlusGenre, (req, res) => {
  void (async () => {
    await getAllMovieWithAvgSortAscPlusGenreHandler(req, res);
  })();
});
router.get(getAllMovieWithAvgSortDesc, (req, res) => {
  void (async () => {
    await getAllMovieWithAvgSortDescHandler(req, res);
  })();
});
router.get(getAllMovieWithAvgSortDescPlusGenre, (req, res) => {
  void (async () => {
    await getAllMovieWithAvgSortDescPlusGenreHandler(req, res);
  })();
});
router.get(getAllMovieWithAvgSortTopol, (req, res) => {
  void (async () => {
    await getAllMovieWithAvgSortTopolHandler(req, res);
  })();
});
router.get(getAllMovieWithAvgSortTopolPlusGenre, (req, res) => {
  void (async () => {
    await getAllMovieWithAvgSortTopolPlusGenreHandler(req, res);
  })();
});
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
    { path: getAllMovieWithAvgGenre, type: HttpMethod.get },
    { path: getAllMovieWithAvgReleaseDate, type: HttpMethod.get },
    { path: getAllMovieWithAvgReleaseDatePlusGenre, type: HttpMethod.get },
    { path: getAllMovieWithAvgSortAsc, type: HttpMethod.get },
    { path: getAllMovieWithAvgSortAscPlusGenre, type: HttpMethod.get },
    { path: getAllMovieWithAvgSortDesc, type: HttpMethod.get },
    { path: getAllMovieWithAvgSortDescPlusGenre, type: HttpMethod.get },
    { path: getAllMovieWithAvgSortTopol, type: HttpMethod.get },
    { path: getAllMovieWithAvgSortTopolPlusGenre, type: HttpMethod.get },
    { path: postMovie, type: HttpMethod.get },
    { path: getAllMovie, type: HttpMethod.get },
    { path: getMovie, type: HttpMethod.get },
    { path: getMovieFeed, type: HttpMethod.get },
    { path: getMovieWithAvg, type: HttpMethod.get },
    { path: getAllMovieName, type: HttpMethod.get },
    { path: getAllMovieFeed, type: HttpMethod.get },
    { path: deleteMovie, type: HttpMethod.delete },
  ],
};

export default routerConfig;
