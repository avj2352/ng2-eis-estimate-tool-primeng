import { Action } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { LoginRequestModel } from './../../data/model/login-request-model';
import { LoginResponseModel } from './../../data/model/login-model';
import { ApplicationLevelData } from './../../data/dao/application-level-data';

export const LOGIN_RESPONSE_ACTION = 'LOGIN_RESPONSE_ACTION';
export const LOGIN_REQUEST_ACTION = 'LOGIN_REQUEST_ACTION';

export class LoginRequestAction implements Action {
    readonly type = LOGIN_REQUEST_ACTION;    
    constructor(public payload?:LoginRequestModel){
    }//end:constructor
}//end:class-LoginRequestAction

export class LoginResponseAction implements Action {
    type = LOGIN_RESPONSE_ACTION;
    constructor(public payload?:LoginResponseModel){
    }//end:constructor    
}//end:class-LoginResponseAction