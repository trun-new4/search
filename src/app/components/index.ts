import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainersModule } from '@ui/container.module';

@NgModule({
  imports: [ CommonModule, ContainersModule ],
  exports: [ CommonModule, ContainersModule ]
})

export class ComponentsModule { }
