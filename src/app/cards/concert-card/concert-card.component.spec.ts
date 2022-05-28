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

import { ConcertService } from 'src/app/service/concert.service';

import { ConcertCardComponent } from './concert-card.component';

class ConcertTestingService {
  getConcertById(id: number): Observable<any> {
    return of({
      idConcert: 1,
      idSymphony: 1,
      playedDate: new Date('2023-10-06 02:20:00'),
      status: 1,
      idUser: 1,
      points: 1,
      accuracyRate: 1,
      gesturesCompleted: 1,
    })
  }
  
  getConcertStatus(): Observable<any>{
    return of([{description: "Activado", value: 1},{description: "Eliminado",value: 0}]);
  }
}

describe('ConcertCardComponent', () => {
  let fixture: ComponentFixture<ConcertCardComponent>;
  let component: ConcertCardComponent;

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
        ConcertCardComponent,
        SidenavbarComponent,
        TableComponent,],
      providers: [TranslateService,
        {
          provide: ConcertService,
          useClass: ConcertTestingService
        }]
    }).compileComponents();
    fixture = TestBed.createComponent(ConcertCardComponent)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Buscar Concert', () => {
    component.id = 1;
    component.searchConcertById();
    expect(component.concert).toEqual({
      idConcert: 1,
      idSymphony: 1,
      playedDate: new Date('2023-10-06 02:20:00'),
      status: 1,
      idUser: 1,
      points: 1,
      accuracyRate: 1,
      gesturesCompleted: 1,
    });
  });
});

