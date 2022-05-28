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

import { Avatar } from 'src/app/models/avatar';
import { AvatarService } from 'src/app/service/avatar.service';
import { AvatarComponent } from 'src/app/pages/avatar/avatar.component';

import { AvatarNewFormComponent } from './avatar-new-form.component';
import { Router } from '@angular/router';

class AvatarTestingService {
  createAvatar(avatar: Object): Observable<Object> {
    return of(avatar);
  }
}

class RouterStub {
  url = '';
  navigate(commands: any[], extras?: any) { }
}

describe('AvatarNewFormComponent', () => {
  let fixture: ComponentFixture<AvatarNewFormComponent>;
  let component: AvatarNewFormComponent;
  let router: Router

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
        AvatarNewFormComponent,
        SidenavbarComponent,
        TableComponent,],
      providers: [TranslateService,
        {
          provide: AvatarService,
          useClass: AvatarTestingService
        },
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AvatarNewFormComponent)
    router = TestBed.get(Router)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Registrar Avatar', () => {
    const newAvatar: Avatar = {
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
    component.avatar = newAvatar;
    component.insertAvatar();
    expect(component.evidencia).toEqual({
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
    });
  });
});

