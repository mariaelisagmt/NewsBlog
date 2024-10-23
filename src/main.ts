import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { rootRouterConfig } from './app/app.routes';

bootstrapApplication(AppComponent, {
    providers: [provideRouter(rootRouterConfig),
      {provide: APP_BASE_HREF, useValue: '/'}
    ]
}).catch((err) => console.error(err));
