import { Component, OnInit } from '@angular/core';
import {ModalController, ToastController} from '@ionic/angular'
@Component({
  selector: 'app-obd-setting',
  templateUrl: './obd-setting.component.html',
  styleUrls: ['./obd-setting.component.scss'],
})
export class ObdSettingComponent implements OnInit {

  years: any;

  constructor(public modalCtrl: ModalController, public toastController: ToastController) { 

  }

  ngOnInit() {}


   dismiss(){
  		this.modalCtrl.dismiss();
    }
    
    async presentToast() {
      const toast = await this.toastController.create({
        //header: 'Toast Header',
        message: 'Settings Updated',
        duration: 2000,
        position: 'bottom'
      });
      this.modalCtrl.dismiss();
      toast.present();
      
    }
}
