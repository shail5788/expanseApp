import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { DataTablesModule } from 'angular-datatables';
import {FileUploadModule} from 'ng2-file-upload';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsRoutes } from './component.routing';
import { NgbdpregressbarBasic } from './progressbar/progressbar.component';
import { NgbdpaginationBasic } from './pagination/pagination.component';
import { NgbdAccordionBasic } from './accordion/accordion.component';
import { NgbdAlertBasic } from './alert/alert.component';
import { NgbdCarouselBasic } from './carousel/carousel.component';
import { NgbdDatepickerBasic } from './datepicker/datepicker.component';
import { NgbdDropdownBasic } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdModalBasic } from './modal/modal.component';
import { NgbdPopTooltip } from './popover-tooltip/popover-tooltip.component';
import { NgbdratingBasic } from './rating/rating.component';
import { NgbdtabsBasic } from './tabs/tabs.component';
import { NgbdtimepickerBasic } from './timepicker/timepicker.component';
import { NgbdtypeheadBasic } from './typehead/typehead.component';
import { CardsComponent } from './card/card.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
// import { LogoutComponent} from '../login/logout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule,
    FileUploadModule,
    DataTablesModule

  ],
  declarations: [
    NgbdpregressbarBasic,
    NgbdpaginationBasic,
    NgbdAccordionBasic,
    NgbdAlertBasic,
    NgbdCarouselBasic,
    NgbdDatepickerBasic,
    NgbdDropdownBasic,
    NgbdModalBasic,
    NgbdPopTooltip,
    NgbdratingBasic,
    NgbdtabsBasic,
    NgbdtimepickerBasic,
    NgbdtypeheadBasic,
    CardsComponent,
    ButtonsComponent,
    UserManagementComponent,
    UserListComponent,
    UserEditComponent,
    MyProfileComponent,
    // LogoutComponent
  ]
})

export class ComponentsModule {}