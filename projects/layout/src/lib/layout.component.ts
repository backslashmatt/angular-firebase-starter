import { Component, inject, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AuthModule } from 'projects/auth/src/lib/auth.module';
import { AuthService } from 'projects/auth/src/lib/auth.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

export interface RouteLayout {
  path: string;
  icon: string;
  title: string;
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    AuthModule,
    MatSidenavModule,
    RouterModule,
    CommonModule,
    MatCardModule,
    MatListModule,
  ],
})
export class LayoutComponent {
  @Input() title: string = 'Test App';
  @Input() routes: RouteLayout[] = [];
  private _auth = inject(AuthService);

  public get userName(): string {
    return this._auth.userData?.displayName ?? '';
  }

  public get userSingedIn(): boolean {
    return this._auth.isLoggedIn;
  }

  public async login(): Promise<void> {
    await this._auth.GoogleAuth();
  }

  public async logout(): Promise<void> {
    await this._auth.SignOut();
  }
}
