import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SymphonyService } from 'src/app/service/symphony.service';
import { InstrumentService } from 'src/app/service/instrument.service';
import { SymphonyInstrumentService } from 'src/app/service/symphony-instrument.service';
import { UnlockableService } from 'src/app/service/unlockable.service';
import { SymphonyInstrumentUpdate } from 'src/app/models/update/SymphonyInstrumentUpdate';

@Component({
  selector: 'app-symphony-instrument-change-form',
  templateUrl: './symphony-instrument-change-form.component.html',
  styleUrls: ['./symphony-instrument-change-form.component.css']
})
export class SymphonyInstrumentChangeFormComponent implements OnInit {

  id: number = 0;
  symphonyInstrument: SymphonyInstrumentUpdate = new SymphonyInstrumentUpdate();
  symphonies: any[] = [];
  instruments: any[] = [];
  statuses: any[] = [];
  evidencia:any

  show:boolean = false;
  showUpdate:boolean = false;
  showChange:boolean = false;

  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private unlockableService: UnlockableService, private symphonyService: SymphonyService, private instrumentService: InstrumentService, private symphonyInsService: SymphonyInstrumentService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.symphonyInsService.getSymphonInstrumentyById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.symphonyInstrument = datos;
        this.symphonyInstrument.idSymphony = datos.symphony.idUnlockable;
        this.symphonyInstrument.idInstrument = datos.instrument.idInstrument;
      }
    );

    this.symphonyService.getSymphonies().subscribe(
      datos => {
        console.log(datos);
        this.symphonies = datos
      }
    );

    this.instrumentService.getInstruments().subscribe(
      datos => {
        console.log(datos);
        this.instruments = datos
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
      this.symphonyInstrument.status = 0;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputTrack(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.symphonyInstrument.track = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputPosition(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.symphonyInstrument.position = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  // nullInputInstrument(elementId: string, chbox: string) {
  //   if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
  //     (<HTMLInputElement>document.getElementById(elementId)).value = "";
  //     this.symphonyInstrument.idInstrument = null;
  //     (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
  //   } else {
  //     (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
  //   }
  // }
  // nullInputSymphony(elementId: string, chbox: string) {
  //   if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
  //     (<HTMLInputElement>document.getElementById(elementId)).value = "";
  //     this.symphonyInstrument.idSymphony = null;
  //     (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
  //   } else {
  //     (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
  //   }
  // }

  changeSymphonyInstrument() {
    this.symphonyInsService.changeSymphonyInstrument(this.symphonyInstrument).subscribe(
      (datos) => {
        console.log(datos)
        this.evidencia = datos
      }
    );
    this.symphonyInstrument = new SymphonyInstrumentUpdate();
    //this.router.navigate(['ListCustomer']);
    return this.router.navigate(['sidenavbar/symphony-instrument']).then(()=>
    {
      console.log(this.router.url);
      window.location.reload();
    })
  }

}
