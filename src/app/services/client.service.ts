import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
// import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Client } from '../models/Client';
import { DatabaseQuery } from 'angularfire2/interfaces'

import { AngularFireAuth } from 'angularfire2/auth';

export interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
}

@Injectable()
export class ClientService {
  clients: FirebaseListObservable<any[]>;
  client: FirebaseObjectObservable<any>;

  constructor(
    public af:AngularFireDatabase,
    public afAuth: AngularFireAuth,
    public query: DatabaseQuery

  ) {
    this.clients = this.af.list('/clients') as FirebaseListObservable<Client[]>;
   }

   getClients(){
    return this.clients;
  }

  getClient(id:String){
    this.client = this.af.object('/clients/'+id) as FirebaseObjectObservable<Client>;
    return this.client;

//     var size$ = new FirebaseObjectObservable<Client>;
// const queryObservable = size$.pipe(
//   switchMap(size => 
//     db.list('/items', ref => ref.orderByChild('size').equalTo(size)).valueChanges()
//   )
// );

//child access
// ff = this.query.ref

//  this.query.ref.child('clients').orderByChild('email').equalTo('id').on("value", function(snapshot) {
//   console.log(snapshot.val());
//   snapshot.forEach(function(data) {
//       console.log(data.key);
//   });
// });


  }
  newClient(client:Client){
    const mytoken1 = {
      firstName : client.firstName,
      lastName : client.lastName,
      email: client.email,
      phone : client.phone,
      vehicleNo: client.vehicleNo,
      millage : client.millage,
      role : client.role,
    }
    this.clients.push(mytoken1).then(()=>{
        return new Promise((resolve, reject) => {
          this.afAuth.auth.createUserWithEmailAndPassword(client.email, client.password)
            .then(userData => resolve(userData),
              err => reject(err));
        });
      
    });
  }
}
