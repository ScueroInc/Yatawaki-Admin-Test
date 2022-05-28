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

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
import { UserComponent } from 'src/app/pages/user/user.component';

import { UserChangeFormComponent } from './user-change-form.component';

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
      nickname: "User",
      password: "User",
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
  changeUser(concert: Object): Observable<Object> {
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

describe('UserChangeFormComponent', () => {
  let fixture: ComponentFixture<UserChangeFormComponent>;
  let component: UserChangeFormComponent;
  let service: UserService

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
        UserChangeFormComponent,
        UserComponent,
        SidenavbarComponent,
        TableComponent,],
      providers: [TranslateService,
        {
          provide: UserService,
          useClass: UserTestingService
        }]
    }).compileComponents();
    fixture = TestBed.createComponent(UserChangeFormComponent)
    component = fixture.componentInstance;
    service = TestBed.get(UserService);
    fixture.detectChanges();
  });

  it('Actualizar User', () => {
    const data: User = {
      idUser: 1,
      userStatistics: {
        idUserStatistics: 1,
        triviasPlayed: 1,
        triviasWon: 1,
        concertsOrchestrated: 1,
        orchestrationAccuracy: 1,
        status: 1,
      },
      nickname: "User",
      password: "User",
      firstname: "User",
      lastname: "User",
      mail: "User",
      birthDate: new Date('2023-10-06 02:20:00'),
      coinsOwned: 1,
      status: 1,
      role: "User",
      showTutorials: true
    }
    component.id = 1
    spyOn(service, 'getUserById').withArgs(component.id).and.returnValue(of(data));
    component.user.nickname = "User 1";
    component.user.password = "User 1";
    component.changeUser();
    expect(component.evidencia).toEqual({
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
