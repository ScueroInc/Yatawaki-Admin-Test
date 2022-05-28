import { Component, OnInit } from '@angular/core';
import { Avatar } from 'src/app/models/avatar';
import { AvatarService } from '../../service/avatar.service'
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  avatars = new Array<any>();
  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  //displayedColumns: string[] = ['id', 'name', 'description', 'rareness']

  constructor(private router: Router, private avatarService: AvatarService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.avatarService.getAvatars().subscribe(response => {
      console.log(response)
      this.avatars = response;
    });
  }

  loadDataAvatars() {
    this.avatarService
      .getAvatars()
      .subscribe((avatars) => (this.avatars = avatars));
  }

  deleteAvatar(avatar: Avatar) {
    this.avatarService.deleteAvatar(avatar.idUnlockable).subscribe((data) => {
      this.loadDataAvatars();
    });
  }

  changeAvatar(avatar: Avatar) {
    this.router.navigate(['sidenavbar/avatar-change-form', avatar.idUnlockable]);
  }


}
