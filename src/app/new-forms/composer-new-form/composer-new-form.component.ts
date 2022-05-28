import { Component, OnInit } from '@angular/core';
import { Composer } from 'src/app/models/composer';
import { ComposerService } from 'src/app/service/composer.service';
import { UnlockableService } from 'src/app/service/unlockable.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-composer-new-form',
  templateUrl: './composer-new-form.component.html',
  styleUrls: ['./composer-new-form.component.css']
})
export class ComposerNewFormComponent implements OnInit {

  
  composer: Composer = new Composer();
  statuses: any[] = [];
  evidencia: any

  constructor(private router: Router, private composerService: ComposerService, private unlockableService: UnlockableService) { }

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

  insertComposer() {
    if(this.composer.name === ''){
      this.composer.name = null;
    }
    this.composerService.createComposer(this.composer).subscribe(
      (datos) => {
        console.log(datos)
        this.evidencia = datos
      }
      //(error) => console.log(error)
    );
    this.composer = new Composer();
    return this.router.navigate(['sidenavbar/composer']).then(()=>
    {
      console.log(this.router.url);
      window.location.reload();
    })
  }

}
