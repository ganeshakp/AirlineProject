<<<<<<< HEAD

export class Passenger {
        public name: string;
        public dateOfBirth: Date;
        public address: string;
        public passport: string;
        public seatNo: number;
        public checkedIn: boolean;
        public splRequest: string;
        public ancillaryServices: string[];
        public mealPreference: string;
        public shoppedItems: string[];
    
        constructor(
            name: string,
            dateOfBirth: Date,
            address: string,
            passport: string,
            seatNo: number,
            checkedIn: boolean,
            splRequest: string,
            ancillaryServices: string[],
            mealPreference: string,
            shoppedItems: string[]
        ) {
            this.name = name;
            this.seatNo = seatNo;
            this.dateOfBirth = dateOfBirth;
            this.address = address;
            this.passport = passport;
            this.checkedIn = checkedIn;
            this.splRequest = splRequest;
            this.ancillaryServices = ancillaryServices;
            this.mealPreference = mealPreference;
            this.shoppedItems = shoppedItems;
        }
    }
=======
export class Passenger {
    public name: string;
    public dateOfBirth: Date;
    public address: string;
    public passport: string;
    public seatNo: number;
    public checkedIn: boolean;
    public splRequest: string;
    public ancillaryServices: string[];
    public mealPreference: string;
    public shoppedItems: string[];

    constructor(
        name: string,
        dateOfBirth: Date,
        address: string,
        passport: string,
        seatNo: number,
        checkedIn: boolean,
        splRequest: string,
        ancillaryServices: string[],
        mealPreference: string,
        shoppedItems: string[]
    ) {
        this.name = name;
        this.seatNo = seatNo;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.passport = passport;
        this.checkedIn = checkedIn;
        this.splRequest = splRequest;
        this.ancillaryServices = ancillaryServices;
        this.mealPreference = mealPreference;
        this.shoppedItems = shoppedItems;
    }
}
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
