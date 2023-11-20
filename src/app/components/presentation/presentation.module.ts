import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Library3rdPartiesModule } from '@ux/libraries-3rd-party/libraries3rdParty.module';
import { presentationComponents } from './presentation.components.register';


@NgModule({
  declarations: [ ...presentationComponents ],
  imports: [ CommonModule, BrowserModule, FormsModule, RouterModule, Library3rdPartiesModule, ],
  exports: [ ...presentationComponents ]
})

export class PresentationModule { }
