import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';
import { Users } from '../models/users';
import { UsersService } from '../services/users.service';
import { Storage } from '@ionic/storage';
import { AngularFireStorage } from '@angular/fire/storage'
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { UploadsService } from '../services/uploads.service';
import { UploadsUserService } from '../services/uploads-user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private instancia:ActionSheetController, private alert:AlertController, 
              private toast:ToastController, private userService:UsersService, private localstorage:Storage,
              private storage: AngularFireStorage, private firestore: AngularFirestore, private uploadService:UploadsService,
              private uploadsUserService:UploadsUserService) {}

  users: any[] = [];
  user: any[]= [];
  uploads_user: any[]=[];
  currentUser : string = '' ;

  uploadPercent:Observable<number>;
  downloadURL: Observable<any>;
  percent:number;
  url:string;

  upload: any[]=[];

  ngOnInit(){
    this.localstorage.get('currentUser')
    .then((data)=>{
      this.currentUser=data.name;
    }).catch((data)=>{
      this.currentUser="No se pudo encontrar el usuario";
    });
  /*  this.users.push({title:'Obi Wan Kenobi',subtitle:'Yedi Master',description:'Anakin Advisor', avatar:'https://i.pinimg.com/originals/7b/99/e5/7b99e5e44c3ce7bfb79c8d9094ee63d8.jpg'});
    this.users.push({title:'Darth Vader',subtitle:'Sid Master',description:'Anakin Skywalker', avatar:'https://www.denofgeek.com/wp-content/uploads/2017/03/darth-vader-1_0.jpg'});*/
    this.userService.getUserById('r5eHBQ2VvugPFfO9zbLAgWj7BQG3')
    .subscribe((user)=>{
      this.user=<any[]>user['user_database'];

    });

    this.uploadsUserService.getUploadsUserByIdUser('r5eHBQ2VvugPFfO9zbLAgWj7BQG3')
    .subscribe((info)=>{
      this.uploads_user=<any[]>info['upload'];
    });

    this.uploadService.getUploadById(this.uploads_user.toString())
    .subscribe((info)=>{
      this.upload=<any[]>info;
    });
    
    /*this.userService.getUsers().subscribe((users) => {
      this.users = <any[]>users['users_dabase'];
      console.log(users);
    });*/

    /*this.firestore.collection('uploads').valueChanges()
    .subscribe((files)=>{

      this.uploadFiles=files;
      console.log(this.uploadFiles);
    })*/
  }

   userSelected(user:any){
    this.localstorage.set('currentUser',user);
  /* const toast = await this.toast.create({
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
    toast.present();*/
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

 /* getFileFromStorage(path_gs){
    const file_gs= this.storage.ref(path_gs);
    file_gs.getDownloadURL().toPromise().then((response_file)=>{
      return response_file;
    }).catch((error)=>{
      return error;
    });
  }*/

  uploadFile(event) {
    const file = event.target.files[0];
    //const now = new Date().getTime();
    const now:string = this.user['id']+new Date().getTime();
    console.log(now)
    const filePath = 'archivos_cargados/' + now;
    const ref= this.storage.ref(filePath);
    const task =  ref.put(file);


    /*2 formas:

    1- this.uploadPercent= task.percentageChanges();
    2- */
    task.percentageChanges().subscribe((percent)=>{
      this.percent=percent;
    })  


    //un pipe es un modificador del valor que estoy representando
    task.snapshotChanges().pipe(finalize(() => 
      ref.getDownloadURL().subscribe((link)=>{
        this.firestore.collection('uploads')
        .doc(now.toString())
        .set({photo:link,created_at:new Date()});
        this.url=link;
        this.firestore.collection('uploads_user')
        .add({upload:now.toString(),user:this.user['id']});
      }) 
    )).subscribe()
    

  } 
}
