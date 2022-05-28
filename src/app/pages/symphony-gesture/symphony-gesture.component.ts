import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SymphonyGesture } from 'src/app/models/symphony-gesture';
import { SymphonyGestureService } from 'src/app/service/symphony-gesture.service';

@Component({
  selector: 'app-symphony-gesture',
  templateUrl: './symphony-gesture.component.html',
  styleUrls: ['./symphony-gesture.component.css']
})
export class SymphonyGestureComponent implements OnInit {

  symphonyGestures = new Array<any>();

  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  constructor(private router: Router, private symphonyGestService: SymphonyGestureService) { }

  ngOnInit(): void {
    this.symphonyGestService.getSymphoniesGesture().subscribe((symphoniesGes) => (this.symphonyGestures = symphoniesGes))
  }

  loadDataSymphonies() {
    this.symphonyGestService
      .getSymphoniesGesture()
      .subscribe((symphoniesGes) => (this.symphonyGestures = symphoniesGes));
  }

  deleteSymphony(symphonyGest: SymphonyGesture) {
    this.symphonyGestService.deleteSymphonyGesture(symphonyGest.idSymphonyGesture).subscribe((data) => {
      this.loadDataSymphonies();
    });
  }

  changeSymphony(symphonyGest: SymphonyGesture) {
    this.router.navigate(['sidenavbar/symphony-gesture-change-form', symphonyGest.idSymphonyGesture]);
  }
}
