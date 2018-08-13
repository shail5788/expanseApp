import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';

export const Approutes: Routes = [
    {
        path:'',
        redirectTo:"/login", pathMatch:"full"
    },
    {
        path:"login",component:LoginComponent
    },
    {
    path: '',
    component: FullComponent,
    children: [
        { path: '', redirectTo: '/starter', pathMatch: 'full' },
        { path: 'starter', loadChildren: './starter/starter.module#StarterModule' },
        { path: 'component', loadChildren: './component/component.module#ComponentsModule' },
        { path: 'user-management', loadChildren: './component/component.module#ComponentsModule' },
    ]
},
// {
//     path: '**',
//     redirectTo: '/starter' 
// }
];


