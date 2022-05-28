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

import { Rank } from 'src/app/models/ranks';
import { RankService } from 'src/app/service/rank.service';

import { RankNewFormComponent } from './rank-new-form.component';

class RankTestingService {
  createRank(rank: Object): Observable<Object> {
    return of(rank);
  }
  getRankStatus(): Observable<any> {
    return of([{ description: "Activado", value: 1 }, { description: "Eliminado", value: 0 }]);
  }
}

describe('RankNewFormComponent', () => {
  let fixture: ComponentFixture<RankNewFormComponent>;
  let component: RankNewFormComponent;

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
        RankNewFormComponent,
        SidenavbarComponent,
        TableComponent,],
      providers: [TranslateService,
         {provide: RankService,
          useClass: RankTestingService}]
    }).compileComponents();
    fixture = TestBed.createComponent(RankNewFormComponent)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Registrar Rank', () => {
    const newRank: Rank = { 
      idRank: 1,
      name: "Rank",
      level: 1,
      maxExperience: 1,
      status: 1,}
    component.rank = newRank;
    component.insertRank();
    expect(component.evidencia).toEqual({
      idRank: 1,
      name: "Rank",
      level: 1,
      maxExperience: 1,
      status: 1,});
  });
});
