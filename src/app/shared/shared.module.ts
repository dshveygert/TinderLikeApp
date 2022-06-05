import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialDesignModule } from './material/material-design.module';
import { LoadingComponent } from './components/loading/loading.component';

const modules = [CommonModule, FormsModule, ReactiveFormsModule, MaterialDesignModule];
const components = [LoadingComponent, LoadingComponent]

@NgModule({
  imports: modules,
  exports: [...modules, ...components],
  declarations: components
})
export class SharedModule { }
