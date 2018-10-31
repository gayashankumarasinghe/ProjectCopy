import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-oilchange',
  templateUrl: './oilchange.component.html',
  styleUrls: ['./oilchange.component.css']
})
export class OilchangeComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  // disableSelect = new FormControl(false);
  value1 = true;
  value2 = false;
  value3 = true;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  myFilter = (d: Date): boolean => {
    var dat = new Date();
    const day = d.getDay();
    const month = d.getMonth();
    const yar = d.getFullYear();
    
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear()-1;
    


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
    return yar !> yyyy;
  }

}
