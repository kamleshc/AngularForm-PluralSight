import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserSettingsDataService } from '../data/user-settings-data.service';
import { UserSettings } from '../data/user-settings-interface';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings : UserSettings = {
    fullName: null,
    emailSpecialOffers: null,
    interfaceType: null,
    subscriptionTypes: null,
    notes: null
  }

  userSettings: UserSettings = { ...this.originalUserSettings };
  
  constructor( private dataService: UserSettingsDataService) { }

  ngOnInit(): void {
  }

  onBlur(field: NgModel){
    console.log('in onBlur: ', field.valid) 
  }

  onSubmit(f: NgForm){
   console.log('in onSubmit: ', f.valid)
   this.dataService.postUserSettingsForm(this.userSettings).subscribe(
     result => console.log('success: ', result),
     error => console.log('error: ', error)
   );
  }

}
