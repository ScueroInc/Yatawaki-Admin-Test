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

import { UserUnlockable } from 'src/app/models/user-unlockable';
import { UserUnlockableService } from 'src/app/service/user-unlockable.service';
import { UserUnlockableComponent } from 'src/app/pages/user-unlockable/user-unlockable.component';

import { UserUnlockableChangeFormComponent } from './user-unlockable-change-form.component';

class UserUnlockableTestingService {

  getUserUnlockableById(id: number): Observable<any> {
    return of({
      idUserUnlockable: 1,
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
      },
      unlockable: {
        idUnlockable: 1,
        name: "Unlockable",
        description: "Unlockable",
        rareness: "Oro",
        unlockerType: "Unlockable",
        unlockerValue: 1,
        coinsCost: 1,
        icon: "Unlockable",
        status: 1,
      },
      unlockedDate:  new Date('2023-10-06 02:20:00'),
      status: 1,
    })
  }
  changeUserUnlockable(userUnlockable: Object): Observable<Object> {
    return of({
      idUserUnlockable: 1,
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
      },
      unlockable: {
        idUnlockable: 1,
        name: "Unlockable",
        description: "Unlockable",
        rareness: "Oro",
        unlockerType: "Unlockable",
        unlockerValue: 1,
        coinsCost: 1,
        icon: "Unlockable",
        status: 1,
      },
      unlockedDate:  new Date('2023-10-07 02:20:00'),
      status: 0,
    })
  }
}

describe('UserUnlockableChangeFormComponent', () => {
  let fixture: ComponentFixture<UserUnlockableChangeFormComponent>;
  let component: UserUnlockableChangeFormComponent;
  let service: UserUnlockableService

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
        UserUnlockableChangeFormComponent,
        UserUnlockableComponent,
        SidenavbarComponent,
        TableComponent,],
      providers: [TranslateService,
        {
          provide: UserUnlockableService,
          useClass: UserUnlockableTestingService
        }]
    }).compileComponents();
    fixture = TestBed.createComponent(UserUnlockableChangeFormComponent)
    component = fixture.componentInstance;
    service = TestBed.get(UserUnlockableService);
    fixture.detectChanges();
  });

  it('Actualizar Concert', () => {
    const data: UserUnlockable = {
      idUserUnlockable: 1,
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
      },
      unlockable: {
        idUnlockable: 1,
        name: "Unlockable",
        description: "Unlockable",
        rareness: "Oro",
        unlockerType: "Unlockable",
        unlockerValue: 1,
        coinsCost: 1,
        icon: "Unlockable",
        status: 1,
      },
      unlockedDate:  new Date('2023-10-06 02:20:00'),
      status: 1,
    }
    component.id = 1
    spyOn(service, 'getUserUnlockableById').withArgs(component.id).and.returnValue(of(data));
    component.userUnlockable.unlockedDate = new Date('2023-10-07 02:20:00');
    component.userUnlockable.status = 0;
    component.changeUserUnlockable();
    expect(component.evidencia).toEqual({
      idUserUnlockable: 1,
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
      },
      unlockable: {
        idUnlockable: 1,
        name: "Unlockable",
        description: "Unlockable",
        rareness: "Oro",
        unlockerType: "Unlockable",
        unlockerValue: 1,
        coinsCost: 1,
        icon: "Unlockable",
        status: 1,
      },
      unlockedDate: new Date('2023-10-07 02:20:00'),
      status: 0,
    });
  });
});