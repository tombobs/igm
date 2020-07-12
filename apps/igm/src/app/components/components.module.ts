import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_IMPORTS } from '../material-imports';
import { IgmButtonComponent } from './igm-button/igm-button.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { IgmInputComponent } from './igm-input/igm-input.component';
import { IgmTextFilterPipe } from './text-filter.pipe';

@NgModule({
  declarations: [IgmButtonComponent, DeleteConfirmationComponent, IgmInputComponent, IgmTextFilterPipe],
  imports: [
    CommonModule,
    MATERIAL_IMPORTS
  ],
  exports: [IgmButtonComponent, IgmInputComponent, IgmTextFilterPipe]
})
export class ComponentsModule { }
