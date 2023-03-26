const { executeQuery } = require("../../persistance/util");

const _verifyPost = (body) => {
  return body && body.username && body.email && body.password;
};

const _verifyLogin = (query) => {
  return query && query.email && query.password;
};

const _verifyPut = (body) => {
  return body && body.username && body.email && body.password;
};

const postUserAuthHandler = (req, res) => {
  const body = req.body;
  if (!_verifyPost(body)) {
    res.status(400).send();
    return;
  }

  try {
    executeQuery(
      "sql/userAuth/postUserAuth.sql",
      [body.username, body.email, body.password],
      (queryResult) => {
        res.json({
          id: queryResult.insertId,
        });
      },
      res
    );
  } catch (err) {
    console.error(err);
    res.status(403).send();
  }
};

const loginUserAuthHandler = (req, res) => {
  const query = req.query;

  if (!_verifyLogin) {
    res.status(400).send();
    return;
  }

  executeQuery(
    "sql/userAuth/loginUserAuth.sql",
    [query.email, query.password],
    (queryresult) => {
      if (queryresult.length < 1) {
        res.status(404).send();
        return;
      }

      res.json({
        id: queryresult[0].id,
      });
    },
    res
  );
};

const getAllUserAuthHandler = (req, res) => {
  executeQuery(
    "sql/userAuth/getAllUserAuth.sql",
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
          username: row.username,
          email: row.email,
          password: row.password,
        });
      });

      res.json(resultDTO);
    },
    res
  );
};

const getUserAuthHandler = (req, res) => {
  const query = req.query;

  executeQuery(
    "sql/userAuth/getUserAuth.sql",
    [query.id],
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

const putUserAuthHandler = (req, res) => {
  const id = req.params._id;
  const body = req.body;

  if (!_verifyPut(body)) {
    res.status(400).send();
    return;
  }

  executeQuery(
    "sql/userAuth/putUserAuth.sql",
    [body.username, body.email, body.password, id],
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

const deleteUserAuthHandler = (req, res) => {
  const id = req.params._id;

  executeQuery(
    "sql/userAuth/deleteUserAuth.sql",
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
  postUserAuthHandler,
  loginUserAuthHandler,
  getUserAuthHandler,
  getAllUserAuthHandler,
  putUserAuthHandler,
  deleteUserAuthHandler,
};
