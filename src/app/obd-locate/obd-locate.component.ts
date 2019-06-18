import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular'
@Component({
  selector: 'app-obd-locate',
  templateUrl: './obd-locate.component.html',
  styleUrls: ['./obd-locate.component.scss'],
})
export class ObdLocateComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

  
   dismissModal(){
  		this.modalCtrl.dismiss();
  	}
}
