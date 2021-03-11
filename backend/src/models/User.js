export default class User extends Entity{
    /**
     * Class for User Entity
     * @param {*} values 
     */
    constructor(json){
        // Must be used before this keyword
        super();
        this.username = json.username;
        this.email = json.email;
        this.password = json.password;
    }

    // Constraints
    static usernameMin = 3;
    static usernameMax = 50;
    static passwordMin = 5;
    static passwordMax = 64;
}