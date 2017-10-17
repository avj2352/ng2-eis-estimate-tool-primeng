import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
//Prime NG components
import { ButtonModule, InputTextModule } from 'primeng/primeng';
//RXJS Components
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
//Custom Components
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { PagesModule } from './pages/pages.module';
import { LoginService } from './services/login/login.service';
import { LoginUserEffectService } from './store/effects/login-user-effect.service';

// Initial Store values
import {INITIAL_APPLICATION_STATE} from './store/application-state';
//Implement reducers
import * as reducerFunctions from './store/reducers/store-reducer';

const appRoutes: Routes = [  
  { path: 'login', component: LoginComponent },
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,    
  ],
  imports: [
    RouterModule.forRoot(appRoutes,config),
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    StoreModule.provideStore(reducerFunctions.storeReducer,INITIAL_APPLICATION_STATE),
    EffectsModule.run(LoginUserEffectService),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers:[LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
