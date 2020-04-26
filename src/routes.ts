'use strict';

import errorHandler from 'errorhandler';
import datalist from './datalist';

export function routes(app) {

	app.use('/api/list', datalist);
	// 404 if not processed by now
	app.use('/*', (req, res) => {
		return res.status(404).send();
	});
	
	app.use('/*', errorHandler);
	
};
