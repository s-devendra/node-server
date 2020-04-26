'use strict';

const conf = {
	env: 'production',

	port : 3000,

	ip : '0.0.0.0',

	https: {
		keyFile : "certs/key.pem",
		certFile : "certs/cert.pem", 
	}, 
	
};

export default conf;
