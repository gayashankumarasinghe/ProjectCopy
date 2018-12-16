import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';
import { Router , ActivatedRoute , Params} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

    id:string;
    clients: Client[]=[];
    showSpinner:boolean = true;

  constructor(
    public clientService:ClientService,
    public flashMesasges:FlashMessagesService,
    public router:Router,
    public route:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    // var x = this.clientService.getClient(this.id)
    // .once('value')
    // .then(function(snapshot) {
    //   snapshot.forEach(async function(childSnapshot) {
    //     var key = childSnapshot.key;
    //     var childData = childSnapshot.val();
    //     console.log(childData)
    //   })
    // })
  
    this.promiseConverter();
   
   
  }
 

  async promiseConverter():Promise<string> {
    try{
      const data = await this.getData();
      data.forEach((childSnapshot)=>{
        this.clients.push(childSnapshot.val());
      })
      this.showSpinner=false
      return "firebase is # "+ data;
    }catch(err){
      return "Error "+err;
    }
  }

  getData(){
    return this.clientService.getClient(this.id).once('value')
  }


}
