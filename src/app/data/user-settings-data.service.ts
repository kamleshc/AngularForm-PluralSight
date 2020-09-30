import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings-interface';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsDataService {

  constructor() { }

  postUserSettingsForm(userSettings: UserSettings) : Observable<UserSettings>{
    return of(userSettings);
  }

}
