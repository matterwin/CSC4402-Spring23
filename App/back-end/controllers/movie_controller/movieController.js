const express = require('express');
const { postMovieHandler, 
        getAllMovieHandler, 
        getMovieHandler, 
        deleteMovieHandler } = require('./movieControllerHandler');

const _BASE_PATH = `movieController`;
const router = express.Router();

const getAllMovie = `/${_BASE_PATH}`;
const getMovie = `/${_BASE_PATH}/:_id`;
const putMovie = `/${_BASE_PATH}/:_id`;
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
})
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
        { path: deleteMovie, type: 'delete' },
    ]
}
