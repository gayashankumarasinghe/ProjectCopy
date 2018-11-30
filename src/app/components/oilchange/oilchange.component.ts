import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { BookingService } from '../../services/booking.service';
import { Booking } from '../../models/Booking';
import {ErrorStateMatcher} from '@angular/material/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-oilchange',
  templateUrl: './oilchange.component.html',
  styleUrls: ['./oilchange.component.css']
})

export class OilchangeComponent implements OnInit {
  disableSelect = new FormControl(false);
  booking:Booking
  ={
    //$key?:string;
    email:'',
    //phone:'',
    vehicleNo:'',
    //millage:0 ,
    date:'',
    option:''
  }

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

 // isLinear = false;
 // firstFormGroup: FormGroup;
  //secondFormGroup: FormGroup;

  // disableSelect = new FormControl(false);
  //value1 = true;
  //value2 = false;
 // value3 = true;

  constructor(
    public bookingService:BookingService,
    public flashMessagesService:FlashMessagesService,
    public router:Router,
    //public clientService:ClientService
  ) { }

  ngOnInit() {
    //this.firstFormGroup = this._formBuilder.group({
    //  firstCtrl: ['', Validators.required]
   // });
   // this.secondFormGroup = this._formBuilder.group({
   //   secondCtrl: ['', Validators.required]
   // });

    
  }

 // myFilter = (d: Date): boolean => {
  //  var dat = new Date();
  //  const day = d.getDay();
   // const month = d.getMonth();
  ///  const yar = d.getFullYear();
    
   // var today = new Date();
  //  var dd = today.getDate();
  //  var mm = today.getMonth()+1; //January is 0!
  //  var yyyy = today.getFullYear()-1;
    


    // var date = dat.toDateString()
    // var disp2 = today.toDateString();
    // date = month + '/' + day + '/' + year;
    // disp2 = mm + '/' + dd + '/' + yyyy;

    // disp1 = month + day + year;
    // disp1 = mm + dd + yyyy;
    // console.log(disp);

    // console.log(day !== 0 && day !== 6);
    // Prevent Saturday and Sunday from being selected.
    // return day !== 0 && day !== 6 ;
   // return yar !> yyyy;
 // }
 onSubmit({value, valid}:{value:Booking, valid:boolean}){
  if(!valid){
    this.flashMessagesService.show('Please fill in all fields', {cssClass:'alert-danger', timeout: 4000});
    this.router.navigate(['/oilchange']);
  } else {
    // Add new client
    this.bookingService.newBooking(value);
    this.flashMessagesService.show('New Booking added', {cssClass:'alert-success', timeout: 4000});
    this.router.navigate(['/']);
  }
  }
  // email validation
}
