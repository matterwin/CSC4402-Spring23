import express from 'express';
import {
  postMovieReviewHandler,
  getAllMovieReviewHandler,
  getMovieReviewByMovieIdHandler,
  getAllUserMovieReviewHandler,
  getMovieReviewByMovieIdWithUserHandler,
  getMovieReviewAvgRatingHandler,
  getMovieReviewHandler,
  deleteMovieReviewHandler,
  putMovieReviewHandler,
} from './movieReviewControllerHandler';
import { type RouterConfig, HttpMethod } from '../model';

const _BASE_PATH = `movieReviewController`;
const router = express.Router();

const postMovieReview = `/${_BASE_PATH}`;
const getAllMovieReview = `/${_BASE_PATH}All`;
const getMovieReview = `/${_BASE_PATH}`;
const getAllUserMovieReview = `/${_BASE_PATH}User/:_id`;
const getMovieReviewByMovieIdWithUser = `/${_BASE_PATH}WithUser/:_id`;
const getMovieReviewAvgRating = `/${_BASE_PATH}AvgRating/:_id`;
const getMovieReviewByMovieId = `/${_BASE_PATH}ByMovieId/:_id`;
const deleteMovieReview = `/${_BASE_PATH}`;
const putMovieReview = `/${_BASE_PATH}`;

router.post(postMovieReview, (req, res) => {
  void (async () => {
    await postMovieReviewHandler(req, res);
  })();
});
router.get(getAllMovieReview, (req, res) => {
  void (async () => {
    await getAllMovieReviewHandler(req, res);
  })();
});
router.get(getMovieReviewByMovieIdWithUser, (req, res) => {
  void (async () => {
    await getMovieReviewByMovieIdWithUserHandler(req, res);
  })();
});
router.get(getMovieReviewByMovieId, (req, res) => {
  void (async () => {
    await getMovieReviewByMovieIdHandler(req, res);
  })();
});
router.get(getMovieReview, (req, res) => {
  void (async () => {
    await getMovieReviewHandler(req, res);
  })();
});
router.get(getAllUserMovieReview, (req, res) => {
  void (async () => {
    await getAllUserMovieReviewHandler(req, res);
  })();
});
router.get(getMovieReviewAvgRating, (req, res) => {
  void (async () => {
    await getMovieReviewAvgRatingHandler(req, res);
  })();
});
router.delete(deleteMovieReview, (req, res) => {
  void (async () => {
    await deleteMovieReviewHandler(req, res);
  })();
});
router.put(putMovieReview, (req, res) => {
  void (async () => {
    await putMovieReviewHandler(req, res);
  })();
});

const routerConfig: RouterConfig = {
  router,
  routerName: 'movieReviewController',
  routerDetails: [
    { path: postMovieReview, type: HttpMethod.post },
    { path: getAllMovieReview, type: HttpMethod.get },
    { path: getMovieReview, type: HttpMethod.get },
    { path: getAllUserMovieReview, type: HttpMethod.get },
    { path: getMovieReviewByMovieIdWithUser, type: HttpMethod.get },
    { path: getMovieReviewByMovieId, type: HttpMethod.get },
    { path: getMovieReviewAvgRating, type: HttpMethod.get },
    { path: deleteMovieReview, type: HttpMethod.delete },
    { path: putMovieReview, type: HttpMethod.put },
  ],
};

export default routerConfig;
