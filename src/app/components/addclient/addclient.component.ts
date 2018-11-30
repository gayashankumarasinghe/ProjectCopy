import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {

  client:Client = {
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    vehicleNo:'',
    millage:0 
  }
  //disableBalanceOnAdd:boolean = false;

  constructor(
  public flashMessagesService:FlashMessagesService,
  public router:Router,
  public clientService:ClientService
  ){}

  ngOnInit() {
  }

  onSubmit({value, valid}:{value:Client, valid:boolean}){
  if(!valid){
    this.flashMessagesService.show('Please fill in all fields', {cssClass:'alert-danger', timeout: 4000});
    this.router.navigate(['addclient']);
  } else {
    // Add new client
    this.clientService.newClient(value);
    this.flashMessagesService.show('New client added', {cssClass:'alert-success', timeout: 4000});
    this.router.navigate(['/']);
  }
  }
  
}
