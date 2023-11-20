import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationModule } from '@ux/presentation.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { containerComponents } from '@ui/container.register';


@NgModule({
  declarations: [ ...containerComponents ],
  imports: [ PresentationModule, BrowserModule, FormsModule, CommonModule ],
  exports: [ ...containerComponents, PresentationModule  ]
})

export class ContainersModule { }
