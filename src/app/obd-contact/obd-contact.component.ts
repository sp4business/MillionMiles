import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular'
@Component({
  selector: 'app-obd-contact',
  templateUrl: './obd-contact.component.html',
  styleUrls: ['./obd-contact.component.scss'],
})
export class ObdContactComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}


   dismiss(){
  		this.modalCtrl.dismiss();
  	}
}
