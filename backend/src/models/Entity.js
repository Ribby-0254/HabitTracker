export default class {
    /**
     * Used to provide utility operations to models
     */
    constructor(){
        /**
         * @type {mongoose.Schema.Types.ObjectId}
         */
        this.id = '';
    }

    /**
     * 
     * @param {*} otherEntity
     * @returns {boolean} true if equal, false if not equal
     */
    equals(otherEntity){
        // check if otherEntity is typeof Entity
        if(otherEntity instanceof Entity === false) return false;

        // check if id exists, then check id is equal to this.id or check if this is the same object as otherEntity
        return otherEntity.id  ? (this.idEquals(otherEntity.id)):(this === otherEntity);

    }

    /**
     * 
     * @param {*} id
     * @returns {boolean} true if equal, false if not equal
     */
    idEquals(id){
        // check if this object even has an id yet
        // if not, then just call the equals method
        if(!this.id) return this.equals(id);

        // Get string version of otherEntity
        // ongoose ids are of type ObjectId
        // we assume mongoose object id has toString() to convert it to string
        const sanitizedId = typeof id !== 'string' ? id.toString() : id;

        return this.id === sanitizedId;
    }

    /**
     * Meant to be overridden to provide custom String desc. of object
     * @returns {string}
     */
    toString(){
        return this.id;
    }
}