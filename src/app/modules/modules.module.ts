import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesHomeComponent } from './modules-home/modules-home.component';
import { ModalComponent } from './modal/modal.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ModulesHomeComponent, ModalComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    SharedModule
  ]
})
export class ModulesModule { }
