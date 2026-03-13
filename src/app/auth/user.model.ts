export class User {
<<<<<<< HEAD
        constructor(
            public email?: string,
            public id?: string,
            private _token?: string,
            private _tokenExpire?: Date,
            public userRole?: string
        ) {}
    
        get token() {
            if (!this._tokenExpire || new Date() > this._tokenExpire) {
                return null;
            }
            return this._token;
        }
    }
    
=======
    constructor(
        public email?: string,
        public id?: string,
        private _token?: string,
        private _tokenExpire?: Date,
        public userRole?: string
    ) {}

    get token() {
        if (!this._tokenExpire || new Date() > this._tokenExpire) {
            return null;
        }
        return this._token;
    }
}
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
