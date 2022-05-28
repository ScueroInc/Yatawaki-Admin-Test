import { Component, OnInit } from '@angular/core';
import { Gesture } from 'src/app/models/gesture';
import { GestureService } from 'src/app/service/gesture.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gesture-new-form',
  templateUrl: './gesture-new-form.component.html',
  styleUrls: ['./gesture-new-form.component.css']
})
export class GestureNewFormComponent implements OnInit {

  gesture: Gesture = new Gesture();
  statuses: any[] = [];
  evidencia: any

  constructor(private router: Router, private gestureService: GestureService) { }

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

  insertGesture() {
    this.gestureService.createGesture(this.gesture).subscribe(
      (datos) => {
        console.log(datos)
        this.evidencia = datos
      }
    );
    this.gesture = new Gesture();
    return this.router.navigate(['sidenavbar/gesture']).then(()=>
    {
      console.log(this.router.url);
      window.location.reload();
    })
  }

}
