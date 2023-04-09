import dotenv from 'dotenv';
import multer from 'multer';
import express from 'express';
import { v4 } from 'uuid';
import fs from 'fs';
import cors from 'cors';
import process from 'process';

import type { RouterConfig, RouteConfig } from './controllers/model';

// NOTE: import controllers
import testController from './controllers/test_controller/testController';
import movieController from './controllers/movie_controller/movieController';
import movieReviewController from './controllers/movie_review_controller/movieReviewController';
import userAuthController from './controllers/user_auth_controller/userAuthController';

// NOTE: loading environment variables
dotenv.config();
// NOTE: setting file upload dir

const bucketDir = process.env.BUCKET_DIR;

const appUrl = process.env.APP_URL;
const port = process.env.PORT;
const apiBaseRoute = process.env.API_BASE_ROUTE;

if (
  bucketDir === undefined ||
  appUrl === undefined ||
  port === undefined ||
  apiBaseRoute === undefined
) {
  console.error('env variable was undefined');
  process.exit(-1);
}

console.log(`file upload dir to: ${bucketDir}/movie`);
const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    const folderPath = `${bucketDir}/movie/${v4()}`;
    fs.mkdirSync(folderPath, {
      recursive: true,
    });
    callback(null, folderPath);
  },
  filename: (_req, file, callback) => {
    callback(null, file.originalname);
  },
});
const upload = multer({ storage });
const app = express();

// NOTE: setting up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.single('file'));

const controllerRouterList: RouterConfig[] = [
  testController,
  movieController,
  movieReviewController,
  userAuthController,
];

controllerRouterList.forEach((routerObject) => {
  console.log(`${routerObject.routerName}:`);

  routerObject.router.use(
    cors({
      origin: '*',
    }),
  );

  routerObject.routerDetails.forEach((routerDetails: RouteConfig) => {
    console.log(` - ${routerDetails.type}: ${appUrl}:${port}/${apiBaseRoute}${routerDetails.path}`);
  });
  app.use(`/${apiBaseRoute}`, routerObject.router);
});

app.listen(process.env.PORT, () => {
  console.log(`Listening at: ${appUrl}:${port}`);
});
