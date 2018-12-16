import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';
import { Router , ActivatedRoute , Params} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { Router , ActivatedRoute , Params} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
=======
>>>>>>> remotes/origin/master
>>>>>>> remotes/origin/master
=======
>>>>>>> 5598630a47a297395fb2cc64ecb0c5bbd5647484


@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> remotes/origin/master
=======
>>>>>>> 5598630a47a297395fb2cc64ecb0c5bbd5647484
    id:string;
    client:Client;

  constructor(
    public clientService:ClientService,
    public flashMesasges:FlashMessagesService,
    public router:Router,
    public route:ActivatedRoute,
  ) { }
<<<<<<< HEAD

  ngOnInit() {

    //get id
    this.id = this.route.snapshot.params['id'];
    //console.log(this.id);

    //get client

    this.clientService.getClient(this.id).subscribe(client=>{
      this.client = client;
      console.log(this.client);
    });
=======

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

<<<<<<< HEAD
    //get client

    this.clientService.getClient(this.id);
    // .subscribe(client=>{
    //   this.client = client;
    //   console.log(this.client);
    // });
=======
  constructor() { }

  ngOnInit() {
>>>>>>> remotes/origin/master
>>>>>>> remotes/origin/master
=======
    var query = this.clientService.getClient(this.id)
    .once('value')
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var key = childSnapshot.key;
        var childData = childSnapshot.val();
        console.log(childData)
      })
    })
   
>>>>>>> 5598630a47a297395fb2cc64ecb0c5bbd5647484
  }


}
