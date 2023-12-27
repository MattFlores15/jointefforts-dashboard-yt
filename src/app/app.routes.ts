// app.routes.ts
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// import { AppRoutes } from './app.routes';
import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Onboarding1Component } from './components/onboarding1/onboarding1.component';
import { Onboarding2Component } from './components/onboarding2/onboarding2.component';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SurveysComponent } from './components/surveys/surveys.component';
import { ResultsComponent } from './components/results/results.component';
import { NewsComponent } from './components/news/news.component';
import { SupportComponent } from './components/support/support.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { IndividualSurveyComponent } from './components/individual-survey/individual-survey.component';


export const AppRoutes: Routes = [
  { path: '', redirectTo: '/onboarding1', pathMatch: 'full' },
  {path: 'sidebar', component: SidebarComponent},
  {path: 'top-navbar', component: TopNavbarComponent},
  { path: 'onboarding1', component: Onboarding1Component },
  { path: 'onboarding2', component: Onboarding2Component },
  { path: 'login', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'surveys', component: SurveysComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'support', component: SupportComponent },
  { path: 'individual-survey', component: IndividualSurveyComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
