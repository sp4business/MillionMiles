import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ObdBenefitComponent } from '../obd-benefit/obd-benefit.component';
import { ObdContactComponent } from '../obd-contact/obd-contact.component';
import { ObdInstallComponent } from '../obd-install/obd-install.component';
import { ObdLocateComponent } from '../obd-locate/obd-locate.component';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public modalCtrl: ModalController) {

  }

  async presentObdBenefit() {
  	const benefitModal = await this.modalCtrl.create({
  		component: ObdBenefitComponent,
  		componentProps: {test: 123},
  	});
  	return await benefitModal.present();
  }

    async presentObdContact() {
  	const contactModal = await this.modalCtrl.create({
  		component: ObdContactComponent,
  		componentProps: {test: 123}
  	});
  	return await contactModal.present();
  }
    async presentObdInstall() {
  	const installMdoal = await this.modalCtrl.create({
  		component: ObdInstallComponent,
  		componentProps: {test: 123}
  	});
  	return await installMdoal.present();
  }
    async presentObdLocate() {
  	const benefitModal = await this.modalCtrl.create({
  		component: ObdLocateComponent,
  		componentProps: {test: 123}
  	});
  	return await benefitModal.present();
  }

}
