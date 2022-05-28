import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from './service/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private storageService: TokenStorageService){}

  canActivate(){
    console.log(this.storageService.isLoggedIn())
    if(this.storageService.isLoggedIn()){
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }
  
}
