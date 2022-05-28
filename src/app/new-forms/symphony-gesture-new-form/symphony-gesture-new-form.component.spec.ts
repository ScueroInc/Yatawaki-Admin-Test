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

import { SymphonyGestureCreate } from 'src/app/models/create/SymphonyGestureCreate';
import { SymphonyGestureService } from 'src/app/service/symphony-gesture.service';

import { SymphonyGestureNewFormComponent } from './symphony-gesture-new-form.component';

class SymphonyGestureTestingService {
  createSymphonyGesture(symphonyGesture: Object): Observable<Object> {
    return of({
      idSymphonyGesture: 1,
      gesture: {
        idGesture: 1,
        name: "Gesture 1",
        description: "Gesture 1",
        status: 1,
      },
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
        type: "Composer",
        previewTrack: "Composer",
        initialBpm: 1,
      },
      beginningTime: 1,
      endingTime: 2,
      status: 1
    });
  }
}

describe('SymphonyGestureNewFormComponent', () => {
  let fixture: ComponentFixture<SymphonyGestureNewFormComponent>;
  let component: SymphonyGestureNewFormComponent;

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
        SymphonyGestureNewFormComponent,
        SidenavbarComponent,
        TableComponent,],
      providers: [TranslateService,
        {
          provide: SymphonyGestureService,
          useClass: SymphonyGestureTestingService
        }]
    }).compileComponents();
    fixture = TestBed.createComponent(SymphonyGestureNewFormComponent)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Registrar Symphony Gesture', () => {
    const newSymphonyGesture: SymphonyGestureCreate = {
      idGesture: 1,
      idSymphony: 1,
      beginningTime: 1,
      endingTime: 2,
    }
    component.symphonyGesture = newSymphonyGesture;
    component.insertSymphonyGesture();
    expect(component.evidencia).toEqual({
      idSymphonyGesture: 1,
      gesture: {
        idGesture: 1,
        name: "Gesture 1",
        description: "Gesture 1",
        status: 1,
      },
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
        type: "Composer",
        previewTrack: "Composer",
        initialBpm: 1,
      },
      beginningTime: 1,
      endingTime: 2,
      status: 1
    });
  });
});
