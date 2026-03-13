import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
<<<<<<< HEAD
    .catch((err) => console.error(err));
=======
    .catch((err) => console.error(err));
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
