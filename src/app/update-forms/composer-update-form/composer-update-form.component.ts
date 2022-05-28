import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Composer } from 'src/app/models/composer';
import { ComposerService } from 'src/app/service/composer.service';
import { UnlockableService } from 'src/app/service/unlockable.service';

@Component({
  selector: 'app-composer-update-form',
  templateUrl: './composer-update-form.component.html',
  styleUrls: ['./composer-update-form.component.css']
})
export class ComposerUpdateFormComponent implements OnInit {

  
  id: number = 0;
  composer: Composer = new Composer();
  statuses: any[] = [];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private composerService: ComposerService, private unlockableService: UnlockableService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.composerService.getComposerById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.composer = datos;
      }
    );
    this.unlockableService.getUnlockableStatus().subscribe(
      datos => {
        console.log(datos)
        this.statuses = datos;
      }
    );
  }


}
