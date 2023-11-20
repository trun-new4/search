import { NgModule} from '@angular/core';
import { AngularMaterialModule } from './angular-marterial/angular-material-module';

const library3rdPartiesModules = [
  AngularMaterialModule,
];

@NgModule ({
  imports: [...library3rdPartiesModules],
  exports: [...library3rdPartiesModules]
})

export class Library3rdPartiesModule { }
