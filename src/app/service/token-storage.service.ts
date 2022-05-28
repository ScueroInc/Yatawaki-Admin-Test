import { Injectable } from '@angular/core';
import { ConfirmationPopoverWindowOptions } from 'angular-confirmation-popover/lib/confirmation-popover-window-options.provider';

@Injectable({
  providedIn: 'root'
})

export class TokenStorageService {

  constructor() { }


  public getAuth(): string | null {
    return localStorage.getItem('isAuthenticated');
  }

  public setisAuthenticated(isAuthenticated:boolean){
    const str = String(isAuthenticated)
    localStorage.setItem('isAuthenticated', str);
  }

  public setToken(jwt:string){
    localStorage.setItem('jwt', jwt);
  }

  public clear(){
    localStorage.clear();
  }

  public getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  public isLoggedIn(){
    console.log(this.getToken());
    return (this.getToken() != null )?true:false;
  }
}
