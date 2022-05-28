import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { TokenStorageService } from '../service/token-storage.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {

  showFiller = false;
  langs: string[] = [];
  lang2: any;

  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;

  constructor(private storageService: TokenStorageService, private router: Router, private translate: TranslateService) { 
    translate.setDefaultLang('English');
    translate.use('English');
    translate.addLangs(['English','Español'])
    this.langs = translate.getLangs();
  }

  ngOnInit(): void {
    this.lang2 = localStorage.getItem('lang') || 'English';
  }

  logout(){
    this.storageService.clear();
    this.router.navigate(['sidenavbar']).then(()=>
    {
      console.log(this.router.url);
      window.location.reload();
    });
  }

  changeLang(lang:string){
    this.translate.use(lang)
    console.log(lang)
  }
}
