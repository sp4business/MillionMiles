import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular'
@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss'],
})
export class PerformanceComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}


  
   dismiss(){
  		this.modalCtrl.dismiss();
  	}

}
