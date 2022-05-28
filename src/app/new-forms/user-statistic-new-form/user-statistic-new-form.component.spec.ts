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

import { UserStatistic } from 'src/app/models/user-statistic';
import { UserStatisticService } from 'src/app/service/user-statistic.service';

import { UserStatisticNewFormComponent } from './user-statistic-new-form.component';

class UserStatisticTestingService {
  createUserStatistic(userStatistic: Object): Observable<Object> {
    return of(userStatistic);
  }
  getUserStatisticStatus(): Observable<any>{
    return of([{description: "Activado", value: 1},{description: "Eliminado",value: 0}]);
  }
}

describe('UserStatisticNewFormComponent', () => {
  let fixture: ComponentFixture<UserStatisticNewFormComponent>;
  let component: UserStatisticNewFormComponent;

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
        UserStatisticNewFormComponent,
        SidenavbarComponent,
        TableComponent,],
      providers: [TranslateService,
         {provide: UserStatisticService,
          useClass: UserStatisticTestingService}]
    }).compileComponents();
    fixture = TestBed.createComponent(UserStatisticNewFormComponent)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Registrar User Statistic', () => {
    const newUserStatistic: UserStatistic = { 
      idUserStatistics: 1,
      triviasPlayed: 1,
      triviasWon: 1,
      concertsOrchestrated: 1,
      orchestrationAccuracy: 1,
      status: 1,}
    component.userStatistic = newUserStatistic;
    component.insertUserStatistic();
    expect(component.evidencia).toEqual({
      idUserStatistics: 1,
      triviasPlayed: 1,
      triviasWon: 1,
      concertsOrchestrated: 1,
      orchestrationAccuracy: 1,
      status: 1,});
  });
});