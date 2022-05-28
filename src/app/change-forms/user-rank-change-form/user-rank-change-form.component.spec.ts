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
import { of } from 'rxjs';
import { Observable } from 'rxjs';

import { UserRank } from 'src/app/models/user-rank';
import { UserRankService } from 'src/app/service/user-rank.service';
import { UserRankComponent } from 'src/app/pages/user-rank/user-rank.component';

import { UserRankChangeFormComponent } from './user-rank-change-form.component';

class UserRankTestingService {

  getUserRankById(id: number): Observable<any> {
    return of({
      idUserRank: 1,
      user: {
        idUser: 1,
        userStatistics: {
          idUserStatistics: 1,
          triviasPlayed: 1,
          triviasWon: 1,
          concertsOrchestrated: 1,
          orchestrationAccuracy: 1,
          status: 1,
        },
        nickname: "User 1",
        password: "User 1",
        firstname: "User 1",
        lastname: "User 1",
        mail: "User 1",
        birthDate: new Date('2023-10-06 02:20:00'),
        coinsOwned: 1,
        status: 1,
        role: "Admin",
        showTutorials: true
      },
      rank: {
        idRank: 1,
        name: "Rank",
        level: 1,
        maxExperience: 1,
        status: 1,
      },
      startDate: new Date('2023-10-06 02:20:00'),
      endDate: new Date('2023-10-06 02:20:00'),
      currentExperience: 1,
      status: 1,
    })
  }
  changeUserRank(concert: Object): Observable<Object> {
    return of({
      idUserRank: 1,
      user: {
        idUser: 1,
        userStatistics: {
          idUserStatistics: 1,
          triviasPlayed: 1,
          triviasWon: 1,
          concertsOrchestrated: 1,
          orchestrationAccuracy: 1,
          status: 1,
        },
        nickname: "User 1",
        password: "User 1",
        firstname: "User 1",
        lastname: "User 1",
        mail: "User 1",
        birthDate: new Date('2023-10-06 02:20:00'),
        coinsOwned: 1,
        status: 1,
        role: "Admin",
        showTutorials: true
      },
      rank: {
        idRank: 1,
        name: "Rank",
        level: 1,
        maxExperience: 1,
        status: 1,
      },
      startDate: new Date('2023-10-06 02:20:00'),
      endDate: new Date('2023-10-06 02:20:00'),
      currentExperience: 2,
      status: 0,
    })
  }

  getUserRankStatus(): Observable<any> {
    return of([{ description: "Activado", value: 1 }, { description: "Eliminado", value: 0 }]);
  }
}

describe('UserRankChangeFormComponent', () => {
  let fixture: ComponentFixture<UserRankChangeFormComponent>;
  let component: UserRankChangeFormComponent;
  let service: UserRankService

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
        UserRankChangeFormComponent,
        UserRankComponent,
        SidenavbarComponent,
        TableComponent,],
      providers: [TranslateService,
        {
          provide: UserRankService,
          useClass: UserRankTestingService
        }]
    }).compileComponents();
    fixture = TestBed.createComponent(UserRankChangeFormComponent)
    component = fixture.componentInstance;
    service = TestBed.get(UserRankService);
    fixture.detectChanges();
  });

  it('Actualizar UserRank', () => {
    const data: UserRank = {
      idUserRank: 1,
      user: {
        idUser: 1,
        userStatistics: {
          idUserStatistics: 1,
          triviasPlayed: 1,
          triviasWon: 1,
          concertsOrchestrated: 1,
          orchestrationAccuracy: 1,
          status: 1,
        },
        nickname: "User 1",
        password: "User 1",
        firstname: "User 1",
        lastname: "User 1",
        mail: "User 1",
        birthDate: new Date('2023-10-06 02:20:00'),
        coinsOwned: 1,
        status: 1,
        role: "Admin",
        showTutorials: true
      },
      rank: {
        idRank: 1,
        name: "Rank",
        level: 1,
        maxExperience: 1,
        status: 1,
      },
      startDate: new Date('2023-10-06 02:20:00'),
      endDate: new Date('2023-10-06 02:20:00'),
      currentExperience: 1,
      status: 1,
    }
    component.id = 1
    spyOn(service, 'getUserRankById').withArgs(component.id).and.returnValue(of(data));
    component.userRank.currentExperience = 2;
    component.userRank.status = 0;
    component.changeUserRank();
    expect(component.evidencia).toEqual({
      idUserRank: 1,
      user: {
        idUser: 1,
        userStatistics: {
          idUserStatistics: 1,
          triviasPlayed: 1,
          triviasWon: 1,
          concertsOrchestrated: 1,
          orchestrationAccuracy: 1,
          status: 1,
        },
        nickname: "User 1",
        password: "User 1",
        firstname: "User 1",
        lastname: "User 1",
        mail: "User 1",
        birthDate: new Date('2023-10-06 02:20:00'),
        coinsOwned: 1,
        status: 1,
        role: "Admin",
        showTutorials: true
      },
      rank: {
        idRank: 1,
        name: "Rank",
        level: 1,
        maxExperience: 1,
        status: 1,
      },
      startDate: new Date('2023-10-06 02:20:00'),
      endDate: new Date('2023-10-06 02:20:00'),
      currentExperience: 2,
      status: 0,
    });
  });
});
