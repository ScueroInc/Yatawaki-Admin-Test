import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AchievementCardComponent } from './cards/achievement-card/achievement-card.component';
import { AvatarCardComponent } from './cards/avatar-card/avatar-card.component';
import { ComposerCardComponent } from './cards/composer-card/composer-card.component';
import { ConcertCardComponent } from './cards/concert-card/concert-card.component';
import { GestureCardComponent } from './cards/gesture-card/gesture-card.component';
import { InstrumentCardComponent } from './cards/instrument-card/instrument-card.component';
import { RankCardComponent } from './cards/rank-card/rank-card.component';
import { SymphonyCardComponent } from './cards/symphony-card/symphony-card.component';
import { SymphonyGestureCardComponent } from './cards/symphony-gesture-card/symphony-gesture-card.component';
import { SymphonyInstrumentCardComponent } from './cards/symphony-instrument-card/symphony-instrument-card.component';
import { UnlockableCardComponent } from './cards/unlockable-card/unlockable-card.component';
import { UserCardComponent } from './cards/user-card/user-card.component';
import { UserRankCardComponent } from './cards/user-rank-card/user-rank-card.component';
import { UserStatisticCardComponent } from './cards/user-statistic-card/user-statistic-card.component';
import { UserUnlockableCardComponent } from './cards/user-unlockable-card/user-unlockable-card.component';
import { AchievementChangeFormComponent } from './change-forms/achievement-change-form/achievement-change-form.component';
import { AvatarChangeFormComponent } from './change-forms/avatar-change-form/avatar-change-form.component';
import { ComposerChangeFormComponent } from './change-forms/composer-change-form/composer-change-form.component';
import { ConcertChangeFormComponent } from './change-forms/concert-change-form/concert-change-form.component';
import { GestureChangeFormComponent } from './change-forms/gesture-change-form/gesture-change-form.component';
import { InstrumentChangeFormComponent } from './change-forms/instrument-change-form/instrument-change-form.component';
import { RankChangeFormComponent } from './change-forms/rank-change-form/rank-change-form.component';
import { SymphonyChangeFormComponent } from './change-forms/symphony-change-form/symphony-change-form.component';
import { SymphonyGestureChangeFormComponent } from './change-forms/symphony-gesture-change-form/symphony-gesture-change-form.component';
import { SymphonyInstrumentChangeFormComponent } from './change-forms/symphony-instrument-change-form/symphony-instrument-change-form.component';
import { UserChangeFormComponent } from './change-forms/user-change-form/user-change-form.component';
import { UserRankChangeFormComponent } from './change-forms/user-rank-change-form/user-rank-change-form.component';
import { UserStatisticChangeFormComponent } from './change-forms/user-statistic-change-form/user-statistic-change-form.component';
import { UserUnlockableChangeFormComponent } from './change-forms/user-unlockable-change-form/user-unlockable-change-form.component';
import { AchievementNewFormComponent } from './new-forms/achievement-new-form/achievement-new-form.component';
import { AvatarNewFormComponent } from './new-forms/avatar-new-form/avatar-new-form.component';
import { ComposerNewFormComponent } from './new-forms/composer-new-form/composer-new-form.component';
import { ConcertNewFormComponent } from './new-forms/concert-new-form/concert-new-form.component';
import { GestureNewFormComponent } from './new-forms/gesture-new-form/gesture-new-form.component';
import { InstrumentNewFormComponent } from './new-forms/instrument-new-form/instrument-new-form.component';
import { RankNewFormComponent } from './new-forms/rank-new-form/rank-new-form.component';
import { SymphonyGestureNewFormComponent } from './new-forms/symphony-gesture-new-form/symphony-gesture-new-form.component';
import { SymphonyInstrumentNewFormComponent } from './new-forms/symphony-instrument-new-form/symphony-instrument-new-form.component';
import { SymphonyNewFormComponent } from './new-forms/symphony-new-form/symphony-new-form.component';
import { UserNewFormComponent } from './new-forms/user-new-form/user-new-form.component';
import { UserRankNewFormComponent } from './new-forms/user-rank-new-form/user-rank-new-form.component';
import { UserStatisticNewFormComponent } from './new-forms/user-statistic-new-form/user-statistic-new-form.component';
import { UserUnlockableNewFormComponent } from './new-forms/user-unlockable-new-form/user-unlockable-new-form.component';
import { AchievementComponent } from './pages/achievement/achievement.component';
import { AvatarComponent } from './pages/avatar/avatar.component';
import { ComposerComponent } from './pages/composer/composer.component';
import { ConcertComponent } from './pages/concert/concert.component';
import { GestureComponent } from './pages/gesture/gesture.component';
import { InstrumentComponent } from './pages/instrument/instrument.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { RankComponent } from './pages/rank/rank.component';
import { SymphonyGestureComponent } from './pages/symphony-gesture/symphony-gesture.component';
import { SymphonyInstrumentComponent } from './pages/symphony-instrument/symphony-instrument.component';
import { SymphonyComponent } from './pages/symphony/symphony.component';
import { UnlockableComponent } from './pages/unlockable/unlockable.component';
import { UserRankComponent } from './pages/user-rank/user-rank.component';
import { UserStatisticComponent } from './pages/user-statistic/user-statistic.component';
import { UserUnlockableComponent } from './pages/user-unlockable/user-unlockable.component';
import { UserComponent } from './pages/user/user.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { AchievementUpdateFormComponent } from './update-forms/achievement-update-form/achievement-update-form.component';
import { AvatarUpdateFormComponent } from './update-forms/avatar-update-form/avatar-update-form.component';
import { ComposerUpdateFormComponent } from './update-forms/composer-update-form/composer-update-form.component';
/*import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';*/

