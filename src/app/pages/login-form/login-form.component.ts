import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  flag: boolean = false;
  e: boolean = false;
  public popoverMessage:string = 'Datos de incio de sesión incorrecto'

  constructor(private authService: AuthService, private tokenService: TokenStorageService, private router:Router) { }

  ngOnInit(): void {

  }

  async login(loginForm: NgForm){
    await this.authService.login2(loginForm.value).subscribe(
      (response:any) =>{
        console.log(response.isAuthenticated);
        console.log(response.jwt);
        this.tokenService.setToken(response.jwt);
        this.flag = response.isAuthenticated;
        console.log(this.flag)
        if(this.flag==true){
          return this.router.navigate(['sidenavbar']).then(()=>
          {
            console.log(this.router.url);
            window.location.reload();
          })
        }
        else{
          return;
        }
      },
    );
    if(this.flag==false){
      this.e = true;
    }
  }
}
