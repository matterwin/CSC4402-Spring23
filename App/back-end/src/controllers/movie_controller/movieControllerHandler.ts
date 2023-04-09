import { executeQuery } from '../../persistance/util';
import { attemptFolderDelete } from '../fileUtil';
import { type Request, type Response } from 'express';

export const _verifyPostMovie = (body: any, file: any): boolean => {
  return (
    body.name !== undefined &&
    body.description !== undefined &&
    body.length !== undefined &&
    body.releaseDate !== undefined &&
    body.genre !== undefined &&
    file?.destination !== undefined
  );
};

export const postMovieHandler = async (req: Request, res: Response): Promise<void> => {
  const body = req.body;
  const file = req.file;

  if (file === undefined || !_verifyPostMovie(body, file)) {
    await attemptFolderDelete(file);
    res.status(400).send();
    return;
  }

  const splitFilePath = file.destination.split('/');

  const movieFolder = splitFilePath[splitFilePath.length - 2];
  const movieSpecificFolder = splitFilePath[splitFilePath.length - 1];
  const movieFileName = file.originalname;

  const endFilePath = `/${movieFolder}/${movieSpecificFolder}/${movieFileName}`;

  try {
    const queryResult = await executeQuery(res, 'sql/movie/postMovie.sql', [
      body.name,
      body.description,
      body.length,
      body.releaseDate,
      body.genre,
      endFilePath
    ]);

    res.json({
      id: queryResult.insertId
    });
  } catch (err) {
    console.error(err);
  }
};

export const getMovieWithAvgHandler = async (req: Request, res: Response): Promise<void> => {
  const id = req.params._id;

  try {
    const queryResult = await executeQuery(res, 'sql/movie/getMovieWithAvg.sql', [id, id]);

    if (queryResult.length <= 0) {
      res.status(404).send();
      return;
    }

    res.json(queryResult[0]);
  } catch (err) {
    console.error(err);
  }
};

export const getAllMovieNameHandler = async (_req: Request, res: Response): Promise<void> => {
  try {
    const queryResult = await executeQuery(res, 'sql/movie/getAllMovieName.sql');

    if (queryResult.length <= 0) {
      res.status(404).send();
      return;
    }

    const resultDTO: any = [];

    queryResult.forEach((row: any) => {
      resultDTO.push(row.name);
    });

    res.json(resultDTO);
  } catch (err) {
    console.error(err);
  }
};

export const getAllMovieHandler = async (_req: Request, res: Response): Promise<void> => {
  try {
    const queryResult = await executeQuery(res, 'sql/movie/getAllMovie.sql');

    if (queryResult.length <= 0) {
      res.status(404).send();
      return;
    }

    const resultDTO: any = [];

    queryResult.forEach((row: any) => {
      resultDTO.push({
        id: row.id,
        name: row.name,
        description: row.description,
        length: row.length,
        releaseDate: row.releaseDate,
        genre: row.genre,
        filepath: row.filepath
      });
    });

    res.json(resultDTO);
  } catch (err) {
    console.error(err);
  }
};

export const getAllMovieFeedHandler = async (_req: Request, res: Response): Promise<void> => {
  try {
    const queryResult = await executeQuery(res, 'sql/movie/getAllMovieFeed.sql');

    if (queryResult.length <= 0) {
      res.status(404).send();
      return;
    }

    const resultDTO: any = [];

    queryResult.forEach((row: any) => {
      resultDTO.push({
        id: row.id,
        name: row.name,
        releaseDate: row.releaseDate,
        filepath: row.filepath,
        avg: row.avg
      });
    });

    res.json(resultDTO);
  } catch (err) {
    console.error(err);
  }
};

export const getMovieHandler = async (req: Request, res: Response): Promise<void> => {
  const id = req.params._id;

  try {
    const queryResult = await executeQuery(res, 'sql/movie/getMovie.sql', [id]);

    if (queryResult.length <= 0) {
      res.status(404).send();
      return;
    }

    res.json(queryResult[0]);
  } catch (err) {
    console.error(err);
  }
};

export const getMovieFeedHandler = async (req: Request, res: Response): Promise<void> => {
  const id = req.params._id;

  try {
    const queryResult = await executeQuery(res, 'sql/movie/getMovieFeed.sql', [id, id]);

    if (queryResult.length <= 0) {
      res.status(404).send();
      return;
    }

    res.status(200).json(queryResult[0]);
  } catch (err) {
    console.error(err);
  }
};

export const deleteMovieHandler = async (req: Request, res: Response): Promise<void> => {
  const id = req.params._id;

  try {
    const queryResult = await executeQuery(res, 'sql/movie/deleteMovie.sql', [id]);
    if (queryResult.affectedRows <= 0) {
      res.status(404).send();
      return;
    }

    res.status(204).send();
  } catch (err) {
    console.error(err);
  }
};
