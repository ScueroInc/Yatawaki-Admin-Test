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

import { SymphonyCreate } from 'src/app/models/create/SymphonyCreate';
import { SymphonyService } from 'src/app/service/symphony.service';

import { SymphonyNewFormComponent } from './symphony-new-form.component';

class SymphonyTestingService {
  createSymphony(symphony: Object): Observable<Object> {
    return of({
      idUnlockable: 1,
      name: "Symphony",
      description: "Symphony",
      rareness: "Symphony",
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
      initialBpm: 1
    });
  }
}

describe('SymphonyNewFormComponent', () => {
  let fixture: ComponentFixture<SymphonyNewFormComponent>;
  let component: SymphonyNewFormComponent;

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
        SymphonyNewFormComponent,
        SidenavbarComponent,
        TableComponent,],
      providers: [TranslateService,
        {
          provide: SymphonyService,
          useClass: SymphonyTestingService
        }]
    }).compileComponents();
    fixture = TestBed.createComponent(SymphonyNewFormComponent)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Registrar Symphony', () => {
    const newSymphony: SymphonyCreate = {
      idComposer: 1,
      year: 1,
      duration: 1,
      type: "Symphony",
      previewTrack: "Symphony",
      initialBpm: 1,
      name: "Symphony",
      description: "Symphony",
      rareness: "Symphony",
      unlockerType: "Symphony",
      unlockerValue: 1,
      icon: "Symphony",
      coinsCost: 1,
    }
    component.symphony = newSymphony;
    component.insertSymphony();
    expect(component.evidencia).toEqual({
      idUnlockable: 1,
      name: "Symphony",
      description: "Symphony",
      rareness: "Symphony",
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
      initialBpm: 1
    });
  });
});
