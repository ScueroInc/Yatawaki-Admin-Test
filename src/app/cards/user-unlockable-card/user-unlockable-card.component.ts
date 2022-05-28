import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserUnlockableUpdate } from 'src/app/models/update/UserUnlockableUpdate';
import { UserService } from 'src/app/service/user.service';
import { UnlockableService } from 'src/app/service/unlockable.service';
import { UserUnlockableService } from 'src/app/service/user-unlockable.service';

@Component({
  selector: 'app-user-unlockable-card',
  templateUrl: './user-unlockable-card.component.html',
  styleUrls: ['./user-unlockable-card.component.css']
})
export class UserUnlockableCardComponent implements OnInit {

  userUnlockable: UserUnlockableUpdate = new UserUnlockableUpdate();
  users: any[] = [];
  unlockables: any[] = [];
  statuses: any[] = [];

  id: number = 0;

  show:boolean = false;
  showUpdate:boolean = false;
  showChange:boolean = false;

  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  constructor(private router: Router, private userUnlockService: UserUnlockableService, private unlockableService: UnlockableService, private userService: UserService) { }

  ngOnInit(): void {

    this.unlockableService.getUnlockableStatus().subscribe(
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

    this.unlockableService.getUnlockables().subscribe(
      data => {
        console.log(data);
        this.unlockables = data
      }
    );
  }

  nullInputStatus(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.userUnlockable.status = 0;
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

  searchUserUnlockableById() {
    this.userUnlockService.getUserUnlockableById(this.id).subscribe((userUnlockable) => {
      console.log(userUnlockable);
      this.userUnlockable = userUnlockable;
    });
    this.show = true;
    this.showUpdate = false;
    this.showChange = false;
  }

  showUpdateForm(){
    this.showUpdate = true;
    this.show = false;
    this.showChange = false;
  }

  showChangeForm(){
    this.showChange = true;
    this.show = false;
    this.showUpdate = false;
  }

  loadDataUserUnlockable() {
    this.router.navigate(['userUnlockable']);
  }

  changeUserUnlockable() {
    this.userUnlockService.changeUserUnlockable(this.userUnlockable).subscribe(
      (datos) => console.log(datos)
    );
    this.userUnlockable = new UserUnlockableUpdate();
    //this.router.navigate(['ListCustomer']);
  }

  deleteUserUnlockable(userUnlockable: UserUnlockableUpdate) {
    this.userUnlockService.deleteUserUnlockable(userUnlockable.idUserUnlockable).subscribe((data) => {
      this.loadDataUserUnlockable();
    });
  }

}
