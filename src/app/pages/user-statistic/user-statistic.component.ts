import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserStatistic } from 'src/app/models/user-statistic';
import { UserStatisticService } from 'src/app/service/user-statistic.service';

@Component({
  selector: 'app-user-statistic',
  templateUrl: './user-statistic.component.html',
  styleUrls: ['./user-statistic.component.css']
})
export class UserStatisticComponent implements OnInit {
  userStatistics = new Array<any>();

  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  constructor(private router: Router, private userStatisticService: UserStatisticService) { }

  ngOnInit(): void {
    this.userStatisticService.getUserStatistics().subscribe(response => {
      console.log(response)
      this.userStatistics = response;
    });
  }

  loadDataUserStatistics() {
    this.userStatisticService
      .getUserStatistics()
      .subscribe((userStatistics) => (this.userStatistics = userStatistics));
  }

  deleteUserStatistic(userStatistic: UserStatistic) {
    this.userStatisticService.deleteUserStatistic(userStatistic.idUserStatistics).subscribe((data) => {
      this.loadDataUserStatistics();
    });
  }

  changeUserStatistic(userStatistic: UserStatistic) {
    this.router.navigate(['sidenavbar/user-statistic-change-form', userStatistic.idUserStatistics]);
  }

}
