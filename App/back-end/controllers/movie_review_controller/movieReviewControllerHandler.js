const { executeQuery } = require("../../persistance/util");

const _verifyPostMovieReview = (body) => {
  return body && body.userId && body.movieId && body.review && body.rating;
};

const _verifyGetMovieReview = (body) => {
  return body && body.userId && body.movieId;
};

const _verifyDeleteMovieReview = (body) => {
  return body && body.userId && body.movieId;
};

const _verifyPutMovieReview = (body) => {
  return body && body.userId && body.movieId;
}

const postMovieReviewHandler = (req, res) => {
  const body = req.body;

  if (!_verifyPostMovieReview(body)) {
    res.status(400).send();
    return;
  }

  executeQuery(
    "sql/movieReview/postMovieReview.sql",
    [body.userId, body.movieId, body.review, body.rating],
    (queryResult) => {
      res.status(200).send();
    },
    res
  );
};

const getAllMovieReviewHandler = (req, res) => {
  executeQuery(
    "sql/movieReview/getAllMovieReview.sql",
    undefined,
    (queryResult) => {
      if (!queryResult.length) {
        res.status(404).send();
        return;
      }

      const resultDTO = [];

      queryResult.forEach((row) => {
        resultDTO.push({
          userId: row.userId,
          movieId: row.movieId,
          review: row.review,
          rating: row.rating,
        });
      });

      res.json(resultDTO);
    },
    res
  );
};

const getMovieReviewAvgRatingHandler = (req, res) => {
  const userId = req.params._id;

  executeQuery(
    "sql/movieReview/getMovieReviewAvgRating.sql",
    [userId],
    (queryResult) => {
      if(queryResult.length < 1) {
        res.status(404).send();
        return;
      }

      res.json({
        avg: queryResult[0].avg,
      })
      res.status(200).send();
    },
    res
  );
}

const getAllUserMovieReviewHandler = (req, res) => {
  const userId = req.params._id;

  executeQuery(
    "sql/movieReview/getAllUserMovieReview.sql",
    [userId],
    (queryResult) => {
      console.log(queryResult);
      if (!queryResult.length) {
        res.status(404).send();
        return;
      }

      const resultDTO = [];

      queryResult.forEach((row) => {
        resultDTO.push({
          userId: row.userId,
          movieId: row.movieId,
          review: row.review,
          rating: row.rating,
        });
      });

      res.json(resultDTO);
    },
    res
  );
};

const getMovieReviewHandler = (req, res) => {
  const body = req.body;

  if (!_verifyGetMovieReview(body)) {
    res.status(403).send();
    return;
  }

  executeQuery(
    "sql/movieReview/getMovieReview.sql",
    [body.userId, body.movieId],
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

const deleteMovieReviewHandler = (req, res) => {
  const body = req.body;

  if (!_verifyDeleteMovieReview) {
    res.status(403).send();
    return;
  }

  executeQuery(
    "sql/movieReview/deleteMovieReview.sql",
    [body.userId, body.movieId],
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

const putMovieReviewHandler = (req, res) => {
  const body = req.body;

  if (!_verifyPutMovieReview) {
    res.status(403).send();
    return;
  }

  executeQuery(
    "sql/movieReview/putMovieReview.sql",
    [body.review, body.rating, body.userId, body.movieId],
    (queryResult) => {
      if (!queryResult.affectedRows) {
        res.status(404).send();
        return;
      }

      res.status(200).json({
        movieId: body.userId,
        userId: body.userId,
      });
    },
    res
  );
};

module.exports = {
  postMovieReviewHandler,
  getAllMovieReviewHandler,
  getAllUserMovieReviewHandler,
  getMovieReviewAvgRatingHandler,
  getMovieReviewHandler,
  deleteMovieReviewHandler,
  putMovieReviewHandler,
};
