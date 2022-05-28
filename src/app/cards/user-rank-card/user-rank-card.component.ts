import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRank } from 'src/app/models/user-rank';
import { UserRankUpdate } from 'src/app/models/update/UserRankUpdate';
import { UserRankService } from 'src/app/service/user-rank.service';
import { UserService } from 'src/app/service/user.service';
import { RankService } from 'src/app/service/rank.service';

@Component({
  selector: 'app-user-rank-card',
  templateUrl: './user-rank-card.component.html',
  styleUrls: ['./user-rank-card.component.css']
})
export class UserRankCardComponent implements OnInit {

  userRank: UserRankUpdate = new UserRankUpdate();
  userRanks: UserRank[] = [];
  statuses: any[] = [];
  users: any[] = [];
  ranks: any[] =[];

  id: number = 0;

  show:boolean = false;
  showUpdate:boolean = false;
  showChange:boolean = false;

  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  constructor(private userRankService: UserRankService, private router: Router, private userService: UserService, private rankService: RankService) { }

  ngOnInit(): void {
    this.userRankService.getUserRankStatus().subscribe(
      datos => {
        console.log(datos)
        this.statuses = datos;
      }
    );
  }

  nullInputStartDate(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.userRank.startDate = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }
  nullInputEndDate(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.userRank.endDate = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }
  nullInputCurrentExperience(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.userRank.currentExperience = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }
  nullInputStatus(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.userRank.status = 0;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  searchUserRankById() {
    this.userRankService.getUserRankById(this.id).subscribe((userRank) => {
      console.log(userRank);
      this.userRank = userRank;
    });
    this.show = true;
    this.showChange = false;
  }


  showChangeForm(){
    this.showChange = true;
    this.show = false;
  }

  loadDataUserRanks() {
    this.router.navigate(['user-rank']);
  }


  changeUserRank(){
    this.userRankService.changeUserRank(this.userRank).subscribe(
      datos => {
        console.log(datos);
      }
    );
    this.userRank = new UserRankUpdate();
  }

  deleteUserRank(userRank: UserRankUpdate) {
    this.userRankService.deleteUserRank(userRank.idUserRank).subscribe((data) => {
      this.loadDataUserRanks();
    });
  }

}
