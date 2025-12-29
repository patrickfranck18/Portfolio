import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// 1. On retire withAnchorScrolling de l'import car il n'existe pas en tant que tel
import { provideRouter, withHashLocation, withInMemoryScrolling } from '@angular/router'; 
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideIonicAngular } from '@ionic/angular/standalone'; 
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideClientHydration(),
    provideHttpClient(),
    provideIonicAngular({}),
    provideRouter(
      routes,
      //withHashLocation(),
      // 2. On configure anchorScrolling ICI, à l'intérieur de withInMemoryScrolling
      withInMemoryScrolling({ 
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled' 
      })
    )
  ] 
};