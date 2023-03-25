const express = require("express");
const {
  postMovieReviewHandler,
  getAllMovieReviewHandler,
  getAllUserMovieReviewHandler,
  getMovieReviewAvgRatingHandler,
  getMovieReviewHandler,
  deleteMovieReviewHandler,
  putMovieReviewHandler,
} = require("./movieReviewControllerHandler");

const _BASE_PATH = `movieReviewController`;
const router = express.Router();

const postMovieReview = `/${_BASE_PATH}`;
const getAllMovieReview = `/${_BASE_PATH}All`;
const getMovieReview = `/${_BASE_PATH}`;
const getAllUserMovieReview = `/${_BASE_PATH}User/:_id`;
const getMovieReviewAvgRating = `/${_BASE_PATH}AvgRating/:_id`;
const deleteMovieReview = `/${_BASE_PATH}`;
const putMovieReview = `/${_BASE_PATH}`;

router.post(postMovieReview, (req, res) => {
  postMovieReviewHandler(req, res);
});
router.get(getAllMovieReview, (req, res) => {
  getAllMovieReviewHandler(req, res);
});
router.get(getMovieReview, (req, res) => {
  getMovieReviewHandler(req, res);
});
router.get(getAllUserMovieReview, (req, res) => {
  getAllUserMovieReviewHandler(req, res);
});
router.get(getMovieReviewAvgRating, (req, res) => {
  getMovieReviewAvgRatingHandler(req, res);
});
router.delete(deleteMovieReview, (req, res) => {
  deleteMovieReviewHandler(req, res);
});
router.put(putMovieReview, (req, res) => {
  putMovieReviewHandler(req, res);
});

module.exports = {
  router,
  routerName: "movieReviewController",
  routerRouteDetails: [
    { path: postMovieReview, type: "post" },
    { path: getAllMovieReview, type: "get" },
    { path: getMovieReview, type: "get" },
    { path: getAllUserMovieReview, type: 'get' },
    { path: getMovieReviewAvgRating, type: 'get' },
    { path: deleteMovieReview, type: "delete" },
    { path: putMovieReview, type: 'put' },
  ],
};
