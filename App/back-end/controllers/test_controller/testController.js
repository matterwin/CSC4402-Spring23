const express = require('express');
const { postTestHandler, getAllTestsHandler, getTestHandler, putTestHandler, deleteTestHandler } = require('./testControllerHandler');

const _BASE_PATH = `testController`;
const router = express.Router();

const getAllTests = `/${_BASE_PATH}`;
const getTest = `/${_BASE_PATH}/:_id`;
const putTest = `/${_BASE_PATH}/:_id`;
const deleteTest = `/${_BASE_PATH}/:_id`;
const postTest = `/${_BASE_PATH}`;

router.post(postTest, (req, res) => {
    postTestHandler(req, res);
});
router.get(getAllTests, (req, res) => {
    getAllTestsHandler(req, res);
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
        { path: getAllTests, type: 'get' },
        { path: getTest, type: 'get' },
        { path: putTest, type: 'put' },
        { path: deleteTest, type: 'delete' },
    ]
}
