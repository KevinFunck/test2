import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { provideFirestore } from '@angular/fire/firestore';
import { getFirestore } from 'firebase/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(),
  importProvidersFrom(provideFirebaseApp(() => initializeApp(
    {
      apiKey: "AIzaSyB0l-UgqD5Qc5I4NifphLlJh4V3ewMXrdc",
      authDomain: "bossel.firebaseapp.com",
      projectId: "bossel",
      storageBucket: "bossel.appspot.com",
      messagingSenderId: "1075134453561",
      appId: "1:1075134453561:web:f57f0d4cb8816e44b73ae8"

    }))),
  importProvidersFrom(provideFirestore(() => getFirestore()))
  ]
};
