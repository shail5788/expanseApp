import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { StarterComponent } from './starter.component';
// import {LogoutComponent} from '../login/logout.component';


const routes: Routes = [
	
	{
	path: '',
	data: {
        title: 'Dashboard',
        //urls: [{title: 'Dashboard',url: '/dashboard'},{title: ''}]
    },
	component: StarterComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
    	RouterModule.forChild(routes)
    ],
	declarations: [StarterComponent]
})
export class StarterModule { }