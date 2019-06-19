import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular'


@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}


   dismiss(){
  		this.modalCtrl.dismiss();
  	}

}
