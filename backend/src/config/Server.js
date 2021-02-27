import express, { response } from 'express';

export default class Server{
    /**
     * Used to setup HTTP server
     */
    constructor(){
        /** @readonly */
        this.app = express();
    }

    /**
     * Starts HTTP server
     * Promisifies app.listen()
     * @returns {Promise<http.Server>}
     */
    start(){
        return new Promise(
            (resolve, reject) => {
                const http = this.app.listen(process.env.PORT, "localhost", () => {
                    const { address, port } = http.address();
                    console.log(`Server running on localhost:${port}`);
                    resolve(http);
                }).on('error', (err) => {
                    console.error("Error in ApiServer.js!");
                    reject(err);
                })
            }
        );
    }
}