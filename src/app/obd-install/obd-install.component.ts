import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular'
@Component({
  selector: 'app-obd-install',
  templateUrl: './obd-install.component.html',
  styleUrls: ['./obd-install.component.scss'],
})
export class ObdInstallComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}


   dismiss(){
  		this.modalCtrl.dismiss();
  	}
}
