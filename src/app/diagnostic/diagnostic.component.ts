import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-diagnostic',
  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.scss'],
})
export class DiagnosticComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

  dismiss(){
    this.modalCtrl.dismiss();
  } 

}
