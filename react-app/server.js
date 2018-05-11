/* eslint no-console: 0 */
const PRN = require('prerender-node');
const path = require('path');
const express = require('express');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3001 : process.env.PORT;
const app = express();

app.use(PRN
	.set('prerenderServiceUrl', 'http://localhost:3000')
	.set('forwardHeaders', true));
app.use(express.static(`${__dirname}/dist`));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.listen(port, '0.0.0.0', (err) => {
	if (err) {
		console.log(err);
	}
	console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
