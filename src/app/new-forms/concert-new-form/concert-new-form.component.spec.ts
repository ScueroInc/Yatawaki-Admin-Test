import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidenavbarComponent } from 'src/app/sidenavbar/sidenavbar.component';
import { TableComponent } from 'src/app/table/table.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TranslateModule, TranslateLoader, TranslateService, TranslateFakeLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { Concert } from 'src/app/models/concert';
import { ConcertCreate } from 'src/app/models/create/ConcertCreate';
import { ConcertService } from 'src/app/service/concert.service';

import { ConcertNewFormComponent } from './concert-new-form.component';

class ConcertTestingService {
  createConcert(concert: Object): Observable<Object> {
    return of({
      idConcert: 1,
      symphony: {
        idUnlockable: 1,
        name: "Symphony",
        description: "Symphony",
        rareness: "Oro",
        unlockerType: "Symphony",
        unlockerValue: 100,
        coinsCost: 200,
        icon: "Symphony",
        status: 1,
        composer: {
          idComposer: 1,
          name: "Composer",
          birthDate: new Date('2023-10-06 02:20:00'),
          deathDate: new Date('2023-10-06 02:20:00'),
          status: 1
        },
        year: 1970,
        duration: 20,
        type: "Symphony",
        previewTrack: "Symphony",
        initialBpm: 200,
      },
      playedDate: new Date('2023-10-06 02:20:00'),
      status: 1,
      user: {
        idUser: 1,
        userStatistics: {
          idUserStatistics: 1,
          triviasPlayed: 2,
          triviasWon: 2,
          concertsOrchestrated: 2,
          orchestrationAccuracy: 2,
          status: 1,
        },
        nickname: "User",
        password: "User",
        firstname: "User",
        lastname: "User",
        mail: "User",
        birthDate: new Date('2023-10-06 02:20:00'),
        coinsOwned: 100,
        status: 1,
        role: "User",
        showTutorials: true
      },
      points: 10,
      accuracyRate: 1,
      gesturesCompleted: 1,
    });
  }
}

describe('ConcertNewFormComponent', () => {
  let fixture: ComponentFixture<ConcertNewFormComponent>;
  let component: ConcertNewFormComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatTableModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatExpansionModule,
        MatChipsModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        RouterTestingModule,
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        }),
        ConfirmationPopoverModule.forRoot({
          confirmButtonType: 'danger'
        })
      ],
      declarations: [
        ConcertNewFormComponent,
        SidenavbarComponent,
        TableComponent,],
      providers: [TranslateService,
        {
          provide: ConcertService,
          useClass: ConcertTestingService
        }]
    }).compileComponents();
    fixture = TestBed.createComponent(ConcertNewFormComponent)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Registrar Avatar', () => {
    const newAvatar: ConcertCreate = {
      idSymphony: 1,
      idUser: 1
    }
    component.concert = newAvatar;
    component.insertConcert();
    expect(component.evidencia).toEqual({
      idConcert: 1,
      symphony: {
        idUnlockable: 1,
        name: "Symphony",
        description: "Symphony",
        rareness: "Oro",
        unlockerType: "Symphony",
        unlockerValue: 100,
        coinsCost: 200,
        icon: "Symphony",
        status: 1,
        composer: {
          idComposer: 1,
          name: "Composer",
          birthDate: new Date('2023-10-06 02:20:00'),
          deathDate: new Date('2023-10-06 02:20:00'),
          status: 1
        },
        year: 1970,
        duration: 20,
        type: "Symphony",
        previewTrack: "Symphony",
        initialBpm: 200,
      },
      playedDate: new Date('2023-10-06 02:20:00'),
      status: 1,
      user: {
        idUser: 1,
        userStatistics: {
          idUserStatistics: 1,
          triviasPlayed: 2,
          triviasWon: 2,
          concertsOrchestrated: 2,
          orchestrationAccuracy: 2,
          status: 1,
        },
        nickname: "User",
        password: "User",
        firstname: "User",
        lastname: "User",
        mail: "User",
        birthDate: new Date('2023-10-06 02:20:00'),
        coinsOwned: 100,
        status: 1,
        role: "User",
        showTutorials: true
      },
      points: 10,
      accuracyRate: 1,
      gesturesCompleted: 1,
    });
  });
});