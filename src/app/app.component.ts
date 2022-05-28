import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { TokenStorageService } from './service/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yatawaki-web-admin';


  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  isHomeRoute() {
    return this.router.url==='/login';
  }
}
