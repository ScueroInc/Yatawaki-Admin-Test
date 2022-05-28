import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Instrument } from 'src/app/models/instrument';
import { InstrumentService } from 'src/app/service/instrument.service';

@Component({
  selector: 'app-instrument-change-form',
  templateUrl: './instrument-change-form.component.html',
  styleUrls: ['./instrument-change-form.component.css']
})
export class InstrumentChangeFormComponent implements OnInit {

  id: number = 0;
  instrument: Instrument = new Instrument();
  statuses: any[] = [];
  evidencia: any

  constructor(private router: Router, private route: ActivatedRoute,
    private instrumentService: InstrumentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.instrumentService.getInstrumentById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.instrument = datos;
      }
    );
    this.instrumentService.getInstrumentStatus().subscribe(
      datos => {
        console.log(datos)
        this.statuses = datos;
      }
    );
  }

  nullInputName(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.instrument.name = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputLongDescription(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.instrument.longDescription = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputShortDescription(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.instrument.shortDescription = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  
  nullInputType(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.instrument.type = '';
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputStatus(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.instrument.status = 0;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  
  nullInputIcon(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.instrument.icon = '';
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  changeInstrument() {
    this.instrumentService.changeInstrument(this.instrument).subscribe(
      (datos) => {
        console.log(datos);
        this.evidencia = datos
        //this.router.navigate(['ListCustomer']);
      }
    );
    this.instrument = new Instrument();
    return this.router.navigate(['sidenavbar/instrument']).then(()=>
    {
      console.log(this.router.url);
      window.location.reload();
    })
  }


}
