import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnlockableService } from 'src/app/service/unlockable.service';
import { UserUnlockableService } from 'src/app/service/user-unlockable.service';
import { UserUnlockableUpdate } from 'src/app/models/update/UserUnlockableUpdate';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-unlockable-change-form',
  templateUrl: './user-unlockable-change-form.component.html',
  styleUrls: ['./user-unlockable-change-form.component.css']
})
export class UserUnlockableChangeFormComponent implements OnInit {

  id: number = 0;
  userUnlockable: UserUnlockableUpdate = new UserUnlockableUpdate();
  users: any[] = [];
  unlockables: any[] = []
  statuses: any[] = [];
  evidencia: any

  constructor(private route: ActivatedRoute, private router: Router, private unlockableService: UnlockableService, private userService: UserService, private userUnlockService: UserUnlockableService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.userUnlockService.getUserUnlockableById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.userUnlockable = datos
        this.userUnlockable.idUser = datos.user.idUser;
        this.userUnlockable.idUnlockable = datos.unlockable.idUnlockable;
      }
    );

    this.userService.getUsers().subscribe(
      data => {
        console.log(data);
        this.users = data
      }
    );

    this.unlockableService.getUnlockables().subscribe(
      data => {
        console.log(data);
        this.unlockables = data
      }
    );

    this.unlockableService.getUnlockableStatus().subscribe(
      datos => {
        console.log(datos)
        this.statuses = datos;
      }
    );
  }

  nullInputStatus(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.userUnlockable.status = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputUnlockedDate(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.userUnlockable.unlockedDate = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  // nullInputUnlockable(elementId: string, chbox: string) {
  //   if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
  //     (<HTMLInputElement>document.getElementById(elementId)).value = "";
  //     this.userUnlockable.idUnlockable = null;
  //     (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
  //   } else {
  //     (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
  //   }
  // }
  // nullInputUser(elementId: string, chbox: string) {
  //   if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
  //     (<HTMLInputElement>document.getElementById(elementId)).value = "";
  //     this.userUnlockable.idUnlockable = null;
  //     (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
  //   } else {
  //     (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
  //   }
  // }

  changeUserUnlockable() {
    this.userUnlockService.changeUserUnlockable(this.userUnlockable).subscribe(
      (datos) => {
        console.log(datos);
        this.evidencia = datos
      }
    );
    this.userUnlockable = new UserUnlockableUpdate();
    //this.router.navigate(['ListCustomer']);
    return this.router.navigate(['sidenavbar/user-unlockable']).then(() => {
      console.log(this.router.url);
      window.location.reload();
    })
  }

}
