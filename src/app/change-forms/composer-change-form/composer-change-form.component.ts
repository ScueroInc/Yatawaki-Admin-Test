import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Composer } from 'src/app/models/composer';
import { ComposerService } from 'src/app/service/composer.service';
import { UnlockableService } from 'src/app/service/unlockable.service';

@Component({
  selector: 'app-composer-change-form',
  templateUrl: './composer-change-form.component.html',
  styleUrls: ['./composer-change-form.component.css']
})
export class ComposerChangeFormComponent implements OnInit {

  id: number = 0;
  composer: Composer = new Composer();
  statuses: any[] = [];
  unlockerTypes: any[] = [];
  evidencia: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private composerService: ComposerService, private unlockableService: UnlockableService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.composerService.getComposerById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.composer = datos;
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
  changeComposer() {
    this.composerService.changeComposer(this.composer).subscribe(
      (datos) => {
        console.log(datos);
        this.evidencia = datos;
        //this.router.navigate(['ListCustomer']);
      }
    );
    this.composer = new Composer();
    return this.router.navigate(['sidenavbar/composer']).then(()=>
    {
      console.log(this.router.url);
      window.location.reload();
    })
  }

}
