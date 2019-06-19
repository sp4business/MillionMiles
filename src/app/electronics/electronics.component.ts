import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular'

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss'],
})
export class ElectronicsComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}


   dismiss(){
  		this.modalCtrl.dismiss();
  	}

}
