interface UserData {
    name: string;
    password: string;
    validated: boolean;
    email: string;
}

export class UserDTO {
    private useData: UserData;

    constructor(userData: UserData) {
        this.useData = userData
    }

    static create = () => {
        
    }
}