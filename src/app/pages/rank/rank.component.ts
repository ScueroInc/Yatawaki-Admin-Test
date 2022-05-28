import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rank } from 'src/app/models/ranks';
import { RankService } from 'src/app/service/rank.service';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {


  ranks = new Array<any>();

  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  constructor(private router: Router, private rankService: RankService) { }

  ngOnInit(): void {
    this.rankService.getRanks().subscribe(response => {
      console.log(response)
      this.ranks = response;
    });
  }

  loadDataRanks() {
    this.rankService
      .getRanks()
      .subscribe((ranks) => (this.ranks = ranks));
  }

  deleteRank(rank: Rank) {
    this.rankService.deleteRank(rank.idRank).subscribe((data) => {
      this.loadDataRanks();
    });
  }

  changeRank(rank: Rank) {
    this.router.navigate(['sidenavbar/rank-change-form', rank.idRank]);
  }

}
