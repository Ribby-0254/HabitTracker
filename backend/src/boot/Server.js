import express, { response } from 'express';

export default class Server{
    /**
     * Used to setup HTTP server
     */
    constructor(port){
        this.port = port;
        /** @readonly */
        this.app = express();
    }

    // Temporary, remove later - Ribba, March 6
    homePage(){
        this.app.get('/', (req, res) => res.send("hello world"));
    }

    /**
     * Starts HTTP server
     * Promisifies app.listen()
     * @returns {Promise<http.Server>}
     */
    start(){
        return new Promise(
            (resolve, reject) => {
                this.homePage();
                const http = this.app.listen(this.port, () => {
                    const { address, port } = http.address();
                    console.log(`Server running on localhost:${port}`);
                    resolve(http);
                }).on('error', (err) => {
                    console.error("Error in Server.js!");
                    reject(err);
                })
            }
        );

    }
}