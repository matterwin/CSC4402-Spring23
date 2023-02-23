const { executeQuery } = require('../../persistance/util');

const getAllTestsHandler = (req, res) => {
    executeQuery('sql/test/getAllTests.sql', undefined, (queryResult) => {
        if (!queryResult.length) {
            res.status(404).send();
            return;
        }

        const resultDTO = [];

        queryResult.forEach(row => {
            resultDTO.push({
                id: row.id,
                testMessage: row.testMessage,
            })
        });

        res.json(resultDTO);
    });
};

const getTestHandler = (req, res) => {
    const id = req.params._id;

    executeQuery('sql/test/getTest.sql', [id], (queryResult) => {
        if (!queryResult.length) {
            res.status(404).send();
            return;
        }

        res.status(200).json(queryResult[0]);
    });
}

module.exports = {
    getAllTestsHandler,
    getTestHandler,
};