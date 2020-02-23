import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core.routing.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ReactiveFormsModule
  ], 
  exports :[
    CoreRoutingModule,
    HeaderComponent
  ] 
})
export class CoreModule { }
