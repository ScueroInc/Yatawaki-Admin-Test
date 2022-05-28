import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Unlockable } from 'src/app/models/unlockable';
import { UnlockableService } from 'src/app/service/unlockable.service';

@Component({
  selector: 'app-unlockable-card',
  templateUrl: './unlockable-card.component.html',
  styleUrls: ['./unlockable-card.component.css']
})
export class UnlockableCardComponent implements OnInit {


  unlockable: Unlockable = new Unlockable();
  unlockables: Unlockable[] = [];


  id: number = 0;
  show:boolean = false;

  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  constructor(private router: Router, private unlockableService: UnlockableService) { }

  ngOnInit(): void {
  }

  loadDataUnlockables() {
    this.router.navigate(['unlockable']);
  }

  searchUnlockableById() {
    this.unlockableService.getUnlockableById(this.id).subscribe((unlockable) => {
      console.log(unlockable);
      this.unlockable = unlockable;
    });
    this.show = true;
  }

  deleteUnlockable(unlockable: Unlockable) {
    this.unlockableService.deleteUnlockable(unlockable.idUnlockable).subscribe((data) => {
      this.loadDataUnlockables();
    });
  }

}
