import {Component} from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { PagesComponent} from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { TimesheetComponent } from './pages/timesheet/timesheet.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AlltimesComponent } from './pages/alltimes/alltimes.component';

//route definitions
export const loginState = {name:'login',url:'/',component:LoginComponent};
export const pageState = {name:'page',url:'/pages',component:PagesComponent};
export const errorState = {name:'error',url:'/**',component:LoginComponent};
export const dashboardState = {name:'dashboard',url:'/dashboard',component:DashboardComponent};
export const statisticState = {name:'stats',url:'/stats',component:StatisticComponent};
export const timesheetState = {name:'timeSheet',url:'/timesheet',component:TimesheetComponent};
export const projectState = {name:'project',url:'/project',component:ProjectsComponent};
export const profileState = {name:'profile',url:'/profile',component:ProfileComponent};
export const settingState = {name:'settings',url:'/settings',component:SettingsComponent};