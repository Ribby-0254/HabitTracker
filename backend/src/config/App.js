import database from './MongoDBConnection.js';

export default class {
    constructor(){
        this.db = new this.database();
    }

    async start(){
        try{
            await this.db.connect();
        }
        catch(err){
            console.error(err);
            process.exit(1);
        }
    }

    async close(){
        await this.database.disconnect();
        process.exit(0);
    }

}