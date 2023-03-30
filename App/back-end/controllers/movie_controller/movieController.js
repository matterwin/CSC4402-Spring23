const express = require('express');
const { postMovieHandler, 
        getAllMovieHandler, 
        getMovieHandler, 
        getMovieFeedHandler,
        getMovieWithAvgHandler,
        getAllMovieFeedHandler,
        getAllMovieNameHandler,
        deleteMovieHandler } = require('./movieControllerHandler');

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
    postMovieHandler(req, res);
});
router.get(getAllMovie, (req, res) => {
    getAllMovieHandler(req, res);
});
router.get(getMovie, (req, res) => {
    getMovieHandler(req, res);
});
router.get(getMovieWithAvg, (req, res) => {
    console.log("HERE");
    getMovieWithAvgHandler(req, res);
});
router.get(getAllMovieFeed, (req, res) => {
    getAllMovieFeedHandler(req, res);
});
router.get(getAllMovieName, (req, res) => {
    getAllMovieNameHandler(req, res);
});
router.get(getMovieFeed, (req, res) => {
    getMovieFeedHandler(req, res);
});
router.delete(deleteMovie, (req, res) => {
    deleteMovieHandler(req, res);
});

module.exports = {
    router,
    routerName: 'movieController',
    routerRouteDetails: [
        { path: postMovie, type: 'post' },
        { path: getAllMovie, type: 'get' },
        { path: getMovie, type: 'get' },
        { path: getMovieFeed, type: 'get' },
        { path: getMovieWithAvg, type: 'get' },
        { path: getAllMovieName, type: 'get' },
        { path: getAllMovieFeed, type: 'get' },
        { path: deleteMovie, type: 'delete' },
    ]
}
