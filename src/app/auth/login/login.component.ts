import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
//Forms
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { Observable } from 'rxjs';
import { UIRouterModule ,UIROUTER_DIRECTIVES, StateService } from '@uirouter/angular';

//Custom Components
// import { ApplicationState } from './../../store/application-state';
// import { LoginService } from './../../services/login/login.service';
// import { LoginRequestAction } from './../../store/actions/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Form Validation
  loginForm:FormGroup;
  private loginResponseErrorMsg:string;

  constructor() {
    this.loginResponseErrorMsg = '';
  }//end:constructor

  ngOnInit() {
    // this.state.go('home');
    //It is preferrable to use ngOnInit for unit-testing
    this.loginForm = new FormGroup({
      username: new FormControl('username@philips.com',Validators.compose([
        Validators.email,
        Validators.required,
        // Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      password: new FormControl('test', Validators.required)
    });
        


  }//end:ngOnInit

  onSubmit(loginForm) { 
    console.log('Form Submitted', loginForm);
    // this.store.dispatch(new LoginRequestAction({username:loginForm.username,password:loginForm.password}));    
  };//end:onSubmit

}//end:class-LoginComponent
