import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular'

@Component({
  selector: 'app-oil-health',
  templateUrl: './oil-health.component.html',
  styleUrls: ['./oil-health.component.scss'],
})
export class OilHealthComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}


   dismiss(){
  		this.modalCtrl.dismiss();
  	}

}
