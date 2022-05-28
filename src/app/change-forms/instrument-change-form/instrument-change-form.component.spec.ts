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

import { Instrument } from 'src/app/models/instrument';
import { InstrumentService } from 'src/app/service/instrument.service';
import { InstrumentComponent } from 'src/app/pages/instrument/instrument.component';

import { InstrumentChangeFormComponent } from './instrument-change-form.component';

class InstrumentTestingService {

  getInstrumentById(id: number): Observable<any> {
    return of({
      idInstrument: 1,
      name: "Instrument",
      longDescription: "Instrument",
      shortDescription: "Instrument",
      type: "Instrument",
      status: 1,
      icon: "Instrument"
    })
  }

  changeInstrument(instrument: Object): Observable<Object> {
    return of(instrument)
  }

  getInstrumentStatus(): Observable<any> {
    return of([{ description: "Activado", value: 1 }, { description: "Eliminado", value: 0 }]);
  }
}

describe('InstrumentChangeFormComponent', () => {
  let fixture: ComponentFixture<InstrumentChangeFormComponent>;
  let component: InstrumentChangeFormComponent;
  let service: InstrumentService

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
        InstrumentChangeFormComponent,
        InstrumentComponent,
        SidenavbarComponent,
        TableComponent,],
      providers: [TranslateService,
        {
          provide: InstrumentService,
          useClass: InstrumentTestingService
        }]
    }).compileComponents();
    fixture = TestBed.createComponent(InstrumentChangeFormComponent)
    component = fixture.componentInstance;
    service = TestBed.get(InstrumentService);
    fixture.detectChanges();
  });

  it('Actualizar Instrument', () => {
    const data: Instrument = {
      idInstrument: 1,
      name: "Instrument",
      longDescription: "Instrument",
      shortDescription: "Instrument",
      type: "Instrument",
      status: 1,
      icon: "Instrument"
    }
    component.id = 1
    spyOn(service, 'getInstrumentById').withArgs(component.id).and.returnValue(of(data));
    component.instrument.name = "Instrument 2";
    component.changeInstrument();
    expect(component.evidencia).toEqual({
      idInstrument: 1,
      name: "Instrument 2",
      longDescription: "Instrument",
      shortDescription: "Instrument",
      type: "Instrument",
      status: 1,
      icon: "Instrument"
    });
  });
});
