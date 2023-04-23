import { executeQuery } from '../../persistance/util';
import { type Request, type Response } from 'express';

const _verifyPost = (body: any): boolean => {
  return body?.username !== undefined && body.email !== undefined && body.password !== undefined;
};

const _verifyLogin = (query: any): boolean => {
  return query?.email !== undefined && query.password !== undefined;
};

const _verifyPut = (body: any): boolean => {
  return body?.username !== undefined && body.email !== undefined && body.password !== undefined;
};

export const postUserAuthHandler = async (req: Request, res: Response): Promise<void> => {
  const body = req.body;
  if (!_verifyPost(body)) {
    res.status(400).send();
    return;
  }

  try {
    const queryResult = await executeQuery(res, 'sql/userAuth/postUserAuth.sql', [
      body.username,
      body.email,
      body.password,
    ]);
    res.json({
      id: queryResult.insertId,
    });
  } catch (err) {
    console.error(err);
  }
};

export const loginUserAuthHandler = async (req: Request, res: Response): Promise<void> => {
  const query = req.query;

  if (!_verifyLogin(query)) {
    res.status(400).send();
    return;
  }

  try {
    const queryResult = await executeQuery(res, 'sql/userAuth/loginUserAuth.sql', [
      query.email as string,
      query.password as string,
    ]);
    if (queryResult.length < 1) {
      res.status(404).send();
      return;
    }

    res.json({
      id: queryResult[0].id,
    });
  } catch (err) {
    console.error(err);
  }
};

export const getAllUserAuthHandler = async (_req: Request, res: Response): Promise<void> => {
  try {
    const queryResult = await executeQuery(res, 'sql/userAuth/getAllUserAuth.sql');
    if (queryResult.length <= 0) {
      res.status(404).send();
      return;
    }

    const resultDTO: any = [];

    queryResult.forEach((row: any) => {
      resultDTO.push({
        id: row.id,
        username: row.username,
        email: row.email,
        password: row.password,
      });
    });

    res.json(resultDTO);
  } catch (err) {
    console.error(err);
  }
};

export const getUserAuthHandler = async (req: Request, res: Response): Promise<void> => {
  const query = req.query;

  if (query.id === undefined) {
    res.status(403).send();
    return;
  }

  try {
    const queryResult = await executeQuery(res, 'sql/userAuth/getUserAuth.sql', [query.id as string]);

    if (queryResult.length <= 0) {
      res.status(404).send();
      return;
    }

    res.json(queryResult[0]);
  } catch (err) {
    console.error(err);
  }
};

export const putUserAuthHandler = async (req: Request, res: Response): Promise<void> => {
  const id = req.params._id;
  const body = req.body;

  if (!_verifyPut(body)) {
    res.status(400).send();
    return;
  }

  try {
    const queryResult = await executeQuery(res, 'sql/userAuth/putUserAuth.sql', [
      body.username,
      body.email,
      body.password,
      id,
    ]);

    if (queryResult.affectedRows <= 0) {
      res.status(404).send();
      return;
    }

    res.status(200).json({
      id,
    });
  } catch (err) {
    console.error(err);
  }
};

export const deleteUserAuthHandler = async (req: Request, res: Response): Promise<void> => {
  const id = req.params._id;

  if (id === undefined) {
    res.status(403).send();
    return;
  }

  try {
    const queryResult = await executeQuery(res, 'sql/userAuth/deleteUserAuth.sql', [id]);

    if (queryResult.affectedRows <= 0) {
      res.status(404).send();
      return;
    }

    res.status(204).send();
  } catch (err) {
    console.error(err);
  }
};
