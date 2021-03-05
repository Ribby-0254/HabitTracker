

const SimpleHabitSchema = new mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    sucess:{
        type:Boolean,
        required:true
    }
});

const SimpleHabit = mongoose.model('SimpleHabit',SimpleHabitSchema);

module.export = {SimpleHabit:SimpleHabit};