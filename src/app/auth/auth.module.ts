<<<<<<< HEAD

=======
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
<<<<<<< HEAD
    declarations: [AuthComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([{ path: '', component: AuthComponent }])
    ],
    exports: [AuthComponent]
})
export class AuthModule {}
=======
    declarations: [AuthComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([{ path: '', component: AuthComponent }])
    ],
    exports: [AuthComponent]
})
export class AuthModule {}
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
