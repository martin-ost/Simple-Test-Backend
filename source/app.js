/**
 * @file Simple backend for Angular playground.
 *
 * Backend is based on Express.js web-framework:
 *
 * - https://expressjs.com
 *
 * @author Martin Frey <martin.frey@ost.ch>
 */

import express from 'express';
import bodyParser from 'body-parser';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { dataRoutes } from './routes/data-routes.js';
import { logRequest } from './util/simple-logger.js'

/**
 * Create express app and register the required middleware components.
 */
export const app = express();
try {
    const basedir = dirname(fileURLToPath(import.meta.url));
    app.use(express.static(path.resolve(`${basedir}/public/`)));
    app.use(bodyParser.json());
    app.get("/", (req, res) => {
        res.sendFile('/test.html', {root: `${basedir}/public/`});
    });
    app.use(logRequest());
    app.use(dataRoutes);
} catch (err) {
    console.error(err);
}