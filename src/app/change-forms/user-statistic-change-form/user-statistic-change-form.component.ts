import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserStatistic } from 'src/app/models/user-statistic';
import { UserStatisticService } from 'src/app/service/user-statistic.service';

@Component({
  selector: 'app-user-statistic-change-form',
  templateUrl: './user-statistic-change-form.component.html',
  styleUrls: ['./user-statistic-change-form.component.css']
})
export class UserStatisticChangeFormComponent implements OnInit {

  id: number = 0;
  userStatistic: UserStatistic = new UserStatistic();
  statuses: any[] = [];
  evidencia: any;

  constructor(private router: Router, private route: ActivatedRoute,
    private userStatisticService: UserStatisticService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userStatisticService.getUserStatisticById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.userStatistic = datos;
      }
    );
    this.userStatisticService.getUserStatisticStatus().subscribe(
      datos => {
        console.log(datos)
        this.statuses = datos;
      }
    );
  }

  nullInputTriviasPlayed(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.userStatistic.triviasPlayed = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputTriviasWon(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.userStatistic.triviasWon = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputConcertsOrchestrated(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.userStatistic.concertsOrchestrated = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputOrchestrationAccuracy(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.userStatistic.orchestrationAccuracy = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputStatus(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.userStatistic.status = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  changeUserStatistic() {
    this.userStatisticService.changeUserStatistic(this.userStatistic).subscribe(
      (datos) => {
        console.log(datos);
        this.evidencia = datos
        //this.router.navigate(['ListCustomer']);
      }
    );
    this.userStatistic = new UserStatistic();
    return this.router.navigate(['sidenavbar/user-statistic']).then(()=>
    {
      console.log(this.router.url);
      window.location.reload();
    })
  }


}
