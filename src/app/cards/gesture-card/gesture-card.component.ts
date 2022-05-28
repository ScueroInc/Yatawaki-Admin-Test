import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gesture } from 'src/app/models/gesture';
import { GestureService } from 'src/app/service/gesture.service';

@Component({
  selector: 'app-gesture-card',
  templateUrl: './gesture-card.component.html',
  styleUrls: ['./gesture-card.component.css']
})
export class GestureCardComponent implements OnInit {

  gesture: Gesture = new Gesture();
  gestures: Gesture[] = [];
  statuses: any[] = [];

  id: number = 0;

  show:boolean = false;
  showUpdate:boolean = false;
  showChange:boolean = false;

  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  constructor(private gestureService: GestureService, private router: Router) { }

  ngOnInit(): void {
    this.gestureService.getGestureStatus().subscribe(
      datos => {
        console.log(datos)
        this.statuses = datos;
      }
    );
  }

  nullInputName(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.gesture.name = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputDescription(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.gesture.description = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputStatus(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.gesture.status = 0;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  searchGestureById() {
    this.gestureService.getGestureById(this.id).subscribe((gesture) => {
      console.log(gesture);
      this.gesture = gesture;
    });
    this.show = true;
    this.showChange = false;
  }


  showChangeForm(){
    this.showChange = true;
    this.show = false;
  }

  loadDataGestures() {
    this.router.navigate(['gesture']);
  }


  changeGesture(){
    this.gestureService.changeGesture(this.gesture).subscribe(
      datos => {
        console.log(datos);
      }
    );
    this.gesture = new Gesture();
  }

  deleteGesture(gesture: Gesture) {
    this.gestureService.deleteGesture(gesture.idGesture).subscribe((data) => {
      this.loadDataGestures();
    });
  }

}
