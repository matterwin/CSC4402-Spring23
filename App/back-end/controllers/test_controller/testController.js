const express = require('express');
const { postTestHandler, 
        getAllTestHandler, 
        getTestHandler, 
        putTestHandler, 
        deleteTestHandler } = require('./testControllerHandler');

const _BASE_PATH = `testController`;
const router = express.Router();

const getAllTest = `/${_BASE_PATH}`;
const getTest = `/${_BASE_PATH}/:_id`;
const putTest = `/${_BASE_PATH}/:_id`;
const deleteTest = `/${_BASE_PATH}/:_id`;
const postTest = `/${_BASE_PATH}`;

router.post(postTest, (req, res) => {
    postTestHandler(req, res);
});
router.get(getAllTest, (req, res) => {
    getAllTestHandler(req, res);
});
router.get(getTest, (req, res) => {
    getTestHandler(req, res);
})
router.put(putTest, (req, res) => {
    putTestHandler(req, res);
});
router.delete(deleteTest, (req, res) => {
    deleteTestHandler(req, res);
});

module.exports = {
    router,
    routerName: 'testController',
    routerRouteDetails: [
        { path: postTest, type: 'post' },
        { path: getAllTest, type: 'get' },
        { path: getTest, type: 'get' },
        { path: putTest, type: 'put' },
        { path: deleteTest, type: 'delete' },
    ]
}
