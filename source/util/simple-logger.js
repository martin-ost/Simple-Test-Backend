/**
 * @file Simple backend for Angular playground.
 * @author Martin Frey <martin.frey@ost.ch>
 */

export function logRequest() {
    return function log(req, res, next) {
        console.log(`${req.method}:${req.url}`);
        next();
    }
}
