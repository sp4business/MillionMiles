import { Component } from '@angular/core';
import {PerformanceComponent} from '../performance/performance.component';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public modalCtrl: ModalController) {}

  async presentPerformance() {
  	const benefitModal = await this.modalCtrl.create({
  		component: PerformanceComponent,
  		componentProps: {test: 123},
  	});
  	return await benefitModal.present();
  }
}
