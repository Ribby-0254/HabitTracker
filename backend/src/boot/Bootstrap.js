import Database from './MongoDBConnection.js';
import Server from './Server.js';

export default class {
    /**
     * Used to bootstrap application
     */
    constructor(){
        /**@readonly*/
        this.db = new Database(`mongodb://${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`);
        /**@readonly*/
        this.server = new Server(process.env.PORT);
        this.app = undefined;
    }

    /**
     * Starts up connection with database
     * Starts up HTTP Server
     */
    async start(){
        try{
            await this.db.connect();
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
        try{
            await this.app.close(() => console.log("Server terminated"));
            await this.db.disconnect();
            process.exit(0);
        } catch(err){
            console.error(err);
            process.exit(1);
        }
    }

}