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

import { Gesture } from 'src/app/models/gesture';
import { GestureService } from 'src/app/service/gesture.service';
import { GestureComponent } from 'src/app/pages/gesture/gesture.component';

import { GestureChangeFormComponent } from './gesture-change-form.component';

class GestureTestingService {

  getGestureById(id: number): Observable<any> {
    return of({
      idGesture: 1,
      name: "Gesture",
      description: "Gesture",
      status: 1,
    })
  }
  changeGesture(gesture: Object): Observable<Object> {
    return of(gesture)
  }

  getGestureStatus(): Observable<any>{
    return of([{description: "Activado", value: 1},{description: "Eliminado", value: 0}]);
  }
}

describe('ComposerChangeFormComponent', () => {
  let fixture: ComponentFixture<GestureChangeFormComponent>;
  let component: GestureChangeFormComponent;
  let service: GestureService

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
        GestureChangeFormComponent,
        GestureComponent,
        SidenavbarComponent,
        TableComponent,],
      providers: [TranslateService,
        {
          provide: GestureService,
          useClass: GestureTestingService
        }]
    }).compileComponents();
    fixture = TestBed.createComponent(GestureChangeFormComponent)
    component = fixture.componentInstance;
    service = TestBed.get(GestureService);
    fixture.detectChanges();
  });

  it('Actualizar Gesture', () => {
    const data: Gesture = {
      idGesture: 1,
      name: "Gesture",
      description: "Gesture",
      status: 1,
    }
    component.id = 1
    spyOn(service, 'getGestureById').withArgs(component.id).and.returnValue(of(data));
    component.gesture.name = "Gesture1";
    component.changeGesture();
    expect(component.evidencia).toEqual({
      idGesture: 1,
      name: "Gesture1",
      description: "Gesture",
      status: 1,
    });
  });
});
