import { createConnection } from 'typeorm';

import { typeOrmConfig } from './config';
import Patient from './models/Patient';

(async () => {
    const conn = await createConnection(typeOrmConfig);
    console.log('PG connected.');

    const express = require('express')
    const app = express()
    const port = 3000

    app.get('/', function (req, res) {
	const testPromise = conn.manager.createQueryBuilder(Patient, "patient").orderBy(req.query.orderby).getMany();
	testPromise.then(function(result) {
		console.log(result);
		res.send(result)
	});
	testPromise.catch(function(result) {
		console.log(result);
		res.send(result)
	});
    });
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
})();
