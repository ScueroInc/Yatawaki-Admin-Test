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

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

import { UserCardComponent } from './user-card.component';

class UserTestingService {
  getUserById(id: number): Observable<any> {
    return of({
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
      firstname: "User",
      lastname: "User",
      mail: "User",
      birthDate: new Date('2023-10-06 02:20:00'),
      coinsOwned: 1,
      status: 1,
      role: "User",
      showTutorials: true
    })
  }
  getUserStatus(): Observable<any> {
    return of([{ description: "Activado", value: 1 }, { description: "Eliminado", value: 0 }]);
  }
  getUserRole(): Observable<any> {
    return of([{ description: "Admin", value: 1 }, { description: "Player", value: 0 }]);
  }
} 

describe('UserCardComponent', () => {
  let fixture: ComponentFixture<UserCardComponent>;
  let component: UserCardComponent;

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
        UserCardComponent,
        SidenavbarComponent,
        TableComponent,],
      providers: [TranslateService,
        {
          provide: UserService,
          useClass: UserTestingService
        }]
    }).compileComponents();
    fixture = TestBed.createComponent(UserCardComponent)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Buscar Gesture', () => {
    component.id = 1;
    component.searchUserById();
    expect(component.user).toEqual({
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
      firstname: "User",
      lastname: "User",
      mail: "User",
      birthDate: new Date('2023-10-06 02:20:00'),
      coinsOwned: 1,
      status: 1,
      role: "User",
      showTutorials: true
    });
  });
});