import { Component, Inject, OnInit } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import OktaSignIn from '@okta/okta-signin-widget';

import myAppConfig from 'src/app/config/my-app-config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  oktaSingin: any;

  constructor(@Inject (OKTA_AUTH) private oktaAuth: OktaAuth){
    
    this.oktaSingin =new OktaSignIn({
      logo: 'assets/images/logo.png',
      baseUrl: myAppConfig.odic.issuer.split('/oauth2')[0],
      clientId: myAppConfig.odic.clientId,
      redirectUri: myAppConfig.odic.redirectUri,
      authParams: {
        pkce: true,
        issuer: myAppConfig.odic.issuer,
        scopes: myAppConfig.odic.scops
      }
    });
  }
    
  

  ngOnInit(): void {
    this.oktaSingin.remove();

    this.oktaSingin.renderEl({
      el: '#okta-sign-in-widget' },  // this name should be same as div tag id in login.component.html
     (response: any) => {
      if(response.status === "SUCCESS"){
        this.oktaAuth.signInWithRedirect();
      }
     } ,
     (error: any) =>{
      throw error;
     }
    )
  }

}
