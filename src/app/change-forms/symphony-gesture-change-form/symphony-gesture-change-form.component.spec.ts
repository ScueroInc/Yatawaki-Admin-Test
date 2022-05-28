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

import { SymphonyGesture } from 'src/app/models/symphony-gesture';
import { SymphonyGestureComponent } from 'src/app/pages/symphony-gesture/symphony-gesture.component';
import { SymphonyGestureService } from 'src/app/service/symphony-gesture.service';

import { SymphonyGestureChangeFormComponent } from './symphony-gesture-change-form.component';

class ConcertTestingService {

  getSymphonGestureyById(id: number): Observable<any> {
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
    })
  }
  changeSymphonyGesture(symphonyGesture: Object): Observable<Object> {
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
      beginningTime: 2,
      endingTime: 3,
      status: 1
    })
  }
}

describe('SymphonyGestureChangeFormComponent', () => {
  let fixture: ComponentFixture<SymphonyGestureChangeFormComponent>;
  let component: SymphonyGestureChangeFormComponent;
  let service: SymphonyGestureService

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
        SymphonyGestureChangeFormComponent,
        SymphonyGestureComponent,
        SidenavbarComponent,
        TableComponent,],
      providers: [TranslateService,
        {
          provide: SymphonyGestureService,
          useClass: ConcertTestingService
        }]
    }).compileComponents();
    fixture = TestBed.createComponent(SymphonyGestureChangeFormComponent)
    component = fixture.componentInstance;
    service = TestBed.get(SymphonyGestureService);
    fixture.detectChanges();
  });

  it('Actualizar Concert', () => {
    const data: SymphonyGesture = {
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
    }
    component.id = 1
    spyOn(service, 'getSymphonGestureyById').withArgs(component.id).and.returnValue(of(data));
    component.symphonyGesture.beginningTime = 2;
    component.symphonyGesture.endingTime = 3;
    component.changeSymphonyGesture();
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
      beginningTime: 2,
      endingTime: 3,
      status: 1
    });
  });
});