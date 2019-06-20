import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { EngineHealthComponent} from '../engine-health/engine-health.component';
import { RpmComponent} from '../rpm/rpm.component';
import { OilHealthComponent} from '../oil-health/oil-health.component';
import { ElectronicsComponent} from '../electronics/electronics.component';
import { ControlsComponent} from '../controls/controls.component';
import {PerformanceComponent} from '../performance/performance.component';
import {AutoServiceLocationComponent} from '../auto-service-location/auto-service-location.component'
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public modalCtrl: ModalController) {}
  showDiag = true;
  showSpin = false;
  showFix = false;

  async presentEngineHealth() {
    const entineHealthModal = await this.modalCtrl.create({
      component: EngineHealthComponent,
      componentProps: {test: 123},
    });
    return await entineHealthModal.present();
  }

  async presentRPM() {
    const rpmModal = await this.modalCtrl.create({
      component: RpmComponent,
      componentProps: {test: 123},
    });
    return await rpmModal.present();
  }

  async presentOil() {
    const oilModal = await this.modalCtrl.create({
      component: OilHealthComponent,
      componentProps: {test: 123},
    });
    return await oilModal.present();
  }

  async presentElectronics() {
    const electronicsModal = await this.modalCtrl.create({
      component: ElectronicsComponent,
      componentProps: {test: 123},
    });
    return await electronicsModal.present();
  }

  async presentControls() {
    const controlsModal = await this.modalCtrl.create({
      component: ControlsComponent,
      componentProps: {test: 123},
    });
    return await controlsModal.present();
  }
  async presentPerformance() {
  	const benefitModal = await this.modalCtrl.create({
  		component: PerformanceComponent,
  		componentProps: {test: 123},
  	});
  	return await benefitModal.present();
  }

  launchFix(){
  	this.showDiag = false
  	this.showSpin = true
  	setTimeout( () => {
  		this.showDiag = true
  		this.showFix = true
  		this.showSpin = false
  	}, 3000)
  }

  async presentAutoLocation() {
  	const benefitModal = await this.modalCtrl.create({
  		component: AutoServiceLocationComponent,
  		componentProps: {test: 123},
  	});
  	return await benefitModal.present();
  }
  
}
