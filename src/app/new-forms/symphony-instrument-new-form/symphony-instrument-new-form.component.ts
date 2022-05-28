import { Component, OnInit } from '@angular/core';
import { SymphonyInstrumentCreate } from 'src/app/models/create/SymphonyInstrumentCreate';
import { SymphonyService } from 'src/app/service/symphony.service';
import { InstrumentService } from 'src/app/service/instrument.service';
import { SymphonyInstrumentService } from 'src/app/service/symphony-instrument.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-symphony-instrument-new-form',
  templateUrl: './symphony-instrument-new-form.component.html',
  styleUrls: ['./symphony-instrument-new-form.component.css']
})
export class SymphonyInstrumentNewFormComponent implements OnInit {

  symphonyInstrument: SymphonyInstrumentCreate = new SymphonyInstrumentCreate();
  symphonies: any[] = [];
  instruments: any[] = []
  evidencia: any

  constructor(private router: Router, private symphonyService: SymphonyService, private instrumentService: InstrumentService, private symphonyInsService: SymphonyInstrumentService) { }

  ngOnInit(): void {

    this.symphonyService.getSymphonies().subscribe(
      data => {
        console.log(data);
        this.symphonies = data
      }
    );

    this.instrumentService.getInstruments().subscribe(
      data => {
        console.log(data);
        this.instruments = data
      }
    );

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

  insertSymphonyInstrument() {
    console.log(this.symphonyInstrument);
    this.symphonyInsService.createSymphonyInstrument(this.symphonyInstrument).subscribe(
      (datos) => {
        console.log(datos)
        this.evidencia = datos
      }
    );
    this.symphonyInstrument = new SymphonyInstrumentCreate();
    return this.router.navigate(['sidenavbar/symphony-instrument']).then(()=>
    {
      console.log(this.router.url);
      window.location.reload();
    })
  }

}
