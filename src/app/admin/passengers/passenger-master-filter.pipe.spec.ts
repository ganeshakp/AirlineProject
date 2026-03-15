
import { PassengerMasterFilterPipe } from './passenger-master-filter.pipe';
import { Passenger } from 'src/app/shared/passenger.model';

describe('PassengerMasterFilterPipe', () => {
    it('create an instance', () => {
        const pipe = new PassengerMasterFilterPipe();
        expect(pipe).toBeTruthy();
    });

    it('filters passengers without passport', () => {
        const pipe = new PassengerMasterFilterPipe();
        const passengerWithPassport = new Passenger('Ganesha',new Date(),'1,ABC,Chennai','Z123456',4,true,'',['Sandwiches'],'Special Meals',['Chocolates'])
        const passengerWithoutPassport = new Passenger('Passenger',new Date(),'1,ABC,Chennai','',4,true,'',['Sandwiches'],'Special Meals',['Chocolates'])
        expect(pipe.transform([passengerWithPassport, passengerWithoutPassport], 'passport')
        ).toEqual([passengerWithoutPassport]);
    });
    it('filters passengers without address', () => {
      const pipe = new PassengerMasterFilterPipe();
      const passengerWithAddress = new Passenger('Ganesha',new Date(),'1,ABC,Chennai','Z123456',4,true,'',['Sandwiches'],'Special Meals',['Chocolates'])
      const passengerWithoutAddress = new Passenger('Passenger',new Date(),'','Z123311',4,true,'',['Sandwiches'],'Special Meals',['Chocolates'])
      expect(pipe.transform([passengerWithAddress, passengerWithoutAddress], 'address')
      ).toEqual([passengerWithoutAddress]);
  });
  it('filters passengers without DOB', () => {
    const pipe = new PassengerMasterFilterPipe();
    const passengerWithDOB = new Passenger('Ganesha',new Date(),'1,ABC,Chennai','Z123456',4,true,'',['Sandwiches'],'Special Meals',['Chocolates'])
    const passengerWithoutDOB = new Passenger('Passenger',new Date(),'1,ABC,Chennai','Z123456',4,true,'',['Sandwiches'],'Special Meals',['Chocolates'])
    expect(pipe.transform([passengerWithDOB, passengerWithoutDOB], 'dob')
    ).toEqual([]);
});
});
