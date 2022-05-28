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

import { SymphonyInstrument } from 'src/app/models/symphony-instrument';
import { SymphonyInstrumentService } from 'src/app/service/symphony-instrument.service';
import { SymphonyInstrumentComponent } from 'src/app/pages/symphony-instrument/symphony-instrument.component';

import { SymphonyInstrumentChangeFormComponent } from './symphony-instrument-change-form.component';

class SymphonyInstrumentTestingService {

  getSymphonInstrumentyById(id: number): Observable<any> {
    return of({
      idSymphonyInstrument: 1,
      symphony: {
        idUnlockable: 1,
        name: "Symphony",
        description: "Symphony",
        rareness: "Oro",
        unlockerType: "Symphony",
        unlockerValue: 1,
        coinsCost: 1,
        icon: "Symphony",
        status: 1,
        composer: {
          idComposer: 1,
          name: "Composer",
          birthDate: new Date('2023-10-06 02:20:00'),
          deathDate: new Date('2023-10-06 02:20:00'),
          status: 1
        },
        year: 1,
        duration: 1,
        type: "Symphony",
        previewTrack: "Symphony",
        initialBpm: 1,
      },
      instrument: {
        idInstrument: 1,
        name: "Instrument",
        longDescription: "Instrument",
        shortDescription: "Instrument",
        type: "Instrument",
        status: 1,
        icon: "Instrument",
      },
      track: "Symphony Gesture",
      position: "Symphony Gesture",
      status: 1,
    })
  }
  changeSymphonyInstrument(symphonyInstrument: Object): Observable<Object> {
    return of({
      idSymphonyInstrument: 1,
      symphony: {
        idUnlockable: 1,
        name: "Symphony",
        description: "Symphony",
        rareness: "Oro",
        unlockerType: "Symphony",
        unlockerValue: 1,
        coinsCost: 1,
        icon: "Symphony",
        status: 1,
        composer: {
          idComposer: 1,
          name: "Composer",
          birthDate: new Date('2023-10-06 02:20:00'),
          deathDate: new Date('2023-10-06 02:20:00'),
          status: 1
        },
        year: 1,
        duration: 1,
        type: "Symphony",
        previewTrack: "Symphony",
        initialBpm: 1,
      },
      instrument: {
        idInstrument: 1,
        name: "Instrument",
        longDescription: "Instrument",
        shortDescription: "Instrument",
        type: "Instrument",
        status: 1,
        icon: "Instrument",
      },
      track: "Symphony Gesture 1",
      position: "Symphony Gesture",
      status: 1,
    })
  }
}

describe('SympphonyGestureChangeFormComponent', () => {
  let fixture: ComponentFixture<SymphonyInstrumentChangeFormComponent>;
  let component: SymphonyInstrumentChangeFormComponent;
  let service: SymphonyInstrumentService

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
        SymphonyInstrumentChangeFormComponent,
        SymphonyInstrumentComponent,
        SidenavbarComponent,
        TableComponent,],
      providers: [TranslateService,
        {
          provide: SymphonyInstrumentService,
          useClass: SymphonyInstrumentTestingService
        }]
    }).compileComponents();
    fixture = TestBed.createComponent(SymphonyInstrumentChangeFormComponent)
    component = fixture.componentInstance;
    service = TestBed.get(SymphonyInstrumentService);
    fixture.detectChanges();
  });

  it('Actualizar Instrumento de Sinfonia', () => {
    const data: SymphonyInstrument = {
      idSymphonyInstrument: 1,
      symphony: {
        idUnlockable: 1,
        name: "Symphony",
        description: "Symphony",
        rareness: "Oro",
        unlockerType: "Symphony",
        unlockerValue: 1,
        coinsCost: 1,
        icon: "Symphony",
        status: 1,
        composer: {
          idComposer: 1,
          name: "Composer",
          birthDate: new Date('2023-10-06 02:20:00'),
          deathDate: new Date('2023-10-06 02:20:00'),
          status: 1
        },
        year: 1,
        duration: 1,
        type: "Symphony",
        previewTrack: "Symphony",
        initialBpm: 1,
      },
      instrument: {
        idInstrument: 1,
        name: "Instrument",
        longDescription: "Instrument",
        shortDescription: "Instrument",
        type: "Instrument",
        status: 1,
        icon: "Instrument",
      },
      track: "Symphony Gesture",
      position: "Symphony Gesture",
      status: 1,
    }
    component.id = 1
    spyOn(service, 'getSymphonInstrumentyById').withArgs(component.id).and.returnValue(of(data));
    component.symphonyInstrument.track = "Symphony Gesture 1";
    component.changeSymphonyInstrument();
    expect(component.evidencia).toEqual({
      idSymphonyInstrument: 1,
      symphony: {
        idUnlockable: 1,
        name: "Symphony",
        description: "Symphony",
        rareness: "Oro",
        unlockerType: "Symphony",
        unlockerValue: 1,
        coinsCost: 1,
        icon: "Symphony",
        status: 1,
        composer: {
          idComposer: 1,
          name: "Composer",
          birthDate: new Date('2023-10-06 02:20:00'),
          deathDate: new Date('2023-10-06 02:20:00'),
          status: 1
        },
        year: 1,
        duration: 1,
        type: "Symphony",
        previewTrack: "Symphony",
        initialBpm: 1,
      },
      instrument: {
        idInstrument: 1,
        name: "Instrument",
        longDescription: "Instrument",
        shortDescription: "Instrument",
        type: "Instrument",
        status: 1,
        icon: "Instrument",
      },
      track: "Symphony Gesture 1",
      position: "Symphony Gesture",
      status: 1,
    });
  });
});