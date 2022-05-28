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

import { Unlockable } from 'src/app/models/unlockable';
import { UnlockableService } from 'src/app/service/unlockable.service';

import { UnlockableCardComponent } from './unlockable-card.component';

class UnlockableTestingService {
  getUnlockableById(id: number): Observable<any> {
    return of({
      idUnlockable: 1,
      name: "Unlockable",
      description: "Unlockable",
      rareness: "Unlockable",
      unlockerType: "Unlockable",
      unlockerValue: 1,
      coinsCost: 1,
      icon: "Unlockable",
      status: 1,
    })
  }
}

describe('UnlockableCardComponent', () => {
  let fixture: ComponentFixture<UnlockableCardComponent>;
  let component: UnlockableCardComponent;

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
        UnlockableCardComponent,
        SidenavbarComponent,
        TableComponent,],
      providers: [TranslateService,
        {
          provide: UnlockableService,
          useClass: UnlockableTestingService
        }]
    }).compileComponents();
    fixture = TestBed.createComponent(UnlockableCardComponent)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Buscar Unlockable', () => {
    component.id = 1;
    component.searchUnlockableById();
    expect(component.unlockable).toEqual({
      idUnlockable: 1,
      name: "Unlockable",
      description: "Unlockable",
      rareness: "Unlockable",
      unlockerType: "Unlockable",
      unlockerValue: 1,
      coinsCost: 1,
      icon: "Unlockable",
      status: 1,
    });
  });
});
