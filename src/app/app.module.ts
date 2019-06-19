import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ObdBenefitComponent } from './obd-benefit/obd-benefit.component'
import { ObdContactComponent } from './obd-contact/obd-contact.component';
import { ObdInstallComponent } from './obd-install/obd-install.component';
import { ObdLocateComponent } from './obd-locate/obd-locate.component';
import { ObdSettingComponent } from './obd-setting/obd-setting.component';
import { EngineHealthComponent} from './engine-health/engine-health.component';
import { RpmComponent} from './rpm/rpm.component';
import { OilHealthComponent} from './oil-health/oil-health.component';
import { ElectronicsComponent} from './electronics/electronics.component';
import { ControlsComponent} from './controls/controls.component';
import {PerformanceComponent} from './performance/performance.component';
import {DiagnosticComponent} from './diagnostic/diagnostic.component'
import {FilesComponent} from './files/files.component'
@NgModule({
  declarations: [AppComponent,ObdBenefitComponent,ObdContactComponent,ObdInstallComponent,ObdLocateComponent, 
    ObdSettingComponent, EngineHealthComponent, RpmComponent, OilHealthComponent, ElectronicsComponent,
    PerformanceComponent,
    ControlsComponent, DiagnosticComponent, FilesComponent],

  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],

  bootstrap: [AppComponent, ObdBenefitComponent,ObdContactComponent,ObdInstallComponent,ObdLocateComponent, 
    ObdSettingComponent, EngineHealthComponent, RpmComponent, OilHealthComponent, ElectronicsComponent,
    ControlsComponent,PerformanceComponent, DiagnosticComponent, FilesComponent]

})
export class AppModule {}
