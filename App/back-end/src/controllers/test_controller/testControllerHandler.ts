import { executeQuery } from '../../persistance/util';
import { type Request, type Response } from 'express';

const _verifyPostTest = (body: any): boolean => {
  return body?.testMessage;
};

const _verifyPutTest = (body: any): boolean => {
  return body?.testMessage;
};

export const postTestHandler = async (req: Request, res: Response): Promise<void> => {
  const body = req.body;

  if (!_verifyPostTest(body)) {
    res.status(400).send();
    return;
  }

  try {
    const queryResult = await executeQuery(res, 'sql/test/postTest.sql', [body.testMessage]);

    res.json({
      id: queryResult.insertId
    });
    res.status(201).send();
  } catch (err) {
    console.error(err);
  }
};

export const getAllTestHandler = async (_req: Request, res: Response): Promise<void> => {
  try {
    const queryResult = await executeQuery(res, 'sql/test/getAllTest.sql');

    if (queryResult.length <= 0) {
      res.status(404).send();
      return;
    }

    const resultDTO: any = [];

    queryResult.forEach((row: any) => {
      resultDTO.push({
        id: row.id,
        testMessage: row.testMessage
      });
    });

    res.json(resultDTO);
  } catch (err) {
    console.error(err);
  }
};

export const getTestHandler = async (req: Request, res: Response): Promise<void> => {
  const id = req.params._id;

  try {
    const queryResult = await executeQuery(res, 'sql/test/getTest.sql', [id]);

    if (queryResult.length <= 0) {
      res.status(404).send();
      return;
    }

    res.status(200).json(queryResult[0]);
  } catch (err) {
    console.error(err);
  }
};

export const putTestHandler = async (req: Request, res: Response): Promise<void> => {
  const id = req.params._id;
  const body = req.body;

  if (!_verifyPutTest(body)) {
    res.status(400).send();
    return;
  }

  try {
    const queryResult = await executeQuery(res, 'sql/test/putTest.sql', [body.testMessage, id]);
    if (queryResult.affectedRows <= 0) {
      res.status(404).send();
      return;
    }

    res.status(200).json({
      id
    });
  } catch (err) {
    console.error(err);
  }
};

export const deleteTestHandler = async (req: Request, res: Response): Promise<void> => {
  const id = req.params._id;

  try {
    const queryResult = await executeQuery(res, 'sql/test/deleteTest.sql', [id]);
    if (queryResult.affectedRows <= 0) {
      res.status(404).send();
      return;
    }

    res.status(204).send();
  } catch (err) {
    console.error(err);
  }
};
