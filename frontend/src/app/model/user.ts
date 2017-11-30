export class User {
    constructor(
        public id: number,
        public version: number,
        public username: string,
        public email: string,
        public password: string,
        public balance: number,
        public role: 'GUEST' | 'USER' | 'ADMIN'
    ) { }

}
