import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './login/logout.component';
import {AuthGuard} from './services/auth.guard';

export const Approutes: Routes = [
    {
        path:'',
        redirectTo:"/login", pathMatch:"full"
    },
    {
        path:"login",component:LoginComponent
    },
    {
        path: 'logout',
        component: LogoutComponent,
        data: {
          title: 'Logout',
          urls: [{title: 'Logout',url: '/logout'},{title: 'Logout'},{title: 'Logout'}]
        }
      },
    {
    path: '',
    component: FullComponent,
    children: [
        { path: '' ,redirectTo: '/dashboard', pathMatch: 'full' },
        { path: 'dashboard',canActivate:[AuthGuard], loadChildren: './starter/starter.module#StarterModule' },
        { path: 'component', loadChildren: './component/component.module#ComponentsModule' },
        { path: 'user-management', canActivate:[AuthGuard], loadChildren: './component/component.module#ComponentsModule' },
    ]
}
// { 
//     path: '**',
//     redirectTo: '/starter' 
// }
];


