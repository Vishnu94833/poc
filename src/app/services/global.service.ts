import { Injectable } from '@angular/core';
import { Routes, Route } from '@angular/router';
import { RoleGuard } from './role-gaurd.service';
import { HomepageComponent } from '../components/homepage/homepage.component';



@Injectable({
  providedIn: 'root'
})

/**
 * Provides helper methods to create routes.
 */
export class GlobalService {
  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return The new route using shell as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: HomepageComponent,
      children: routes,
      canActivate: [RoleGuard],
      data: { reuse: true }
    };
  }
}