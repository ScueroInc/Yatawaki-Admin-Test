import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rank } from 'src/app/models/ranks';
import { RankService } from 'src/app/service/rank.service';

@Component({
  selector: 'app-rank-change-form',
  templateUrl: './rank-change-form.component.html',
  styleUrls: ['./rank-change-form.component.css']
})
export class RankChangeFormComponent implements OnInit {

  id: number = 0;
  rank: Rank = new Rank();
  statuses: any[] = [];
  evidencia: any;

  constructor(private router: Router, private route: ActivatedRoute,
    private rankService: RankService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.rankService.getRankById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.rank = datos;
      }
    );
    this.rankService.getRankStatus().subscribe(
      datos => {
        console.log(datos)
        this.statuses = datos;
      }
    );
  }

  nullInputName(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.rank.name = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputLevel(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.rank.level = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputMaxExperience(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.rank.maxExperience = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputStatus(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.rank.status = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  changeRank() {
    this.rankService.changeRank(this.rank).subscribe(
      (datos) => {
        console.log(datos);
        this.evidencia = datos
        //this.router.navigate(['ListCustomer']);
      }
    );
    this.rank = new Rank();
    return this.router.navigate(['sidenavbar/rank']).then(()=>
    {
      console.log(this.router.url);
      window.location.reload();
    })
  }


}
