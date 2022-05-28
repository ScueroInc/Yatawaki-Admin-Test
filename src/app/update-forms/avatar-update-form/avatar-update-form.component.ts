import { Component, OnInit } from '@angular/core';
import { Avatar } from 'src/app/models/avatar';
import { AvatarService } from 'src/app/service/avatar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UnlockableService } from 'src/app/service/unlockable.service';

@Component({
  selector: 'app-avatar-update-form',
  templateUrl: './avatar-update-form.component.html',
  styleUrls: ['./avatar-update-form.component.css']
})
export class AvatarUpdateFormComponent implements OnInit {

  id: number = 0;
  avatar: Avatar = new Avatar();
  statuses: any[] = [];
  unlockerTypes: any[] = [];

  constructor( private route: ActivatedRoute,
    private router: Router,
    private avatarService: AvatarService, private unlockableService: UnlockableService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.avatarService.getAvatarById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.avatar = datos;
      }
    );
    this.unlockableService.getUnlockableStatus().subscribe(
      datos => {
        console.log(datos)
        this.statuses = datos;
      }
    );
    this.unlockableService.getUnlockerTypes().subscribe(
      datos => {
        console.log(datos)
        this.unlockerTypes = datos;
      }
    );
  }

  actualizarAvatar() {
    if (this.avatar.description === ''){
      this.avatar.description = null;
    }
    if(this.avatar.enhancedFeaturesJson === ''){
      this.avatar.enhancedFeaturesJson = null;
    }
    if(this.avatar.icon === ''){
      this.avatar.icon = null;
    }
    if(this.avatar.name === ''){
      this.avatar.name = null;
    }
    console.log(JSON.stringify(this.avatar))
    this.avatarService.updateAvatar(this.avatar).subscribe(
      (datos) => {
        console.log(datos);
        //this.router.navigate(['ListCustomer']);
      }
    );
    this.avatar = new Avatar();
  }

}
