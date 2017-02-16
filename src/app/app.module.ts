import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Sensors } from '../providers/sensors';
import { Clock } from '../components/clock/clock';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Clock
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [Sensors, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}