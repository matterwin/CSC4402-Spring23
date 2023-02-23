const dotenv =  require('dotenv');
const express = require('express');

// NOTE: loading environment variables
dotenv.config();

const app = express();

const controllerRouterList = [
	require('./controllers/test_controller/testController'),
];

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
