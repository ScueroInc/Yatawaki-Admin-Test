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
import { AvatarService } from 'src/app/service/avatar.service';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Avatar } from 'src/app/models/avatar';
import { AvatarComponent } from 'src/app/pages/avatar/avatar.component';

import { AvatarChangeFormComponent } from './avatar-change-form.component';

class AvatarTestingService {

  getAvatarById(id: number): Observable<any> {
    return of({
      idUnlockable: 1,
      name: "Avatar 1",
      description: "Prueba 1",
      rareness: "Madera",
      unlockerType: "Uno",
      unlockerValue: 100,
      coinsCost: 500,
      icon: "icono",
      status: 1,
      enhancedFeaturesJson: "Prueba 1"
    })
  }
  changeAvatar(avatar: Object): Observable<Object> {
    return of(avatar)
  }
}

describe('AvatarChangeFormComponent', () => {
  let fixture: ComponentFixture<AvatarChangeFormComponent>;
  let component: AvatarChangeFormComponent;
  let service: AvatarService

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
        AvatarChangeFormComponent,
        AvatarComponent,
        SidenavbarComponent,
        TableComponent,],
      providers: [TranslateService,
        {
          provide: AvatarService,
          useClass: AvatarTestingService
        }]
    }).compileComponents();
    fixture = TestBed.createComponent(AvatarChangeFormComponent)
    component = fixture.componentInstance;
    service = TestBed.get(AvatarService);
    fixture.detectChanges();
  });

  it('Actualizar Avatar', () => {
    const data: Avatar = {
      idUnlockable: 1,
      name: "Avatar 1",
      description: "Prueba 1",
      rareness: "Madera",
      unlockerType: "Uno",
      unlockerValue: 100,
      coinsCost: 500,
      icon: "icono",
      status: 1,
      enhancedFeaturesJson: "Prueba 1"
    }
    component.id = 1 
    spyOn(service, 'getAvatarById').withArgs(component.id).and.returnValue(of(data));
    component.avatar.description = "Avatar prueba 2";
    component.changeAvatar();
    expect(component.evidencia).toEqual({
      idUnlockable: 1,
      name: "Avatar 1",
      description: "Avatar prueba 2",
      rareness: "Madera",
      unlockerType: "Uno",
      unlockerValue: 100,
      coinsCost: 500,
      icon: "icono",
      status: 1,
      enhancedFeaturesJson: "Prueba 1"
    });
  });
});
