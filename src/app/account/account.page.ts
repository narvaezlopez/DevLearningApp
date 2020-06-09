import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';
import { Users } from '../models/users';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private instancia:ActionSheetController, private alert:AlertController, private toast:ToastController, private userService:UsersService) {}

  users: any[] = [];

  ngOnInit(){
  /*  this.users.push({title:'Obi Wan Kenobi',subtitle:'Yedi Master',description:'Anakin Advisor', avatar:'https://i.pinimg.com/originals/7b/99/e5/7b99e5e44c3ce7bfb79c8d9094ee63d8.jpg'});
    this.users.push({title:'Darth Vader',subtitle:'Sid Master',description:'Anakin Skywalker', avatar:'https://www.denofgeek.com/wp-content/uploads/2017/03/darth-vader-1_0.jpg'});*/
    this.userService.getUsers().subscribe((users) => {
      this.users = <any[]>users;
      console.log(users);
    });
  }

  async userSelected(user){
    const toast = await this.toast.create({
        duration:3000,
        header:'Se ha elegido a '+ user.title,
        position:'bottom',
        message: user.description,
        buttons:[{
          handler:()=>{
            console.log('Se ha eliminado el usuario ' + user.title);
            this.users.pop();
          },
        text:'Eliminar',
        icon:'trash',
        }],
    });
    toast.present();
  }

  async confirmarBorrado(){
    const alerta = await this.alert.create({
      header:'Seguro desea elminar este elemento?',
      message:'Esta acción no se podrá deshacer.',
      buttons:[
        {
          text:'confirmar',
          handler:()=>{
            console.log('se confirmó la acción');
          }
        },
        {
          text:'cancelar',
          handler:()=>{
            console.log('se canceló la acción');
          }
        }
      ]
    });
    alerta.present();
  }

  async mostrarHoja() {
    const sheet = await this.instancia.create({
      buttons:[
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
            this.confirmarBorrado();
          }
        }, {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Play (open modal)',
          icon: 'caretForwardCircle',
          handler: () => {
            console.log('Play clicked');
          }
        }, {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }  
      ],
      header:'Ejemplo'
    });
    sheet.present();
  }

}
