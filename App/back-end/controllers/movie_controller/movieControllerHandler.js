const { executeQuery } = require("../../persistance/util");
const { attemptFolderDelete } = require("../fileUtil");

const _verifyPostMovie = (body, file) => {
  return (
    body &&
    body.name &&
    body.description &&
    body.length &&
    body.releaseDate &&
    body.genre &&
    file &&
    file.destination
  );
};

const postMovieHandler = (req, res) => {
  const body = req.body;
  const file = req.file;

  if (!_verifyPostMovie(body, file)) {
    attemptFolderDelete(file);
    res.status(400).send();
    return;
  }

  const splitFilePath = file.destination.split("/");
  const endFilePath = `/${splitFilePath[splitFilePath.length - 2]}/${
    splitFilePath[splitFilePath.length - 1]
  }/${file.originalname}`;

  executeQuery(
    "sql/movie/postMovie.sql",
    [
      body.name,
      body.description,
      body.length,
      body.releaseDate,
      body.genre,
      endFilePath,
    ],
    (queryResult) => {
      res.json({
        id: queryResult.insertId,
      });
    },
    res
  );
};

const getAllMovieNameHandler = (req, res) => {
  executeQuery(
    "sql/movie/getAllMovieName.sql",
    undefined,
    (queryResult) => {
      if (!queryResult.length) {
        res.status(404).send();
        return;
      }

      const resultDTO = [];

      queryResult.forEach((row) => {
        resultDTO.push(row.name);
      });

      res.json(resultDTO);
    },
    res
  );
};

const getAllMovieHandler = (req, res) => {
  executeQuery(
    "sql/movie/getAllMovie.sql",
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
          name: row.name,
          description: row.description,
          length: row.length,
          releaseDate: row.releaseDate,
          genre: row.genre,
          filepath: row.filepath,
        });
      });

      res.json(resultDTO);
    },
    res
  );
};

const getAllMovieFeedHandler = (req, res) => {
  executeQuery(
    "sql/movie/getAllMovieFeed.sql",
    undefined,
    (queryResult) => {
      if(!queryResult.length) {
        res.status(404).send();
        return;
      }

      const resultDTO = [];

      queryResult.forEach((row) => {
        resultDTO.push({
          id: row.id,
          name: row.name,
          releaseDate: row.releaseDate,
          filepath: row.filepath,
          avg: row.avg,
        });
      });

      res.json(resultDTO);
    },
    res
  );
};

const getMovieHandler = (req, res) => {
  const id = req.params._id;

  executeQuery(
    "sql/movie/getMovie.sql",
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

const getMovieFeedHandler= (req, res) => {
  const id = req.params._id;

  executeQuery(
    "sql/movie/getMovieFeed.sql",
    [id, id],
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

const deleteMovieHandler = (req, res) => {
  const id = req.params._id;

  executeQuery(
    "sql/movie/deleteMovie.sql",
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
  postMovieHandler,
  getAllMovieHandler,
  getMovieHandler,
  getMovieFeedHandler,
  getAllMovieFeedHandler,
  getAllMovieNameHandler,
  deleteMovieHandler,
};
