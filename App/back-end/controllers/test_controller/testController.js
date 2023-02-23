const express = require('express');
const { getAllTestsHandler, getTestHandler } = require('./testControllerHandler');

const _BASE_PATH = `testController`;
const router = express.Router();

const getAllTests = `/${_BASE_PATH}`;
const getTest = `/${_BASE_PATH}/:_id`;
const putTest = `/${_BASE_PATH}/:_id`;
const deleteTest = `/${_BASE_PATH}/:_id`;
const postTest = `/${_BASE_PATH}/:_id`;

router.get(getAllTests, (req, res) => {
    getAllTestsHandler(req, res);
});
router.get(getTest, (req, res) => {
    getTestHandler(req, res);
})
router.put(putTest, (req, res) => {
    console.log('Put Test');
    res.status(200).send();
});
router.delete(deleteTest, (req, res) => {
    console.log('Delete Test');
    res.status(200).send();
});
router.post(postTest, (req, res) => {
    console.log('Post Test');
    res.status(200).send();
});

module.exports = {
    router,
    routerName: 'testController',
    routerRouteDetails: [
        { path: getAllTests, type: 'get' },
        { path: getTest, type: 'get' },
        { path: putTest, type: 'put' },
        { path: deleteTest, type: 'delete' },
        { path: postTest, type: 'post' },
    ]
}
