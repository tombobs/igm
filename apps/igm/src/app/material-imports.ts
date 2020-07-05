import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';

export const MATERIAL_IMPORTS = [
  MatTabsModule,
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatSliderModule,
  MatIconModule,
  MatDialogModule,
  ClipboardModule,
  MatExpansionModule
];
