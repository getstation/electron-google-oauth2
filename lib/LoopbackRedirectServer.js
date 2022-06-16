"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const url = require("url");
class LoopbackRedirectServer {
    constructor({ port, successRedirectURL, callbackPath }) {
        this._maybeRedirection = new Promise((resolve, reject) => {
            this._server = http.createServer((req, res) => {
                if (req.url && url.parse(req.url).pathname === callbackPath) {
                    res.writeHead(302, {
                        Location: successRedirectURL,
                    });
                    res.end();
                    resolve(url.resolve(`http://127.0.0.1:${port}`, req.url));
                    this._server.close();
                }
                else {
                    res.writeHead(404);
                    res.end();
                }
            });
            this._server.on('error', e => reject(e));
            this._server.listen(port);
        });
    }
    /**
     * Will resolve with the exact reached callback URL that contains the Authorization code.
     */
    waitForRedirection() {
        return this._maybeRedirection;
    }
    close() {
        return new Promise(resolve => this._server.close(resolve));
    }
}
exports.default = LoopbackRedirectServer;
