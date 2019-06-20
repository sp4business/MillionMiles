import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular'
@Component({
  selector: 'app-auto-service-location',
  templateUrl: './auto-service-location.component.html',
  styleUrls: ['./auto-service-location.component.scss'],
})
export class AutoServiceLocationComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

   dismissModal(){
  		this.modalCtrl.dismiss();
  	}
  ngOnInit() {}

}
