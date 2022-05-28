import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users = new Array<any>();

  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      console.log(response)
      this.users = response;
    });
  }

  loadDataUsers() {
    this.userService
      .getUsers()
      .subscribe((users) => (this.users = users));
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user.idUser).subscribe((data) => {
      this.loadDataUsers();
    });
  }

  changeUser(user: User) {
    this.router.navigate(['sidenavbar/user-change-form', user.idUser]);
  }
}
