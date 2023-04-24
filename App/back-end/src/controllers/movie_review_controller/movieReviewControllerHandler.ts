import { executeQuery } from '../../persistance/util';
import { type Request, type Response } from 'express';

export const _verifyPostMovieReview = (body: any): boolean => {
  return (
    body?.userId !== undefined &&
    body.movieId !== undefined &&
    body.review !== undefined &&
    body.rating !== undefined
  );
};

export const _verifyGetMovieReview = (query: any): boolean => {
  return query?.userId !== undefined && query.movieId !== undefined;
};

export const _verifyDeleteMovieReview = (body: any): boolean => {
  return body?.userId !== undefined && body.movieId !== undefined;
};

export const _verifyPutMovieReview = (body: any): boolean => {
  return body?.userId !== undefined && body.movieId !== undefined;
};

export const postMovieReviewHandler = async (req: Request, res: Response): Promise<void> => {
  const body = req.body;

  if (!_verifyPostMovieReview(body)) {
    res.status(400).send();
    return;
  }

  const datetimeSQL = new Date().toISOString().split('T').join(' ').split('Z').join('');

  try {
    await executeQuery(res, 'sql/movieReview/postMovieReview.sql', [
      body.userId,
      body.movieId,
      body.review,
      body.rating,
      datetimeSQL,
    ]);

    res.send();
  } catch (err) {
    console.error(err);
  }
};

export const getAllMovieReviewHandler = async (_req: Request, res: Response): Promise<void> => {
  try {
    const queryResult = await executeQuery(res, 'sql/movieReview/getAllMovieReview.sql');

    if (queryResult.length <= 0) {
      res.status(404).send();
      return;
    }

    const resultDTO: any = [];

    queryResult.forEach((row: any) => {
      resultDTO.push({
        userId: row.userId,
        movieId: row.movieId,
        review: row.review,
        rating: row.rating,
      });
    });

    res.json(resultDTO);
  } catch (err) {
    console.error(err);
  }
};

export const getMovieReviewAvgRatingHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userId = req.params._id;

  if (userId === undefined) {
    res.status(403).send();
    return;
  }

  try {
    const queryResult = await executeQuery(res, 'sql/movieReview/getMovieReviewAvgRating.sql', [
      userId,
    ]);

    if (queryResult.length <= 0) {
      res.status(404).send();
      return;
    }

    res.json({
      avg: queryResult[0].avg,
    });
    res.send();
  } catch (err) {
    console.error(err);
  }
};

export const getMovieReviewByMovieIdWithUserHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const movieId = req.params._id;

  if (movieId === undefined) {
    res.status(403).send();
    return;
  }

  try {
    const queryResult = await executeQuery(
      res,
      'sql/movieReview/getMovieReviewByMovieIdWithUser.sql',
      [movieId],
    );
    if (queryResult.length <= 0) {
      res.status(404).send();
      return;
    }

    res.json(queryResult);
  } catch (err) {
    console.error(err);
  }
};

export const getMovieReviewByMovieIdHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const movieId = req.params._id;

  if (movieId === undefined) {
    res.status(403).send();
    return;
  }

  try {
    const queryResult = await executeQuery(res, 'sql/movieReview/getMovieReviewByMovieId.sql', [
      movieId,
    ]);
    if (queryResult.length <= 0) {
      res.status(404).send();
      return;
    }

    res.json(queryResult);
  } catch (err) {
    console.error(err);
  }
};

export const getAllUserMovieReviewHandler = async (req: Request, res: Response): Promise<void> => {
  const userId = req.params._id;

  if (userId === undefined) {
    res.status(403).send();
    return;
  }

  try {
    const queryResult = await executeQuery(res, 'sql/movieReview/getMovieReviewByMovieId.sql', [
      userId,
    ]);

    if (queryResult.length <= 0) {
      res.status(404).send();
      return;
    }

    const resultDTO: any = [];

    queryResult.forEach((row: any) => {
      resultDTO.push({
        userId: row.userId,
        movieId: row.movieId,
        review: row.review,
        rating: row.rating,
      });
    });

    res.json(resultDTO);
  } catch (err) {
    console.error(err);
  }
};

export const getMovieReviewHandler = async (req: Request, res: Response): Promise<void> => {
  const query = req.query;

  if (!_verifyGetMovieReview(query)) {
    res.status(403).send();
    return;
  }

  try {
    const queryResult = await executeQuery(res, 'sql/movieReview/getMovieReview.sql', [
      query.userId as string,
      query.movieId as string,
    ]);

    if (queryResult.length <= 0) {
      res.status(404).send();
      return;
    }

    res.json(queryResult[0]);
  } catch (err) {
    console.error(err);
  }
};

export const deleteMovieReviewHandler = async (req: Request, res: Response): Promise<void> => {
  const body = req.body;

  if (!_verifyDeleteMovieReview(body)) {
    res.status(403).send();
    return;
  }

  try {
    const queryResult = await executeQuery(res, 'sql/movieReview/deleteMovieReview.sql', [
      body.userId,
      body.movieId,
    ]);

    if (queryResult.affectedRows <= 0) {
      res.status(404).send();
      return;
    }

    res.status(204).send();
  } catch (err) {
    console.error(err);
  }
};

export const putMovieReviewHandler = async (req: Request, res: Response): Promise<void> => {
  const body = req.body;

  if (!_verifyPutMovieReview(body)) {
    res.status(403).send();
    return;
  }

  try {
    const queryResult = await executeQuery(res, 'sql/movieReview/putMovieReview.sql', [
      body.review,
      body.rating,
      body.userId,
      body.movieId,
    ]);

    if (queryResult.affectedRows <= 0) {
      res.status(404).send();
      return;
    }

    res.status(204).send();
  } catch (err) {
    console.error(err);
  }
};
