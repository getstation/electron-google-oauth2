export declare type LoopbackRedirectServerOptions = {
    /**
     * The port the loopback will be listening on.
     */
    port: number;
    /**
     * The `path` on which we expect the code to be present
     * as query string.
     */
    callbackPath: string;
    /**
     * The URL to which the `callbackPath` will be redirecting to in case of sucess.
     */
    successRedirectURL: string;
};
export default class LoopbackRedirectServer {
    private _server;
    private _maybeRedirection;
    constructor({ port, successRedirectURL, callbackPath }: LoopbackRedirectServerOptions);
    /**
     * Will resolve with the exact reached callback URL that contains the Authorization code.
     */
    waitForRedirection(): Promise<string>;
    close(): Promise<unknown>;
}
