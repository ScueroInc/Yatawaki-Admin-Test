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

import { UserRankUpdate } from 'src/app/models/update/UserRankUpdate';
import { UserRankService } from 'src/app/service/user-rank.service';

import { UserRankCardComponent } from './user-rank-card.component';

class UserRankTestingService {
  getUserRankById(id: number): Observable<any> {
    return of({
      idUserRank: 1,
      idUser: 1,
      idRank: 1,
      startDate: new Date('2023-10-06 02:20:00'),
      endDate: new Date('2023-10-06 02:20:00'),
      currentExperience: 1,
      status: 1,
    })
  }
  getUserRankStatus(): Observable<any> {
    return of([{ description: "Activado", value: 1 }, { description: "Eliminado", value: 0 }]);
  }
}

describe('UserRankCardComponent', () => {
  let fixture: ComponentFixture<UserRankCardComponent>;
  let component: UserRankCardComponent;

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
        UserRankCardComponent,
        SidenavbarComponent,
        TableComponent,],
      providers: [TranslateService,
        {
          provide: UserRankService,
          useClass: UserRankTestingService
        }]
    }).compileComponents();
    fixture = TestBed.createComponent(UserRankCardComponent)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Buscar UserRank', () => {
    component.id = 1;
    component.searchUserRankById();
    expect(component.userRank).toEqual({
      idUserRank: 1,
      idUser: 1,
      idRank: 1,
      startDate: new Date('2023-10-06 02:20:00'),
      endDate: new Date('2023-10-06 02:20:00'),
      currentExperience: 1,
      status: 1,
    });
  });
});
