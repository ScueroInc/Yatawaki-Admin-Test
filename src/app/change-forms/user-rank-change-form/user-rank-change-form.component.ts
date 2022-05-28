import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRankUpdate } from 'src/app/models/update/UserRankUpdate';
import { UserRank } from 'src/app/models/user-rank';
import { UserService } from 'src/app/service/user.service';
import { RankService } from 'src/app/service/rank.service';
import { UserRankService } from 'src/app/service/user-rank.service';

@Component({
  selector: 'app-user-rank-change-form',
  templateUrl: './user-rank-change-form.component.html',
  styleUrls: ['./user-rank-change-form.component.css']
})
export class UserRankChangeFormComponent implements OnInit {

  id: number = 0;
  userRank: UserRankUpdate = new UserRankUpdate();
  statuses: any[] = [];
  users: any[] = [];
  ranks: any[] =[];
  evidencia: any

  constructor(private router: Router, private route: ActivatedRoute,
    private userRankService: UserRankService, private userService: UserService, private rankService: RankService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userRankService.getUserRankById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.userRank = datos;
        this.userRank.idRank = datos.rank.idRank;
        this.userRank.idUser = datos.user.idUser
      }
    );
    this.userRankService.getUserRankStatus().subscribe(
      datos => {
        console.log(datos)
        this.statuses = datos;
      }
    );

    this.userService.getUsers().subscribe(
      data => {
        console.log(data);
        this.users = data
      }
    );
    this.rankService.getRanks().subscribe(
      data => {
        console.log(data);
        this.ranks = data
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

  changeUserRank() {
    this.userRankService.changeUserRank(this.userRank).subscribe(
      (datos) => {
        console.log(datos);
        this.evidencia = datos
        //this.router.navigate(['ListCustomer']);
      }
    );
    this.userRank = new UserRankUpdate();
    return this.router.navigate(['sidenavbar/user-rank']).then(()=>
    {
      console.log(this.router.url);
      window.location.reload();
    })
  }

}
