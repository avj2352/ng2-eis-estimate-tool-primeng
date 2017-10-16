import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { MenuModule, PanelModule, ChartModule, InputTextModule, ButtonModule, InputMaskModule, InputTextareaModule, EditorModule, CalendarModule, RadioButtonModule, FieldsetModule, DropdownModule, MultiSelectModule, ListboxModule, SpinnerModule, SliderModule, RatingModule, DataTableModule, ContextMenuModule, TabViewModule, DialogModule, StepsModule, ScheduleModule, TreeModule, GMapModule, DataGridModule, TooltipModule, ConfirmationService, ConfirmDialogModule, GrowlModule, DragDropModule, GalleriaModule } from 'primeng/primeng';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticComponent } from './statistic/statistic.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { AlltimesComponent } from './alltimes/alltimes.component';
import { FielderrorsComponent } from './fielderrors/fielderrors.component';
import { HeaderComponent } from './header/header.component';


const pagesRoutes: Routes = [
  { 
    path: '',
    component:PagesComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "alltimes", component: AlltimesComponent },
      { path: "timesheet", component: TimesheetComponent},
      { path: "projects", component: ProjectsComponent},
      { path: "profile", component: ProfileComponent},
      { path: "settings", component: SettingsComponent},
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ] 
  }    
];

@NgModule({
  declarations: [
    PagesComponent,    
    DashboardComponent,
    StatisticComponent,
    TimesheetComponent,
    ProjectsComponent,
    AlltimesComponent,
    ProfileComponent,
    SettingsComponent,
    FielderrorsComponent,
    HeaderComponent
  ],
  exports: [RouterModule],  
  imports: [    
    CommonModule,  
    FormsModule, ReactiveFormsModule,  
    RouterModule.forChild(pagesRoutes),    
    MenuModule,
    PanelModule,
    ChartModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    InputTextareaModule,
    EditorModule,
    CalendarModule,
    RadioButtonModule,
    FieldsetModule,
    DropdownModule,
    MultiSelectModule,
    ListboxModule,
    SpinnerModule,
    SliderModule,
    RatingModule,
    DataTableModule,
    ContextMenuModule,
    TabViewModule,
    DialogModule,
    StepsModule,
    ScheduleModule,
    TreeModule,
    GMapModule,
    DataGridModule,
    TooltipModule,
    ConfirmDialogModule,
    GrowlModule,
    DragDropModule,
    GalleriaModule
  ],
  providers: [ ConfirmationService ],
})
export class PagesModule { }
