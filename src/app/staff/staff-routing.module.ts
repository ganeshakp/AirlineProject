import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment, UrlSegmentGroup } from '@angular/router';
import { StaffComponent } from './staff.component';
import { SeatsComponent } from './check-in/seats/seats.component';
import { PassengersComponent } from './check-in/passengers/passengers.component';
import { InFlightComponent } from './in-flight/in-flight.component';

export function isCheckIn(url: UrlSegment[], group: UrlSegmentGroup) {
    return group.segments.length === 1 && group.segments[0].path.endsWith('checkin')
        ? { consumed: url }
        : null;
}

export function isInFlight(url: UrlSegment[], group: UrlSegmentGroup) {
    return group.segments.length === 1 && group.segments[0].path.endsWith('inflight')
        ? { consumed: url }
        : null;
}

const routes: Routes = [
    {
        path: '',
        //component: StaffComponent,
        //matcher : isCheckIn,
        children: [
            { path: '', redirectTo: '/staff/checkin', pathMatch: 'full' },
            // { path: ':id/seats', component: SeatsComponent },
            // { path: ':id/passengers', component: PassengersComponent },
            {
                path: 'inflight',
                component: StaffComponent,
                //matcher : isInFlight,
                children: [
                    //{ path: '', redirectTo: '/staff/inflight/0/seats', pathMatch: 'full' },
                    { path: ':id/seats', component: InFlightComponent }
                ]
            },
            {
                path: 'checkin',
                component: StaffComponent,
                //matcher : isInFlight,
                children: [
                    //{ path: '', redirectTo: '/staff/checkin/0/seats', pathMatch: 'full' },
                    { path: ':id/seats', component: SeatsComponent },
                    { path: ':id/passengers', component: PassengersComponent }
                ]
            }
        ]
    }
    // {
    //     path: 'inflight',
    //     component: StaffComponent,
    //     //matcher : isInFlight,
    //     children: [
    //         //{ path: '', redirectTo: '/inflight', pathMatch: 'full' },
    //         { path: ':id/seats', component: InFlightComponent }
    //     ]
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StaffRoutingModule {}