const { Mongoose } = require("mongoose");


const customHabitsSchema = new mongoose.Schema({
    name:{
        type:String,
        isRequired:true
    },
    description:{
        type:String,
    },
    sucess:{
        type:Boolean
    },
    action:{
        type:String
    },
    quantifier:{
        type:String
    },
    unit:{
        type:String
    }
});

const customHabits = mongoose.model('customHabits',customHabitsSchema);

module.export = {customHabits:customHabits};