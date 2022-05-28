import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gesture } from 'src/app/models/gesture';
import { GestureService } from 'src/app/service/gesture.service';

@Component({
  selector: 'app-gesture',
  templateUrl: './gesture.component.html',
  styleUrls: ['./gesture.component.css']
})
export class GestureComponent implements OnInit {

  gestures = new Array<any>();

  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  constructor(private router: Router, private gestureService: GestureService) { }

  ngOnInit(): void {
    this.gestureService.getGestures().subscribe(response => {
      console.log(response)
      this.gestures = response;
    });
  }

  loadDataGestures() {
    this.gestureService
      .getGestures()
      .subscribe((gestures) => (this.gestures = gestures));
  }

  deleteGesture(gesture: Gesture) {
    this.gestureService.deleteGesture(gesture.idGesture).subscribe((data) => {
      this.loadDataGestures();
    });
  }

  changeGesture(gesture: Gesture) {
    this.router.navigate(['sidenavbar/gesture-change-form', gesture.idGesture]);
  }

}
