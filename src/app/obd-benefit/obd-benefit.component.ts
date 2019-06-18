import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular'
@Component({
  selector: 'app-obd-benefit',
  templateUrl: './obd-benefit.component.html',
  styleUrls: ['./obd-benefit.component.scss'],
})
export class ObdBenefitComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

   dismissModal(){
  		this.modalCtrl.dismiss();
  	}
}
