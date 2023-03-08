const dotenv =  require('dotenv');
const multer = require('multer');
const express = require('express');
const uuid = require('uuid');
const fs = require('fs');

// NOTE: loading environment variables
dotenv.config();
// NOTE: setting file upload dir
console.log(`file upload dir to: ${process.env.BUCKET_DIR}/movie`);
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
		const folderPath = `${process.env.BUCKET_DIR}/movie/${uuid.v4()}`;
		fs.mkdirSync(folderPath, {
			recursive: true,
		});
        callback(null, folderPath);
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
});
const upload = multer({ storage: storage });
const app = express();

// NOTE: setting up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.single());

const controllerRouterList = [
	require('./controllers/test_controller/testController'),
	require('./controllers/user_auth_controller/userAuthController'),
	require('./controllers/movie_controller/movieController'),
];

app.on('uncaughtException', function (req, res, route, err) {
	log.info('******* Begin Error *******\n%s\n*******\n%s\n******* End Error *******', route, err.stack);
	if (!res.headersSent) {
		return res.send(500, {ok: false});
	}
	res.write('\n');
	res.end();
});

controllerRouterList.forEach((routerObject) => {
	console.log(`${routerObject.routerName}:`);
	routerObject.routerRouteDetails.forEach((routerDetails) => {
		console.log(` - ${routerDetails.type}: ${process.env.APP_URL}:${process.env.PORT}/${process.env.API_BASE_ROUTE}${routerDetails.path}`)
	});
	app.use(`/${process.env.API_BASE_ROUTE}`, routerObject.router);
});

app.listen(process.env.PORT, () => {
	console.log(`Listening at: ${process.env.APP_URL}:${process.env.PORT}`);
});
