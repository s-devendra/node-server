'use strict';

import fs from 'fs';
import HTTP from 'http';
import HTTPS from 'https';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import _ from 'lodash';
import customEnv from 'custom-env'
import conf from './conf';

if(!process.env.ENV_KEY) {
   customEnv.env();
} else {
	console.log("load")
	customEnv.env(process.env.ENV_KEY.trim());
}



let httpsConf;
// Certificate files are required as we only serve over HTTPS
if(conf.https.keyFile && conf.https.certFile) {
	httpsConf = _.extend({}, conf.https, {
		key: fs.readFileSync(conf.https.keyFile),
		cert: fs.readFileSync(conf.https.certFile),
	});
	
	if(!httpsConf.keyFile || !httpsConf.keyFile) {
		console.log('Must provide valid key & cert files for HTTPS server connections');
		process.exit(1);
	}
}


const app = express();
let server;

if(httpsConf && httpsConf.key && httpsConf.cert) {
	server = HTTPS.createServer(httpsConf, app);
} else {
	console.log('Relying on Proxy for HTTPS Configuration');
	server = HTTP.createServer(app);
}
app.use(cors());
app.use(bodyParser.urlencoded({ // Middleware
    extended: true
}));
app.use(bodyParser.json());

import { routes } from "./routes";
routes(app);

server.listen(conf.port, () => {
	console.log('Server listening on port %d', conf.port);
});


