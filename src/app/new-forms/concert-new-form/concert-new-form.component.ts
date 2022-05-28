import { Component, OnInit } from '@angular/core';
import { ConcertCreate } from 'src/app/models/create/ConcertCreate';
import { UserService } from 'src/app/service/user.service';
import { SymphonyService } from 'src/app/service/symphony.service';
import { ConcertService } from 'src/app/service/concert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-concert-new-form',
  templateUrl: './concert-new-form.component.html',
  styleUrls: ['./concert-new-form.component.css']
})
export class ConcertNewFormComponent implements OnInit {


  concert: ConcertCreate = new ConcertCreate();
  symphonies: any[] = [];
  users: any[] = [];
  evidencia: any

  constructor(private router: Router, private concertService: ConcertService, private userService: UserService, private symphonyService: SymphonyService) { }

  ngOnInit(): void {
    this.symphonyService.getSymphonies().subscribe(
      data => {
        console.log(data);
        this.symphonies = data
      }
    );
    
    this.userService.getUsers().subscribe(
      data => {
        console.log(data);
        this.users = data
      }
    );
  }

  insertConcert() {
    this.concertService.createConcert(this.concert).subscribe(
      (datos) => {
        console.log(datos)
        this.evidencia = datos
      }
    );
    this.concert = new ConcertCreate();
    return this.router.navigate(['sidenavbar/concert']).then(()=>
    {
      console.log(this.router.url);
      window.location.reload();
    })
  }

}
