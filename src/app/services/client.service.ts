import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
// import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Client } from '../models/Client';

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
    public af:AngularFireDatabase, public afAuth: AngularFireAuth
  ) {
    this.clients = this.af.list('/clients') as FirebaseListObservable<Client[]>;
   }

   getClients(){
    return this.clients;
  }

  getClient(email:String){
    this.client = this.af.object('/clients/'+email) as FirebaseObjectObservable<Client>;
    return this.client;
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
