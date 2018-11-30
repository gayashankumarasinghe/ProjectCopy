import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { BookingService } from '../../services/booking.service';
import { Booking } from '../../models/Booking';
import {ErrorStateMatcher} from '@angular/material/core';


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
    phone:'',
    vehicleNo:'',
    millage:0 ,
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

  constructor(public bookingService:BookingService) { }

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
  onSubmit({value,valid}:{value:Booking,valid:boolean}){
    console.log(value);
  }
  // email validation
}
