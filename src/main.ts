import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import { provideRouter, withComponentInputBinding } from '@angular/router';

// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err)); 

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