const routes: Routes = [
  //{ path: 'home', component: HomeComponent },
  { path: 'login', component: LoginFormComponent },
  //{ path: 'register', component: RegisterComponent },
  //{ path: 'profile', component: ProfileComponent },
  { path: 'sidenavbar', component: SidenavbarComponent, children:[

    { path: 'avatar', component: AvatarComponent },
    { path: 'avatar-card', component: AvatarCardComponent },
    { path: 'avatar-new-form', component: AvatarNewFormComponent },
    { path: 'avatar-change-form/:id', component: AvatarChangeFormComponent },

    { path: 'user', component: UserComponent },
    { path: 'user-card', component: UserCardComponent },
    { path: 'user-new-form', component: UserNewFormComponent },
    { path: 'user-change-form/:id', component: UserChangeFormComponent },


    { path: 'achievement', component: AchievementComponent },
    { path: 'achievement-card', component: AchievementCardComponent },
    { path: 'achievement-new-form', component: AchievementNewFormComponent },
    { path: 'achievement-change-form/:id', component: AchievementChangeFormComponent },

    { path: 'composer', component: ComposerComponent },
    { path: 'composer-card', component: ComposerCardComponent },
    { path: 'composer-new-form', component: ComposerNewFormComponent },
    { path: 'composer-change-form/:id', component: ComposerChangeFormComponent },

    { path: 'unlockable', component: UnlockableComponent },
    { path: 'unlockable-card', component: UnlockableCardComponent },

    { path: 'symphony', component: SymphonyComponent },
    { path: 'symphony-card', component: SymphonyCardComponent },
    { path: 'symphony-new-form', component: SymphonyNewFormComponent },
    { path: 'symphony-change-form/:id', component: SymphonyChangeFormComponent },

    { path: 'symphony-gesture', component: SymphonyGestureComponent},
    { path: 'symphony-gesture-card', component: SymphonyGestureCardComponent},
    { path: 'symphony-gesture-new-form', component: SymphonyGestureNewFormComponent},
    { path: 'symphony-gesture-change-form/:id', component: SymphonyGestureChangeFormComponent },

    { path: 'symphony-instrument', component: SymphonyInstrumentComponent},
    { path: 'symphony-instrument-card', component: SymphonyInstrumentCardComponent},
    { path: 'symphony-instrument-new-form', component: SymphonyInstrumentNewFormComponent},
    { path: 'symphony-instrument-change-form/:id', component: SymphonyInstrumentChangeFormComponent },

    { path: 'user-unlockable', component: UserUnlockableComponent},
    { path: 'user-unlockable-card', component: UserUnlockableCardComponent},
    { path: 'user-unlockable-new-form', component: UserUnlockableNewFormComponent},
    { path: 'user-unlockable-change-form/:id', component: UserUnlockableChangeFormComponent },

    { path: 'gesture', component: GestureComponent },
    { path: 'gesture-card', component: GestureCardComponent },
    { path: 'gesture-new-form', component: GestureNewFormComponent },
    { path: 'gesture-change-form/:id', component: GestureChangeFormComponent },

    { path: 'instrument', component: InstrumentComponent },
    { path: 'instrument-card', component: InstrumentCardComponent },
    { path: 'instrument-new-form', component: InstrumentNewFormComponent },
    { path: 'instrument-change-form/:id', component: InstrumentChangeFormComponent },

    { path: 'user-statistic', component: UserStatisticComponent },
    { path: 'user-statistic-card', component: UserStatisticCardComponent },
    { path: 'user-statistic-new-form', component: UserStatisticNewFormComponent },
    { path: 'user-statistic-change-form/:id', component: UserStatisticChangeFormComponent },

    { path: 'concert', component: ConcertComponent },
    { path: 'concert-card', component: ConcertCardComponent },
    { path: 'concert-new-form', component: ConcertNewFormComponent },
    { path: 'concert-change-form/:id', component: ConcertChangeFormComponent },

    { path: 'rank', component: RankComponent },
    { path: 'rank-card', component: RankCardComponent },
    { path: 'rank-new-form', component: RankNewFormComponent },
    { path: 'rank-change-form/:id', component: RankChangeFormComponent },

    { path: 'user-rank', component: UserRankComponent },
    { path: 'user-rank-card', component: UserRankCardComponent },
    { path: 'user-rank-new-form', component: UserRankNewFormComponent },
    { path: 'user-rank-change-form/:id', component: UserRankChangeFormComponent },
  ], canActivate: [AuthGuard]},

  //{ path: 'avatar', component: AvatarComponent },
  { path: 'avatar-update-form/:id', component: AvatarUpdateFormComponent },

  { path: 'achievement-update-form/:id', component: AchievementUpdateFormComponent },

  { path: 'composer-update-form/:id', component: ComposerUpdateFormComponent },

  { path: '', redirectTo: 'sidenavbar', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
