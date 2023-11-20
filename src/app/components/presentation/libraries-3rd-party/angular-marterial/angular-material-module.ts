import { NgModule} from '@angular/core';
import { angularMaterialModules } from './angular-material-modules.register';

@NgModule ({
  imports: [...angularMaterialModules],
  exports: [...angularMaterialModules]
})

export class AngularMaterialModule { }
