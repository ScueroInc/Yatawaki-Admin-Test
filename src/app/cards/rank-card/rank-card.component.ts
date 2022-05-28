import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rank } from 'src/app/models/ranks';
import { RankService } from 'src/app/service/rank.service';


@Component({
  selector: 'app-rank-card',
  templateUrl: './rank-card.component.html',
  styleUrls: ['./rank-card.component.css']
})
export class RankCardComponent implements OnInit {

  rank: Rank = new Rank();
  ranks: Rank[] = [];
  statuses: any[] = [];

  id: number = 0;

  show:boolean = false;
  showUpdate:boolean = false;
  showChange:boolean = false;

  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  constructor(private rankService: RankService, private router: Router) { }

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

  searchRankById() {
    this.rankService.getRankById(this.id).subscribe((rank) => {
      console.log(rank);
      this.rank = rank;
    });
    this.show = true;
    this.showChange = false;
  }


  showChangeForm(){
    this.showChange = true;
    this.show = false;
  }

  loadDataRanks() {
    this.router.navigate(['rank']);
  }


  changeRank(){
    this.rankService.changeRank(this.rank).subscribe(
      datos => {
        console.log(datos);
      }
    );
    this.rank = new Rank();
  }

  deleteRank(rank: Rank) {
    this.rankService.deleteRank(rank.idRank).subscribe((data) => {
      this.loadDataRanks();
    });
  }

}
