import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular'

@Component({
  selector: 'app-rpm',
  templateUrl: './rpm.component.html',
  styleUrls: ['./rpm.component.scss'],
})
export class RpmComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}


   dismiss(){
  		this.modalCtrl.dismiss();
  	}

}
