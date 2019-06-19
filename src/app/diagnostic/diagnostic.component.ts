import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-diagnostic',
  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.scss'],
})
export class DiagnosticComponent implements OnInit {

  constructor(public modalCtrl: ModalController, public toastController: ToastController) { }

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  } 

  async presentToast() {
    const toast = await this.toastController.create({
      //header: 'Toast Header',
      message: 'Diagnostics Delivered',
      duration: 2000,
      position: 'bottom'
    });
    this.modalCtrl.dismiss();
    toast.present();
    
  }

}
