import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular'
@Component({
  selector: 'app-obd-setting',
  templateUrl: './obd-setting.component.html',
  styleUrls: ['./obd-setting.component.scss'],
})
export class ObdSettingComponent implements OnInit {

  years: any;

  constructor(public modalCtrl: ModalController) { 

  }

  ngOnInit() {}


   dismiss(){
  		this.modalCtrl.dismiss();
  	}
}
