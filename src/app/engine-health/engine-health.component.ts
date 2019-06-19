import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular'

@Component({
  selector: 'app-engine-health',
  templateUrl: './engine-health.component.html',
  styleUrls: ['./engine-health.component.scss'],
})
export class EngineHealthComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}


   dismiss(){
  		this.modalCtrl.dismiss();
  	}

}
