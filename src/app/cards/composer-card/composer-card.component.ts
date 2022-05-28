import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Composer } from 'src/app/models/composer';
import { ComposerService } from 'src/app/service/composer.service';
import { UnlockableService } from 'src/app/service/unlockable.service';

@Component({
  selector: 'app-composer-card',
  templateUrl: './composer-card.component.html',
  styleUrls: ['./composer-card.component.css']
})
export class ComposerCardComponent implements OnInit {

  composer: Composer = new Composer();
  composers: Composer[] = [];
  statuses: any[] = [];

  id: number = 0;

  show:boolean = false;
  showUpdate:boolean = false;
  showChange:boolean = false;

  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  constructor(private composerService: ComposerService, private router: Router, private unlockableService: UnlockableService) { }

  ngOnInit(): void {
    this.unlockableService.getUnlockableStatus().subscribe(
      datos => {
        console.log(datos)
        this.statuses = datos;
      }
    );
  }

  nullInputName(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.composer.name = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputStatus(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.composer.status = 0;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputBirthDate(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.composer.birthDate = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputDeathDate(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.composer.deathDate = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  searchComposerById() {
    this.composerService.getComposerById(this.id).subscribe((composer) => {
      console.log(composer);
      this.composer = composer;
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

  loadDataComposers() {
    this.router.navigate(['composer']);
  }


  changeComposer(){
    this.composerService.changeComposer(this.composer).subscribe(
      datos => {
        console.log(datos);
      }
    );
    this.composer = new Composer();
  }

  deleteComposer(composer: Composer) {
    this.composerService.deleteComposer(composer.idComposer).subscribe((data) => {
      this.loadDataComposers();
    });
  }

}
