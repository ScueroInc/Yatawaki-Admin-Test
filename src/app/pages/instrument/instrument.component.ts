import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Instrument } from 'src/app/models/instrument';
import { InstrumentService } from 'src/app/service/instrument.service';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.css']
})
export class InstrumentComponent implements OnInit {

  instruments = new Array<any>();

  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  constructor(private router: Router, private instrumentService: InstrumentService) { }

  ngOnInit(): void {
    this.instrumentService.getInstruments().subscribe(response => {
      console.log(response)
      this.instruments = response;
    });
  }

  loadDataInstruments() {
    this.instrumentService
      .getInstruments()
      .subscribe((instruments) => (this.instruments = instruments));
  }

  deleteInstrument(instrument: Instrument) {
    this.instrumentService.deleteInstrument(instrument.idInstrument).subscribe((data) => {
      this.loadDataInstruments();
    });
  }

  changeInstrument(instrument: Instrument) {
    this.router.navigate(['sidenavbar/instrument-change-form', instrument.idInstrument]);
  }

}
