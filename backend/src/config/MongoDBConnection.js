import mongoose from 'mongoose';

export default class {
    constructor(){}

    connect(){
        console.log("Establishing connection to mongoDB database...");
        return mongoose.connect('INSERT_URL_HERE', {
                useNewUrlParser: true
            }).catch(err => {
                console.error("Error connecting to database!");
                throw err;
            });
    }

    disconnect(){
        console.log("Closing connection to mongoDB database...")
        mongoose.connection.close();
    }
}