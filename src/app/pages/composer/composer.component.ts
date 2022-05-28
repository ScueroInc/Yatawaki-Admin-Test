import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Composer } from 'src/app/models/composer';
import { ComposerService } from '../../service/composer.service'


@Component({
  selector: 'app-composer',
  templateUrl: './composer.component.html',
  styleUrls: ['./composer.component.css']
})
export class ComposerComponent implements OnInit {

  composers = new Array<any>();

  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  constructor(private router: Router, private composerService: ComposerService) { }

  ngOnInit(): void {
    this.composerService.getComposers().subscribe(response => {
      console.log(response)
      this.composers = response;
    });
  }

  loadDataComposerss() {
    this.composerService
      .getComposers()
      .subscribe((composers) => (this.composers = composers));
  }

  deleteComposer(composers: Composer) {
    this.composerService.deleteComposer(composers.idComposer).subscribe((data) => {
      this.loadDataComposerss();
    });
  }

  changeComposer(composers: Composer) {
    this.router.navigate(['sidenavbar/composer-change-form', composers.idComposer]);
  }

}
