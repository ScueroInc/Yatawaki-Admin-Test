import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserUnlockable } from 'src/app/models/user-unlockable';
import { UserUnlockableService } from 'src/app/service/user-unlockable.service'; 

@Component({
  selector: 'app-user-unlockable',
  templateUrl: './user-unlockable.component.html',
  styleUrls: ['./user-unlockable.component.css']
})
export class UserUnlockableComponent implements OnInit {

  userUnlockables = new Array<any>();

  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  constructor(private router: Router, private userUnlockableService: UserUnlockableService) { }

  ngOnInit(): void {
    this.userUnlockableService.getUserUnlockables().subscribe(response => {
      console.log(response)
      this. userUnlockables = response;
    });
  }

  loadDataUsers() {
    this.userUnlockableService
      .getUserUnlockables()
      .subscribe((userUnlockables) => (this.userUnlockables = userUnlockables));
  }

  deleteUser(user: UserUnlockable) {
    this.userUnlockableService.deleteUserUnlockable(user.idUserUnlockable).subscribe((data) => {
      this.loadDataUsers();
    });
  }

  changeUser(userUnlockable: UserUnlockable) {
    this.router.navigate(['sidenavbar/user-unlockable-change-form', userUnlockable.idUserUnlockable]);
  }

}
