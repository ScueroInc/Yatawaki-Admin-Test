import { Component, OnInit } from '@angular/core';
import { UserRankCreate } from 'src/app/models/create/UserRankCreate';
import { UserService } from 'src/app/service/user.service';
import { RankService } from 'src/app/service/rank.service';
import { UserRankService } from 'src/app/service/user-rank.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-rank-new-form',
  templateUrl: './user-rank-new-form.component.html',
  styleUrls: ['./user-rank-new-form.component.css']
})
export class UserRankNewFormComponent implements OnInit {
  
  userRank: UserRankCreate = new UserRankCreate();
  users: any[] = [];
  ranks: any[] =[];
  evidencia: any

  constructor(private router: Router, private userRankService: UserRankService, private userService: UserService, private rankService: RankService) { }

  ngOnInit(): void {

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


  insertUserRank() {
    this.userRankService.createUserRank(this.userRank).subscribe(
      (datos) => {
        console.log(datos)
        this.evidencia = datos
      }
    );
    this.userRank = new UserRankCreate();
    return this.router.navigate(['sidenavbar/user-rank']).then(()=>
    {
      console.log(this.router.url);
      window.location.reload();
    })
  }


}
