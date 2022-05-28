import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';*/
import { AvatarComponent } from './pages/avatar/avatar.component';
import { UserComponent } from './pages/user/user.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './service/token.interceptor';
import { AchievementComponent } from './pages/achievement/achievement.component';
import { ComposerComponent } from './pages/composer/composer.component';
import { UnlockableComponent } from './pages/unlockable/unlockable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './table/table.component';
import { AvatarCardComponent } from './cards/avatar-card/avatar-card.component';
import { MatCardModule } from '@angular/material/card';
import { AvatarNewFormComponent } from './new-forms/avatar-new-form/avatar-new-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { AvatarUpdateFormComponent } from './update-forms/avatar-update-form/avatar-update-form.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AvatarChangeFormComponent } from './change-forms/avatar-change-form/avatar-change-form.component';
import { AchievementCardComponent } from './cards/achievement-card/achievement-card.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover'
import { ReactiveFormsModule } from '@angular/forms';
import { AchievementNewFormComponent } from './new-forms/achievement-new-form/achievement-new-form.component';
import { AchievementUpdateFormComponent } from './update-forms/achievement-update-form/achievement-update-form.component';
import { AchievementChangeFormComponent } from './change-forms/achievement-change-form/achievement-change-form.component';
import { ComposerCardComponent } from './cards/composer-card/composer-card.component';
import { ComposerChangeFormComponent } from './change-forms/composer-change-form/composer-change-form.component';
import { ComposerNewFormComponent } from './new-forms/composer-new-form/composer-new-form.component';
import { ComposerUpdateFormComponent } from './update-forms/composer-update-form/composer-update-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UnlockableCardComponent } from './cards/unlockable-card/unlockable-card.component';
import { SymphonyComponent } from './pages/symphony/symphony.component';
import { SymphonyNewFormComponent } from './new-forms/symphony-new-form/symphony-new-form.component';
import { SymphonyChangeFormComponent } from './change-forms/symphony-change-form/symphony-change-form.component';
import { SymphonyCardComponent } from './cards/symphony-card/symphony-card.component';
import { GestureComponent } from './pages/gesture/gesture.component';
import { GestureNewFormComponent } from './new-forms/gesture-new-form/gesture-new-form.component';
import { GestureChangeFormComponent } from './change-forms/gesture-change-form/gesture-change-form.component';
import { GestureCardComponent } from './cards/gesture-card/gesture-card.component';
import { InstrumentComponent } from './pages/instrument/instrument.component';
import { InstrumentNewFormComponent } from './new-forms/instrument-new-form/instrument-new-form.component';
import { InstrumentChangeFormComponent } from './change-forms/instrument-change-form/instrument-change-form.component';
import { InstrumentCardComponent } from './cards/instrument-card/instrument-card.component';
import { UserStatisticComponent } from './pages/user-statistic/user-statistic.component';
import { UserStatisticNewFormComponent } from './new-forms/user-statistic-new-form/user-statistic-new-form.component';
import { UserStatisticChangeFormComponent } from './change-forms/user-statistic-change-form/user-statistic-change-form.component';
import { UserStatisticCardComponent } from './cards/user-statistic-card/user-statistic-card.component';
import { UserNewFormComponent } from './new-forms/user-new-form/user-new-form.component';
import { UserChangeFormComponent } from './change-forms/user-change-form/user-change-form.component';
import { UserCardComponent } from './cards/user-card/user-card.component';
import { ConcertComponent } from './pages/concert/concert.component';
import { ConcertNewFormComponent } from './new-forms/concert-new-form/concert-new-form.component';
import { ConcertChangeFormComponent } from './change-forms/concert-change-form/concert-change-form.component';
import { ConcertCardComponent } from './cards/concert-card/concert-card.component';
import { RankComponent } from './pages/rank/rank.component';
import { RankNewFormComponent } from './new-forms/rank-new-form/rank-new-form.component';
import { RankChangeFormComponent } from './change-forms/rank-change-form/rank-change-form.component';
import { RankCardComponent } from './cards/rank-card/rank-card.component';
import { UserRankComponent } from './pages/user-rank/user-rank.component';
import { UserRankNewFormComponent } from './new-forms/user-rank-new-form/user-rank-new-form.component';
import { UserRankChangeFormComponent } from './change-forms/user-rank-change-form/user-rank-change-form.component';
import { UserRankCardComponent } from './cards/user-rank-card/user-rank-card.component';
import { SymphonyGestureComponent } from './pages/symphony-gesture/symphony-gesture.component';
import { SymphonyInstrumentComponent } from './pages/symphony-instrument/symphony-instrument.component';
import { UserUnlockableComponent } from './pages/user-unlockable/user-unlockable.component';
import { SymphonyGestureNewFormComponent } from './new-forms/symphony-gesture-new-form/symphony-gesture-new-form.component';
import { SymphonyInstrumentNewFormComponent } from './new-forms/symphony-instrument-new-form/symphony-instrument-new-form.component';
import { UserUnlockableNewFormComponent } from './new-forms/user-unlockable-new-form/user-unlockable-new-form.component';
import { SymphonyInstrumentChangeFormComponent } from './change-forms/symphony-instrument-change-form/symphony-instrument-change-form.component';
import { SymphonyGestureChangeFormComponent } from './change-forms/symphony-gesture-change-form/symphony-gesture-change-form.component';
import { UserUnlockableChangeFormComponent } from './change-forms/user-unlockable-change-form/user-unlockable-change-form.component';
import { UserUnlockableCardComponent } from './cards/user-unlockable-card/user-unlockable-card.component';
import { SymphonyInstrumentCardComponent } from './cards/symphony-instrument-card/symphony-instrument-card.component';
import { SymphonyGestureCardComponent } from './cards/symphony-gesture-card/symphony-gesture-card.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    UserComponent,
    AchievementComponent,
    ComposerComponent,
    UnlockableComponent,
    SidenavbarComponent,
    TableComponent,
    AvatarCardComponent,
    AvatarNewFormComponent,
    AvatarUpdateFormComponent,
    AvatarChangeFormComponent,
    AchievementCardComponent,
    AchievementNewFormComponent,
    AchievementUpdateFormComponent,
    AchievementChangeFormComponent,
    ComposerCardComponent,
    ComposerChangeFormComponent,
    ComposerNewFormComponent,
    ComposerUpdateFormComponent,
    UnlockableCardComponent,
    SymphonyComponent,
    SymphonyNewFormComponent,
    SymphonyChangeFormComponent,
    SymphonyCardComponent,
    GestureComponent,
    GestureNewFormComponent,
    GestureChangeFormComponent,
    GestureCardComponent,
    InstrumentComponent,
    InstrumentNewFormComponent,
    InstrumentChangeFormComponent,
    InstrumentCardComponent,
    UserStatisticComponent,
    UserStatisticNewFormComponent,
    UserStatisticChangeFormComponent,
    UserStatisticCardComponent,
    UserNewFormComponent,
    UserChangeFormComponent,
    UserCardComponent,
    ConcertComponent,
    ConcertNewFormComponent,
    ConcertChangeFormComponent,
    ConcertCardComponent,
    RankComponent,
    RankNewFormComponent,
    RankChangeFormComponent,
    RankCardComponent,
    UserRankComponent,
    UserRankNewFormComponent,
    UserRankChangeFormComponent,
    UserRankCardComponent,
    SymphonyGestureComponent,
    SymphonyInstrumentComponent,
    UserUnlockableComponent,
    SymphonyGestureNewFormComponent,
    SymphonyInstrumentNewFormComponent,
    UserUnlockableNewFormComponent,
    SymphonyInstrumentChangeFormComponent,
    SymphonyGestureChangeFormComponent,
    UserUnlockableChangeFormComponent,
    UserUnlockableCardComponent,
    SymphonyInstrumentCardComponent,
    SymphonyGestureCardComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
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
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    })
  ],
  providers: [
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
