import { ApplicationRef } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server'; // Tu configuración de servidor
import { App } from './app/app'; // Tu componente principal

// Define la función de arranque que recibe el contexto
const bootstrap = (context: {
  providers: { provide: any; useValue: any }[];
  platform: ApplicationRef;
}) => bootstrapApplication(App, config); 

export default bootstrap;