import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Concert } from 'src/app/models/concert';
import { ConcertService } from 'src/app/service/concert.service';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent implements OnInit {

  concerts = new Array<any>();

  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  constructor(private router: Router, private concertService: ConcertService) { }

  ngOnInit(): void {
    this.concertService.getConcerts().subscribe(response => {
      console.log(response)
      this.concerts = response;
    });
  }

  loadDatConcerts() {
    this.concertService
      .getConcerts()
      .subscribe((concerts) => (this.concerts = concerts));
  }

  deleteConcert(concert: Concert) {
    this.concertService.deleteConcert(concert.idConcert).subscribe((data) => {
      this.loadDatConcerts();
    });
  }

  changeConcert(concert: Concert) {
    this.router.navigate(['sidenavbar/concert-change-form', concert.idConcert]);
  }

}
