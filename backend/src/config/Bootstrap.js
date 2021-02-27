import Database from './MongoDBConnection.js';
import Server from './Server.js';

export default class {
    /**
     * Used to bootstrap application
     */
    constructor(){
        ///**@readonly*/
        //this.db = new Database();
        /**@readonly*/
        this.server = new Server();
        this.app = undefined;
    }

    /**
     * Starts up connection with database
     * Starts up HTTP Server
     */
    async start(){
        try{
            //await this.db.connect();
            this.app = await this.server.start();
        }
        catch(err){
            console.error(err);
            process.exit(1);
        }
    }

    /**
     * Cleanly closes application
     */
    async close(){
        await this.app.close(() => console.log("Server terminated"));
        //await this.database.disconnect();
        process.exit(0);
    }

}