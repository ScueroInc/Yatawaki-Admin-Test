import { Component, OnInit } from '@angular/core';
import { Rank } from 'src/app/models/ranks';
import { RankService } from 'src/app/service/rank.service';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-rank-new-form',
  templateUrl: './rank-new-form.component.html',
  styleUrls: ['./rank-new-form.component.css']
})
export class RankNewFormComponent implements OnInit {

  rank: Rank = new Rank();
  statuses: any[] = [];
  evidencia: any

  constructor(private router: Router, private rankService: RankService) { }

  ngOnInit(): void {
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

  insertRank() {
    this.rankService.createRank(this.rank).subscribe(
      (datos) => {
        console.log(datos)
        this.evidencia = datos
      }
    );
    console.log(this.rank);
    this.rank = new Rank();
    this.router.navigate(['sidenavbar/rank']).then(()=>
    {
      console.log(this.router.url);
    })
  }

}
