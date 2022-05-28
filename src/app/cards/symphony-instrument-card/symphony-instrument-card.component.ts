import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SymphonyInstrument } from 'src/app/models/symphony-instrument';
import { SymphonyInstrumentUpdate } from 'src/app/models/update/SymphonyInstrumentUpdate'; 
import { SymphonyService } from 'src/app/service/symphony.service';
import { InstrumentService } from 'src/app/service/instrument.service'; 
import { SymphonyInstrumentService } from 'src/app/service/symphony-instrument.service'; 
import { UnlockableService } from 'src/app/service/unlockable.service';

@Component({
  selector: 'app-symphony-instrument-card',
  templateUrl: './symphony-instrument-card.component.html',
  styleUrls: ['./symphony-instrument-card.component.css']
})
export class SymphonyInstrumentCardComponent implements OnInit {

  symphonyInstrument: SymphonyInstrumentUpdate = new SymphonyInstrumentUpdate();
  symphonyInstruments: SymphonyInstrument[] = [];
  symphonies: any[] = [];
  instruments: any[] = [];
  statuses: any[] = [];

  id: number = 0;

  show:boolean = false;
  showUpdate:boolean = false;
  showChange:boolean = false;

  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;
  constructor(private router: Router, private symphonyInsService: SymphonyInstrumentService, private unlockableService: UnlockableService, private symphonyService: SymphonyService, private intrumentService: InstrumentService) { }

  ngOnInit(): void {

    this.unlockableService.getUnlockableStatus().subscribe(
      datos => {
        console.log(datos)
        this.statuses = datos;
      }
    );

    this.symphonyService.getSymphonies().subscribe(
      data => {
        console.log(data);
        this.symphonies = data
      }
    );

    this.intrumentService.getInstruments().subscribe(
      data => {
        console.log(data);
        this.instruments = data
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

  loadDataSymphonyInstrument() {
    this.router.navigate(['symphonyInstrument']);
  }

  searchSymphonyInstrumentById() {
    this.symphonyInsService.getSymphonInstrumentyById(this.id).subscribe((symphonyInstrument) => {
      console.log(symphonyInstrument);
      this.symphonyInstrument = symphonyInstrument;
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

  changeSymphonyInstrument() {
    this.symphonyInsService.changeSymphonyInstrument(this.symphonyInstrument).subscribe(
      (datos) => console.log(datos)
    );
    this.symphonyInstrument = new SymphonyInstrumentUpdate();
    //this.router.navigate(['ListCustomer']);
  }

  deleteSymphony(symphonyIns: SymphonyInstrumentUpdate) {
    this.symphonyInsService.deleteSymphonyInstrument(symphonyIns.idSymphonyInstrument).subscribe((data) => {
      this.loadDataSymphonyInstrument();
    });
  }

}
