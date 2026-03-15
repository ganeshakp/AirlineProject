
import { PassengerFilterPipe } from './passenger-filter.pipe';
import { Passenger } from 'src/app/shared/passenger.model';

describe('PassengerFilterPipe', () => {
    it('create an instance', () => {
        const pipe = new PassengerFilterPipe();
        expect(pipe).toBeTruthy();
    });
    it('filters passengers who have checked in', () => {
      const pipe = new PassengerFilterPipe();
      const passengerCheckedIn = new Passenger('Ganesha',new Date(),'1,ABC,Chennai','Z123456',4,true,'',['Sandwiches'],'Special Meals',['Chocolates'])
      const passengerNotCheckedIn = new Passenger('Passenger',new Date(),'','Z123311',4,false,'',['Sandwiches'],'Special Meals',['Chocolates'])
      expect(pipe.transform([passengerCheckedIn, passengerNotCheckedIn], 'CheckedIn')
      ).toEqual([passengerCheckedIn]);
  });
    it('filters passengers who are yet to check in', () => {
      const pipe = new PassengerFilterPipe();
      const passengerCheckedIn = new Passenger('Ganesha',new Date(),'1,ABC,Chennai','Z123456',4,true,'',['Sandwiches'],'Special Meals',['Chocolates'])
      const passengerNotCheckedIn = new Passenger('Passenger',new Date(),'','Z123311',4,false,'',['Sandwiches'],'Special Meals',['Chocolates'])
      expect(pipe.transform([passengerCheckedIn, passengerNotCheckedIn], 'NotCheckedIn')
      ).toEqual([passengerNotCheckedIn]);
  });
  it('filters passengers who need wheelchair', () => {
    const pipe = new PassengerFilterPipe();
    const normalPassenger = new Passenger('Ganesha',new Date(),'1,ABC,Chennai','Z123456',4,true,'',['Sandwiches'],'Special Meals',['Chocolates'])
    const diasbledPassenger = new Passenger('Passenger',new Date(),'','Z123311',4,false,'WheelChair',['Sandwiches'],'Special Meals',['Chocolates'])
    expect(pipe.transform([normalPassenger, diasbledPassenger], 'NotCheckedIn')
    ).toEqual([diasbledPassenger]);
});
});