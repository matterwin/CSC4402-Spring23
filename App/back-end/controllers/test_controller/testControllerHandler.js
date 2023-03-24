const { executeQuery } = require("../../persistance/util");

const _verifyPostTest = (body) => {
  return body && body.testMessage;
};

const _verifyPutTest = (body) => {
  return body && body.testMessage;
};

const postTestHandler = (req, res) => {
  const body = req.body;

  if (!_verifyPostTest(body)) {
    res.status(400).send();
    return;
  }

  executeQuery(
    "sql/test/postTest.sql",
    [body.testMessage],
    (queryResult) => {
      res.json({
        id: queryResult.insertId,
      });
    },
    res
  );
};

const getAllTestHandler = (req, res) => {
  executeQuery(
    "sql/test/getAllTest.sql",
    undefined,
    (queryResult) => {
      if (!queryResult.length) {
        res.status(404).send();
        return;
      }

      const resultDTO = [];

      queryResult.forEach((row) => {
        resultDTO.push({
          id: row.id,
          testMessage: row.testMessage,
        });
      });

      res.json(resultDTO);
    },
    res
  );
};

const getTestHandler = (req, res) => {
  const id = req.params._id;

  executeQuery(
    "sql/test/getTest.sql",
    [id],
    (queryResult) => {
      if (!queryResult.length) {
        res.status(404).send();
        return;
      }

      res.status(200).json(queryResult[0]);
    },
    res
  );
};

const putTestHandler = (req, res) => {
  const id = req.params._id;
  const body = req.body;

  if (!_verifyPutTest(body)) {
    res.status(400).send();
    return;
  }

  executeQuery(
    "sql/test/putTest.sql",
    [body.testMessage, id],
    (queryResult) => {
      if (!queryResult.affectedRows) {
        res.status(404).send();
        return;
      }

      res.status(200).json({
        id: id,
      });
    },
    res
  );
};

const deleteTestHandler = (req, res) => {
  const id = req.params._id;

  executeQuery(
    "sql/test/deleteTest.sql",
    [id],
    (queryResult) => {
      if (!queryResult.affectedRows) {
        res.status(404).send();
        return;
      }

      res.status(204).send();
    },
    res
  );
};

module.exports = {
  postTestHandler,
  getAllTestHandler,
  getTestHandler,
  putTestHandler,
  deleteTestHandler,
};
