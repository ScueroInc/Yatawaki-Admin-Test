import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SymphonyGesture } from 'src/app/models/symphony-gesture';
import { SymphonyGestureUpdate } from 'src/app/models/update/SymphonyGestureUpdate';
import { SymphonyService } from 'src/app/service/symphony.service';
import { GestureService } from 'src/app/service/gesture.service';
import { SymphonyGestureService } from 'src/app/service/symphony-gesture.service';
import { UnlockableService } from 'src/app/service/unlockable.service';

@Component({
  selector: 'app-symphony-gesture-card',
  templateUrl: './symphony-gesture-card.component.html',
  styleUrls: ['./symphony-gesture-card.component.css']
})
export class SymphonyGestureCardComponent implements OnInit {

  symphonyGesture: SymphonyGestureUpdate = new SymphonyGestureUpdate();
  symphonyGestures: SymphonyGesture[] = [];
  symphonies: any[] = [];
  gestures: any[] = [];
  statuses: any[] = [];

  id: number = 0;

  show:boolean = false;
  showUpdate:boolean = false;
  showChange:boolean = false;

  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  constructor(private router: Router, private symphonyGesService: SymphonyGestureService, private unlockableService: UnlockableService, private symphonyService: SymphonyService, private gestureService: GestureService) { }

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

    this.gestureService.getGestures().subscribe(
      data => {
        console.log(data);
        this.gestures = data
      }
    );
  }

  nullInputStatus(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.symphonyGesture.status = 0;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputBeginningTime(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.symphonyGesture.beginningTime = 0;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputEndingTime(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.symphonyGesture.endingTime = 0;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  searchSymphonyGestureById() {
    this.symphonyGesService.getSymphonGestureyById(this.id).subscribe((symphonyGesture) => {
      console.log(symphonyGesture);
      this.symphonyGesture = symphonyGesture;
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

  loadDataSymphonyGesture() {
    this.router.navigate(['symphonyGesture']);
  }

  changeSymphonyGesture() {
    this.symphonyGesService.changeSymphonyGesture(this.symphonyGesture).subscribe(
      (datos) => console.log(datos)
    );
    this.symphonyGesture = new SymphonyGestureUpdate();
    //this.router.navigate(['ListCustomer']);
  }

  deleteSymphony(symphonyGest: SymphonyGestureUpdate) {
    this.symphonyGesService.deleteSymphonyGesture(symphonyGest.idSymphonyGesture).subscribe((data) => {
      this.loadDataSymphonyGesture();
    });
  }



}
