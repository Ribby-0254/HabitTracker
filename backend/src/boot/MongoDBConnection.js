import mongoose from 'mongoose';

export default class {
    /**
     * Used to setup MongoDB driver
     */
    constructor(url){
        this.url = url;
    }

    connect(){
        console.log(`Establishing connection to mongoDB database at url: ${this.url}`);
        return mongoose.connect(this.url, {
                useNewUrlParser: true
            }).catch(err => {
                console.error(`Error connecting to database at url: ${this.url}!`);
                throw err;
            });
    }

    disconnect(){
        console.log("Closing connection to mongoDB database...")
        mongoose.connection.close();
    }
}