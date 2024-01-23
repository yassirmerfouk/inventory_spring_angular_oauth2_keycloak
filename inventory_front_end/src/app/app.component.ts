import {Component, OnInit} from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'inventory_front_end';

  public profile !: any;

  public constructor(
    public keycloakService: KeycloakService
  ) {
  }

  ngOnInit() {
    this.keycloakService.loadUserProfile().then((profile) => {
        this.profile = profile;
      }
    );
  }

  public async handleLogin() {
    await this.keycloakService.login(
      {
        redirectUri: window.location.origin
      }
    );
  }

  public handleLogout(): void {
    this.keycloakService.logout(window.location.origin);
  }
}
