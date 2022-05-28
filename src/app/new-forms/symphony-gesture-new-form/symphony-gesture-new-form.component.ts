import { Component, OnInit } from '@angular/core';
import { SymphonyGestureCreate } from 'src/app/models/create/SymphonyGestureCreate';
import { SymphonyService } from 'src/app/service/symphony.service';
import { GestureService } from 'src/app/service/gesture.service';
import { SymphonyGestureService } from 'src/app/service/symphony-gesture.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-symphony-gesture-new-form',
  templateUrl: './symphony-gesture-new-form.component.html',
  styleUrls: ['./symphony-gesture-new-form.component.css']
})
export class SymphonyGestureNewFormComponent implements OnInit {

  symphonyGesture: SymphonyGestureCreate = new SymphonyGestureCreate();
  symphonies: any[] = [];
  gestures: any[] = []
  evidencia: any

  constructor(private router: Router, private symphonyService: SymphonyService, private gestureService: GestureService, private symphonyGesService: SymphonyGestureService) { }

  ngOnInit(): void {

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

  // nullInputGesture(elementId: string, chbox: string) {
  //   if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
  //     (<HTMLInputElement>document.getElementById(elementId)).value = "";
  //     this.symphonyGesture.idGesture = null;
  //     (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
  //   } else {
  //     (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
  //   }
  // }

  // nullInputSymphony(elementId: string, chbox: string) {
  //   if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
  //     (<HTMLInputElement>document.getElementById(elementId)).value = "";
  //     this.symphonyGesture.idSymphony = null;
  //     (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
  //   } else {
  //     (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
  //   }
  // }

  insertSymphonyGesture() {
    this.symphonyGesService.createSymphonyGesture(this.symphonyGesture).subscribe(
      (datos) => {
        console.log(datos)
        this.evidencia = datos
      }
    );
    this.symphonyGesture = new SymphonyGestureCreate();
    return this.router.navigate(['sidenavbar/symphony-gesture']).then(()=>
    {
      console.log(this.router.url);
      window.location.reload();
    })
  }

}
