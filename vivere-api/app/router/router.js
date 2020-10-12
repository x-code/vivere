
module.exports = function(app) {
    const controller = require('../controller/controller.js');
	app.get('/api/get-data', controller.getData);
	app.post('/api/post-data', controller.postData);
}