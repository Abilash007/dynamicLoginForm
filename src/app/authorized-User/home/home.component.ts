import { Component, OnInit } from '@angular/core';
import { CommonDataServiceService } from '../common-data-service.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myFormGroup:FormGroup;
  itemDetails: any;
  anyItemSelected: boolean;
  selectedItemDetails: any;
  form_template: any;

  constructor(private commonDataService : CommonDataServiceService) { }

  ngOnInit(): void {
    const username = sessionStorage.getItem('userName');
    this.selectedItemDetails =  {
      id: '',item: '',index: 0
    };
    this.itemDetails = this.commonDataService.getItemDetails();
  }

  selectedItem(value, index) {
    debugger;
    this.form_template = [];
    this.anyItemSelected = true;
    this.selectedItemDetails.id = value.id;
    this.selectedItemDetails.item = value.item;
    this.selectedItemDetails.index = index;
    let numberOfInputField = 0;
    numberOfInputField = (this.selectedItemDetails.index + 1) *2;
     for(let i = 0;i < numberOfInputField;i++) {
      let inputDetail = {
        "type":"textBox",
        "label":"",
      };
       inputDetail.label = 'Name' + i;
       this.form_template.push(inputDetail);
     }
     let group={};   
     this.form_template.forEach(input_template=> {
      group[input_template.label]=new FormControl('');  
    })
    this.myFormGroup = new FormGroup (group);
  }

  onSubmit() {
    console.log(this.myFormGroup.value);
  }

  reset() {
    this.myFormGroup.reset();
  }

 

}
