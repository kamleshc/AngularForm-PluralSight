import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings-interface';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsDataService {
  constructor(private http: HttpClient) { }

  getSubscriptionTypes(): Observable<string[]> {
   // throw new Error('Method not implemented.');
   return of (['Monthly', 'Annual', 'Lifetime']);
  }

  postUserSettingsForm(userSettings: UserSettings) : Observable<any>{
    //return of(userSettings);
    return this.http.post('https://dd7440f431521c078cdf941670af0599.m.pipedream.net', userSettings);
  }

}
