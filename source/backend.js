/**
 * @file Simple backend for Angular playground.
 * @author Martin Frey <martin.frey@ost.ch>
 */

const hostname = '127.0.0.1';
const port = 3001;

// load app with current config
async function main () {
    (await import('./app.js')).app.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}

main();